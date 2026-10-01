"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn, TRANSITION_EASE } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  onClick,
}: CardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      onClick={onClick}
      whileHover={
        hoverEffect && !shouldReduceMotion
          ? {
              y: -6,
              boxShadow: "0 20px 40px -18px rgba(15,23,42,0.18)",
              borderColor: "#c7d6f5",
            }
          : undefined
      }
      transition={{ duration: 0.35, ease: TRANSITION_EASE }}
      className={cn(
        "border border-border2 rounded-2xl bg-white transition-colors",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
