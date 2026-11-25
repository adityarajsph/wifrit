import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyWifrit } from "@/components/sections/WhyWifrit";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { WHY, ARTICLES } from "@/lib/data";

function WhyWifritPanel() {
  return (
    <section className="home-why relative overflow-hidden rounded-[2rem] bg-brand text-white">
      <div className="home-stripe" aria-hidden="true" />
      <div className="relative z-10 grid gap-12 p-6 sm:p-10 lg:grid-cols-2 lg:items-end lg:p-14">
        <div>
          <span className="text-sm font-semibold text-white/75">Why WIFRIT</span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-800 leading-tight tracking-tight sm:text-4xl">
            A technology partner that takes ownership beyond the handoff.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            {WHY[0].desc} We connect business goals with sound engineering decisions and build systems that can be maintained and extended after launch.
          </p>
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white hover:bg-black">
            How we work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { value: "10+", label: "Projects delivered" },
            { value: "5+", label: "Technology domains" },
            { value: "20+", label: "Professionals and specialists" },
            { value: "100%", label: "Commitment to delivery" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 sm:p-6">
              <p className="font-display text-3xl font-800 tracking-tight sm:text-4xl">{item.value}</p>
              <p className="mt-2 text-xs text-white/75 sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="mb-8 max-w-2xl">
        <span className="text-sm font-semibold text-brand">Ideas &amp; insights</span>
        <h2 className="mt-2 font-display text-3xl font-800 tracking-tight text-ink-950 sm:text-4xl">Engineering thinking, without the noise.</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate2">Practical perspectives on product development, architecture and technology operations.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {ARTICLES.slice(0, 3).map((article, index) => (
          <article key={article.slug} className="group">
            <Link href={`/blog/${article.slug}`} className="block">
              <div className={`insight-art insight-art-${index + 1} relative h-36 overflow-hidden rounded-2xl sm:h-44`} aria-hidden="true">
                <span />
              </div>
              <p className="mt-4 text-xs font-semibold text-brand">{article.cat} · {article.read} read</p>
              <h3 className="mt-1 font-display text-lg font-700 leading-snug text-ink-950 group-hover:text-brand">{article.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate2">{article.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <TrustMarquee />
      <ServicesPreview />
      <WhyWifrit />
      <div className="mx-auto max-w-7xl px-2 sm:px-8"><WhyWifritPanel /></div>
      <ProcessSection />
      <PortfolioGrid limit={3} showFilters={false} showHeader />
      <TestimonialsSection />
      <InsightsPreview />
      <CTASection title="Have an idea? Let’s build it together." description="Tell us what you're building and we'll help turn your idea into a scalable digital product." buttonText="Let’s talk" buttonHref="/contact" />
    </div>
  );
}
