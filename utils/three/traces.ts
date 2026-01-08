
import * as THREE from 'three';

// Helper to compute a rotation frame that minimizes twist (Parallel Transportish)
const computeFrames = (points: THREE.Vector3[]) => {
    const tangents: THREE.Vector3[] = [];
    const normals: THREE.Vector3[] = [];
    const binormals: THREE.Vector3[] = [];

    if (points.length < 2) return { tangents, normals, binormals };

    // 1. Compute Tangents
    for (let i = 0; i < points.length; i++) {
        const t = new THREE.Vector3();
        if (i === 0) t.subVectors(points[1], points[0]);
        else if (i === points.length - 1) t.subVectors(points[i], points[i-1]);
        else {
            const t1 = new THREE.Vector3().subVectors(points[i], points[i-1]);
            const t2 = new THREE.Vector3().subVectors(points[i+1], points[i]);
            t.addVectors(t1, t2); // Average tangent
        }
        t.normalize();
        tangents.push(t);
    }

    // 2. Compute Initial Normal (arbitrary but perpendicular to T)
    let initialNormal = new THREE.Vector3(1, 0, 0);
    if (Math.abs(tangents[0].dot(initialNormal)) > 0.9) initialNormal.set(0, 1, 0);
    
    const n0 = new THREE.Vector3().crossVectors(tangents[0], initialNormal).normalize();
    const b0 = new THREE.Vector3().crossVectors(tangents[0], n0).normalize();
    
    normals.push(n0);
    binormals.push(b0);

    // 3. Propagate Frames
    let currentNormal = n0;
    for (let i = 1; i < points.length; i++) {
        const tPrev = tangents[i-1];
        const tCurr = tangents[i];
        
        // Parallel transport rotation
        const axis = new THREE.Vector3().crossVectors(tPrev, tCurr);
        const dot = tPrev.dot(tCurr);
        
        if (axis.lengthSq() > 0.0001) {
            axis.normalize();
            const angle = Math.acos(Math.max(-1, Math.min(1, dot)));
            currentNormal.applyAxisAngle(axis, angle);
        }
        
        // Re-orthogonalize
        const b = new THREE.Vector3().crossVectors(tCurr, currentNormal).normalize();
        const n = new THREE.Vector3().crossVectors(b, tCurr).normalize();
        
        normals.push(n);
        binormals.push(b);
        currentNormal = n;
    }

    return { tangents, normals, binormals };
};

export const buildTubeTraces = (
    scene: THREE.Scene, 
    paths: THREE.Vector3[][], 
    colors: number[], 
    config: any, 
    isTextMode: boolean
) => {
    if (paths.length === 0) return { line: null, ranges: [] };

    const tubeRadius = Math.max(0.1, config.lineWidth * (isTextMode ? 0.8 : 0.3));
    const radialSegments = 6; 
    
    const allPositions: number[] = [];
    const allColors: number[] = [];
    const allIndices: number[] = [];
    
    let vertexOffset = 0;
    let globalPointIndex = 0;
    let colorIndexOffset = 0;

    const ranges: {pStart: number, pEnd: number, gStart: number, gEnd: number}[] = [];

    paths.forEach(path => {
        if (path.length < 2) {
            globalPointIndex += path.length;
            colorIndexOffset += path.length;
            return;
        }

        const numPoints = path.length;
        const { normals, binormals } = computeFrames(path);
        
        const pathIndicesStart = allIndices.length;

        for (let i = 0; i < numPoints; i++) {
            const P = path[i];
            const N = normals[i];
            const B = binormals[i];
            
            const cIdx = (colorIndexOffset + i) * 3;
            const r = cIdx < colors.length ? colors[cIdx] : 1;
            const g = cIdx+1 < colors.length ? colors[cIdx+1] : 1;
            const b = cIdx+2 < colors.length ? colors[cIdx+2] : 1;

            for (let s = 0; s < radialSegments; s++) {
                const theta = (s / radialSegments) * Math.PI * 2;
                const sin = Math.sin(theta);
                const cos = Math.cos(theta);
                
                const vx = P.x + tubeRadius * (N.x * cos + B.x * sin);
                const vy = P.y + tubeRadius * (N.y * cos + B.y * sin);
                const vz = P.z + tubeRadius * (N.z * cos + B.z * sin);
                
                allPositions.push(vx, vy, vz);
                allColors.push(r, g, b);
            }
        }

        for (let i = 0; i < numPoints - 1; i++) {
            const ring1 = vertexOffset + i * radialSegments;
            const ring2 = vertexOffset + (i + 1) * radialSegments;
            
            for (let s = 0; s < radialSegments; s++) {
                const nextS = (s + 1) % radialSegments;
                allIndices.push(ring1 + s, ring2 + s, ring1 + nextS);
                allIndices.push(ring2 + s, ring2 + nextS, ring1 + nextS);
            }
        }
        
        ranges.push({
            pStart: globalPointIndex,
            pEnd: globalPointIndex + numPoints - 1,
            gStart: pathIndicesStart,
            gEnd: allIndices.length
        });

        vertexOffset += numPoints * radialSegments;
        globalPointIndex += numPoints;
        colorIndexOffset += numPoints;
    });

    let line: THREE.Mesh | null = null;
    
    if (allPositions.length > 0) {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(allColors, 3));
        geometry.setIndex(allIndices);
        
        const material = new THREE.MeshStandardMaterial({
            vertexColors: true,
            roughness: 0.2, 
            metalness: 0.0, 
            emissive: 0x000000, 
            emissiveIntensity: 0,
            flatShading: false, 
            side: THREE.DoubleSide,
            fog: false 
        });
        
        line = new THREE.Mesh(geometry, material);
        line.geometry.setDrawRange(0, 0); 
        scene.add(line);
    }

    return { line, ranges };
};
