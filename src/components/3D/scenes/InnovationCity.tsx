'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function InnovationCity() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate random building positions and heights
  const buildings = useMemo(() => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        position: [
          (Math.random() - 0.5) * 60,
          0,
          (Math.random() - 0.5) * 60 - 20
        ],
        scale: [
          Math.random() * 2 + 1,
          Math.random() * 15 + 5,
          Math.random() * 2 + 1
        ]
      });
    }
    return data;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Subtle hovering or glowing effect could be applied here
    }
  });

  return (
    <group ref={groupRef} position={[0, -50, -150]}> {/* Positioned even deeper */}
      
      {/* Grid Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#050505" roughness={0.1} metalness={1} />
        <gridHelper args={[200, 100, '#ff0000', '#222']} position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </mesh>

      {/* City Buildings (Instanced representation visually, or map for simplicity here) */}
      {buildings.map((b, i) => (
        <group key={i} position={[b.position[0], b.scale[1] / 2, b.position[2]]}>
          <mesh>
            <boxGeometry args={[b.scale[0], b.scale[1], b.scale[2]]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Edge highlights */}
          <lineSegments>
            <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(b.scale[0], b.scale[1], b.scale[2])]} />
            <lineBasicMaterial attach="material" color="#ff0000" transparent opacity={0.3} />
          </lineSegments>
        </group>
      ))}

      {/* Central Event Tower */}
      <group position={[0, 20, 0]}>
        <mesh>
          <cylinderGeometry args={[4, 5, 40, 32]} />
          <meshStandardMaterial color="#111" emissive="#550000" metalness={1} />
        </mesh>
      </group>
    </group>
  );
}
