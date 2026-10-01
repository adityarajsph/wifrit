"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { TRANSITION_EASE } from "@/lib/utils";

export function ServicesPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 max-w-7xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: TRANSITION_EASE }}
        className="max-w-2xl mb-14"
      >
        <span className="text-brand text-sm font-semibold tracking-wide">
          What We Do
        </span>
        <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
          Technology Solutions Built for Growth
        </h2>
      </motion.div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, index) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              delay: shouldReduceMotion ? 0 : index * 0.08,
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
            className="group relative border border-border2 rounded-2xl p-7 bg-white transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand mb-5 group-hover:scale-105 transition-transform duration-200">
                <Icon name={s.icon} className="w-5 h-5 text-brand" />
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-700 text-lg text-ink-950 mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-slate2 leading-relaxed mb-5">
                {s.desc}
              </p>
            </div>

            {/* Tags & Action Link */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:text-brand-700 transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
