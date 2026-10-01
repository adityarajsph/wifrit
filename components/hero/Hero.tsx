"use client";

import React, { useRef } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Single top-level mouse tracking values normalized between -1 and 1
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  // Smooth physics-based spring interpolation
  const mouseX = useSpring(rawMouseX, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    rawMouseX.set(Math.max(-1, Math.min(1, x)));
    rawMouseY.set(Math.max(-1, Math.min(1, y)));
  };

  const handleMouseLeave = () => {
    rawMouseX.set(0);
    rawMouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background with drifting gradient mesh and animated grid */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7">
            <HeroContent />
          </div>

          {/* Right Column: Interactive 3D Architecture Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual mouseX={mouseX} mouseY={mouseY} />
          </div>
        </div>
      </div>
    </section>
  );
}
