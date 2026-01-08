
import * as THREE from 'three';
import { SpiroConfig, GeneratorMode, MechanicsRefs } from '../../types';
import { getPointAt, PathPoint } from '../geometry';
import { getZComponents } from '../zModulation';

export const updateTraceDrawRange = (
    line: THREE.Mesh | null,
    ranges: any[],
    progress: number,
    mechanics: MechanicsRefs,
    currentPenPos: THREE.Vector3
) => {
    if (!line) return;
    
    let drawRangeLimit = 0;
    
    if (ranges.length > 0) {
        for(let i=0; i<ranges.length; i++) {
            const r = ranges[i];
            if (progress >= r.pStart && progress <= r.pEnd) {
                const localP = progress - r.pStart;
                const fullSegments = Math.floor(localP);
                const indicesPerSegment = 6 * 6; 
                
                drawRangeLimit = r.gStart + (fullSegments * indicesPerSegment);

                if (mechanics.tipLine) {
                    mechanics.tipLine.visible = true;
                }
                break;
            } else if (i < ranges.length - 1 && progress > r.pEnd && progress < ranges[i+1].pStart) {
                drawRangeLimit = r.gEnd;
                if (mechanics.tipLine) mechanics.tipLine.visible = false;
                break;
            }
        }
        if (progress > ranges[ranges.length-1].pEnd) {
            drawRangeLimit = ranges[ranges.length-1].gEnd;
            if (mechanics.tipLine) mechanics.tipLine.visible = false;
        }
    }
    line.geometry.setDrawRange(0, Math.floor(drawRangeLimit));
};

export const updateProjectionDrawRange = (
    geometries: (THREE.BufferGeometry | undefined)[],
    ranges: { start: number, end: number, vStart: number, vEnd: number }[],
    progress: number
) => {
    if (!ranges.length) return;
    
    let drawCount = 0;
    
    // Check if progress is past the last range
    if (progress >= ranges[ranges.length - 1].end) {
        drawCount = ranges[ranges.length - 1].vEnd;
    } else {
        // Find active range
        const range = ranges.find(r => progress >= r.start && progress <= r.end + 0.001);
        
        if (range) {
            const localProgress = progress - range.start;
            const pathLength = range.end - range.start;
            if (pathLength > 0) {
                 const ratio = Math.max(0, Math.min(1, localProgress / pathLength));
                 const localVerts = Math.floor(ratio * (range.vEnd - range.vStart));
                 drawCount = range.vStart + (localVerts - (localVerts % 2));
            } else {
                 drawCount = range.vStart;
            }
        } else {
            // If between ranges (e.g. pen up gap), use end of previous range
            for(let i = ranges.length - 1; i >= 0; i--) {
                 if (progress > ranges[i].end) {
                     drawCount = ranges[i].vEnd;
                     break;
                 }
            }
        }
    }
    
    geometries.forEach(g => {
        if(g) g.setDrawRange(0, drawCount);
    });
};

