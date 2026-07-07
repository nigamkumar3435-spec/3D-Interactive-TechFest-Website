'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { GroupProps } from '@react-three/fiber';

export default function AICore(props: GroupProps) {
  const coreRef = useRef<THREE.Group>(null);
  const eyeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.1;
      coreRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.5;
      ringRef.current.rotation.z += delta * 0.3;
    }
    if (eyeRef.current) {
      // Pulsing eye
      const material = eyeRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 2 + Math.sin(state.clock.elapsedTime * 4) * 1;
    }
  });

  return (
    <group ref={coreRef} position={[0, 0, 0]} {...props}>
      {/* Central Sphere */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial 
          color="#111" 
          metalness={0.9} 
          roughness={0.1}
          wireframe={true} 
        />
      </mesh>

      {/* Inner Red Glowing Core (Eye) */}
      <mesh ref={eyeRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#ff0000" 
          emissive="#ff0000" 
          emissiveIntensity={2} 
        />
      </mesh>

      {/* Rotating Mechanical Rings */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#fff" metalness={1} roughness={0.2} />
      </mesh>
      
      {/* Particles/Dust around the core */}
      <points>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position" 
            count={100} 
            array={new Float32Array(300).map(() => (Math.random() - 0.5) * 10)} 
            itemSize={3} 
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#ff0000" transparent opacity={0.5} />
      </points>
    </group>
  );
}
