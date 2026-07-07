'use client';

import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { useAppStore } from '@/store/useAppStore';

export default function AudioManager() {
  const isAudioMuted = useAppStore((state) => state.isAudioMuted);
  const ambientHumRef = useRef<Howl | null>(null);

  useEffect(() => {
    // We synthesize sounds using Howler for this demo or load a placeholder
    // Using simple synthetic tones or silent files for placeholder
    ambientHumRef.current = new Howl({
      src: ['data:audio/mp3;base64,//OExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'], // Silent placeholder
      loop: true,
      volume: 0.2,
      html5: true, // Force HTML5 for larger files/streams
    });

    return () => {
      if (ambientHumRef.current) {
        ambientHumRef.current.unload();
      }
    };
  }, []);

  useEffect(() => {
    if (ambientHumRef.current) {
      if (isAudioMuted) {
        ambientHumRef.current.pause();
      } else {
        if (!ambientHumRef.current.playing()) {
          ambientHumRef.current.play();
        }
      }
    }
  }, [isAudioMuted]);

  return null;
}
