
import * as THREE from 'three';
import { SpiroConfig, ColorMode, SpiroType, Complex, ZModulationType } from '../types';
import { generateTextPath } from './textUtils';
import { getZComponents } from './zModulation';
import { generatePath, getPointAt } from './geometry';

interface SceneBuffers {
    positions: number[];
    colors: number[];
    points2D: THREE.Vector3[];
    paths: THREE.Vector3[][];
}

export const generateTextScene = (config: SpiroConfig, fourierData: Complex[], floorY: number): SceneBuffers => {
    const positions: number[] = [];
    const colors: number[] = [];
    const points2D: THREE.Vector3[] = [];
    const paths: THREE.Vector3[][] = [];

    // 1. Generate Raw Points
    const textPoints = generateTextPath(config.textPhrase, 1.0);
    if (textPoints.length === 0) return { positions, colors, points2D, paths };

    // 2. Identify Strokes (Segment path by penUp)
    const strokes: typeof textPoints[] = [];
    let currentStrokePoints: typeof textPoints = [];
    
    textPoints.forEach((p) => {
        // If penUp is true, it means 'p' is the start of a new stroke (a jump occurred to reach p).
        // We must finish the previous stroke BEFORE adding 'p' to a new one.
        if (p.penUp && currentStrokePoints.length > 0) {
             strokes.push(currentStrokePoints);
             currentStrokePoints = [];
        }
        currentStrokePoints.push(p);
    });
    
    // Add any remaining points
    if (currentStrokePoints.length > 0) {
        strokes.push(currentStrokePoints);
    }

    // 3. Calculate Bounds
    let minX = Infinity;
    let maxX = -Infinity;
    textPoints.forEach(p => {
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
    });
    const textWidth = Math.max(1, maxX - minX);

    // 4. Generate Scene Data with Per-Point Modulation
    strokes.forEach(stroke => {
        const currentPath: THREE.Vector3[] = [];
        
        stroke.forEach(p => {
            const normalizedX = (p.x - minX) / textWidth;
            const phase = normalizedX * Math.PI * 2;
            
            let yMod = 0;
            let zMod = 0;

            // Wave A (Height)
            if (config.zModulationType !== ZModulationType.None) {
                const { val1 } = getZComponents(phase, config, fourierData);
                yMod = val1;
            }

            // Wave B (Depth)
            // Special handling for Sine-Sine to ensure perfect Helix/Loop
            if (config.zModulationType2 === ZModulationType.Sine && config.zModulationType === ZModulationType.Sine) {
                 // Use Primary Frequency for both to ensure closed loop
                 const t = phase * config.zFrequency;
                 // Shift by 90deg for Cosine -> Helix
                 zMod = config.zAmplitude2 * Math.sin(t + Math.PI / 2);
            } else if (config.zModulationType2 !== ZModulationType.None) {
                 // Standard behavior for other combos
                 const { val2 } = getZComponents(phase, config, fourierData);
                 zMod = val2;
            }

            // IMPORTANT: Per-Point Modulation
            // p.y is the depth/thickness of the text (font height in 2D)
            // We add zMod to p.y to shear the text in Z, while preserving its local thickness
            const x3d = p.x;
            const y3d = yMod; 
            const z3d = p.y + zMod; 

            positions.push(x3d, y3d, z3d);
            points2D.push(new THREE.Vector3(x3d, floorY, z3d));
            currentPath.push(new THREE.Vector3(x3d, y3d, z3d));

            // Color Logic
            if (config.colorMode === ColorMode.Rainbow) {
                const hue = (normalizedX * 360) % 360; 
                const color = new THREE.Color(`hsl(${hue}, 100%, 60%)`);
                colors.push(color.r, color.g, color.b);
            } else {
                const color = new THREE.Color(config.color);
                colors.push(color.r, color.g, color.b);
            }
        });
        if (currentPath.length > 0) paths.push(currentPath);
    });

    return { positions, colors, points2D, paths };
};

