"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROCESS } from "@/lib/data";
import { TRANSITION_EASE } from "@/lib/utils";

export function ProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-bg2 border-y border-border2">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: TRANSITION_EASE }}
          className="max-w-2xl mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-wide">
            Our Process
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
            How We Turn Ideas Into Digital Products
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {PROCESS.map((p, index) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: TRANSITION_EASE,
              }}
              className="relative pl-1 group"
            >
              <span className="num-mark text-4xl block mb-3 group-hover:text-brand transition-colors duration-300">
                {p.n}
              </span>
              <h3 className="font-display font-700 text-lg text-ink-950 mb-1.5 leading-snug">
                {p.t}
              </h3>
              <p className="text-sm text-slate2 leading-relaxed">
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
