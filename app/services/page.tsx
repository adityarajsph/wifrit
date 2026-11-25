"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
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

const SERVICE_CATEGORIES = ["Development", "Design", "Digital Marketing"] as const;

function ServiceCard({ service }: { service: (typeof SERVICE_DETAILS)[number] }) {
  return (
    <article className="service-tile group flex h-full flex-col rounded-2xl border border-border2 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_-28px_rgba(37,99,235,.55)]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand">
        <Icon name={service.icon} className="h-5 w-5" />
      </div>
      <h4 className="font-display text-lg font-700 leading-snug text-ink-950">
        {service.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-slate2">{service.desc}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.tech.split(", ").map((tech) => (
          <span key={tech} className="rounded-full border border-brand-100 bg-brand-50/70 px-2.5 py-1 text-[11px] font-semibold text-brand">
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-4 rounded-xl border border-brand-100/70 bg-brand-50/50 p-3 text-xs leading-relaxed text-ink-950/80">
        {service.benefit}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand transition-colors hover:text-brand-700"
      >
        More Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
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
      <section className="page-hero services-hero relative pt-40 pb-20 grid-bg overflow-hidden">
        <div className="services-hero-wash absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: TRANSITION_EASE }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 mb-6">
              Services
            </span>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-7xl text-ink-950 tracking-tight leading-tight">
              Technology services designed <span className="text-brand">around your business</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Categorized compact service grid */}
      <section className="services-catalog mx-auto max-w-7xl space-y-14 px-5 py-14 sm:px-8 sm:py-16">
        {SERVICE_CATEGORIES.map((category) => {
          const services = SERVICE_DETAILS.filter((service) => service.category === category);
          return (
            <section key={category} aria-labelledby={`services-${category.toLowerCase().replaceAll(" ", "-")}`}>
              <div className="mb-6">
                <h3 id={`services-${category.toLowerCase().replaceAll(" ", "-")}`} className="font-display text-2xl font-700 tracking-tight text-ink-950 sm:text-3xl">
                  {category}
                </h3>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
              </div>
            </section>
          );
        })}
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