export const generateFourierScene = (config: SpiroConfig, fourierData: Complex[], floorY: number): SceneBuffers => {
    const positions: number[] = [];
    const colors: number[] = [];
    const points2D: THREE.Vector3[] = [];
    const paths: THREE.Vector3[][] = [];

    const count = Math.min(config.fourierCount, fourierData.length);
    const segments = Math.max(2000, fourierData.length * 2); 
    let currentPath: THREE.Vector3[] = [];
    
    for (let i = 0; i <= segments; i++) {
        const t = (i / segments) * Math.PI * 2;
        let x = 0;
        let y = 0;
        
        for (let j = 0; j < count; j++) {
            const { freq, amp, phase } = fourierData[j];
            x += amp * Math.cos(freq * t + phase);
            y += amp * Math.sin(freq * t + phase);
        }
        
        const { val1, val2 } = getZComponents(t, config, fourierData);
        const heightVal = val1 + val2;
        
        positions.push(x, heightVal, y);
        const v = new THREE.Vector3(x, heightVal, y);
        currentPath.push(v);
        points2D.push(new THREE.Vector3(x, floorY, y));

        if (config.colorMode === ColorMode.Rainbow) {
            const hue = (t * 180 / Math.PI) % 360;
            const color = new THREE.Color(`hsl(${hue}, 100%, 60%)`);
            colors.push(color.r, color.g, color.b);
        } else {
            const color = new THREE.Color(config.color);
            colors.push(color.r, color.g, color.b);
        }
    }
    if (currentPath.length > 0) paths.push(currentPath);

    return { positions, colors, points2D, paths };
};

export const generateSpiroScene = (config: SpiroConfig, fourierData: Complex[], floorY: number, calculatedStatorLength: number): SceneBuffers => {
    const positions: number[] = [];
    const colors: number[] = [];
    const points2D: THREE.Vector3[] = [];
    const paths: THREE.Vector3[][] = [];

    const statorPath = generatePath(config.statorShape, config.outerRadius);
    const rotorPath = generatePath(config.rotorShape, config.innerRadius);
    
    const maxDist = calculatedStatorLength * config.rotations;
    const step = config.resolution;
    let currentPath: THREE.Vector3[] = [];
    
    const totalSteps = Math.ceil(maxDist / step);
    
    for (let i = 0; i <= totalSteps; i++) {
        const d = i * step;
        const s = getPointAt(statorPath, d);
        const r = getPointAt(rotorPath, d);
        const isHypo = config.type === SpiroType.Hypotrochoid;
        const rot = isHypo ? (s.angle - r.angle) : (s.angle + Math.PI - r.angle);
        
        const cos = Math.cos(rot);
        const sin = Math.sin(rot);
        const rx = r.x * cos - r.y * sin;
        const ry = r.x * sin + r.y * cos;
        const cx = s.x - rx;
        const cy = s.y - ry;
        
        const penX = cx + config.penOffset * Math.cos(rot);
        const penY = cy + config.penOffset * Math.sin(rot); 
        
        const t_cycle = (d / calculatedStatorLength * Math.PI * 2); 
        const { val1, val2 } = getZComponents(t_cycle, config, fourierData);
        const heightVal = val1 + val2;
        
        positions.push(penX, heightVal, penY);
        const v = new THREE.Vector3(penX, heightVal, penY);
        currentPath.push(v);
        points2D.push(new THREE.Vector3(penX, floorY, penY)); 

        if (config.colorMode === ColorMode.Rainbow) {
            const hue = (rot * 180 / Math.PI) % 360;
            const color = new THREE.Color(`hsl(${hue}, 100%, 60%)`);
            colors.push(color.r, color.g, color.b);
        } else {
            const color = new THREE.Color(config.color);
            colors.push(color.r, color.g, color.b);
        }
    }
    if (currentPath.length > 0) {
        paths.push(currentPath);
    }
    return { positions, colors, points2D, paths };
};
