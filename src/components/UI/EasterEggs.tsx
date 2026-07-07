'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';

export default function EasterEggs() {
  const setEasterEggActive = useAppStore((state) => state.setEasterEggActive);

  useEffect(() => {
    let keyBuffer = '';
    const secretCode = 'TECHFEST2027';
    
    // Konami code: up, up, down, down, left, right, left, right, B, A
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // TechFest Code logic
      keyBuffer += e.key.toUpperCase();
      if (keyBuffer.length > secretCode.length) {
        keyBuffer = keyBuffer.slice(1);
      }
      
      if (keyBuffer === secretCode) {
        setEasterEggActive(true);
        alert('OVERCLOCK MODE ACTIVATED!');
      }

      // Konami Code logic
      if (e.key === konamiCode[konamiIndex] || e.key.toLowerCase() === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          alert('SECRET ROBOT BATTLE UNLOCKED!');
          konamiIndex = 0; // reset
        }
      } else {
        konamiIndex = 0; // reset if wrong key
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setEasterEggActive]);

  return null;
}
