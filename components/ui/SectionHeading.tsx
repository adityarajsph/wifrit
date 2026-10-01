"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn, TRANSITION_EASE } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: TRANSITION_EASE }}
      className={cn(
        "mb-14",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className="text-brand-600 text-sm font-semibold tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate2 text-base sm:text-lg leading-relaxed mt-4">
          {description}
        </p>
      )}
    </motion.div>
  );
}
