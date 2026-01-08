
import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface CameraUpdateProps {
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    smoothedCamPos: THREE.Vector3;
    isTextMode: boolean;
    isPlaying: boolean;
    drawingProgress: number;
    totalPoints: number;
    delta: number;
    travelTimeRef: React.MutableRefObject<number>;
    phaseRef: React.MutableRefObject<number>;
    transitionSnapshotRef: React.MutableRefObject<{pos: THREE.Vector3, target: THREE.Vector3} | null>;
    bounds: { minX: number, maxX: number };
    distToFitGlobal: number;
    distToFitAction: number;
    currentPenPos: THREE.Vector3;
    animationTime: number;
}

export const updateCamera = ({
    camera, controls, smoothedCamPos, isTextMode, isPlaying, drawingProgress, totalPoints,
    delta, travelTimeRef, phaseRef, transitionSnapshotRef, bounds, distToFitGlobal, distToFitAction,
    currentPenPos, animationTime
}: CameraUpdateProps) => {

    if (isTextMode && drawingProgress >= totalPoints - 1) {
          // --- END SEQUENCE FOR TEXT MODE ---
          if (isPlaying) travelTimeRef.current += delta;
          const seqTime = travelTimeRef.current;

          // DURATIONS
          const SCAN_DUR = 5.0;
          const TO_TOP_DUR = 4.0; 
          const HOLD_DUR = 1.0; 
          const TO_SIDE_DUR = 2.0; 
          const ORBIT_DUR = 8.0; 
          const RETURN_DUR = 2.5;

          const T1 = SCAN_DUR;
          const T2 = T1 + TO_TOP_DUR;
          const T3 = T2 + HOLD_DUR;
          const T4 = T3 + TO_SIDE_DUR;
          const T5 = T4 + ORBIT_DUR;
          const T6 = T5 + RETURN_DUR;

          // POSITIONS
          // Top View
          const topPos = new THREE.Vector3(0, distToFitGlobal, 1);
          const topTarget = new THREE.Vector3(0, 0, 0);
          
          // Side Orbit Radius
          const orbitRadius = distToFitGlobal * 0.8;
          const orbitHeight = orbitRadius * 0.3; // Low angle

          // 1. SCAN PHASE (Travel along text)
          if (seqTime < T1) {
              const progress = Math.min(1, seqTime / SCAN_DUR);
              const t = progress * progress * (3 - 2 * progress); // Smoothstep
              
              const { minX, maxX } = bounds;
              const width = maxX - minX;
              const padding = Math.max(30, width * 0.15); 
              const startX = minX - padding;
              const endX = maxX + padding;
              
              const currentX = startX + (endX - startX) * t;
              const camZ = distToFitAction * 0.6;
              const camY = 10;
              
              const targetPos = new THREE.Vector3(currentX, camY, camZ);
              const lookTarget = new THREE.Vector3(currentX, 0, 0);
              
              smoothedCamPos.lerp(targetPos, 0.1);
              camera.position.copy(smoothedCamPos);
              
              const currentLookAt = controls.target.clone();
              currentLookAt.lerp(lookTarget, 0.1);
              camera.lookAt(currentLookAt);
              controls.target.copy(currentLookAt);
              
              // Snapshot for next phase
              phaseRef.current = 1;
              transitionSnapshotRef.current = { pos: camera.position.clone(), target: controls.target.clone() };
          
          } 
          // 2. TO TOP PHASE (Ease-In)
          else if (seqTime < T2) {
              const rawT = (seqTime - T1) / TO_TOP_DUR;
              const t = rawT * rawT; // Ease-In (Slow Start)
              
              const startState = transitionSnapshotRef.current || { pos: camera.position.clone(), target: controls.target.clone() };
              
              const nextPos = new THREE.Vector3().lerpVectors(startState.pos, topPos, t);
              const nextTarget = new THREE.Vector3().lerpVectors(startState.target, topTarget, t);
              
              camera.position.copy(nextPos);
              controls.target.copy(nextTarget);
              camera.lookAt(nextTarget);
              
              phaseRef.current = 2;
          }
          // 3. HOLD TOP PHASE
          else if (seqTime < T3) {
              camera.position.copy(topPos);
              controls.target.copy(topTarget);
              camera.lookAt(topTarget);
              
              // Snapshot for orbit entry
              transitionSnapshotRef.current = { pos: topPos.clone(), target: topTarget.clone() };
              phaseRef.current = 3;
          }
          // 4. TRANSITION TO SIDE ORBIT START
          else if (seqTime < T4) {
              const t = (seqTime - T3) / TO_SIDE_DUR;
              const smoothT = t < 0.5 ? 2*t*t : -1+(4-2*t)*t; // EaseInOut
              
              const startState = transitionSnapshotRef.current!;
              // Start orbit at angle PI/2 (Front)
              const orbitStartPos = new THREE.Vector3(0, orbitHeight, orbitRadius);
              
              const nextPos = new THREE.Vector3().lerpVectors(startState.pos, orbitStartPos, smoothT);
              
              camera.position.copy(nextPos);
              controls.target.copy(topTarget); // Keep looking at center
              camera.lookAt(topTarget);
              
              phaseRef.current = 4;
          }
          // 5. ORBIT 360 (SIDE VIEW)
          else if (seqTime < T5) {
               const progress = (seqTime - T4) / ORBIT_DUR;
               const angle = Math.PI/2 + (Math.PI * 2 * progress); // Start at PI/2, go full circle
               
               const x = orbitRadius * Math.cos(angle);
               const z = orbitRadius * Math.sin(angle);
               const y = orbitHeight;
               
               camera.position.set(x, y, z);
               camera.lookAt(topTarget);
               controls.target.copy(topTarget);
               
               // Snapshot for return
               transitionSnapshotRef.current = { pos: camera.position.clone(), target: topTarget.clone() };
               phaseRef.current = 5;
          }
          // 6. RETURN TO TOP
          else if (seqTime < T6) {
               const t = (seqTime - T5) / RETURN_DUR;
               const smoothT = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
               
               const startState = transitionSnapshotRef.current!;
               const nextPos = new THREE.Vector3().lerpVectors(startState.pos, topPos, smoothT);
               
               camera.position.copy(nextPos);
               camera.lookAt(topTarget);
               controls.target.copy(topTarget);
          }
          // 7. END
          else {
              // Settle
              camera.position.copy(topPos);
              controls.target.copy(topTarget);
              camera.lookAt(topTarget);
              
              // Enable manual
              controls.enabled = true;
              return;
          }
          
          controls.enabled = false;

      } else {
          // Default Animation (Spiro/Drawing Phase)
          
          if (!isPlaying) {
              controls.enabled = true;
              // Sync smoothedCamPos with current camera position to prevent snapping when resuming
              smoothedCamPos.copy(camera.position);
              return;
          }

          const polarCycle = Math.sin(animationTime * 0.3); 
          const targetPoint = new THREE.Vector3().lerpVectors(new THREE.Vector3(0,0,0), currentPenPos, Math.max(0, polarCycle * 0.6));
          const currentDist = distToFitAction * (0.9 - (polarCycle * 0.3));
          const y = Math.max(5, currentDist * Math.cos(1.0 + polarCycle * 0.45)); 
          const r_xz = Math.sqrt(Math.max(0, currentDist*currentDist - y*y));
          const azimuth = animationTime * 0.2 + (Math.min(drawingProgress / totalPoints, 1) * Math.PI / 6);
          const targetCamPos = new THREE.Vector3(r_xz * Math.cos(azimuth), y, r_xz * Math.sin(azimuth)).add(targetPoint);
          
          smoothedCamPos.lerp(targetCamPos, 0.03); 
          camera.position.copy(smoothedCamPos);
          const currentLookAt = controls.target.clone();
          currentLookAt.lerp(targetPoint, 0.05);
          camera.lookAt(currentLookAt);
          controls.target.copy(currentLookAt);
          controls.enabled = false;
      }
};
