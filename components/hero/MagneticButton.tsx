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
      className="relative inline-block p-1 select-none"
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
        className="relative group rounded-xl"
      >
        {/* Animated Gradient Glow Aura on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.05 : 0.95,
          }}
          transition={{ duration: 0.3, ease: TRANSITION_EASE }}
          className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 blur-md pointer-events-none"
        />

        {/* Animated Border Shimmer */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.9 : 0,
          }}
          transition={{ duration: 0.25 }}
          className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 pointer-events-none"
        />

        {/* Button Body */}
        <div
          className={cn(
            "relative px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-brand to-brand-700 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 select-none overflow-hidden",
            className
          )}
        >
          {/* Subtle glossy sheen sweep */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </div>
      </motion.div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {Content}
      </Link>
    );
  }

  return <button onClick={onClick}>{Content}</button>;
}
