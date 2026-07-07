'use client';

import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export default function CameraRig() {
  const scroll = useScroll(); // Requires ScrollControls to be wrapping the scene
  const cameraRef = useRef<THREE.Camera>(null);

  useFrame((state, delta) => {
    if (!scroll) return;
    
    // scroll.offset is between 0 and 1
    const offset = scroll.offset;

    // Example logic: move camera on Z axis as user scrolls
    // In a real scenario, this would be a complex GSAP timeline or 
    // calculated bezier curve path for the camera to fly through the facility.
    
    const targetZ = 10 - offset * 100; // Move deep into the facility
    const targetY = offset * 5; // Slight elevation
    
    // Smoothly damp the camera position
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, delta * 2);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, delta * 2);

    // Parallax effect with mouse
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;
    
    state.camera.rotation.y = THREE.MathUtils.lerp(state.camera.rotation.y, -mouseX * 0.2, delta * 2);
    state.camera.rotation.x = THREE.MathUtils.lerp(state.camera.rotation.x, mouseY * 0.2, delta * 2);
  });

  return null;
}
