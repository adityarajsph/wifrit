"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { TRANSITION_EASE } from "@/lib/utils";

const CATEGORIES = ["All", "Web", "Mobile", "Software", "UI/UX", "FinTech", "E-commerce"];

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
  showHeader?: boolean;
}

export function PortfolioGrid({
  limit,
  showFilters = false,
  showHeader = true,
}: PortfolioGridProps) {
  const [selectedCat, setSelectedCat] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCat === "All") return true;
    return p.cat.toLowerCase() === selectedCat.toLowerCase();
  });

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="py-24 max-w-7xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      {showHeader && (
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: TRANSITION_EASE }}
            className="max-w-xl"
          >
            <span className="text-brand text-sm font-semibold tracking-wide">
              Selected Work
            </span>
            <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
              Projects That Moved the Numbers
            </h2>
          </motion.div>

          {limit && (
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: TRANSITION_EASE }}
            >
              <Link
                href="/portfolio"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-border2 bg-white text-ink-950 hover:bg-ink-950 hover:text-white transition-all inline-flex items-center gap-2 shadow-sm shrink-0"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </div>
      )}

      {/* Filter Tabs with Framer Motion layoutId */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-slate2 hover:text-ink-950 border border-border2 bg-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolio-tab"
                    className="absolute inset-0 bg-brand rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {displayProjects.map((p, index) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.06,
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
              className="border border-border2 rounded-2xl overflow-hidden bg-white flex flex-col justify-between transition-colors group"
            >
              <div>
                {/* Visual Header Banner */}
                <div
                  className={`h-48 bg-gradient-to-br ${p.color} relative flex items-end p-5 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  <span className="relative z-10 text-white/95 text-xs font-semibold bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {p.industry}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-brand mb-1.5 uppercase tracking-wide">
                    {p.cat}
                  </p>
                  <h3 className="font-display font-700 text-lg sm:text-xl text-ink-950 mb-2 leading-snug group-hover:text-brand transition-colors">
                    <Link href={`/portfolio/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p className="text-sm text-slate2 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <p className="text-xs text-ink-950/60 font-mono mb-4">
                    {p.tech}
                  </p>
                </div>
              </div>

              {/* Metric & Case Study Link */}
              <div className="px-6 pb-6 pt-0">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand bg-brand-50 rounded-lg px-3 py-2 mb-4">
                  <TrendingUp className="w-3.5 h-3.5 text-brand" />
                  <span>{p.result}</span>
                </div>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 group-hover:text-brand transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
