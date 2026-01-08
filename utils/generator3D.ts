
import * as THREE from 'three';
import { SpiroConfig, GeneratorMode, Complex } from '../types';
import { generatePath } from './geometry';
import { generateTextScene, generateFourierScene, generateSpiroScene } from './sceneStrategies';
import { buildZData, ZModMechanismData } from './zModulation';

export interface GeneratedSceneData {
  positions: number[]; // Flat array for simple usage/legacy
  paths: THREE.Vector3[][]; // Separated paths for tube generation
  colors: number[];
  points2D: THREE.Vector3[];
  pointsSide: THREE.Vector3[];
  pointsBack: THREE.Vector3[];
  floorY: number;
  totalMaxAmp: number;
  calculatedStatorLength: number;
  globalRadius: number;
  wallOffset: number;
  zModMeshesBackData: ZModMechanismData[];
  zModMeshesSideData: ZModMechanismData[];
}

export { getZComponents } from './zModulation';
export type { ZModMechanismData } from './zModulation';

export const generate3DSceneData = (config: SpiroConfig, fourierData: Complex[] = []): GeneratedSceneData => {
    const isTextMode = config.generatorMode === GeneratorMode.Text;
    const isFourierPathMode = config.generatorMode === GeneratorMode.Fourier;
    const isSpiro = config.generatorMode === GeneratorMode.Spirograph;

    // For Text Mode, Wave B modulates Depth (Z), so it doesn't affect vertical floor requirements.
    const totalMaxAmp = isTextMode 
        ? config.zAmplitude 
        : (config.zAmplitude + config.zAmplitude2);

    const floorY = -totalMaxAmp - 60; 
    let calculatedStatorLength = 100; 

    let sceneBuffers = { positions: [], colors: [], points2D: [], paths: [] } as any;

    if (isTextMode) {
        sceneBuffers = generateTextScene(config, fourierData, floorY);
    } else if (isFourierPathMode && fourierData.length > 0) {
        sceneBuffers = generateFourierScene(config, fourierData, floorY);
    } else if (isSpiro) {
        const statorPath = generatePath(config.statorShape, config.outerRadius);
        calculatedStatorLength = statorPath[statorPath.length-1].dist || 100;
        sceneBuffers = generateSpiroScene(config, fourierData, floorY, calculatedStatorLength);
    }

    const { positions, colors, points2D, paths } = sceneBuffers;

    // --- CALCULATE BOUNDS ---
    let bMinX = Infinity, bMaxX = -Infinity;
    let bMinZ = Infinity, bMaxZ = -Infinity;
    
    for (let i = 0; i < positions.length; i += 3) {
        const px = positions[i];
        const pz = positions[i+2];
        if (px < bMinX) bMinX = px;
        if (px > bMaxX) bMaxX = px;
        if (pz < bMinZ) bMinZ = pz;
        if (pz > bMaxZ) bMaxZ = pz;
    }
    
    if (bMinX === Infinity) { bMinX = -100; bMaxX = 100; bMinZ = -100; bMaxZ = 100; }
    
    const globalRadius = Math.max(
        Math.hypot(bMinX, bMinZ),
        Math.hypot(bMaxX, bMaxZ),
        Math.hypot(bMinX, bMaxZ),
        Math.hypot(bMaxX, bMinZ),
        80
    );

    const wallOffset = globalRadius * 1.5;
    const pointsSide: THREE.Vector3[] = [];
    const pointsBack: THREE.Vector3[] = [];

    for(let i=0; i<positions.length; i+=3) {
        const x = positions[i];
        const h = positions[i+1];
        const z = positions[i+2];
        pointsSide.push(new THREE.Vector3(-wallOffset, h, z));
        pointsBack.push(new THREE.Vector3(x, h, -wallOffset));
    }

    const getZData = (isSide: boolean) => {
         const type = isSide ? config.zModulationType2 : config.zModulationType;
         const amp = isSide ? config.zAmplitude2 : config.zAmplitude;
         const { zModData, zScale } = buildZData(type, amp, fourierData, config.fourierCount);
         return zModData.map(d => ({ amp: d.amp * zScale, freq: d.freq, phase: d.phase }));
    };

    return {
        positions,
        paths, 
        colors,
        points2D,
        pointsSide,
        pointsBack,
        floorY,
        totalMaxAmp,
        calculatedStatorLength,
        globalRadius,
        wallOffset,
        zModMeshesBackData: getZData(false),
        zModMeshesSideData: getZData(true)
    };
};
