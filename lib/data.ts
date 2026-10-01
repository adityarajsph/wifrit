import {
  Service,
  WhyItem,
  StatItem,
  Project,
  Article,
  Testimonial,
  ProcessStep,
  ValueItem,
  ServiceDetail,
  FAQ,
} from "./types";

export const SERVICES: Service[] = [
  {
    icon: "code-2",
    title: "Custom Software Development",
    desc: "Bespoke systems engineered around how your business actually operates, not the other way around.",
    tags: [".NET", "Node.js", "Java", "Python"],
  },
  {
    icon: "globe",
    title: "Web Development",
    desc: "Fast, accessible, SEO-ready websites and web applications built on modern frameworks.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    desc: "Native and cross-platform apps that feel fast and native on every device.",
    tags: ["React Native", "Swift", "Kotlin"],
  },
  {
    icon: "pen-tool",
    title: "UI/UX Design",
    desc: "Interfaces shaped by research and usability testing, designed to convert and retain.",
    tags: ["Figma", "Design Systems"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    desc: "Infrastructure, CI/CD and monitoring that scale quietly in the background.",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    icon: "brain-circuit",
    title: "AI & Automation",
    desc: "Practical AI features and workflow automation that remove manual work, not add complexity.",
    tags: ["LLMs", "RPA", "Data Pipelines"],
  },
];

export const WHY: WhyItem[] = [
  {
    icon: "target",
    title: "Business-Focused Solutions",
    desc: "Every technical decision is tied back to a business outcome you can measure.",
  },
  {
    icon: "cpu",
    title: "Modern Technology",
    desc: "We build on current, well-supported tools rather than aging or experimental ones.",
  },
  {
    icon: "layers",
    title: "Scalable Architecture",
    desc: "Systems designed to handle 10x growth without a rebuild.",
  },
  {
    icon: "shield-check",
    title: "Security First",
    desc: "Security reviewed at every stage, not bolted on before launch.",
  },
  {
    icon: "refresh-cw",
    title: "Agile Development",
    desc: "Short cycles, visible progress and room to adjust as priorities shift.",
  },
  {
    icon: "handshake",
    title: "Long-Term Partnership",
    desc: "We stay involved after launch — support, iteration and scaling together.",
  },
];

export const STATS: StatItem[] = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Technology Domains" },
  { value: 20, suffix: "+", label: "Professionals & Specialists" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export const PROJECTS: Project[] = [
  {
    slug: "medlink-patient-portal",
    title: "MedLink Patient Portal",
    cat: "Web",
    industry: "Healthcare",
    tech: "Next.js · Node.js · PostgreSQL",
    desc: "A secure patient portal for appointment booking, records access and telehealth intake.",
    result: "42% drop in front-desk call volume",
    color: "from-blue-500 to-cyan-400",
    challenge:
      "MedLink Health was drowning in manual administrative phone calls for routine intake, appointments, and record requests. The existing legacy system was fragmented and failed modern HIPAA compliance benchmarks.",
    solution:
      "We engineered a modern, responsive web application using Next.js with server-side rendering, integrated encrypted PostgreSQL databases, and built an automated scheduling and intake workflow with strict role-based access control.",
    impact: [
      "42% decrease in routine front-desk phone volume within 60 days",
      "Over 120,000 monthly active patient interactions with zero security incidents",
      "HIPAA audit passed with 100% compliance score",
    ],
    metrics: [
      { label: "Call Volume Reduction", value: "-42%" },
      { label: "Active Patients", value: "120K+" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
  },
  {
    slug: "cartly-commerce-engine",
    title: "Cartly Commerce Engine",
    cat: "E-commerce",
    industry: "E-commerce",
    tech: "React · Node.js · Redis",
    desc: "A headless commerce platform handling catalog, checkout and fulfillment for a multi-brand retailer.",
    result: "2.1x faster checkout completion",
    color: "from-indigo-500 to-blue-400",
    challenge:
      "Cartly's multi-brand catalog suffered from severe checkout abandonment due to slow API response times during flash sales and lack of automated inventory sync.",
    solution:
      "Re-architected the checkout funnel into a headless microservice platform utilizing React, Node.js cluster processes, and an in-memory Redis caching tier with optimistic locking.",
    impact: [
      "Checkout completion time dropped from 48s to under 22s",
      "Handled 5x peak flash sale traffic without any database bottlenecks",
      "Conversion rate increased by 28% across mobile devices",
    ],
    metrics: [
      { label: "Checkout Speed", value: "2.1x Faster" },
      { label: "Conversion Lift", value: "+28%" },
      { label: "Cache Hit Rate", value: "98.4%" },
    ],
  },
  {
    slug: "routepilot-logistics",
    title: "RoutePilot Logistics",
    cat: "Software",
    industry: "Logistics",
    tech: "Java · Spring Boot · AWS",
    desc: "Route optimization and fleet tracking software for a regional delivery network.",
    result: "18% reduction in fuel costs",
    color: "from-sky-500 to-blue-500",
    challenge:
      "A regional logistics operator with 450 vehicles faced escalating fuel costs and suboptimal dispatching routes caused by disconnected legacy GPS units.",
    solution:
      "Engineered a real-time event-driven fleet dispatch platform on Java Spring Boot and AWS IoT, delivering sub-second route recalculations based on live traffic conditions.",
    impact: [
      "18% reduction in aggregate monthly fuel expenditure",
      "On-time delivery accuracy climbed from 81% to 96.5%",
      "Dispatchers reduced route planning time from 3 hours to 10 minutes",
    ],
    metrics: [
      { label: "Fuel Cost Savings", value: "18%" },
      { label: "On-time Delivery", value: "96.5%" },
      { label: "Fleet Monitored", value: "450+ Trucks" },
    ],
  },
  {
    slug: "voya-trip-planner",
    title: "Voya Trip Planner",
    cat: "Mobile",
    industry: "Travel",
    tech: "React Native · Firebase",
    desc: "A cross-platform trip planning app with itinerary sharing and offline maps.",
    result: "4.8★ average app store rating",
    color: "from-blue-600 to-indigo-500",
    challenge:
      "Travelers frequently lost access to itineraries when roaming internationally or in low-connectivity regions.",
    solution:
      "Built a high-performance cross-platform mobile application using React Native with an offline-first SQLite cache, background vector map tile sync, and collaborative real-time itinerary sharing.",
    impact: [
      "Consistently maintained 4.8+ stars across iOS App Store and Google Play",
      "Over 350,000 trips planned in the first 6 months of public release",
      "Zero crashes reported over 99.8% of user sessions",
    ],
    metrics: [
      { label: "App Store Rating", value: "4.8 / 5" },
      { label: "Trips Planned", value: "350K+" },
      { label: "Offline Availability", value: "100%" },
    ],
  },
  {
    slug: "lendra-credit-dashboard",
    title: "Lendra Credit Dashboard",
    cat: "FinTech",
    industry: "FinTech",
    tech: "Next.js · Python · PostgreSQL",
    desc: "A risk-scoring dashboard giving loan officers a real-time view of applicant credit signals.",
    result: "30% faster loan decisions",
    color: "from-cyan-500 to-blue-500",
    challenge:
      "Underwriters took days aggregating financial data from separate credit bureaus and banking APIs, slowing down commercial loan approvals.",
    solution:
      "Designed and deployed a unified financial intelligence portal with Next.js and Python microservices, running automated ML models on applicant risk metrics.",
    impact: [
      "Accelerated loan assessment cycle by 30%",
      "Identified risk anomalies with 94% precision prior to underwriter manual review",
      "Bank-grade security compliant with SOC 2 Type II controls",
    ],
    metrics: [
      { label: "Decision Velocity", value: "+30%" },
      { label: "Risk Precision", value: "94%" },
      { label: "Data Pipeline Latency", value: "<1.2s" },
    ],
  },
  {
    slug: "classly-lms",
    title: "Classly LMS",
    cat: "UI/UX",
    industry: "Education",
    tech: "Figma · React · Node.js",
    desc: "A redesigned learning management system focused on instructor workflow and course clarity.",
    result: "55% increase in course completion",
    color: "from-blue-500 to-violet-400",
    challenge:
      "Students were dropping out of certified technical courses due to confusing navigation and cumbersome assignment submission interfaces.",
    solution:
      "Conducted extensive usability testing, overhauled the information architecture, and created a sleek, focused design system in Figma followed by React implementation.",
    impact: [
      "Course completion rates jumped from 32% to 87%",
      "Instructor grading time cut by more than half with inline rubric tooling",
      "Platform NPS scored 68 (up from 14)",
    ],
    metrics: [
      { label: "Completion Rate", value: "+55%" },
      { label: "Net Promoter Score", value: "68" },
      { label: "Grading Efficiency", value: "+50%" },
    ],
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "where-ai-actually-belongs-in-your-product-roadmap",
    cat: "AI",
    title: "Where AI Actually Belongs in Your Product Roadmap",
    excerpt:
      "Most AI features fail not because the model is weak, but because the problem was never worth solving with AI.",
    author: "Rhea Malhotra",
    date: "Aug 12, 2026",
    read: "6 min",
    featured: true,
    content: [
      "Most AI features fail not because the model is weak, but because the problem was never worth solving with AI in the first place. Every few years, an architectural breakthrough triggers a rush to insert novelty into existing product workflows.",
      "Where teams usually go wrong: Most delays come from unclear ownership rather than technical difficulty. Before writing a scope document or tuning a prompt, we ask who signs off on each decision, and whether user intent is actually probabilistic or deterministic.",
      "If a user wants deterministic results—such as calculating tax liability or sorting a grid—using an LLM introduces hallucination risk, high latency, and unnecessary token costs. Conversely, where AI excels is unstructured synthesis: drafting summaries, categorizing messy freeform submissions, and extracting structured signals from unstructured documents.",
      "What we recommend instead: Start with a two-week discovery sprint that produces a written scope, an architecture outline, and clear success criteria. It costs time upfront, but it removes the single biggest source of budget overruns later.",
    ],
  },
  {
    slug: "a-practical-guide-to-cutting-your-aws-bill-by-30",
    cat: "Cloud",
    title: "A Practical Guide to Cutting Your AWS Bill by 30%",
    excerpt:
      "Right-sizing, reserved capacity and a few overlooked defaults that quietly inflate cloud spend.",
    author: "Daniel Cho",
    date: "Aug 3, 2026",
    read: "8 min",
    content: [
      "Right-sizing, reserved capacity and a few overlooked defaults that quietly inflate cloud spend are common across growing tech stacks.",
      "The first step is auditing idle resources: NAT Gateways routing traffic that could use VPC Endpoints, oversized RDS instances with single-digit CPU utilization, and unattached EBS volumes.",
      "Implementing Graviton processor instances and automated compute scaling curves typically cuts 20-35% within the first billing cycle with zero code changes.",
    ],
  },
  {
    slug: "why-we-moved-every-new-project-to-the-app-router",
    cat: "Web Development",
    title: "Why We Moved Every New Project to the App Router",
    excerpt:
      "Server components changed how we think about data fetching, loading states and bundle size.",
    author: "Priya Nair",
    date: "Jul 27, 2026",
    read: "5 min",
    content: [
      "React Server Components represent the most significant mental model shift in frontend engineering since hooks were introduced.",
      "By keeping heavy dependencies on the server and only streaming HTML and interactive client islands, we have seen first-load JavaScript payloads shrink by over 60%.",
      "Streaming with Suspense boundaries also eliminates waterfall request chains and provides instantaneous layout transitions.",
    ],
  },
  {
    slug: "designing-forms-people-actually-finish",
    cat: "UI/UX",
    title: "Designing Forms People Actually Finish",
    excerpt:
      "Field order, inline validation and error tone are worth more than any visual polish.",
    author: "Marcus Webb",
    date: "Jul 19, 2026",
    read: "4 min",
    content: [
      "Forms are the ultimate conversion bottleneck of modern applications. Every superfluous field you demand cuts completion by a quantifiable percentage.",
      "Smart grouping, contextual keyboard types on mobile, clear visual affordances, and polite, actionable error messaging transform frustrating forms into effortless interactions.",
    ],
  },
  {
    slug: "how-to-brief-a-software-vendor-without-wasting-six-weeks",
    cat: "Business",
    title: "How to Brief a Software Vendor Without Wasting Six Weeks",
    excerpt:
      "The five things a scoping call needs before anyone writes an estimate.",
    author: "Rhea Malhotra",
    date: "Jul 8, 2026",
    read: "7 min",
    content: [
      "The five things a scoping call needs before anyone writes an estimate: defined business outcome, clear constraints, technical integrations list, primary user personas, and target launch window.",
      "Clarity on constraints empowers engineers to suggest high-leverage architectural tradeoffs that save months of redundant development.",
    ],
  },
  {
    slug: "native-vs-cross-platform-in-2026-a-decision-framework",
    cat: "Mobile",
    title: "Native vs Cross-Platform in 2026: A Decision Framework",
    excerpt:
      "It rarely comes down to performance anymore. Here is what it actually comes down to.",
    author: "Daniel Cho",
    date: "Jun 30, 2026",
    read: "6 min",
    content: [
      "Modern JIT compilers and hardware graphics acceleration have made the raw CPU gap between native Swift/Kotlin and React Native/Flutter practically negligible for 95% of applications.",
      "The real decision hinges on ecosystem integrations, Bluetooth/hardware sensor requirements, team skillsets, and whether your product demands platform-specific gesture subtleties.",
    ],
  },
  {
    slug: "the-case-for-boring-technology",
    cat: "Technology",
    title: "The Case for Boring Technology",
    excerpt:
      "Novelty is a cost. Spend your team's innovation budget where it matters.",
    author: "Marcus Webb",
    date: "Jun 21, 2026",
    read: "5 min",
    content: [
      "Novelty is an operational liability. Battle-tested databases like PostgreSQL and standard Linux runtimes have decades of solved failure modes and monitoring tooling.",
      "Save your team's innovation budget for the proprietary core that actually differentiates your product in the market.",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amelia Voss",
    role: "VP of Product",
    company: "MedLink Health",
    quote:
      "WIFRIT rebuilt our patient portal in three months and it has held up under real hospital-scale traffic since day one.",
    initials: "AV",
  },
  {
    name: "Jordan Park",
    role: "Founder & CEO",
    company: "Cartly",
    quote:
      "They pushed back on scope when it mattered and shipped faster than any agency we had used before.",
    initials: "JP",
  },
  {
    name: "Sofia Ricci",
    role: "Head of Engineering",
    company: "RoutePilot",
    quote:
      "The handover documentation alone saved our internal team weeks of ramp-up time.",
    initials: "SR",
  },
];

export const PROCESS: ProcessStep[] = [
  {
    n: "01",
    t: "Discover",
    d: "We learn your business, users and constraints before proposing a single line of code.",
  },
  {
    n: "02",
    t: "Strategize",
    d: "We define scope, architecture and success metrics everyone agrees on upfront.",
  },
  {
    n: "03",
    t: "Design",
    d: "Wireframes and prototypes are tested against real usage before development starts.",
  },
  {
    n: "04",
    t: "Develop",
    d: "Work ships in short, visible sprints with a working build at every checkpoint.",
  },
  {
    n: "05",
    t: "Test",
    d: "Automated and manual QA across devices, edge cases and performance benchmarks.",
  },
  {
    n: "06",
    t: "Launch",
    d: "A controlled rollout with monitoring in place from the first minute live.",
  },
  {
    n: "07",
    t: "Scale",
    d: "We stay on to optimize, extend and support the product as it grows.",
  },
];

export const VALUES: ValueItem[] = [
  {
    icon: "lightbulb",
    t: "Innovation",
    d: "We evaluate new tools constantly, but only ship what earns its place.",
  },
  {
    icon: "shield",
    t: "Integrity",
    d: "Honest estimates, honest timelines, and honest news when something slips.",
  },
  {
    icon: "gem",
    t: "Excellence",
    d: "Code review, testing and documentation are never the first thing cut.",
  },
  {
    icon: "users",
    t: "Collaboration",
    d: "Your team and ours work from the same board, not separate silos.",
  },
  {
    icon: "flag",
    t: "Ownership",
    d: "Every engineer treats the product like something they would maintain themselves.",
  },
  {
    icon: "trophy",
    t: "Customer Success",
    d: "A launch is the midpoint of the relationship, not the end of it.",
  },
];

export const TECH: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"],
  Backend: ["Node.js", "Express", "Java", "Spring Boot", "Python"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  Cloud: ["AWS", "Docker", "CI/CD", "Cloud Infrastructure"],
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    icon: "code-2",
    title: "Custom Software Development",
    desc: "Software built around your workflows and data, not the limitations of an off-the-shelf tool.",
    caps: [
      "Requirements & systems analysis",
      "Legacy system modernization",
      "Internal tooling & dashboards",
    ],
    tech: "Node.js, Python, Java, PostgreSQL",
    benefit:
      "Fewer manual workarounds, systems that fit how your team actually works.",
  },
  {
    icon: "globe",
    title: "Web Development",
    desc: "Modern, fast, responsive and SEO-friendly websites and web applications.",
    caps: [
      "Marketing sites & web apps",
      "E-commerce platforms",
      "Performance & SEO optimization",
    ],
    tech: "Next.js, React, TypeScript, Tailwind CSS",
    benefit:
      "Sites that load fast, rank well and convert visitors into customers.",
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences that feel built for the device.",
    caps: [
      "iOS & Android native apps",
      "Cross-platform apps",
      "App store launch & maintenance",
    ],
    tech: "React Native, Swift, Kotlin",
    benefit:
      "One codebase, two platforms, and an app that still feels native.",
  },
  {
    icon: "pen-tool",
    title: "UI/UX Design",
    desc: "User-centered interfaces focused on usability, aesthetics and conversion.",
    caps: [
      "User research & testing",
      "Wireframes & prototypes",
      "Design systems",
    ],
    tech: "Figma, Framer",
    benefit: "Interfaces people navigate without instructions.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    desc: "Cloud infrastructure, deployments, CI/CD, monitoring and scalability.",
    caps: [
      "Infrastructure as code",
      "CI/CD pipelines",
      "Monitoring & alerting",
    ],
    tech: "AWS, Docker, Kubernetes, Terraform",
    benefit: "Deployments that happen daily, not quarterly, without outages.",
  },
  {
    icon: "brain-circuit",
    title: "AI & Automation",
    desc: "AI-powered workflows, intelligent automation and modern AI integrations.",
    caps: [
      "LLM-powered features",
      "Workflow automation",
      "Data pipelines",
    ],
    tech: "OpenAI/Anthropic APIs, Python, LangChain",
    benefit: "Hours of manual work removed from repeatable processes.",
  },
  {
    icon: "plug-zap",
    title: "API & Backend Development",
    desc: "Secure, scalable backend systems and API architecture.",
    caps: [
      "REST & GraphQL APIs",
      "Authentication & authorization",
      "Third-party integrations",
    ],
    tech: "Node.js, Express, PostgreSQL, Redis",
    benefit:
      "A backend that scales with usage instead of falling over at peak load.",
  },
  {
    icon: "life-buoy",
    title: "Maintenance & Support",
    desc: "Continuous improvements, monitoring, optimization and technical support.",
    caps: [
      "SLA-backed support",
      "24/7 monitoring",
      "Ongoing performance tuning",
    ],
    tech: "Datadog, Sentry, PagerDuty",
    benefit: "Problems get caught before your customers notice them.",
  },
];

export const FAQS: FAQ[] = [
  {
    q: "How long does a typical project take?",
    a: "Most web and software projects take 8-16 weeks from kickoff to launch, depending on scope. We give you a specific timeline after the discovery phase, not before.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. Our process scales down for a lean MVP and up for enterprise systems with compliance and integration requirements.",
  },
  {
    q: "What does your pricing look like?",
    a: "We quote fixed-price for well-defined scopes and time-and-materials for evolving products. You will always see the number before work begins.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We regularly inherit projects from other agencies or in-house teams and start with a codebase audit before making changes.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Every project includes a support window post-launch, with ongoing retainers available for ongoing maintenance and feature work.",
  },
];

export const TRUST_CLIENTS = [
  "NORTHPEAK",
  "VELORA",
  "ASTRAL",
  "BRIGHTLANE",
  "KESTREL",
  "FARFIELD",
  "GRANDVIEW",
];
