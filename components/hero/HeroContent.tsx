"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight, Star, ShieldCheck, Zap, Layers } from "lucide-react";
import { TRANSITION_EASE } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";

export function HeroContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-start text-left max-w-xl lg:max-w-2xl">
      {/* Eyebrow Badge with pulsing status LED */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: TRANSITION_EASE }}
        className="inline-flex items-center gap-2.5 text-xs font-semibold text-brand-600 bg-brand-50/90 border border-brand-200/80 rounded-full px-4 py-1.5 mb-6 shadow-sm backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <Sparkles className="w-3.5 h-3.5 text-brand" />
        <span className="font-semibold text-slate-700">
          Available for Q2/Q3 Projects
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-brand font-bold">WIFRIT Tech</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: TRANSITION_EASE }}
        className="font-display font-800 text-[2.75rem] sm:text-6xl lg:text-[4rem] leading-[1.08] tracking-tight mb-6 text-ink-950"
      >
        Engineering{" "}
        <span className="bg-gradient-to-r from-brand via-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block">
          Digital Products
        </span>{" "}
        That Move Markets.
      </motion.h1>

      {/* Subheadline paragraph */}
      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: shouldReduceMotion ? 0 : 0.25,
          ease: TRANSITION_EASE,
        }}
        className="text-lg sm:text-xl text-slate2 leading-relaxed mb-8 max-w-xl"
      >
        WIFRIT designs and builds scalable web applications, mobile platforms,
        and enterprise cloud systems. We turn ambitious technical challenges into
        flawless digital experiences.
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: shouldReduceMotion ? 0 : 0.4,
          ease: TRANSITION_EASE,
        }}
        className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10 w-full sm:w-auto"
      >
        {/* Primary CTA */}
        <MagneticButton href="/contact">
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </MagneticButton>

        {/* Secondary CTA */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: TRANSITION_EASE }}
        >
          <Link
            href="/portfolio"
            className="group px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base border border-border2 bg-white text-ink-950 hover:bg-ink-950 hover:text-white hover:border-ink-950 shadow-sm transition-all duration-200 inline-flex items-center gap-2 active:bg-ink-900"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Trust & Capability Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: shouldReduceMotion ? 0 : 0.55,
        }}
        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-5 border-t border-border2/80 w-full"
      >
        {/* Rating and Social Proof */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2 overflow-hidden">
            <div className="h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-blue-600 to-indigo-600 text-white text-[11px] font-bold flex items-center justify-center">
              AV
            </div>
            <div className="h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-sky-500 to-cyan-400 text-white text-[11px] font-bold flex items-center justify-center">
              JP
            </div>
            <div className="h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-indigo-500 to-purple-600 text-white text-[11px] font-bold flex items-center justify-center">
              SR
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-slate2 mt-0.5">
              <span className="text-ink-950 font-bold">10+ Enterprise</span> &amp; Startup Deployments
            </p>
          </div>
        </div>

        {/* Feature Badges Divider */}
        <div className="hidden sm:block h-6 w-px bg-slate-200" />

        {/* Key Feature Highlights */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate2">
          <span className="inline-flex items-center gap-1.5 text-ink-950">
            <Zap className="w-3.5 h-3.5 text-brand" />
            <span>99.98% SLA</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-ink-950">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>SOC-2 Ready</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-ink-950">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>Cloud-Native</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
