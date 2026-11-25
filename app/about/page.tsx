"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Crosshair, Telescope } from "lucide-react";
import { ABOUT_CONTENT, VALUES, TECH } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/sections/CTASection";
import { TRANSITION_EASE } from "@/lib/utils";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* 1. Page Header */}
      <section className="page-hero about-hero relative pt-40 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: TRANSITION_EASE }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 mb-6">
              {ABOUT_CONTENT.eyebrow}
            </span>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-7xl text-ink-950 tracking-tight leading-tight">
              {ABOUT_CONTENT.headlineStart} <br className="hidden md:block" />
              <span className="text-brand">{ABOUT_CONTENT.headlineAccent}</span> {ABOUT_CONTENT.headlineEnd}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story (2-column layout) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: TRANSITION_EASE }}
        >
          <span className="text-brand text-sm font-semibold tracking-wide">
            {ABOUT_CONTENT.storyEyebrow}
          </span>
          <h2 className="max-w-2xl break-words font-display font-800 text-2xl leading-tight tracking-tight text-ink-950 sm:text-3xl lg:text-4xl mt-2 mb-5">
            {ABOUT_CONTENT.storyTitle}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: TRANSITION_EASE }}
          className="about-story-copy space-y-4 text-slate2 leading-relaxed text-base sm:text-lg"
        >
          {ABOUT_CONTENT.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </motion.div>
      </section>

      {/* 3. Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 grid sm:grid-cols-2 gap-6">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: TRANSITION_EASE }}
          className="about-purpose-card border border-border2 rounded-[2rem] p-8 sm:p-10 bg-white hover:border-brand/30 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand mb-6">
            <Crosshair className="w-6 h-6" />
          </div>
          <h3 className="font-display font-700 text-2xl text-ink-950 mb-3">
            Our Mission
          </h3>
          <p className="text-slate2 leading-relaxed text-base">
            {ABOUT_CONTENT.mission}
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: TRANSITION_EASE }}
          className="about-purpose-card border border-border2 rounded-[2rem] p-8 sm:p-10 bg-white hover:border-brand/30 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand mb-6">
            <Telescope className="w-6 h-6" />
          </div>
          <h3 className="font-display font-700 text-2xl text-ink-950 mb-3">
            Our Vision
          </h3>
          <p className="text-slate2 leading-relaxed text-base">
            {ABOUT_CONTENT.vision}
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
              {ABOUT_CONTENT.valuesEyebrow}
            </span>
            <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
              {ABOUT_CONTENT.valuesTitle}
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
      <section className="about-tools max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: TRANSITION_EASE }}
          className="max-w-2xl mb-12"
        >
          <span className="text-brand text-sm font-semibold tracking-wide">
            {ABOUT_CONTENT.toolsEyebrow}
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
            {ABOUT_CONTENT.toolsTitle}
          </h2>
        </motion.div>

        <div className="about-tools-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
              <ul className="about-tech-list">
                {items.map((t) => (
                  <li
                    key={t}
                    className="text-sm text-ink-950/80 font-medium"
                  >
                    {t}
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
