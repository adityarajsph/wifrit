"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* 1. Precision Subtle Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)",
        }}
      />

      {/* 2. Soft Ambient Vignette for Maximum Contrast & Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white" />

      {/* 3. Refined Ambient Glow Orbs */}
      {!shouldReduceMotion ? (
        <>
          {/* Top-Right Soft Blue Bloom */}
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-32 right-0 sm:right-1/12 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] rounded-full bg-blue-500/[0.12] blur-[100px] sm:blur-[130px]"
          />

          {/* Top-Left Subtle Indigo Bloom */}
          <motion.div
            animate={{
              x: [0, -15, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -left-20 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full bg-indigo-500/[0.08] blur-[90px] sm:blur-[120px]"
          />

          {/* Center Light Accent */}
          <div className="absolute top-10 left-1/3 w-[300px] sm:w-[450px] h-[250px] sm:h-[350px] rounded-full bg-sky-400/[0.07] blur-[110px]" />
        </>
      ) : (
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.08] blur-[100px]" />
      )}

      {/* 4. Top Accent Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
}
