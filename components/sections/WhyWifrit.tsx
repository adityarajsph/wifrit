"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WHY } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { TRANSITION_EASE } from "@/lib/utils";

export function WhyWifrit() {
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
          className="max-w-2xl mb-14"
        >
          <span className="text-brand text-sm font-semibold tracking-wide">
            Why WIFRIT
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
            A Technology Partner That Thinks Like an Owner
          </h2>
        </motion.div>

        {/* Why items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {WHY.map((w, index) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: TRANSITION_EASE,
              }}
              className="flex gap-4 group"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-white border border-border2 flex items-center justify-center text-brand shadow-sm group-hover:border-brand/40 group-hover:scale-105 transition-all duration-200">
                <Icon name={w.icon} className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h3 className="font-display font-700 text-base text-ink-950 mb-1.5 leading-snug">
                  {w.title}
                </h3>
                <p className="text-sm text-slate2 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
