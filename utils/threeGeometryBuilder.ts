
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
        // Axis = tPrev x tCurr
        // Angle = acos(tPrev . tCurr)
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

    // Increased radius multipliers for better visibility at zoom out
    const tubeRadius = Math.max(0.1, config.lineWidth * (isTextMode ? 0.8 : 0.3));
    const radialSegments = 6; // Hexagon profile for efficiency and style
    
    // Aggregators for the single merged geometry
    const allPositions: number[] = [];
    const allColors: number[] = [];
    const allIndices: number[] = [];
    
    let vertexOffset = 0;
    let globalPointIndex = 0;
    let colorIndexOffset = 0;

    const ranges: {pStart: number, pEnd: number, gStart: number, gEnd: number}[] = [];

    paths.forEach(path => {
        if (path.length < 2) {
            // Skip single points but increment counters to keep sync
            globalPointIndex += path.length;
            colorIndexOffset += path.length;
            return;
        }

        const numPoints = path.length;
        const { normals, binormals } = computeFrames(path);
        
        const pathIndicesStart = allIndices.length;
        // const pathVertexStart = vertexOffset; // Unused

        // Generate Vertices (Rings)
        for (let i = 0; i < numPoints; i++) {
            const P = path[i];
            const N = normals[i];
            const B = binormals[i];
            
            // Get Color for this point
            const cIdx = (colorIndexOffset + i) * 3;
            const r = cIdx < colors.length ? colors[cIdx] : 1;
            const g = cIdx+1 < colors.length ? colors[cIdx+1] : 1;
            const b = cIdx+2 < colors.length ? colors[cIdx+2] : 1;

            // Generate Ring
            for (let s = 0; s < radialSegments; s++) {
                const theta = (s / radialSegments) * Math.PI * 2;
                const sin = Math.sin(theta);
                const cos = Math.cos(theta);
                
                // v = P + radius * (N * cos + B * sin)
                const vx = P.x + tubeRadius * (N.x * cos + B.x * sin);
                const vy = P.y + tubeRadius * (N.y * cos + B.y * sin);
                const vz = P.z + tubeRadius * (N.z * cos + B.z * sin);
                
                allPositions.push(vx, vy, vz);
                allColors.push(r, g, b);
            }
        }

        // Generate Indices (Segment Connections)
        // Each segment i connects Ring i to Ring i+1
        for (let i = 0; i < numPoints - 1; i++) {
            const ring1 = vertexOffset + i * radialSegments;
            const ring2 = vertexOffset + (i + 1) * radialSegments;
            
            for (let s = 0; s < radialSegments; s++) {
                const nextS = (s + 1) % radialSegments;
                
                // Quad: (r1_s, r2_s, r2_next, r1_next)
                // Tri 1: r1_s, r2_s, r1_next
                // Tri 2: r2_s, r2_next, r1_next
                
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
            roughness: 0.2, // Low roughness for shine
            metalness: 0.0, // Zero metalness for brighter diffuse reflection (plastic look)
            emissive: 0x000000, // Black emissive so we don't wash out colors
            emissiveIntensity: 0,
            flatShading: false, 
            side: THREE.DoubleSide,
            fog: false 
        });
        
        line = new THREE.Mesh(geometry, material);
        line.geometry.setDrawRange(0, 0); // Start hidden
        scene.add(line);
    }

    return { line, ranges };
};

export const buildProjections = (
    group: THREE.Group,
    paths: THREE.Vector3[][],
    points2D: THREE.Vector3[],
    floorY: number,
    wallOffset: number
) => {
    // We use LineSegments to allow gaps between paths (strokes)
    const floorVertices: number[] = [];
    const sideVertices: number[] = [];
    const backVertices: number[] = [];

    paths.forEach(path => {
        if (path.length < 2) return;
        for (let i = 0; i < path.length - 1; i++) {
            const p1 = path[i];
            const p2 = path[i+1];

            // Floor (y = floorY)
            floorVertices.push(p1.x, floorY, p1.z);
            floorVertices.push(p2.x, floorY, p2.z);

            // Side Wall (x = -wallOffset)
            sideVertices.push(-wallOffset, p1.y, p1.z);
            sideVertices.push(-wallOffset, p2.y, p2.z);

            // Back Wall (z = -wallOffset)
            backVertices.push(p1.x, p1.y, -wallOffset);
            backVertices.push(p2.x, p2.y, -wallOffset);
        }
    });

    const createLine = (vertices: number[], color: number) => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const line = new THREE.LineSegments(
            geo, 
            new THREE.LineBasicMaterial({ color, opacity: 0.2, transparent: true })
        );
        group.add(line);
        return { line, geo };
    };

    const { line: floorLine, geo: geo2D } = createLine(floorVertices, 0x22d3ee);
    const { line: sideShadowLine } = createLine(sideVertices, 0x6ee7b7);
    const { line: backShadowLine } = createLine(backVertices, 0x818cf8);

    // Initial draw range 0
    geo2D.setDrawRange(0, 0);
    sideShadowLine.geometry.setDrawRange(0, 0);
    backShadowLine.geometry.setDrawRange(0, 0);

    return { geo2D, sideShadowLine, backShadowLine };
};
