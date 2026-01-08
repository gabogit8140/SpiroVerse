
import * as THREE from 'three';

export const buildProjections = (
    group: THREE.Group,
    paths: THREE.Vector3[][],
    points2D: THREE.Vector3[],
    floorY: number,
    wallOffset: number
) => {
    const floorVertices: number[] = [];
    const sideVertices: number[] = [];
    const backVertices: number[] = [];

    const projectionRanges: { start: number, end: number, vStart: number, vEnd: number }[] = [];
    let globalPointIndex = 0;
    let vertexCount = 0;

    paths.forEach(path => {
        if (path.length < 2) {
             globalPointIndex += path.length;
             return;
        }

        const pathStartIndex = globalPointIndex;
        const pathVertexStart = vertexCount;

        for (let i = 0; i < path.length - 1; i++) {
            const p1 = path[i];
            const p2 = path[i+1];

            floorVertices.push(p1.x, floorY, p1.z);
            floorVertices.push(p2.x, floorY, p2.z);

            sideVertices.push(-wallOffset, p1.y, p1.z);
            sideVertices.push(-wallOffset, p2.y, p2.z);

            backVertices.push(p1.x, p1.y, -wallOffset);
            backVertices.push(p2.x, p2.y, -wallOffset);
            
            vertexCount += 2;
        }

        projectionRanges.push({
            start: pathStartIndex,
            end: pathStartIndex + path.length - 1,
            vStart: pathVertexStart,
            vEnd: vertexCount
        });

        globalPointIndex += path.length;
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

    geo2D.setDrawRange(0, 0);
    sideShadowLine.geometry.setDrawRange(0, 0);
    backShadowLine.geometry.setDrawRange(0, 0);

    return { geo2D, sideShadowLine, backShadowLine, projectionRanges };
};
