// types.ts

// ---------- Existing types (unchanged) ----------

export interface Service {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  illustration?: string;
  illustrationAlt?: string;
}

export interface ServiceDetail {
  slug?: string;
  category?: "Development" | "Design" | "Digital Marketing";
  icon: string;
  title: string;
  desc: string;
  caps: string[];
  tech: string;
  benefit: string;
  illustration?: string;
  illustrationAlt?: string;
}

export interface TechnologyStackDetail {
  name: string;
  whyWeUse: string;
  role: string;
  technicalBenefits: string[];
  businessBenefit: string;
}

export interface GoodFitDetail {
  title: string;
  description: string;
}

export interface ServicePageContent {
  overview: string;
  whatWeDeliver: string[];
  keyCapabilities: { title: string; description: string }[];
  technologies: string[];
  technologyStackDetails: TechnologyStackDetail[];
  goodFitForDetails: GoodFitDetail[];
  businessValue: string;
  process: { title: string; description: string }[];
  idealFor: string[];
  faqs: { question: string; answer: string }[];
}

export interface WhyItem {
  icon: string;
  title: string;
  desc: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  cat: string;
  industry: string;
  tech: string;
  techStack?: string[];
  desc: string;
  result: string;
  color: string;
  challenge?: string;
  solution?: string[];
  impact?: string[];
  metrics?: { label: string; value: string }[];
}

export interface Article {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  read: string;
  featured?: boolean;
  content?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

export interface ValueItem {
  icon: string;
  t: string;
  d: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface TechStackCategory {
  category: string;
  skills: string[];
}

// ---------- New types (additive) ----------

export type ServiceCategory = "Development" | "Design" | "Digital Marketing";

export type TechCategory =
  | "Language"
  | "Framework"
  | "Library"
  | "Database"
  | "Cloud"
  | "Design"
  | "Mobile"
  | "AI"
  | "DevOps"
  | "Marketing"
  | "Other";

export interface TechInfo {
  name: string;
  category: TechCategory;
  whyWeUse: string;
  purpose: string;
  benefits: string[];
}

export interface ValueCard {
  title: string;
  description: string;
}

export interface ServiceExtras {
  valueCards: ValueCard[];
  approachParagraphs: string[];
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
}
export type CaseStudy = {
  client: string;
  timeline: string;
  platform: string;
  team: string;
  services: string[];
  overview: string[];
  challengePoints: string[];
  features: { title: string; description: string }[];
  process: { title: string; duration: string; description: string }[];
  techUse: Record<string, string>;
  results: { value: string; label: string; description: string }[];
  testimonial?: { quote: string; name: string; role: string };
  faqs: { q: string; a: string }[];
};

// ---------- Blog detail types (additive) ----------

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  cat: string;
  excerpt: string;
  intro: string;
  author: string;
  authorRole: string;
  authorInitials: string;
  date: string;
  read: string;
  featured?: boolean;
  sections: BlogSection[];
  takeaways: string[];
  tags: string[];
  relatedSlugs: string[];
}
