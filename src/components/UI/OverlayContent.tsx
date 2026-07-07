'use client';

import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function OverlayContent() {
  const currentSection = useAppStore((state) => state.currentSection);

  const sections = [
    {
      id: 0,
      title: "TECHFEST 2027",
      subtitle: "Enter the Future. Build the Impossible.",
      buttons: ["Explore", "Register", "Watch Trailer"]
    },
    {
      id: 1,
      title: "SYSTEM AWAKENING",
      subtitle: "The AI Core is online.",
      text: "About TechFest | Mission | Vision | Innovation"
    },
    {
      id: 2,
      title: "RESEARCH LAB",
      subtitle: "Pushing the boundaries of technology.",
      text: "AI | ML | Robotics | IoT | Quantum"
    },
    // Add up to 9 sections as per the plan
  ];

  const content = sections.find(s => s.id === currentSection) || sections[0];

  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center p-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={content.id}
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-center pointer-events-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {content.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide uppercase">
            {content.subtitle}
          </p>
          
          {content.text && (
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-8">
              {content.text}
            </p>
          )}

          {content.buttons && (
            <div className="flex gap-6 justify-center">
              {content.buttons.map((btn, i) => (
                <button 
                  key={btn}
                  className={`px-8 py-3 uppercase tracking-widest text-sm font-semibold transition-all duration-300 border ${
                    i === 0 
                      ? 'bg-[#ff0000] border-[#ff0000] text-black hover:bg-white hover:border-white shadow-[0_0_20px_rgba(255,0,0,0.5)]' 
                      : 'bg-transparent border-gray-700 hover:border-white hover:bg-white/5'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
