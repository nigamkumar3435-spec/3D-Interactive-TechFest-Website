"use client";

import { useEffect, useState } from "react";

export default function VideoCyborg() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-full bg-bg-secondary flex items-center justify-center text-text-secondary p-8 text-center">
        <p>Interactive 3D Content Disabled (Reduced Motion)</p>
      </div>
    );
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover mix-blend-screen opacity-90"
      poster="/cyborg_new.png"
    >
      <source src="/3d_video_cyborg_theme.mp4" type="video/mp4" />
      {/* Fallback content */}
      <img src="/cyborg_new.png" alt="Cyborg Theme" className="w-full h-full object-cover" />
    </video>
  );
}
