"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TRUST_CLIENTS } from "@/lib/data";

export function TrustMarquee() {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items 4 times to ensure seamless infinite looping without gaps
  const marqueeItems = [...TRUST_CLIENTS, ...TRUST_CLIENTS, ...TRUST_CLIENTS, ...TRUST_CLIENTS];

  return (
    <section className="py-14 border-y border-border2 bg-bg2 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-6">
        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate2">
          Trusted by businesses to build what&apos;s next
        </p>
      </div>

      <div className="relative w-full overflow-hidden marquee-mask">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex gap-14 sm:gap-20 items-center w-max py-2"
        >
          {marqueeItems.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="group flex items-center gap-2 cursor-default"
            >
              <span className="font-display font-800 text-lg sm:text-xl tracking-wider text-ink-950/40 group-hover:text-brand transition-colors whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
