
"use client";

import React from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { TRANSITION_EASE } from "@/lib/utils";

export default function PortfolioPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* PORTFOLIO HERO */}

      <section className="page-hero portfolio-hero relative pt-40 pb-16 grid-bg overflow-hidden">
        <div className="portfolio-hero-wash absolute inset-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: TRANSITION_EASE,
            }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 mb-6">
              Portfolio
            </span>

            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-ink-950 tracking-tight leading-tight">
              Our work{" "}
              <span className="text-brand">
                speaks
              </span>{" "}
              for itself
            </h1>

            <p className="text-slate2 text-base sm:text-lg mt-4 max-w-xl mx-auto">
              Explore our recent web, mobile, software, and cloud engineering
              projects delivered for fast-growing companies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="portfolio-featured-intro max-w-[1500px] mx-auto px-5 sm:px-8 pt-14 sm:pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: TRANSITION_EASE }}
          className="max-w-3xl"
        >
          <span className="text-brand text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase">
            Featured Work
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink-950 tracking-tight mt-2 leading-tight">
            Engineering Ideas Into Real Products.
          </h2>
          <p className="text-slate2 text-base sm:text-lg leading-relaxed mt-4 max-w-2xl">
            Explore how we turn complex business challenges into reliable digital products through thoughtful engineering and modern technology.
          </p>
        </motion.div>
      </section>

      <PortfolioGrid
        cascade
        showFilters={false}
        showHeader={false}
      />

      {/* CLOSING CTA */}

      <CTASection
        title="Ready to build your next breakthrough product?"
        description="Whether you need an MVP in 8 weeks or an enterprise modernization, let's talk through your goals."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
