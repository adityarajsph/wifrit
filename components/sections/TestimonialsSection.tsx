"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { TRANSITION_EASE } from "@/lib/utils";

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 max-w-7xl mx-auto px-5 sm:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: TRANSITION_EASE }}
        className="max-w-2xl mb-14"
      >
        <span className="text-brand text-sm font-semibold tracking-wide">
          Client Feedback
        </span>
        <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
          What Our Partners Say
        </h2>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              delay: shouldReduceMotion ? 0 : index * 0.1,
              ease: TRANSITION_EASE,
            }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -6,
                    boxShadow: "0 20px 40px -18px rgba(15,23,42,0.18)",
                    borderColor: "#c7d6f5",
                  }
            }
            className="border border-border2 rounded-2xl p-7 bg-white flex flex-col justify-between transition-colors"
          >
            <div>
              <Quote className="w-7 h-7 text-brand-200 mb-4" />
              <p className="text-sm sm:text-[15px] leading-relaxed text-ink-950/85 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-border2/60">
              <div className="w-10 h-10 rounded-full bg-brand-50 text-brand font-display font-700 text-sm flex items-center justify-center shrink-0 border border-brand-100">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-sm text-ink-950">{t.name}</p>
                <p className="text-xs text-slate2">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
