import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Layers,
  Quote,
  TrendingUp,
} from "lucide-react";
import { CASE_STUDIES, getTechInfo, PROJECTS } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";

interface CaseStudyProps {
  params: { slug: string };
}
const PROJECT_PREVIEW_IMAGES: Record<string, string> = {
  edumiles: "/edumiles.png",
  "manpower-gateway": "/manpower.png",
  zenixu: "/zenixu.png",
  wifrit: "/wifrit.png",
  "wifrit-hrms": "/wifrit.png",
  "wifrit-lms": "/wifrit.png",
  "wifrit-erp": "/wifrit.png",
};
export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default function CaseStudyPage({ params }: CaseStudyProps) {
  const project = PROJECTS.find((item) => item.slug === params.slug);
  if (!project) notFound();
  const cs = CASE_STUDIES[project.slug];
  const techNames =
    project.techStack ??
    project.tech
      .replace(/Ã‚Â·|Â·/g, "·")
      .split("·")
      .map((item) => item.trim())
      .filter(Boolean);
  const related = PROJECTS.filter((item) => item.slug !== project.slug).slice(
    0,
    3,
  );
  return (
    <div className="case-study-page bg-[#f4f7ff]">
      <section className="case-study-hero relative h-auto !min-h-0 overflow-hidden !pt-28 !pb-8 text-white sm:!pt-32 sm:!pb-10">
        <div
          className={`hidden pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] bg-gradient-to-br ${project.color} opacity-20 blur-[120px]`}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-6 flex items-center gap-2 text-xs text-white/60 sm:text-sm">
            <Link
              href="/portfolio"
              className="flex items-center gap-1 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Portfolio
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate2">{project.cat}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="max-w-[200px] truncate text-white">
              {project.title}
            </span>
          </div>
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
              {project.cat}
            </span>
            {project.industry !== project.cat && (
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                {project.industry}
              </span>
            )}
          </div>
          <h1 className="case-study-title mb-6 break-words font-display !text-4xl font-800 !leading-tight tracking-tight sm:!text-5xl lg:!text-6xl">
            {project.title}
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {project.desc}
          </p>
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand">
              <TrendingUp className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Primary Result
              </p>
              <p className="text-base font-bold sm:text-lg">{project.result}</p>
            </div>
          </div>
        </div>
      </section>
      {cs && (
        <section className="relative z-10 mx-auto mt-8 w-full !max-w-7xl !px-5 sm:!px-8 lg:!px-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {[
              ["Client", cs.client],
              ["Timeline", cs.timeline],
              ["Platform", cs.platform],
              ["Team", cs.team],
            ].map(([label, value]) => (
              <div
                key={label}
                className="min-w-0 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate2">
                  {label}
                </p>
                <p className="mt-2 break-words font-display text-xl font-bold text-ink-950">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="mx-auto grid w-full !max-w-7xl grid-cols-1 items-start gap-8 !px-5 !py-10 sm:!px-8 sm:!py-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:!gap-12 lg:!px-10">
        <div className="min-w-0 space-y-12">
          {cs ? (
            <>
              <section>
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Overview
                </span>
                <h2 className="mt-2 font-display text-3xl font-800 text-ink-950 sm:text-4xl">
                  About the project
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-slate2 sm:text-lg">
                  {cs.overview.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {(project as typeof project & { image?: string }).image && (
                  <img
                    src={(project as typeof project & { image?: string }).image}
                    alt={`${project.title} preview`}
                    loading="eager"
                    className={`mt-8 aspect-[4/3] w-full rounded-2xl border border-blue-100 bg-gradient-to-br ${project.color} object-cover`}
                  />
                )}
              </section>
              <section className="border-t border-border2 py-10 sm:py-12">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  The challenge
                </span>
                <h2 className="mt-2 font-display text-3xl font-800 text-ink-950">
                  What needed to change
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate2">
                  {project.challenge || project.desc}
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {cs.challengePoints.map((p) => (
                    <div
                      key={p}
                      className="h-full min-w-0 break-words rounded-2xl border border-blue-100 bg-white p-4 text-sm leading-relaxed text-slate2"
                    >
                      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand" />
                      {p}
                    </div>
                  ))}
                </div>
              </section>
              <section className="border-t border-border2 py-10 sm:py-12">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  The solution
                </span>
                <h2 className="mt-2 font-display text-3xl font-800 text-ink-950">
                  How we approached it
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate2">
                  {project.solution || cs.overview[0]}
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {cs.features.map((f) => (
                    <div
                      key={f.title}
                      className="h-full min-w-0 break-words rounded-2xl border border-blue-100 bg-white p-5"
                    >
                      <CheckCircle2 className="h-5 w-5 text-brand" />
                      <h3 className="mt-3 font-display font-700 text-ink-950">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate2">
                        {f.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="border-t border-border2 py-10 sm:py-12">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Our process
                </span>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {cs.process.map((s, i) => (
                    <div
                      key={s.title}
                      className="flex h-full min-w-0 flex-col rounded-2xl border border-blue-100 bg-white p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="shrink-0 whitespace-nowrap rounded-full bg-brand-50 px-2 py-1 text-xs font-semibold text-brand">
                          {s.duration}
                        </span>
                      </div>
                      <h3 className="mt-4 font-medium text-ink-950">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate2">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="border-t border-border2 py-10 sm:py-12">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Technology in context
                </span>
                <div className="mt-6 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {techNames.map((name) => {
                    const info = getTechInfo(name);
                    return (
                      <article
                        key={name}
                        className="flex h-full min-w-0 flex-col break-words rounded-2xl border border-blue-100 bg-white p-5"
                      >
                        <h3 className="font-display text-lg font-700 text-ink-950">
                          {name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand">
                          {info?.category ?? "Technology"}
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-slate2">
                          <strong className="text-ink-950">
                            In this project:
                          </strong>{" "}
                          {cs.techUse[name] ??
                            info?.purpose ??
                            "Supports the project implementation."}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate2">
                          <strong className="text-ink-950">
                            Why we use it:
                          </strong>{" "}
                          {info?.whyWeUse ??
                            "Chosen to support a maintainable implementation."}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-slate2">
                          {(info?.benefits ?? []).slice(0, 2).map((b) => (
                            <li key={b} className="flex gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </article>
                    );
                  })}
                </div>
              </section>
              <section className="border-t border-border2 py-10 sm:py-12">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Results
                </span>
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="h-full min-w-0 break-words rounded-2xl border border-blue-100 bg-white p-5"
                    >
                      <TrendingUp className="h-5 w-5 text-brand" />
                      <p className="mt-4 font-display text-3xl font-bold text-brand">
                        {r.value}
                      </p>
                      <h3 className="mt-2 font-bold text-ink-950">{r.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate2">
                        {r.description}
                      </p>
                    </div>
                  ))}
                </div>
                {project.impact && (
                  <div className="mt-5 rounded-2xl border border-border2 bg-white p-6">
                    <h3 className="font-display font-700 text-ink-950">
                      Key outcomes
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {project.impact.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-slate2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
              {cs.testimonial && (
                <section className="border-t border-border2 py-10 sm:py-12">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <Quote className="h-6 w-6 text-brand" />
                    <blockquote className="mt-4 font-display text-xl text-ink-950">
                      “{cs.testimonial.quote}”
                    </blockquote>
                    <p className="mt-5 text-sm text-slate2">
                      {cs.testimonial.name} · {cs.testimonial.role}
                    </p>
                  </div>
                </section>
              )}
              <section className="border-t border-border2 py-10 sm:py-12">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Frequently asked questions
                </span>
                <div className="mt-6 w-full space-y-3">
                  {cs.faqs.map((f, i) => (
                    <details
                      key={f.q}
                      open={i === 0}
                      className="group rounded-xl border border-blue-100 bg-white px-5 py-4"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-700 text-ink-950 marker:hidden">
                        {f.q}
                        <ChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="pt-3 text-sm leading-relaxed text-slate2">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <section>
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                The challenge
              </span>
              <h2 className="mt-2 font-display text-3xl font-800 text-ink-950">
                Project overview
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate2">
                {project.challenge || project.desc}
              </p>
              {project.solution && (
                <p className="mt-4 text-lg text-slate2">{project.solution}</p>
              )}
              {project.impact && (
                <ul className="mt-6 space-y-3">
                  {project.impact.map((p) => (
                    <li key={p} className="flex gap-3 text-slate2">
                      <CheckCircle2 className="h-5 w-5 text-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}
        </div>
        <aside className="min-w-0 space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-border2 bg-white p-5">
            <div className="flex items-center gap-2 text-brand">
              <Layers className="h-5 w-5" />
              <h3 className="font-display text-lg font-700 text-ink-950">
                Tech stack
              </h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {techNames.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-xs font-semibold text-brand"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
          {cs && (
            <div className="border-t border-border2 pt-6">
              <h3 className="font-display text-lg font-700 text-ink-950">
                Services delivered
              </h3>
              <ul className="mt-4 space-y-3">
                {cs.services.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-slate2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="border-t border-border2 pt-6">
            <h3 className="font-display text-lg font-700 text-ink-950">
              Have a similar project?
            </h3>
            <p className="mt-2 text-sm text-slate2">
              We can architect and deliver a solution tailored to your goals.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white"
            >
              Start a Conversation
            </Link>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate2 hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>
        </aside>
      </section>
      <section className="mx-auto w-full !max-w-7xl !px-5 pt-12 pb-16 sm:!px-8 lg:!px-10">
        <h2 className="font-display text-2xl font-800 text-ink-950">
          More work
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => {
            const previewImage =
              PROJECT_PREVIEW_IMAGES[item.slug] ?? `/${item.slug}.svg`;
            const hasCustomImage = Boolean(PROJECT_PREVIEW_IMAGES[item.slug]);
            return (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group min-w-0 overflow-hidden rounded-2xl border border-blue-100 bg-white"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden ${hasCustomImage ? "bg-white" : `bg-gradient-to-br ${item.color}`}`}
                >
                  <img
                    src={previewImage}
                    alt={`${item.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {item.cat}
                  </p>
                  <h3 className="mt-2 break-words line-clamp-2 font-display font-700 text-ink-950 group-hover:text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-2 break-words line-clamp-2 text-sm text-slate2">
                    {item.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <CTASection
        title="Ready to engineer your next success story?"
        description="Schedule a technical discovery session with our architects today."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}
