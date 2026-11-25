import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  List,
  UserRound,
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import type { BlogPost } from "@/lib/types";
import { CTASection } from "@/components/sections/CTASection";
import { ShareButtons } from "@/components/ui/ShareButtons";

interface BlogDetailProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogDetailProps) {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);
  return post
    ? { title: post.title, description: post.excerpt }
    : { title: "Blog" };
}

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function RelatedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border2 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
    >
      <span className="w-fit rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand">
        {post.cat}
      </span>
      <h3 className="mt-4 line-clamp-2 font-display text-lg font-700 leading-snug text-ink-950 transition-colors group-hover:text-brand">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate2">
        {post.excerpt}
      </p>
      <p className="mt-5 text-xs text-slate2">
        {post.date} · {post.read} read
      </p>
    </Link>
  );
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const related = post.relatedSlugs
    .map((slug) => BLOG_POSTS.find((item) => item.slug === slug))
    .filter((item): item is BlogPost => Boolean(item));

  return (
    <div className="article-detail-page bg-[#f4f7ff]">
      <section className="article-detail-hero" data-detail-hero>
        <div className="article-detail-head mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="article-breadcrumb mb-6 flex min-w-0 items-center gap-2 text-xs text-slate2 sm:text-sm">
            <Link
              href="/blog"
              className="flex shrink-0 items-center gap-1 transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate2/60" />
            <span className="shrink-0 text-slate2">{post.cat}</span>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate2/60" />
            <span className="min-w-0 truncate font-medium text-ink-950">
              {post.title}
            </span>
          </div>
          <span className="inline-flex rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white">
            {post.cat}
          </span>
          <h1 className="article-detail-title mt-5 max-w-[820px] font-display font-800">
            {post.title}
          </h1>
          <div className="article-meta mt-8 flex flex-wrap items-center gap-3 border-b border-border2 pb-8 text-sm text-slate-600">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-white font-display text-xs font-700 text-brand">
              {post.authorInitials}
            </div>
            <span className="font-medium text-ink-950">{post.author}</span>
            <span>·</span>
            <span>{post.authorRole}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-brand" />
              {post.read} read
            </span>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-[1200px] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-12 lg:py-20">
        <article className="min-w-0 space-y-8">
          <p className="rounded-2xl border border-brand-100 bg-white p-6 text-[17px] leading-[1.7] text-ink-950 shadow-sm sm:p-7">
            {post.intro}
          </p>

          <div className="space-y-5">
            {post.sections.map((section) => (
              <section
                id={sectionId(section.heading)}
                key={section.heading}
                className="scroll-mt-28 rounded-xl border border-border2 bg-white p-6 shadow-sm sm:p-7"
              >
                <h2 className="font-display text-2xl font-800 tracking-tight text-ink-950">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate2 sm:text-[15px]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-6 text-slate2"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {post.takeaways.length > 0 && (
            <section className="rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">
                Key takeaways
              </p>
              <ul className="mt-4 space-y-3">
                {post.takeaways.map((takeaway) => (
                  <li
                    key={takeaway}
                    className="flex gap-3 text-sm leading-6 text-ink-950"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    {takeaway}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-100 bg-white px-3 py-1.5 text-xs font-semibold text-brand"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border2 pt-6">
            <span className="text-sm font-semibold text-slate2">
              Share this article
            </span>
            <ShareButtons />
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <nav
            aria-label="In this article"
            className="rounded-2xl border border-border2 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 font-display font-700 text-ink-950">
              <List className="h-4 w-4 text-brand" />
              In this article
            </div>
            <div className="mt-4 space-y-2">
              {post.sections.map((section) => (
                <a
                  key={section.heading}
                  href={`#${sectionId(section.heading)}`}
                  className="block text-sm leading-5 text-slate2 transition-colors hover:text-brand"
                >
                  {section.heading}
                </a>
              ))}
            </div>
          </nav>
          <div className="rounded-2xl border border-border2 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 font-display text-xs font-bold text-brand">
                {post.authorInitials}
              </div>
              <div>
                <p className="font-display font-700 text-ink-950">
                  {post.author}
                </p>
                <p className="text-xs text-slate2">{post.authorRole}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-slate2">
              <UserRound className="h-4 w-4 text-brand" />
              Written for the WIFRIT blog
            </div>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5">
            <p className="font-display font-700 text-ink-950">
              Planning a {post.cat.toLowerCase()} initiative?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate2">
              Talk with our team about your product and next steps.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Get in touch
            </Link>
          </div>
        </aside>
      </main>

      {related.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-8">
          <h2 className="font-display text-2xl font-800 tracking-tight text-ink-950">
            Related posts
          </h2>
          <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <RelatedPost key={item.slug} post={item} />
            ))}
          </div>
        </section>
      )}
      <CTASection
        title="Have a project in mind?"
        description="Let's talk about the product, platform or engineering challenge you're working through."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </div>
  );
}