export const updateMechanics = (
    mechanics: MechanicsRefs,
    config: SpiroConfig,
    currentPenPos: THREE.Vector3,
    floorY: number,
    wallOffset: number,
    effectiveIndex: number,
    fourierData: any[],
    statorPath: PathPoint[],
    rotorPath: PathPoint[],
    calculatedStatorLength: number
) => {
    const isTextMode = config.generatorMode === GeneratorMode.Text;

    // Check mechanics parts existence
    if (mechanics.penGroup) {
        mechanics.penGroup.position.copy(currentPenPos);
    }

    if (config.showProjection) {
        if (mechanics.sideDot) mechanics.sideDot.position.set(-wallOffset, currentPenPos.y, currentPenPos.z);
        if (mechanics.backDot) mechanics.backDot.position.set(currentPenPos.x, currentPenPos.y, -wallOffset);
        if (mechanics.xProjector) {
            (mechanics.xProjector.geometry as THREE.BufferGeometry).setFromPoints([new THREE.Vector3(-wallOffset, currentPenPos.y, currentPenPos.z), currentPenPos]);
            mechanics.xProjector.computeLineDistances();
        }
        if (mechanics.zProjector) {
            (mechanics.zProjector.geometry as THREE.BufferGeometry).setFromPoints([new THREE.Vector3(currentPenPos.x, currentPenPos.y, -wallOffset), currentPenPos]);
            mechanics.zProjector.computeLineDistances();
        }
        if (mechanics.heightLine) (mechanics.heightLine.geometry as THREE.BufferGeometry).setFromPoints([new THREE.Vector3(currentPenPos.x, floorY, currentPenPos.z), currentPenPos]);
        if (mechanics.connectorLine) {
            (mechanics.connectorLine.geometry as THREE.BufferGeometry).setFromPoints([new THREE.Vector3(currentPenPos.x, floorY, currentPenPos.z), currentPenPos]); 
            mechanics.connectorLine.computeLineDistances();
        }
    }

    const t = effectiveIndex; // Passed as normalized time 0..2PI usually or index
    let penX2D = 0, penY2D = 0;

    if (config.generatorMode === GeneratorMode.Fourier && fourierData.length > 0) {
            let x = 0, y = 0;
            const count = Math.min(config.fourierCount, fourierData.length);
            // For now, assume t passed is the radian angle
            for(let i=0; i<count; i++) {
                const prevX = x, prevY = y;
                const { freq, amp, phase } = fourierData[i];
                x += amp * Math.cos(freq * t + phase);
                y += amp * Math.sin(freq * t + phase);
                if (mechanics.floorEpicycleMeshes && mechanics.floorEpicycleMeshes[i]) {
                    const m = mechanics.floorEpicycleMeshes[i];
                    m.circle.position.set(prevX, 0, prevY);
                    m.radius.position.set(prevX, 0, prevY);
                    m.radius.rotation.set(0, -Math.atan2(y - prevY, x - prevX), 0);
                }
            }
            penX2D = x; penY2D = y;
    } else if (config.generatorMode === GeneratorMode.Spirograph && mechanics.rotorLine) {
            const d = (t / (Math.PI * 2)) * calculatedStatorLength; // Reverse t back to distance
            const s = getPointAt(statorPath, d);
            const r = getPointAt(rotorPath, d);
            const rot = (config.type as any) === 'INSIDE' ? (s.angle - r.angle) : (s.angle + Math.PI - r.angle);
            
            const cx = s.x - (r.x * Math.cos(rot) - r.y * Math.sin(rot));
            const cy = s.y - (r.x * Math.sin(rot) + r.y * Math.cos(rot));
            penX2D = cx + config.penOffset * Math.cos(rot);
            penY2D = cy + config.penOffset * Math.sin(rot);

            mechanics.rotorLine.position.set(cx, floorY, cy);
            mechanics.rotorLine.rotation.y = -rot;
            if (mechanics.armLine) (mechanics.armLine.geometry as THREE.BufferGeometry).setFromPoints([new THREE.Vector3(cx, floorY, cy), new THREE.Vector3(penX2D, floorY, penY2D)]);
            
            mechanics.rotorLine.visible = config.showProjection; 
            if (mechanics.armLine) mechanics.armLine.visible = config.showProjection;
            if (mechanics.statorLine) mechanics.statorLine.visible = true; 
    } else { penX2D = currentPenPos.x; penY2D = currentPenPos.z; }

    if (mechanics.connectorLine) {
        (mechanics.connectorLine.geometry as THREE.BufferGeometry).setFromPoints([new THREE.Vector3(penX2D, floorY, penY2D), currentPenPos]);
        mechanics.connectorLine.computeLineDistances();
    }

    // Z-Modulation Mechanics
    let zTime = t;
    if (isTextMode) { 
        zTime = (currentPenPos.x / 200) * Math.PI * 2;
    }

    const { val1: v1, val2: v2 } = getZComponents(zTime, config, fourierData);
    
    const updateZGroup = (group: THREE.Group, meshes: any[], connector: THREE.Line, isSide: boolean, vOffset: number) => {
        let cx = 0, cy = 0; 
        if (isSide) group.position.set(-wallOffset, vOffset, currentPenPos.z); else group.position.set(currentPenPos.x, vOffset, -wallOffset);
        const freqMultiplier = isSide ? config.zFrequency2 : config.zFrequency;
        for (const m of meshes) {
            const prevX = cx, prevY = cy;
            const t_mod = zTime * freqMultiplier; 
            cx += m.amp * Math.cos(m.freq * t_mod + m.phase);
            cy += m.amp * Math.sin(m.freq * t_mod + m.phase);
            m.circle.position.set(prevX, prevY, 0); m.radius.position.set(prevX, prevY, 0);
            m.radius.rotation.z = Math.atan2(cy - prevY, cx - prevX);
        }
        if (isSide) group.position.set(-wallOffset, vOffset, currentPenPos.z + cx); else group.position.set(currentPenPos.x - cx, vOffset, -wallOffset);
        (connector.geometry as THREE.BufferGeometry).setFromPoints([new THREE.Vector3(cx, cy, 0), new THREE.Vector3(0, cy, 0)]);
        connector.computeLineDistances();
    };
    if (mechanics.backWallGroup) updateZGroup(mechanics.backWallGroup, mechanics.zModMeshesBack, mechanics.backConnector, false, v2);
    if (mechanics.sideWallGroup) updateZGroup(mechanics.sideWallGroup, mechanics.zModMeshesSide, mechanics.sideConnector, true, v1);
};
