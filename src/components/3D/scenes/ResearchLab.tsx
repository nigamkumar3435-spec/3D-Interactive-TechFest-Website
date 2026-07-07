'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

export default function ResearchLab() {
  const groupRef = useRef<THREE.Group>(null);
  const armsRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (armsRef.current) {
      armsRef.current.children.forEach((arm, i) => {
        arm.rotation.z = Math.sin(state.clock.elapsedTime * 2 + i) * 0.5;
        arm.rotation.y += delta * 0.2;
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, -20, -50]}> {/* Positioned deeper down/forward */}
      {/* Floating Screens */}
      {[...Array(5)].map((_, i) => (
        <group key={i} position={[(i - 2) * 4, 2 + Math.sin(i), -5 + Math.cos(i)]} rotation={[0, -0.2 * (i - 2), 0]}>
          <mesh>
            <planeGeometry args={[3, 2]} />
            <meshStandardMaterial color="#0ff" emissive="#0ff" emissiveIntensity={0.5} transparent opacity={0.2} side={THREE.DoubleSide} />
          </mesh>
          <Html transform distanceFactor={10} position={[0, 0, 0.1]} style={{ color: 'cyan', fontSize: '12px', border: '1px solid cyan', padding: '10px', background: 'rgba(0,255,255,0.1)' }}>
            <div>DATA_NODE_{i}</div>
            <div>STATUS: OPTIMAL</div>
          </Html>
        </group>
      ))}

      {/* Robotic Arms */}
      <group ref={armsRef} position={[0, -5, 0]}>
        {[...Array(3)].map((_, i) => (
          <group key={i} position={[(i - 1) * 6, 0, 0]}>
            {/* Base */}
            <mesh position={[0, 1, 0]}>
              <cylinderGeometry args={[1, 1.5, 2, 16]} />
              <meshStandardMaterial color="#222" metalness={0.8} />
            </mesh>
            {/* Arm Segment */}
            <mesh position={[0, 4, 0]}>
              <boxGeometry args={[0.5, 6, 0.5]} />
              <meshStandardMaterial color="#444" metalness={0.9} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}
