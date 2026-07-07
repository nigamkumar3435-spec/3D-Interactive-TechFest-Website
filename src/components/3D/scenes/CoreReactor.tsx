'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CoreReactor() {
  const ringsRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        const speed = (i % 2 === 0 ? 1 : -1) * (0.5 + i * 0.2);
        ring.rotation.x += delta * speed;
        ring.rotation.y += delta * speed * 0.5;
        ring.rotation.z += delta * speed * 0.2;
      });
    }
    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 8) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={[0, -80, -250]}>
      {/* Energy Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[10, 64, 64]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
      </mesh>

      {/* Rotating Rings */}
      <group ref={ringsRef}>
        {[1, 2, 3].map((ring, i) => (
          <mesh key={i}>
            <torusGeometry args={[15 + i * 5, 0.5, 16, 100]} />
            <meshStandardMaterial color="#fff" metalness={1} roughness={0.1} emissive="#ff0000" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
      
      {/* Energy Arcs/Pillars */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[
          Math.cos((i * Math.PI) / 2) * 30,
          0,
          Math.sin((i * Math.PI) / 2) * 30
        ]}>
          <cylinderGeometry args={[2, 2, 80, 32]} />
          <meshStandardMaterial color="#111" metalness={0.9} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}
