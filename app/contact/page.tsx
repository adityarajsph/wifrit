"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { TRANSITION_EASE } from "@/lib/utils";

export default function ContactPage() {
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
              Contact
            </span>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-ink-950 tracking-tight leading-tight mb-4">
              Let&apos;s Build What&apos;s Next
            </h1>
            <p className="text-slate2 text-base sm:text-lg max-w-xl mx-auto">
              Have a project, idea, or challenge? Talk to our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Information & Interactive Form */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-24 grid lg:grid-cols-5 gap-12 items-start">
        {/* Left Column: Direct Info */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: TRANSITION_EASE }}
          className="lg:col-span-2 space-y-7"
        >
          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand shadow-sm">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm text-ink-950 mb-0.5">Email</p>
              <a
                href="mailto:hello@wifrit.com"
                className="text-sm text-slate2 hover:text-brand transition-colors"
              >
                hello@wifrit.com
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm text-ink-950 mb-0.5">Phone</p>
              <a
                href="tel:+14155550198"
                className="text-sm text-slate2 hover:text-brand transition-colors"
              >
                +1 (415) 555-0198
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm text-ink-950 mb-0.5">Address</p>
              <p className="text-sm text-slate2 leading-relaxed">
                548 Market St, San Francisco, CA 94104
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm text-ink-950 mb-0.5">Working Hours</p>
              <p className="text-sm text-slate2">Mon – Fri, 9:00 AM – 6:00 PM PT</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border2">
            <p className="text-xs font-semibold text-slate2 uppercase tracking-wider mb-3">
              Follow Our Work
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-border2 flex items-center justify-center text-slate2 hover:text-brand hover:bg-brand-50 hover:border-brand/40 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-xl border border-border2 flex items-center justify-center text-slate2 hover:text-brand hover:bg-brand-50 hover:border-brand/40 transition-all shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl border border-border2 flex items-center justify-center text-slate2 hover:text-brand hover:bg-brand-50 hover:border-brand/40 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: TRANSITION_EASE }}
          className="lg:col-span-3"
        >
          <ContactForm />
        </motion.div>
      </section>
    </>
  );
}
