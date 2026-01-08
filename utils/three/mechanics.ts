
import * as THREE from 'three';
import { SpiroConfig, Complex, GeneratorMode, MechanicsRefs } from '../../types';
import { generatePath } from '../geometry';

export const buildMechanics = (
    scene: THREE.Scene, 
    config: SpiroConfig, 
    fourierData: Complex[],
    floorY: number, 
    zModMeshesBackData: any[],
    zModMeshesSideData: any[]
): MechanicsRefs => {
    const mechanicsGroup = new THREE.Group();
    scene.add(mechanicsGroup);
    
    const penGroup = new THREE.Group();
    scene.add(penGroup);

    // Pen Marker
    const coneGeo = new THREE.ConeGeometry(2.5, 9, 16);
    coneGeo.rotateX(Math.PI / 2); 
    const cone = new THREE.Mesh(coneGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    penGroup.add(cone);

    penGroup.add(new THREE.PointLight(0xffffff, 2, 300));
    
    // Wall Groups
    const backWallGroup = new THREE.Group();
    const sideWallGroup = new THREE.Group();
    mechanicsGroup.add(backWallGroup);
    mechanicsGroup.add(sideWallGroup);

    // Helpers
    const buildZMechanisms = (targetGroup: THREE.Group, data: any[], isSide: boolean) => {
        const meshes = [];
        for (const item of data) {
            const scaledAmp = item.amp;
            const curve = new THREE.EllipseCurve(0, 0, scaledAmp, scaledAmp, 0, 2 * Math.PI);
            const pts = curve.getPoints(32);
            const geometry = new THREE.BufferGeometry().setFromPoints(pts.map(p => new THREE.Vector3(p.x, p.y, 0)));
            const color = isSide ? 0x6ee7b7 : 0x818cf8;
            const circle = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9, linewidth: 2 }));
            targetGroup.add(circle);

            const rGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(scaledAmp,0,0)]);
            const radius = new THREE.Line(rGeo, new THREE.LineBasicMaterial({ color: 0xdbeafe, transparent: true, opacity: 1.0, linewidth: 3 }));
            targetGroup.add(radius);

            meshes.push({ circle, radius, amp: scaledAmp, freq: item.freq, phase: item.phase });
        }
        if (isSide) targetGroup.rotation.y = Math.PI / 2;
        return meshes;
    };

    const zModMeshesBack = buildZMechanisms(backWallGroup, zModMeshesBackData, false);
    const zModMeshesSide = buildZMechanisms(sideWallGroup, zModMeshesSideData, true);

    const createConnector = (color: number) => new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]),
        new THREE.LineDashedMaterial({ color, dashSize: 4, gapSize: 4, opacity: 0.8, transparent: true })
    );
    const backConnector = createConnector(0x818cf8);
    const sideConnector = createConnector(0x6ee7b7);
    backWallGroup.add(backConnector);
    sideWallGroup.add(sideConnector);

    let floorEpicyclesGroup: THREE.Group | undefined;
    const floorEpicycleMeshes: { circle: THREE.Line, radius: THREE.Line }[] = [];
    let statorLine: THREE.Line | undefined;
    let rotorLine: THREE.Line | undefined;
    let armLine: THREE.Line | undefined;

    if (config.generatorMode === GeneratorMode.Fourier && fourierData.length > 0) {
        floorEpicyclesGroup = new THREE.Group();
        floorEpicyclesGroup.position.y = floorY;
        mechanicsGroup.add(floorEpicyclesGroup);

        const count = Math.min(config.fourierCount, fourierData.length);
        for(let i=0; i<count; i++) {
            const amp = fourierData[i].amp;
            const circleCurve = new THREE.EllipseCurve(0, 0, amp, amp, 0, 2 * Math.PI, false, 0);
            const circlePts = circleCurve.getPoints(64);
            const circleGeo = new THREE.BufferGeometry().setFromPoints(circlePts.map(p => new THREE.Vector3(p.x, 0, p.y))); 
            const circleMesh = new THREE.Line(circleGeo, new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.5 }));
            floorEpicyclesGroup.add(circleMesh);

            const radiusGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(amp, 0, 0)]);
            const radiusMesh = new THREE.Line(radiusGeo, new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.8, transparent: true }));
            floorEpicyclesGroup.add(radiusMesh);

            floorEpicycleMeshes.push({ circle: circleMesh, radius: radiusMesh });
        }
    } else if (config.generatorMode === GeneratorMode.Spirograph) {
        const statorPath = generatePath(config.statorShape, config.outerRadius);
        const rotorPath = generatePath(config.rotorShape, config.innerRadius);
        
        const statorPoints = statorPath.map(p => new THREE.Vector3(p.x, floorY, p.y));
        if (statorPoints.length > 0) statorPoints.push(statorPoints[0]);
        statorLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(statorPoints), new THREE.LineBasicMaterial({ color: 0x22d3ee, opacity: 1.0 }));
        mechanicsGroup.add(statorLine);

        const rotorPoints = rotorPath.map(p => new THREE.Vector3(p.x, 0, p.y));
        if (rotorPoints.length > 0) rotorPoints.push(rotorPoints[0]);
        rotorLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(rotorPoints), new THREE.LineBasicMaterial({ color: 0xf43f5e, opacity: 1.0 }));
        mechanicsGroup.add(rotorLine);

        armLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 1.0 }));
        mechanicsGroup.add(armLine);
    }

    const connectorLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), 
        new THREE.LineDashedMaterial({ color: 0xcbd5e1, dashSize: 4, gapSize: 4, transparent: true, opacity: 0.8 })
    );
    mechanicsGroup.add(connectorLine);

    const tipLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]),
        new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2, transparent: true, opacity: 0.9 })
    );
    mechanicsGroup.add(tipLine);

    const createDot = () => new THREE.Mesh(new THREE.SphereGeometry(3, 8, 8), new THREE.MeshBasicMaterial({ color: 0x60a5fa }));
    const sideDot = createDot();
    const backDot = createDot();
    mechanicsGroup.add(sideDot);
    mechanicsGroup.add(backDot);

    const projectorMat = new THREE.LineDashedMaterial({ color: 0x60a5fa, dashSize: 4, gapSize: 4, opacity: 0.7, transparent: true });
    const heightLineMat = new THREE.LineBasicMaterial({ color: 0xf472b6, opacity: 0.8, transparent: true }); 
    
    const xProjector = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), projectorMat);
    const zProjector = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), projectorMat);
    const heightLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), heightLineMat);

    mechanicsGroup.add(xProjector);
    mechanicsGroup.add(zProjector);
    mechanicsGroup.add(heightLine);

    return {
        mechanicsGroup, penGroup, backWallGroup, sideWallGroup, floorEpicyclesGroup, floorEpicycleMeshes,
        zModMeshesBack, zModMeshesSide, backConnector, sideConnector, connectorLine,
        statorLine, rotorLine, armLine, xProjector, zProjector, heightLine, sideDot, backDot, tipLine
    };
};
