
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const setupThreeScene = (width: number, height: number, container: HTMLElement) => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617); 
    scene.fog = new THREE.FogExp2(0x020617, 0.00025);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(50, 100, 100);
    scene.add(dirLight);
    
    const backLight = new THREE.DirectionalLight(0x64748b, 0.8);
    backLight.position.set(-50, 50, -100);
    scene.add(backLight);

    const fov = 45; 
    const aspect = width / height;
    const camera = new THREE.PerspectiveCamera(fov, aspect, 1, 100000);

    const headlight = new THREE.DirectionalLight(0xffffff, 0.6);
    headlight.position.set(0, 0, 1);
    camera.add(headlight);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true; 
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;

    return { scene, camera, renderer, controls };
};
