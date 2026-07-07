'use client';

import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { useAppStore } from '@/store/useAppStore';

// Note: This component is rendered inside the Canvas (so it can use useScroll)
// But it uses Html from drei to project HTML onto the screen, OR we can just update a store
// and render HTML outside. Since Zustand is fast, we will update the store.

export default function ScrollManager() {
  const scroll = useScroll();
  const setCurrentSection = useAppStore((state) => state.setCurrentSection);
  const [lastSection, setLastSection] = useState(0);

  useFrame(() => {
    if (!scroll) return;
    
    // Calculate which section we are in based on scroll offset (0 to 1)
    // We have 10 pages total, so 10 sections
    const section = Math.floor(scroll.offset * 10);
    
    if (section !== lastSection) {
      setLastSection(section);
      setCurrentSection(section);
    }
  });

  return null;
}
