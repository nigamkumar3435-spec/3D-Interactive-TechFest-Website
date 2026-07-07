'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DataVault() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const count = 50;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push([
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      ]);
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      for (let i = 0; i < count; i++) {
        dummy.position.set(positions[i][0], positions[i][1] + Math.sin(time + i) * 2, positions[i][2]);
        dummy.rotation.x = time * 0.5 + i;
        dummy.rotation.y = time * 0.2 + i;
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group position={[0, -140, -450]}>
      {/* Vault Structure */}
      <mesh>
        <boxGeometry args={[60, 60, 60]} />
        <meshStandardMaterial color="#050505" metalness={1} roughness={0.5} side={THREE.BackSide} />
      </mesh>
      
      {/* Sponsor Cubes */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} emissive="#ff0000" emissiveIntensity={0.2} />
      </instancedMesh>
    </group>
  );
}
