import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Layers,
  MousePointerClick,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { SERVICE_DETAILS, SERVICE_PAGE_CONTENT } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/sections/CTASection";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICE_DETAILS.flatMap((service) =>
    service.slug ? [{ slug: service.slug }] : [],
  );
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICE_DETAILS.find((item) => item.slug === params.slug);

  if (!service) notFound();

  const pageContent = service.slug
    ? SERVICE_PAGE_CONTENT[service.slug]
    : undefined;
  if (!pageContent) notFound();

  const technologies = pageContent.technologies;
  const isEcommerce = service.slug === "e-commerce-solutions";
  const outcomeCards = isEcommerce
    ? [
        {
          title: "Faster checkout",
          description:
            "Clear steps help shoppers complete purchases with less friction.",
          icon: MousePointerClick,
        },
        {
          title: "Fewer drop-offs",
          description:
            "Better product and checkout flows keep intent moving forward.",
          icon: CircleDollarSign,
        },
        {
          title: "Easy scaling",
          description:
            "A connected foundation makes new products and markets easier to add.",
          icon: TrendingUp,
        },
      ]
    : [];

  return (
    <div className="service-case-page bg-[#f4f7ff]">
      <section className="service-case-hero relative h-auto !min-h-0 overflow-x-hidden">
        <div className="service-case-hero-wash absolute inset-0 pointer-events-none" />
        <div
          className={`relative z-10 mx-auto grid w-full max-w-[1280px] min-w-0 grid-cols-1 items-center gap-10 px-6 pt-12 pb-10 min-[1025px]:gap-16 min-[1025px]:pt-28 min-[1025px]:pb-20 ${service.illustration ? "min-[1025px]:grid-cols-2" : ""}`}
        >
          <div
            className={`min-w-0 max-w-5xl ${service.illustration ? "min-[1025px]:col-start-1" : ""}`}
          >
            <Link
              href="/services"
              className="mb-4 mt-0 inline-flex items-center gap-2 text-sm font-semibold text-slate2 transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>
            <div className="mt-2 mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white">
                {service.category}
              </span>
              <span className="rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-xs font-semibold text-ink-950">
                WIFRIT Services
              </span>
            </div>
            <h1 className="mt-6 break-words font-display text-[40px] font-700 leading-tight tracking-[-.04em] text-ink-950 sm:text-5xl min-[1025px]:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate2 sm:text-xl">
              {service.desc}
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-brand-100 bg-white/90 px-5 py-3 shadow-sm sm:mt-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate2">
                  Business benefit
                </p>
                <p className="text-base font-bold text-ink-950">
                  {service.benefit}
                </p>
              </div>
            </div>
          </div>
          {service.illustration && (
            <div className="relative hidden min-w-0 w-full items-center justify-center min-[1025px]:col-start-2 min-[1025px]:row-start-1 min-[1025px]:justify-end min-[1025px]:flex">
              <Image
                src={service.illustration}
                alt={service.illustrationAlt ?? `${service.title} illustration`}
                width={500}
                height={500}
                priority
                sizes="(min-width: 1025px) 560px, 100vw"
                className="h-auto w-full max-w-[560px] object-contain"
              />
            </div>
          )}
        </div>
      </section>

      <section className="service-case-content mx-auto grid w-full max-w-[1280px] gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:py-28">
        <div className="space-y-14 lg:col-span-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Overview
            </span>
            <h2 className="mt-2 font-display text-3xl font-800 tracking-tight text-ink-950 sm:text-4xl">
              A focused approach to {service.title.toLowerCase()}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate2 sm:text-lg">
              {pageContent.overview}
            </p>
          </div>
          <div className="service-case-section border-y border-border2 py-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              What we deliver
            </span>
            <h3 className="mt-2 font-display text-2xl font-700 text-ink-950">
              Clear outputs from the first conversation to launch
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {pageContent.whatWeDeliver.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-relaxed text-ink-950/85"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="service-case-section border-y border-border2 py-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Key capabilities
            </span>
            <h3 className="mt-2 font-display text-2xl font-700 text-ink-950">
              What this service can help you move forward
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {pageContent.keyCapabilities.map((capability) => (
                <div key={capability.title}>
                  <h4 className="font-display text-base font-700 text-ink-950">
                    {capability.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate2">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Business value
            </span>
            <h3 className="mt-2 font-display text-2xl font-700 text-ink-950">
              Built around a clear, useful outcome
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate2 sm:text-lg">
              A well-structured commerce experience helps customers buy
              confidently while giving your team a clearer foundation to operate
              and grow.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {(outcomeCards.length
                ? outcomeCards
                : pageContent.goodFitForDetails
                    .slice(0, 3)
                    .map((item, index) => ({
                      ...item,
                      icon: [MousePointerClick, CircleDollarSign, TrendingUp][
                        index
                      ],
                    }))
              ).map(({ title, description, icon: OutcomeIcon }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-blue-100 bg-white p-5"
                >
                  <OutcomeIcon className="h-5 w-5 text-brand" />
                  <h4 className="mt-4 font-display text-base font-700 text-ink-950">
                    {title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate2">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="service-case-section border-t border-border2 pt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Our process
            </span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pageContent.process.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-blue-100 bg-white p-5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h4 className="mt-4 font-medium text-ink-950">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="service-case-section border-t border-border2 pt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Technology in context
            </span>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {pageContent.technologyStackDetails.map((item) => (
                <article
                  key={item.name}
                  className="flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-display text-lg font-700 text-ink-950">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate2">
                    <strong className="text-ink-900">Why we use it:</strong>{" "}
                    {item.whyWeUse}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate2">
                    <strong className="text-ink-900">Role:</strong> {item.role}
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-slate2">
                    {item.technicalBenefits.slice(0, 2).map((benefit) => (
                      <li key={benefit} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate2">
              We choose technology for maintainability, performance and the
              needs of your product.
            </p>
          </div>
        </div>

        <aside className="service-case-aside space-y-10 lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <div className="border-t-2 border-brand pt-5">
            <div className="flex items-center gap-2 text-brand">
              <Layers className="h-5 w-5" />
              <h3 className="font-display text-lg font-700 text-ink-950">
                Technology stack
              </h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-xs font-semibold text-brand"
                >
                  {technology}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate2">
              Have a different stack in mind? We build with your preferred
              technologies too.
            </p>
          </div>
          <div className="border-t border-border2 pt-6">
            <h3 className="font-display text-lg font-700 text-ink-950">
              A good fit for
            </h3>
            <ul className="mt-4 space-y-3">
              {pageContent.goodFitForDetails.map((item) => (
                <li
                  key={item.title}
                  className="text-sm leading-relaxed text-slate2"
                >
                  <span className="font-700 text-ink-900">{item.title}:</span>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border2 pt-6">
            <Sparkles className="h-5 w-5 text-brand" />
            <h3 className="mt-4 font-display text-xl font-700 text-ink-950">
              Ready to discuss this service?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate2">
              Tell us what you are building and we will help shape the right
              next step.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 pb-12 pt-12 sm:px-8 lg:px-12">
        <div className="border-t border-border2 pt-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Frequently asked questions
          </span>
          <div className="mt-6 space-y-3">
            {(isEcommerce
              ? [
                  {
                    question: "What does E-commerce & Solutions include?",
                    answer:
                      "It can include catalog and storefront experiences, checkout workflows, commerce integrations and the operational connections behind them.",
                  },
                  {
                    question: "How do we get started?",
                    answer:
                      "We start by understanding your products, customers, current tools and order workflow, then outline a practical next step.",
                  },
                  {
                    question: "How long does a project take?",
                    answer:
                      "Timing depends on scope, integrations and content readiness. We break the work into clear phases after discovery.",
                  },
                  {
                    question:
                      "Which platforms and payment gateways do you support?",
                    answer:
                      "We can evaluate the platforms and payment providers that fit your market, catalog, operational needs and existing systems.",
                  },
                  {
                    question: "Do you offer post-launch support?",
                    answer:
                      "Yes. We can help with monitoring, fixes, improvements and ongoing changes after launch.",
                  },
                ]
              : pageContent.faqs
            ).map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-xl border border-blue-100 bg-white px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-700 text-ink-950 marker:hidden">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl overflow-hidden pt-3 text-sm leading-relaxed text-slate2">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to explore ${isEcommerce ? "E‑commerce & Solutions" : service.title}?`}
        description="Speak with our team about your goals, timeline and next steps."
        buttonText="Get in Touch"
        buttonHref="/contact"
        supportingText="Usually reply within 24 hours."
      />
    </div>
  );
}
