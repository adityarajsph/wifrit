import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, TrendingUp, Layers, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";

interface CaseStudyProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* 1. Hero Banner */}
      <section className="relative pt-36 pb-20 bg-ink-950 text-white overflow-hidden">
        {/* Ambient Gradient Glow */}
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${project.color} opacity-20 blur-[120px] pointer-events-none`} />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-6">
            <Link href="/portfolio" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/40">{project.cat}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium truncate max-w-[200px]">{project.title}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand text-white shadow-sm">
              {project.cat}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10">
              {project.industry}
            </span>
          </div>

          <h1 className="font-display font-800 text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
            {project.title}
          </h1>

          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl mb-8">
            {project.desc}
          </p>

          {/* Key Metric Banner */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider font-semibold">Primary Result</p>
              <p className="text-base sm:text-lg font-bold">{project.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Row */}
      {project.metrics && (
        <section className="bg-bg2 border-b border-border2 py-10">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-white rounded-xl p-5 border border-border2 shadow-sm">
                <p className="text-xs font-semibold text-slate2 uppercase tracking-wide mb-1">
                  {m.label}
                </p>
                <p className="font-display font-800 text-2xl sm:text-3xl text-brand">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Deep Dive Narrative: Challenge & Solution */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Main Narrative Column */}
          <div className="md:col-span-8 space-y-12">
            {/* The Challenge */}
            <div>
              <span className="text-brand text-xs font-bold uppercase tracking-wider">The Challenge</span>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink-950 tracking-tight mt-2 mb-4">
                Operational friction and legacy constraints
              </h2>
              <p className="text-slate2 leading-relaxed text-base sm:text-lg">
                {project.challenge || project.desc}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <span className="text-brand text-xs font-bold uppercase tracking-wider">The Engineering Solution</span>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink-950 tracking-tight mt-2 mb-4">
                Scalable architecture and end-to-end execution
              </h2>
              <p className="text-slate2 leading-relaxed text-base sm:text-lg mb-6">
                {project.solution || "We designed, prototyped, and engineered a modern, fault-tolerant stack from the ground up, guaranteeing real-time response times and strict security benchmarks."}
              </p>

              {/* Impact Bullet Points */}
              {project.impact && (
                <div className="bg-bg2 border border-border2 rounded-2xl p-6 sm:p-8 space-y-3.5">
                  <h3 className="font-display font-700 text-base text-ink-950 mb-2">Key Milestones Delivered</h3>
                  {project.impact.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm sm:text-base text-ink-950/85">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Column: Tech Stack & Specs */}
          <div className="md:col-span-4 space-y-8">
            <div className="border border-border2 rounded-2xl p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-brand">
                <Layers className="w-5 h-5" />
                <h3 className="font-display font-700 text-base text-ink-950">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.split("·").map((techItem) => (
                  <span
                    key={techItem.trim()}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-ink-950/80 border border-border2"
                  >
                    {techItem.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-border2 rounded-2xl p-6 bg-brand-50/50 border-brand-100">
              <h4 className="font-display font-700 text-sm text-ink-950 mb-2">Have a similar project?</h4>
              <p className="text-xs text-slate2 leading-relaxed mb-4">
                We can architect and deliver a high-performance solution tailored to your operational workflows.
              </p>
              <Link
                href="/contact"
                className="w-full text-center py-2.5 px-4 rounded-lg bg-brand text-white font-semibold text-xs block hover:bg-brand-700 transition-colors shadow-sm"
              >
                Start a Conversation
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate2 hover:text-brand transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <CTASection
        title="Ready to engineer your next success story?"
        description="Schedule a technical discovery session with our architects today."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
