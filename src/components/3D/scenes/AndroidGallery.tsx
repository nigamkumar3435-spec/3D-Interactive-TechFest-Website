'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

export default function AndroidGallery() {
  const galleryRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // Subtle rotation or breathing effect for the gallery
  });

  return (
    <group ref={galleryRef} position={[0, -110, -350]}>
      {/* Pods */}
      {[-1, 0, 1].map((pos, i) => (
        <group key={i} position={[pos * 15, 0, 0]}>
          {/* Glass Cylinder Pod */}
          <mesh position={[0, 10, 0]}>
            <cylinderGeometry args={[4, 4, 20, 32]} />
            <meshPhysicalMaterial 
              color="#ffffff" 
              transmission={0.9} 
              opacity={1} 
              metalness={0.1} 
              roughness={0.1} 
              ior={1.5}
              thickness={0.5}
            />
          </mesh>
          
          {/* Base */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[4.5, 4.5, 1, 32]} />
            <meshStandardMaterial color="#222" metalness={0.8} />
          </mesh>

          {/* Glowing ring under pod */}
          <mesh position={[0, 0.6, 0]} rotation={[Math.PI/2, 0, 0]}>
            <ringGeometry args={[3.8, 4.2, 32]} />
            <meshBasicMaterial color="#ff0000" />
          </mesh>

          {/* Android Silhouette Placeholder (Since we don't have a complex GLTF) */}
          <mesh position={[0, 8, 0]}>
            <capsuleGeometry args={[1.5, 8, 16, 32]} />
            <meshStandardMaterial color="#111" metalness={1} roughness={0.3} emissive="#333" emissiveIntensity={0.5} />
          </mesh>

          {/* HTML Overlay for speaker info on hover (simulated) */}
          <Html transform distanceFactor={25} position={[0, 22, 0]} style={{ color: 'white', textAlign: 'center', background: 'rgba(0,0,0,0.8)', border: '1px solid #ff0000', padding: '10px' }}>
            <h3 style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>SPEAKER_{i+1}</h3>
            <p style={{ margin: 0, color: 'gray', fontSize: '10px' }}>AI Architect</p>
          </Html>
        </group>
      ))}
    </group>
  );
}
