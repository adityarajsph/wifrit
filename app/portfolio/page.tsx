"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { TRANSITION_EASE } from "@/lib/utils";

export default function PortfolioPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* 1. Page Header */}
      <section className="relative pt-40 pb-16 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: TRANSITION_EASE }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 mb-6">
              Portfolio
            </span>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-ink-950 tracking-tight leading-tight">
              Our Work Speaks for Itself
            </h1>
            <p className="text-slate2 text-base sm:text-lg mt-4 max-w-xl mx-auto">
              Explore our recent web, mobile, software, and cloud engineering projects delivered for fast-growing companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Filterable Portfolio Grid with Framer Motion layoutId */}
      <PortfolioGrid showFilters={true} showHeader={false} />

      {/* 3. Closing CTA */}
      <CTASection
        title="Ready to build your next breakthrough product?"
        description="Whether you need an MVP in 8 weeks or an enterprise modernization, let's talk through your goals."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
