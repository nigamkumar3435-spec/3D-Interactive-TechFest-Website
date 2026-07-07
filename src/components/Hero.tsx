"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VideoCyborg from "./VideoCyborg";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;
      containerRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-bg-primary z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
          ref={containerRef}
        >
          <div className="space-y-2">
            <h2 className="text-accent-cyan font-semibold tracking-wider uppercase text-sm md:text-base">
              Techfest, IIT Bombay
            </h2>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              College Ambassador
              <br />
              <span className="text-gradient">Program</span>
            </h1>
          </div>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-lg leading-relaxed">
            Represent Asia's Largest Science & Technology Festival on your campus. Build leadership, expand your network, and earn official rewards.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://ca.techfest.org/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-text-primary text-bg-primary px-8 py-4 rounded-full font-semibold hover:bg-accent-cyan transition-colors duration-300 transform hover:scale-105 active:scale-95"
            >
              Apply Now
            </a>
            <a 
              href="#about"
              className="px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/5 transition-colors duration-300 backdrop-blur-md"
            >
              Explore Program
            </a>
          </div>
        </motion.div>

        {/* 3D Cyborg Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] w-full hidden lg:flex justify-center items-center"
        >
          <div className="relative w-[340px] h-[600px] glass-panel rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] border border-accent-cyan/20">
            <VideoCyborg />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-secondary text-sm font-medium tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-accent-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
}
