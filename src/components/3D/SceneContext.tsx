'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, ReactNode } from 'react';
import { ScrollControls, Stars, Sparkles } from '@react-three/drei';
import PostProcessingEffects from './PostProcessingEffects';
import CameraRig from './CameraRig';

interface SceneContextProps {
  children: ReactNode;
}

export default function SceneContext({ children }: SceneContextProps) {
  return (
    <div className="fixed inset-0 w-full h-screen z-0 bg-[#050505]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#050505']} />
        
        {/* Global Lights */}
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize={[2048, 2048]} 
        />

        {/* Dynamic Background that camera flies through */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Magical floating particles across the whole tunnel */}
        <Sparkles count={1000} scale={[50, 50, 200]} size={2} speed={0.4} opacity={0.2} color="#00F0FF" position={[0, 0, -70]} />

        {/* 3D Content & Scroll controls */}
        <ScrollControls pages={10} damping={0.25} maxSpeed={0.5}>
          <Suspense fallback={null}>
            {children}
          </Suspense>
          <CameraRig />
        </ScrollControls>

        {/* Post Processing */}
        <PostProcessingEffects />
      </Canvas>
    </div>
  );
}
