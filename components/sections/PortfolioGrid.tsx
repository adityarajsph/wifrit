"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, PROJECT_CARD_DETAILS } from "@/lib/data";
import { TRANSITION_EASE } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  "All",
  "Web",
  "Mobile",
  "Software",
  "UI/UX",
  "FinTech",
  "E-commerce",
  "Travel",
  "Dynamic Website",
  "Software Delivery",
];
type Project = (typeof PROJECTS)[number];

function ProjectVisual({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const imageMap: Record<string, string> = {
    edumiles: "/edumiles.png",
    "manpower-gateway": "/manpower.png",
    zenixu: "/zenixu.png",
    wifrit: "/wifrit.png",
    "wifrit-lms": "/wifrit.png",
    "wifrit-erp": "/wifrit.png",
  };
  const websiteMap: Record<string, string> = {
    zenixu: "https://zenixu.com/",
    wifrit: "https://www.wifrit.com/",
    "wifrit-lms": "https://www.wifrit.com/",
    "wifrit-erp": "https://www.wifrit.com/",
    edumiles: "https://edumilestravels.com/",
    "manpower-gateway": "https://www.manpowergateway.com/",
  };
  const customImage = Boolean(imageMap[project.slug]);
  const imageSrc = imageMap[project.slug] ?? `/` + project.slug + `.svg`;
  const websiteUrl = websiteMap[project.slug];
  return (
    <div
      className={`relative overflow-hidden ${customImage ? "bg-white" : `bg-gradient-to-br ${project.color}`} flex items-end justify-center ${className}`}
    >
      {websiteUrl ? (
        <a href={websiteUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} website`} className="absolute inset-0 z-0">
          <Image src={imageSrc} alt={`${project.title} project preview`} fill sizes="(max-width: 767px) 100vw, 40vw" className={`object-contain ${customImage ? "p-0" : "p-4 sm:p-6"}`} onError={(event) => { event.currentTarget.style.display = "none"; }} />
        </a>
      ) : (
        <Image src={imageSrc} alt={`${project.title} project preview`} fill sizes="(max-width: 767px) 100vw, 40vw" className={`z-0 object-contain ${customImage ? "p-0" : "p-4 sm:p-6"}`} onError={(event) => { event.currentTarget.style.display = "none"; }} />
      )}
      <span className="absolute bottom-4 left-4 z-10 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white/95 backdrop-blur-md">
        {project.industry}
      </span>
    </div>
  );
}

function ProjectInfo({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const savedDetails = PROJECT_CARD_DETAILS[project.slug];
  const details = {
    challenge:
      project.challenge ??
      savedDetails?.challenge ??
      `The ${project.title} team needed a clearer and more dependable way to manage its core workflow.`,
    solution:
      project.solution ??
      savedDetails?.solution ??
      `We shaped the ${project.title} experience around real users.\nWe connected the product and engineering foundations needed to support it.`,
    impact: project.impact ??
      savedDetails?.impact ?? [
        project.result,
        "A more consistent experience for customers and internal teams",
      ],
  };
  const { challenge, solution, impact } = details;
  const hasDetails = Boolean(
    challenge || solution || (impact && impact.length),
  );
  const technologies =
    project.techStack ??
    project.tech
      .replace(/Â·/g, "·")
      .split("·")
      .map((item) => item.trim())
      .filter(Boolean);

  return (
    <div
      className={`flex min-w-0 break-words flex-col ${compact ? "flex-1 gap-3" : "gap-4"}`}
    >
      <div className="flex min-w-0 items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {project.cat}
        </p>
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-ink-950 transition-colors group-hover:text-brand"
        >
          View Case Study <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <h3
        className={`font-display font-bold leading-tight text-ink-950 transition-colors group-hover:text-brand ${compact ? "line-clamp-2 min-h-[3.5rem] text-xl" : "text-2xl lg:text-3xl"}`}
      >
        <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
      </h3>

      <p
        className={`max-w-xl break-words text-sm leading-relaxed text-slate2 ${compact ? "line-clamp-2 min-h-[2.75rem]" : "line-clamp-3 lg:text-base"}`}
      >
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 text-xs text-ink-950/65">
        {technologies
          .slice(0, compact ? 3 : technologies.length)
          .map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border2 bg-ink-50 px-2.5 py-1"
            >
              {technology}
            </span>
          ))}
      </div>

      <div
        className={`flex w-full min-w-0 items-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold leading-snug text-brand ${compact ? "mt-auto" : ""}`}
      >
        <TrendingUp className="h-4 w-4 shrink-0" />
        <span className="break-words">{project.result}</span>
      </div>

      {!compact && hasDetails && (
        <div className="grid min-w-0 gap-4 md:grid-cols-3">
          {challenge && (
            <div className="portfolio-card-detail min-w-0">
              <p className="portfolio-card-detail-label">Challenge</p>
              <p className="flex gap-2 break-words text-sm leading-relaxed text-slate2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{challenge}</span>
              </p>
            </div>
          )}
          {solution && solution.length > 0 && (
            <div className="portfolio-card-detail min-w-0">
              <p className="portfolio-card-detail-label">Solution</p>
              <div className="space-y-2 text-sm leading-relaxed text-slate2">
                {(Array.isArray(solution) ? solution : [solution]).map(
                  (point: string, index: number) => (
                    <p key={index} className="flex gap-2 break-words">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{point}</span>
                    </p>
                  ),
                )}
              </div>
            </div>
          )}
          {impact && impact.length > 0 && (
            <div className="portfolio-card-detail min-w-0">
              <p className="portfolio-card-detail-label">Impact</p>
              <ul className="space-y-1.5 text-sm leading-relaxed text-slate2">
                {impact.slice(0, 2).map((point) => (
                  <li key={point} className="flex gap-2 break-words">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  animated = false,
  reverse = false,
}: {
  project: Project;
  animated?: boolean;
  reverse?: boolean;
}) {
  return (
    <article
      className={`${animated ? "portfolio-gsap-card" : "h-full transition hover:-translate-y-1 hover:shadow-lg"} ${animated && reverse ? "portfolio-gsap-card--reverse" : ""} group border border-border2 rounded-2xl overflow-hidden bg-white flex flex-col`}
    >
      {animated ? (
        <>
          <ProjectVisual project={project} className="portfolio-card-visual" />
          <div className="portfolio-card-info">
            <ProjectInfo project={project} />
          </div>
        </>
      ) : (
        <div className="flex h-full flex-col">
          <ProjectVisual project={project} className="aspect-[4/3] w-full" />
          <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
            <ProjectInfo project={project} compact />
          </div>
        </div>
      )}
    </article>
  );
}

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
  showHeader?: boolean;
  cascade?: boolean;
}

export function PortfolioGrid({
  limit,
  showFilters = false,
  showHeader = true,
  cascade = false,
}: PortfolioGridProps) {
  const [selectedCat, setSelectedCat] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const filteredProjects = PROJECTS.filter(
    (project) =>
      selectedCat === "All" ||
      project.cat.toLowerCase() === selectedCat.toLowerCase(),
  );
  const displayProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  useLayoutEffect(() => {
    if (!cascade || !sectionRef.current || reducedMotion) return;
    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = section.querySelector<HTMLElement>(
            ".portfolio-gsap-track",
          );
          const pin = section.querySelector<HTMLElement>(".portfolio-gsap-pin");
          const cards = gsap.utils.toArray<HTMLElement>(
            ".portfolio-gsap-card",
            section,
          );
          if (!track || !pin || cards.length === 0) return;
          gsap.set(cards, {
            position: "absolute",
            left: "50%",
            top: "50%",
            xPercent: -50,
            yPercent: -50,
            y: (index) => (index === 0 ? 0 : window.innerHeight),
            scale: (index) => (index === 0 ? 1 : 0.96),
            autoAlpha: 1,
            willChange: "transform",
          });
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: track,
              start: "top top",
              end: "bottom bottom",
              pin,
              pinSpacing: false,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
          cards.slice(1).forEach((card, index) => {
            const previous = cards[index];
            timeline
              .to(
                previous,
                { y: -24, scale: 0.94, duration: 0.35, ease: "power2.out" },
                index,
              )
              .to(
                card,
                { y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
                index,
              );
          });
          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh, { once: true });
          document.fonts?.ready.then(refresh);
          return () => window.removeEventListener("load", refresh);
        },
      );
      return () => media.revert();
    }, section);
    return () => ctx.revert();
  }, [cascade, reducedMotion, displayProjects.length, selectedCat]);

  return (
    <section
      ref={sectionRef}
      className={`portfolio-projects py-24 max-w-7xl mx-auto px-5 sm:px-8 ${cascade ? "portfolio-gsap-section" : ""}`}
    >
      {showHeader && (
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: TRANSITION_EASE }}
            className="max-w-xl"
          >
            <span className="text-brand text-sm font-semibold tracking-wide">
              Selected Work
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink-950 tracking-tight mt-2 leading-tight">
              Projects That Moved the Numbers
            </h2>
          </motion.div>
          {limit && (
            <Link
              href="/portfolio"
              className="hidden md:inline-flex px-5 py-2.5 rounded-lg text-sm font-semibold border border-border2 bg-white text-ink-950 hover:bg-ink-950 hover:text-white transition-all items-center gap-2 shadow-sm"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}

      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((category) => {
            const active = selectedCat === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCat(category)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold ${active ? "text-white bg-brand" : "text-slate2 border border-border2 bg-white hover:text-ink-950"}`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {cascade ? (
        <div
          className="portfolio-gsap-track"
          style={{ height: `${Math.max(1, displayProjects.length) * 100}vh` }}
        >
          <div className="portfolio-gsap-pin">
            {displayProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                animated
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      ) : (
        <motion.div
          layout
          className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      )}

      {limit && (
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border2 bg-white px-5 text-sm font-semibold text-ink-950 shadow-sm transition-all hover:bg-ink-950 hover:text-white"
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
