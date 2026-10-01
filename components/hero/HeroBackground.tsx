"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* High-tech subtle dot-matrix grid with cross-browser radial mask */}
      <div
        className="absolute inset-0 grid-bg opacity-70"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 50% 30%, black 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />

      {/* Soft Vignette Overlay ensuring text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white" />

      {/* Hardware-accelerated soft gradient ambient glows (iOS WebKit safe) */}
      {!shouldReduceMotion ? (
        <>
          {/* Ambient Brand Orb (Top-Right) */}
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform" }}
            className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl"
          />

          {/* Ambient Cyan Accent (Center-Left) */}
          <motion.div
            animate={{
              x: [0, -15, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform" }}
            className="absolute top-1/4 left-1/12 w-80 h-80 rounded-full bg-sky-400/15 blur-3xl"
          />

          {/* Indigo Depth Glow */}
          <div className="absolute -top-10 left-1/3 w-[500px] h-[350px] rounded-full bg-indigo-500/10 blur-3xl" />
        </>
      ) : (
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-2xl" />
      )}

      {/* Subtle top horizontal glowing accent rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
    </div>
  );
}
