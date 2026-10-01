"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Crosshair, Telescope, Dot } from "lucide-react";
import { VALUES, TECH } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/sections/CTASection";
import { TRANSITION_EASE } from "@/lib/utils";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* 1. Page Header */}
      <section className="relative pt-40 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: TRANSITION_EASE }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 mb-6">
              About WIFRIT
            </span>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-ink-950 tracking-tight leading-tight">
              Technology That Turns Vision Into Reality
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story (2-column layout) */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: TRANSITION_EASE }}
        >
          <span className="text-brand text-sm font-semibold tracking-wide">
            Our Story
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 mb-5 leading-tight">
            Started by engineers who were tired of rebuilding the same broken process.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: TRANSITION_EASE }}
          className="space-y-4 text-slate2 leading-relaxed text-base sm:text-lg"
        >
          <p>
            WIFRIT began as a small team of engineers and designers who kept
            encountering the same problem at different companies: software that
            technically worked, but never quite matched how the business actually
            ran.
          </p>
          <p>
            We built WIFRIT to close that gap. Every engagement starts with
            understanding the workflow before touching a design tool or a line
            of code, because a well-built feature nobody needed is still a
            failed project.
          </p>
          <p>
            Today we work across healthcare, fintech, logistics, travel and
            education, building software, web, mobile and cloud products for
            teams that need a partner who ships and stays.
          </p>
        </motion.div>
      </section>

      {/* 3. Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 grid sm:grid-cols-2 gap-6">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: TRANSITION_EASE }}
          className="border border-border2 rounded-2xl p-8 sm:p-10 bg-bg2 hover:border-brand/30 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand mb-6">
            <Crosshair className="w-6 h-6" />
          </div>
          <h3 className="font-display font-700 text-2xl text-ink-950 mb-3">
            Our Mission
          </h3>
          <p className="text-slate2 leading-relaxed text-base">
            Use technology to simplify complex business challenges and create
            digital products that deliver measurable value.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: TRANSITION_EASE }}
          className="border border-border2 rounded-2xl p-8 sm:p-10 bg-bg2 hover:border-brand/30 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand mb-6">
            <Telescope className="w-6 h-6" />
          </div>
          <h3 className="font-display font-700 text-2xl text-ink-950 mb-3">
            Our Vision
          </h3>
          <p className="text-slate2 leading-relaxed text-base">
            Become a trusted technology partner for businesses building the
            future.
          </p>
        </motion.div>
      </section>

      {/* 4. Core Values Grid */}
      <section className="py-20 bg-bg2 border-y border-border2">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: TRANSITION_EASE }}
            className="max-w-2xl mb-12"
          >
            <span className="text-brand text-sm font-semibold tracking-wide">
              What We Stand For
            </span>
            <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
              Core Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, index) => (
              <motion.div
                key={v.t}
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
                className="border border-border2 rounded-2xl p-7 bg-white transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand mb-5">
                  <Icon name={v.icon} className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-display font-700 text-lg text-ink-950 mb-2 leading-snug">
                  {v.t}
                </h3>
                <p className="text-sm text-slate2 leading-relaxed">
                  {v.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technology Expertise */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: TRANSITION_EASE }}
          className="max-w-2xl mb-12"
        >
          <span className="text-brand text-sm font-semibold tracking-wide">
            Technology Expertise
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
            Tools We Build With
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(TECH).map(([group, items], index) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: TRANSITION_EASE,
              }}
              className="border border-border2 rounded-2xl p-6 bg-white hover:border-brand/40 transition-colors"
            >
              <h3 className="font-display font-700 text-base text-brand mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {items.map((t) => (
                  <li
                    key={t}
                    className="text-sm text-ink-950/80 flex items-center gap-2 font-medium"
                  >
                    <Dot className="w-5 h-5 text-brand shrink-0 -ml-1" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Closing Dark CTA Banner */}
      <CTASection
        title="Let's Build Something Exceptional."
        description="Tell us what you're building and we'll help turn your idea into a scalable digital product."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
