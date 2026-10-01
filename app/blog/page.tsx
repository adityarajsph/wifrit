"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Search, FileText, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { ARTICLES } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";
import { TRANSITION_EASE } from "@/lib/utils";

const BLOG_CATEGORIES = [
  "All",
  "Technology",
  "AI",
  "Web Development",
  "Mobile",
  "Cloud",
  "Business",
  "UI/UX",
];

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const regularArticles = ARTICLES.filter((a) => !a.featured);

  const filteredArticles = regularArticles
    .filter((a) => selectedCat === "All" || a.cat === selectedCat)
    .filter(
      (a) =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
              Blog
            </span>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-ink-950 tracking-tight leading-tight">
              Insights, Ideas &amp; Technology
            </h1>
            <p className="text-slate2 text-base sm:text-lg mt-4 max-w-xl mx-auto">
              Engineering paradigms, architecture decisions, and product strategies from our engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Article Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-14">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: TRANSITION_EASE }}
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  y: -4,
                  boxShadow: "0 20px 40px -18px rgba(15,23,42,0.18)",
                  borderColor: "#c7d6f5",
                }
          }
          className="border border-border2 rounded-3xl overflow-hidden bg-white grid md:grid-cols-2 shadow-sm transition-all group"
        >
          <div className="h-64 md:h-auto min-h-[300px] bg-gradient-to-br from-brand via-blue-600 to-indigo-600 relative p-8 flex flex-col justify-end">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            <div className="relative z-10">
              <span className="text-xs font-semibold text-white/95 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/25">
                {featuredArticle.cat} · Featured
              </span>
            </div>
          </div>

          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink-950 mb-3 leading-snug group-hover:text-brand transition-colors">
              <Link href={`/blog/${featuredArticle.slug}`}>
                {featuredArticle.title}
              </Link>
            </h2>
            <p className="text-slate2 text-sm sm:text-base leading-relaxed mb-6">
              {featuredArticle.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate2 pb-6 border-b border-border2/60">
              <span className="font-semibold text-ink-950">{featuredArticle.author}</span>
              <span>·</span>
              <span>{featuredArticle.date}</span>
              <span>·</span>
              <span>{featuredArticle.read} read</span>
            </div>
            <div className="mt-6">
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-700 transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Search and Category Filters */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = selectedCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-slate2 hover:text-ink-950 border border-border2 bg-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="blog-tab"
                      className="absolute inset-0 bg-brand rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate2 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border2 text-sm text-ink-950 bg-white placeholder:text-slate2/60 focus:border-brand transition-colors"
            />
          </div>
        </div>

        {/* 4. Article Grid */}
        {filteredArticles.length > 0 ? (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.05,
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
                    {/* Visual header */}
                    <div className="h-40 bg-gradient-to-br from-blue-50 to-brand-50/60 border-b border-border2/60 flex items-center justify-center text-brand/40 group-hover:text-brand transition-colors">
                      <FileText className="w-10 h-10 stroke-[1.5]" />
                    </div>

                    <div className="p-6">
                      <span className="text-xs font-semibold text-brand bg-brand-50 px-2.5 py-1 rounded-full border border-brand-100">
                        {article.cat}
                      </span>
                      <h3 className="font-display font-700 text-lg sm:text-xl text-ink-950 mt-3 mb-2 leading-snug group-hover:text-brand transition-colors">
                        <Link href={`/blog/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-slate2 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0 border-t border-border2/50 mt-auto">
                    <div className="flex items-center justify-between text-xs text-slate2 pt-4">
                      <span>{article.author} · {article.date}</span>
                      <span className="font-medium">{article.read} read</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty state */
          <div className="text-center py-20 bg-bg2 rounded-2xl border border-dashed border-border2">
            <p className="text-slate2 text-base font-medium">
              No articles match your search query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCat("All");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-white border border-border2 text-xs font-semibold text-brand hover:border-brand"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* 5. Pagination Controls */}
        <div className="flex items-center justify-center gap-2 mt-16">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-xl text-sm font-semibold transition-colors ${
                currentPage === page
                  ? "bg-brand text-white shadow-sm"
                  : "border border-border2 text-ink-950 hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </section>

      {/* 6. Closing CTA */}
      <CTASection
        title="Stay ahead of modern engineering curves."
        description="We share battle-tested insights every month. No spam, unsubscribe anytime."
        buttonText="Subscribe to Newsletter"
        buttonHref="#newsletter"
      />
    </>
  );
}
