'use client';

import { useAppStore } from '@/store/useAppStore';
import { Volume2, VolumeX } from 'lucide-react';

export default function HUD() {
  const { isAudioMuted, toggleAudio, currentSection } = useAppStore();

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-8 text-white">
      {/* Top Bar */}
      <header className="flex justify-between items-start">
        <div className="pointer-events-auto">
          <h1 className="text-2xl font-bold tracking-[0.2em] text-[#ff0000] drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
            TECHFEST<span className="text-white"> CA PROGRAM</span>
          </h1>
          <p className="text-xs uppercase tracking-widest mt-1 text-gray-400">Internship & Ambassadorship</p>
        </div>
        
        <button 
          onClick={toggleAudio}
          className="pointer-events-auto p-2 bg-black/50 border border-gray-800 rounded-full hover:bg-gray-900 transition-colors backdrop-blur-sm"
          aria-label={isAudioMuted ? "Unmute audio" : "Mute audio"}
        >
          {isAudioMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </header>

      {/* Bottom Bar */}
      <footer className="flex justify-between items-end">
        <div className="text-xs tracking-widest text-gray-500">
          SYSTEM_STATUS: <span className="text-cyan-400">ONLINE</span>
          <br />
          SECTOR: {currentSection.toString().padStart(2, '0')}
        </div>

        <div className="flex gap-2">
           <div className="w-1 h-8 bg-[#ff0000] animate-pulse"></div>
           <div className="w-1 h-8 bg-gray-800"></div>
           <div className="w-1 h-8 bg-gray-800"></div>
        </div>
      </footer>
    </div>
  );
}
