
import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { SpiroConfig, Complex } from '../types';
import { generatePath } from '../utils/geometry';
import { generate3DSceneData } from '../utils/generator3D';
import { setupThreeScene } from '../utils/three/setup';
import { buildStaticScene } from '../utils/three/static';
import { buildMechanics } from '../utils/three/mechanics';
import { buildTubeTraces } from '../utils/three/traces';
import { buildProjections } from '../utils/three/projections';
import { useVideoRecorder } from '../hooks/useVideoRecorder';
import { useThreeAnimation } from '../hooks/useThreeAnimation';

interface Canvas3DProps {
  config: SpiroConfig;
  width: number;
  height: number;
  isPlaying: boolean;
  fourierData?: Complex[];
  redrawTrigger: number;
  downloadTrigger?: number;
  isRecording?: boolean;
  onStop?: () => void;
  onProgress?: (progress: number) => void;
}

export const Canvas3D: React.FC<Canvas3DProps> = ({ config, width, height, isPlaying, fourierData = [], redrawTrigger, downloadTrigger = 0, isRecording = false, onStop, onProgress }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Stable Three.js Refs
  const threeRefs = useRef<{
      scene: THREE.Scene;
      camera: THREE.PerspectiveCamera;
      renderer: THREE.WebGLRenderer;
      controls: any;
      dynamicGroup: THREE.Group;
  } | null>(null);

  const [sceneObjects, setSceneObjects] = useState<any>(null);

  // Use Video Recorder Hook
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useVideoRecorder({ canvasRef, isRecording, format: config.videoFormat, onStop });

  // Handle Snapshot Download
  useEffect(() => {
      if (downloadTrigger > 0 && threeRefs.current) {
          const link = document.createElement('a');
          link.download = `spiroverse-3d-${Date.now()}.png`;
          link.href = threeRefs.current.renderer.domElement.toDataURL('image/png');
          link.click();
      }
  }, [downloadTrigger]);

  // Data Generation - Dependent on full config for live updates
  const sceneData = useMemo(() => {
     return generate3DSceneData(config, fourierData);
  }, [config, fourierData, redrawTrigger]);

  const statorPath = useMemo(() => generatePath(config.statorShape, config.outerRadius), [config.statorShape, config.outerRadius]);
  const rotorPath = useMemo(() => generatePath(config.rotorShape, config.innerRadius), [config.rotorShape, config.innerRadius]);

  // 1. Initialize Three.js (Run once)
  useEffect(() => {
    if (!mountRef.current) return;
    
    const { scene, camera, renderer, controls } = setupThreeScene(width, height, mountRef.current);
    
    // Create a group for dynamic content to easily clear/rebuild
    const dynamicGroup = new THREE.Group();
    scene.add(dynamicGroup);

    threeRefs.current = { scene, camera, renderer, controls, dynamicGroup };
    canvasRef.current = renderer.domElement;

    // Cleanup
    return () => {
        if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
        threeRefs.current = null;
    };
  }, []); // Mount only once

  // 1.5 Handle Resize
  useEffect(() => {
      if (threeRefs.current) {
          const { camera, renderer } = threeRefs.current;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
      }
  }, [width, height]);

  // 2. Build/Update Scene Content
  useEffect(() => {
      if (!threeRefs.current) return;
      const { dynamicGroup } = threeRefs.current;

      // Clear previous content
      // Dispose geometries to prevent memory leaks
      dynamicGroup.traverse((obj: any) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
              if (Array.isArray(obj.material)) obj.material.forEach((m: any) => m.dispose());
              else obj.material.dispose();
          }
      });
      dynamicGroup.clear();

      // Rebuild Scene
      // Casting dynamicGroup to Scene for compatibility with builder functions that expect Scene but use .add()
      const buildTarget = dynamicGroup as unknown as THREE.Scene;

      const { sideGrid, backGrid } = buildStaticScene(buildTarget, sceneData.globalRadius, sceneData.floorY, sceneData.wallOffset);
      
      const mechanics = buildMechanics(buildTarget, config, fourierData, sceneData.floorY, sceneData.zModMeshesBackData, sceneData.zModMeshesSideData);
      mechanics.mechanicsGroup.add(sideGrid);
      mechanics.mechanicsGroup.add(backGrid);

      const { line, ranges } = buildTubeTraces(buildTarget, sceneData.paths, sceneData.colors, config, false);
      const { geo2D, sideShadowLine, backShadowLine, projectionRanges } = buildProjections(mechanics.mechanicsGroup, sceneData.paths, sceneData.points2D, sceneData.floorY, sceneData.wallOffset);

      setSceneObjects({ 
          mechanics, line, geo2D, sideShadowLine, backShadowLine, ranges, projectionRanges 
      });

  }, [sceneData, config]); // Rebuild when data or config changes

  // Animation Hook
  useThreeAnimation({
      scene: threeRefs.current?.scene!,
      camera: threeRefs.current?.camera!,
      renderer: threeRefs.current?.renderer!,
      controls: threeRefs.current?.controls,
      mechanics: sceneObjects?.mechanics || {},
      line: sceneObjects?.line || null,
      geo2D: sceneObjects?.geo2D || null,
      sideShadowLine: sceneObjects?.sideShadowLine || null,
      backShadowLine: sceneObjects?.backShadowLine || null,
      ranges: sceneObjects?.ranges || [],
      projectionRanges: sceneObjects?.projectionRanges || [],
      
      config, isPlaying, positions: sceneData.positions,
      floorY: sceneData.floorY, wallOffset: sceneData.wallOffset, globalRadius: sceneData.globalRadius,
      fourierData, calculatedStatorLength: sceneData.calculatedStatorLength,
      statorPath, rotorPath, onProgress, onStop, 
      bounds: { minX: -100, maxX: 100 },
      redrawTrigger // Passed here
  });

  return <div ref={mountRef} className="w-full h-full rounded-lg overflow-hidden bg-slate-950" />;
};
