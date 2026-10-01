export interface Service {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface ServiceDetail {
  icon: string;
  title: string;
  desc: string;
  caps: string[];
  tech: string;
  benefit: string;
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
  desc: string;
  result: string;
  color: string;
  challenge?: string;
  solution?: string;
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
