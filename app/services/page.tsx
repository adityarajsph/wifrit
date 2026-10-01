"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { SERVICE_DETAILS, FAQS } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/sections/CTASection";
import { TRANSITION_EASE } from "@/lib/utils";

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="border border-border2 rounded-xl overflow-hidden bg-white shadow-sm transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-4 font-semibold text-sm sm:text-base text-ink-950 hover:text-brand transition-colors"
        aria-expanded={isOpen}
      >
        <span>{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: TRANSITION_EASE }}
          className="shrink-0 text-slate2"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.3,
              ease: TRANSITION_EASE,
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm sm:text-[15px] text-slate2 leading-relaxed border-t border-border2/50 pt-3">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
              Services
            </span>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-ink-950 tracking-tight leading-tight">
              Technology Services Designed Around Your Business
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Full Service Breakdown List (8 services) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 space-y-6">
        {SERVICE_DETAILS.map((s, index) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              delay: shouldReduceMotion ? 0 : (index % 3) * 0.08,
              ease: TRANSITION_EASE,
            }}
            className={`grid lg:grid-cols-12 gap-8 border border-border2 rounded-2xl p-8 sm:p-10 ${
              index % 2 === 0 ? "bg-white" : "bg-bg2"
            } hover:border-brand/40 transition-colors shadow-sm`}
          >
            {/* Column 1: Core Service Overview */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand mb-5">
                  <Icon name={s.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-display font-700 text-2xl text-ink-950 mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-slate2 leading-relaxed text-sm sm:text-[15px]">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-700 transition-colors group"
                >
                  <span>Get a quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Column 2: Key Capabilities */}
            <div className="lg:col-span-4 lg:border-l lg:border-border2/60 lg:pl-8">
              <p className="text-xs font-semibold text-slate2 uppercase tracking-wider mb-4">
                Key Capabilities
              </p>
              <ul className="space-y-3">
                {s.caps.map((cap) => (
                  <li
                    key={cap}
                    className="text-sm sm:text-[15px] text-ink-950/85 flex items-start gap-2.5"
                  >
                    <span className="mt-1 w-4 h-4 rounded-full bg-brand-50 text-brand flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Technologies & Business Benefit */}
            <div className="lg:col-span-4 lg:border-l lg:border-border2/60 lg:pl-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-slate2 uppercase tracking-wider mb-2">
                  Technologies
                </p>
                <p className="text-sm font-medium text-ink-950 mb-6 bg-slate-100/70 rounded-lg p-2.5 border border-border2/60">
                  {s.tech}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate2 uppercase tracking-wider mb-2">
                  Business Benefit
                </p>
                <p className="text-sm text-ink-950/85 leading-relaxed bg-brand-50/50 rounded-lg p-3 border border-brand-100/60">
                  {s.benefit}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 3. Framer Motion FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: TRANSITION_EASE }}
          className="text-center mb-12"
        >
          <span className="text-brand text-sm font-semibold tracking-wide">
            FAQ
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openFaqIndex === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </section>

      {/* 4. Closing CTA */}
      <CTASection
        title="Need a custom architecture or technical audit?"
        description="Speak directly with our senior engineering team to scope your system requirements."
        buttonText="Book a Scoping Call"
        buttonHref="/contact"
      />
    </>
  );
}
