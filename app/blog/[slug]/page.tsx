import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, Clock, Share2 } from "lucide-react";
import { ARTICLES } from "@/lib/data";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

interface ArticleDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article className="pt-36 pb-20 max-w-3xl mx-auto px-5 sm:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate2 mb-6">
          <Link href="/blog" className="hover:text-brand transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Blog</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate2/60" />
          <span className="text-slate2/80">{article.cat}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate2/60" />
          <span className="text-ink-950 font-medium truncate max-w-[200px]">{article.title}</span>
        </div>

        {/* Category Pill */}
        <span className="text-xs font-semibold text-brand bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
          {article.cat}
        </span>

        {/* Article Headline */}
        <h1 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink-950 tracking-tight mt-4 mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Metadata Row */}
        <div className="flex items-center gap-3 text-sm text-slate2 pb-8 border-b border-border2">
          <div className="w-10 h-10 rounded-full bg-brand-50 text-brand font-display font-700 text-xs flex items-center justify-center border border-brand-100">
            {article.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="font-semibold text-ink-950">{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate2" />
              <span>{article.read} read</span>
            </span>
          </div>
        </div>

        {/* Cover Image Block */}
        <div className="h-64 sm:h-80 rounded-3xl bg-gradient-to-br from-brand via-blue-600 to-indigo-600 my-10 shadow-lg relative overflow-hidden flex items-end p-8">
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
          <span className="relative z-10 text-white/90 text-xs sm:text-sm font-semibold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            Engineering Insights
          </span>
        </div>

        {/* Full Article Body */}
        <div className="space-y-6 text-ink-950/85 leading-relaxed text-base sm:text-lg">
          <p className="font-medium text-ink-950 text-lg sm:text-xl leading-relaxed">
            {article.excerpt}
          </p>

          <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink-950 pt-6 tracking-tight">
            Where teams usually go wrong
          </h2>
          <p>
            Most delays come from unclear ownership rather than technical difficulty.
            Before writing a scope document, we ask who signs off on each decision,
            and how quickly they can turn it around.
          </p>

          {/* Code Snippet Box */}
          <div className="bg-ink-950 text-brand-100 rounded-2xl p-6 text-sm font-mono overflow-x-auto shadow-xl border border-white/10 my-6">
            <pre className="text-emerald-400">
{`function estimate(scope) {
  return scope.clarity > 0.7
    ? "reliable timeline"
    : "discovery phase needed";
}`}
            </pre>
          </div>

          <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink-950 pt-6 tracking-tight">
            What we recommend instead
          </h2>
          <p>
            Start with a two-week discovery sprint that produces a written scope,
            an architecture outline and a fixed estimate. It costs time upfront, but
            it removes the single biggest source of budget overruns later.
          </p>

          <p>
            Once architecture constraints are agreed upon across stakeholders, development
            can proceed in short, testable checkpoints with automated CI/CD feedback
            guaranteeing predictability.
          </p>
        </div>

        {/* Social Share Row */}
        <div className="flex items-center justify-between gap-4 pt-10 mt-12 border-t border-border2">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate2">
            <Share2 className="w-4 h-4" />
            <span>Share this article:</span>
          </div>
          <ShareButtons />
        </div>
      </article>

      {/* Related Articles Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 border-t border-border2">
        <h3 className="font-display font-800 text-2xl text-ink-950 mb-8 tracking-tight">
          Related Articles
        </h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {relatedArticles.map((x) => (
            <Link
              key={x.slug}
              href={`/blog/${x.slug}`}
              className="border border-border2 rounded-2xl overflow-hidden bg-white hover:border-brand/40 hover:-translate-y-1 transition-all shadow-sm group flex flex-col justify-between"
            >
              <div>
                <div className="h-32 bg-gradient-to-br from-blue-100 via-brand-50 to-indigo-50 border-b border-border2/60" />
                <div className="p-5">
                  <span className="text-[11px] font-semibold text-brand bg-brand-50 px-2 py-0.5 rounded">
                    {x.cat}
                  </span>
                  <h4 className="font-display font-700 text-base text-ink-950 mt-2 mb-2 leading-snug group-hover:text-brand transition-colors">
                    {x.title}
                  </h4>
                </div>
              </div>
              <div className="px-5 pb-5 text-xs text-slate2">
                <span>{x.date}</span> · <span>{x.read} read</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup CTA Banner */}
      <section id="newsletter" className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
        <div className="noise-dark rounded-3xl px-8 py-14 text-center text-white border border-white/10 shadow-xl">
          <h3 className="font-display font-800 text-2xl sm:text-3xl mb-3 tracking-tight">
            Get insights like this in your inbox
          </h3>
          <p className="text-white/60 text-sm sm:text-base mb-8 max-w-md mx-auto">
            One concise email a month. Real engineering takeaways, unsubscribe anytime.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
