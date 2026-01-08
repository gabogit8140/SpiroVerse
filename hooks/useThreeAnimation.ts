
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { SpiroConfig, GeneratorMode, MechanicsRefs } from '../types';
import { PathPoint } from '../utils/geometry';
import { updateCamera } from '../utils/cameraControl';
import { updateMechanics, updateTraceDrawRange, updateProjectionDrawRange } from '../utils/three/animationHelper';

interface UseThreeAnimationProps {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: any;
    config: SpiroConfig;
    isPlaying: boolean;
    positions: number[];
    mechanics: MechanicsRefs;
    line: THREE.Mesh | null;
    geo2D: THREE.BufferGeometry | null;
    sideShadowLine: THREE.LineSegments | null;
    backShadowLine: THREE.LineSegments | null;
    ranges: any[];
    projectionRanges: any[];
    floorY: number;
    wallOffset: number;
    globalRadius: number;
    fourierData: any[];
    calculatedStatorLength: number;
    statorPath: PathPoint[];
    rotorPath: PathPoint[];
    onProgress?: (val: number) => void;
    onStop?: () => void;
    bounds: { minX: number, maxX: number };
    redrawTrigger: number;
}

export const useThreeAnimation = ({
    scene, camera, renderer, controls, config, isPlaying, positions, mechanics, line,
    geo2D, sideShadowLine, backShadowLine, ranges, projectionRanges, floorY, wallOffset, globalRadius,
    fourierData, calculatedStatorLength, statorPath, rotorPath, onProgress, onStop, bounds, redrawTrigger
}: UseThreeAnimationProps) => {

    const mechanismProgress = useRef(0);
    const drawingProgress = useRef(0);
    const animationFrameId = useRef(0);
    const travelTimeRef = useRef(0);
    const phaseRef = useRef(0);
    const transitionSnapshotRef = useRef<any>(null);
    const lastProgressReportRef = useRef(-1);
    
    // Track if animation finished to allow live parameter updates without reset
    const wasCompleteRef = useRef(false);
    const lastRedrawTriggerRef = useRef(redrawTrigger);
    
    // Reset/Update State on Data Change
    useEffect(() => {
        const totalPoints = positions.length / 3;

        // If redrawTrigger changed, it's a hard Restart -> Reset everything
        if (redrawTrigger !== lastRedrawTriggerRef.current) {
            lastRedrawTriggerRef.current = redrawTrigger;
            mechanismProgress.current = 0;
            drawingProgress.current = 0;
            travelTimeRef.current = 0;
            phaseRef.current = 0;
            transitionSnapshotRef.current = null;
            wasCompleteRef.current = false;
        } else {
            // It's a Config Change (Soft Update)
            if (wasCompleteRef.current) {
                // If it was complete, force completion on new data to show full shape immediately
                drawingProgress.current = totalPoints + 1;
                // Reset mechanism to 0 or any valid point (hidden anyway)
                mechanismProgress.current = 0;
            } else {
                // Not complete? Reset to start (or we could try to scale progress)
                mechanismProgress.current = 0;
                drawingProgress.current = 0;
                travelTimeRef.current = 0;
                phaseRef.current = 0;
                transitionSnapshotRef.current = null;
            }
        }
    }, [positions, redrawTrigger]);

    useEffect(() => {
        // Critical Guard
        if (!scene || !camera || !renderer || !mechanics) return;

        const totalPoints = positions.length / 3;
        const dynamicSpeed = Math.max(1, Math.floor(totalPoints / 600)) * config.drawSpeed;
        const baseSpeed = dynamicSpeed * 0.2; 
        const isTextMode = config.generatorMode === GeneratorMode.Text;
        
        const smoothedCamPos = new THREE.Vector3().copy(camera.position);
        
        const vFOV = 45 * Math.PI / 180;
        const aspect = window.innerWidth / window.innerHeight;
        const distToFitGlobal = (globalRadius * 1.2) / (Math.min(aspect, 1) * Math.tan(vFOV / 2));
        const actionRadius = isTextMode ? Math.max(80, globalRadius * 0.4) : globalRadius * 0.9;
        const distToFitAction = (actionRadius * 1.2) / (Math.min(aspect, 1) * Math.tan(vFOV / 2));

        const getInterpolatedPos = (idx: number) => {
            if (totalPoints === 0) return new THREE.Vector3();
            const safeIdx = idx % totalPoints; 
            const i = Math.floor(safeIdx);
            const t = safeIdx - i;
            const i1 = i * 3; const i2 = ((i + 1) % totalPoints) * 3; 
            const p1 = new THREE.Vector3(positions[i1], positions[i1+1], positions[i1+2]);
            const p2 = new THREE.Vector3(positions[i2], positions[i2+1], positions[i2+2]);
            return new THREE.Vector3().lerpVectors(p1, p2, t);
        };

        const clock = new THREE.Clock();
        let animationTime = 0;

        const animate = () => {
             animationFrameId.current = requestAnimationFrame(animate);
             const delta = clock.getDelta();
             
             if (totalPoints === 0) { renderer.render(scene, camera); return; }

             if (isPlaying) {
                 animationTime += delta;
                 
                 // Continue looping mechanism even after drawing is done
                 mechanismProgress.current = (mechanismProgress.current + baseSpeed) % totalPoints;
                 
                 // Clamp drawing to max
                 drawingProgress.current = Math.min(drawingProgress.current + baseSpeed, totalPoints);
             }
             
             const isComplete = drawingProgress.current >= totalPoints;
             wasCompleteRef.current = isComplete; // Update completion status for next re-render

             if (onProgress) {
                const pct = totalPoints > 0 ? (Math.min(drawingProgress.current, totalPoints) / totalPoints) * 100 : 0;
                const intPct = Math.floor(pct);
                if (intPct !== lastProgressReportRef.current) {
                    lastProgressReportRef.current = intPct;
                    onProgress(Math.min(100, Math.max(0, intPct)));
                }
             }
             
             // UPDATE MECHANICS VISIBILITY
             // Hide mechanics and pen when complete for clean view
             if (mechanics.mechanicsGroup) {
                 mechanics.mechanicsGroup.visible = config.showProjection && !isComplete;
             }
             if (mechanics.penGroup) {
                 mechanics.penGroup.visible = !isComplete;
             }

             if (line) line.visible = config.showTrace;
             
             const effectiveIndex = mechanismProgress.current;
             const currentPenPos = getInterpolatedPos(effectiveIndex);

             // UPDATE TRACE GEOMETRY
             if (config.showTrace && line) {
                 updateTraceDrawRange(line, ranges, drawingProgress.current, mechanics, currentPenPos);
             } else {
                 if (mechanics.tipLine) mechanics.tipLine.visible = false;
             }

             // UPDATE SHADOW PROJECTIONS
             if (projectionRanges && projectionRanges.length > 0) {
                 updateProjectionDrawRange(
                    [geo2D, sideShadowLine?.geometry, backShadowLine?.geometry], 
                    projectionRanges, 
                    drawingProgress.current
                 );
             } else {
                 // Fallback if no ranges calculated
                 const progressRatio = totalPoints > 1 ? Math.min(1, drawingProgress.current / (totalPoints - 1)) : 0;
                 const segmentDrawCount = Math.floor(progressRatio * (geo2D?.attributes.position.count || 0));
                 if (geo2D) geo2D.setDrawRange(0, segmentDrawCount);
                 if (sideShadowLine) sideShadowLine.geometry.setDrawRange(0, segmentDrawCount);
                 if (backShadowLine) backShadowLine.geometry.setDrawRange(0, segmentDrawCount);
             }

             // UPDATE MECHANICS POSITIONS
             // Correctly scale time t based on mode
             const progress = effectiveIndex / totalPoints;
             const t = config.generatorMode === GeneratorMode.Spirograph
                 ? progress * config.rotations * Math.PI * 2
                 : progress * Math.PI * 2;
             
             updateMechanics(
                 mechanics, config, currentPenPos, floorY, wallOffset, 
                 t, fourierData, statorPath, rotorPath, calculatedStatorLength
             );

             // Look-ahead for pen group orientation
             if (mechanics.penGroup) {
                 const nextPenPos = getInterpolatedPos(effectiveIndex + 1);
                 if (nextPenPos.distanceToSquared(currentPenPos) > 0.001) {
                     mechanics.penGroup.lookAt(nextPenPos);
                 }
             }

             // Camera Control
             updateCamera({
                camera, controls, smoothedCamPos, isTextMode, isPlaying, drawingProgress: drawingProgress.current, totalPoints,
                delta, travelTimeRef, phaseRef, transitionSnapshotRef, bounds, distToFitGlobal, distToFitAction, currentPenPos, animationTime
             });

             controls.update();
             renderer.render(scene, camera);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId.current);

    }, [positions, isPlaying, config, scene, camera, renderer, mechanics, line, geo2D, sideShadowLine, backShadowLine]);
};
