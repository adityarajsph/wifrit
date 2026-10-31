"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn, TRANSITION_EASE } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  href = "/contact",
  className,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Dampened offset (max ~10-12px)
    const deltaX = (e.clientX - centerX) * 0.32;
    const deltaY = (e.clientY - centerY) * 0.32;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    setIsHovered(true);
  };

  const Content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative block sm:inline-block select-none w-full sm:w-auto"
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: position.x,
                y: position.y,
              }
        }
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          mass: 0.5,
        }}
        whileTap={{ scale: 0.97 }}
        className="relative group rounded-xl w-full sm:w-auto"
      >
        {/* Animated Gradient Glow Aura on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0.25,
            scale: isHovered ? 1.04 : 0.98,
          }}
          transition={{ duration: 0.3, ease: TRANSITION_EASE }}
          className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 blur-md pointer-events-none"
        />

        {/* Button Body */}
        <div
          className={cn(
            "relative px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-brand via-blue-600 to-brand-700 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 select-none overflow-hidden border border-blue-400/30 w-full sm:w-auto",
            className
          )}
        >
          {/* Subtle glossy sheen sweep */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        </div>
      </motion.div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="w-full sm:w-auto block sm:inline-block">
        {Content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="w-full sm:w-auto block sm:inline-block">
      {Content}
    </button>
  );
}
