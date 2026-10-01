"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/data";
import { TRANSITION_EASE } from "@/lib/utils";

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 1200; // ms
    const steps = 40;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <p
      ref={ref}
      className="font-display font-800 text-4xl sm:text-5xl text-brand-100 tracking-tight"
    >
      {count}
      {suffix}
    </p>
  );
}

export function Stats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="noise-dark text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((s, index) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : index * 0.1,
              ease: TRANSITION_EASE,
            }}
            className="text-center lg:text-left"
          >
            <AnimatedNumber value={s.value} suffix={s.suffix} />
            <p className="text-white/60 text-sm sm:text-base mt-2 font-medium">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
