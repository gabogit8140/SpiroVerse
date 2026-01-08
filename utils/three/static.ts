
import * as THREE from 'three';

export const buildStaticScene = (
    scene: THREE.Scene, 
    globalRadius: number, 
    floorY: number, 
    wallOffset: number
) => {
    const gridColor = 0x64748b; 
    const subGridColor = 0x475569; 
    const wallSize = globalRadius * 3.5;

    const gridHelper = new THREE.GridHelper(globalRadius * 4, 40, 0x64748b, 0x0f172a);
    gridHelper.position.y = floorY - 5;
    scene.add(gridHelper);

    const sideGrid = new THREE.GridHelper(wallSize, 20, gridColor, subGridColor);
    sideGrid.rotation.z = Math.PI / 2;
    sideGrid.position.set(-wallOffset - 1, 0, 0); 
    
    const backGrid = new THREE.GridHelper(wallSize, 20, gridColor, subGridColor);
    backGrid.rotation.x = Math.PI / 2;
    backGrid.position.set(0, 0, -wallOffset - 1);

    return { sideGrid, backGrid };
};
