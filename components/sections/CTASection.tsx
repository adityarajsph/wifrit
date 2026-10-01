"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TRANSITION_EASE } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title = "Have an idea? Let's build it together.",
  description = "Tell us what you're building and we'll help turn your idea into a scalable digital product.",
  buttonText = "Let's Talk",
  buttonHref = "/contact",
}: CTASectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: TRANSITION_EASE }}
        className="noise-dark rounded-3xl px-8 sm:px-16 py-16 sm:py-20 text-center text-white relative overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Ambient background glow orb */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand/20 blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-5 leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
              {description}
            </p>
          )}

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: TRANSITION_EASE }}
            className="inline-block"
          >
            <Link
              href={buttonHref}
              className="px-8 py-4 rounded-xl font-semibold text-sm sm:text-base bg-brand hover:bg-brand-700 text-white shadow-[0_10px_25px_-5px_rgba(37,99,235,0.6)] transition-all inline-flex items-center gap-2"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
