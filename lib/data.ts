// data-extras.ts
import type {
  Article,
  FAQ,
  ProcessStep,
  Project,
  Service,
  ServiceDetail,
  ServicePageContent,
  StatItem,
  Testimonial,
  ValueItem,
  WhyItem,
  CaseStudy,
  BlogPost,
} from "./types";
import type { ServiceExtras, TechInfo } from "./types";

// ---------- Technology explanations ----------

export const TECH_INFO: Record<string, TechInfo> = {
  "Next.js": {
    name: "Next.js",
    category: "Framework",
    whyWeUse:
      "It gives fast page loads and search-friendly rendering in one framework.",
    purpose:
      "Builds websites and web applications with server rendering, routing and API routes.",
    benefits: [
      "Pages load quickly on mobile",
      "Good for SEO out of the box",
      "One codebase for site and app features",
    ],
  },
  React: {
    name: "React",
    category: "Library",
    whyWeUse: "It lets us build screens from small, reusable components.",
    purpose:
      "Creates interactive user interfaces that update efficiently as data changes.",
    benefits: [
      "Reusable components keep the UI consistent",
      "Large ecosystem and talent pool",
      "Easy to extend as the product grows",
    ],
  },
  TypeScript: {
    name: "TypeScript",
    category: "Language",
    whyWeUse: "It catches many mistakes before the code reaches your users.",
    purpose:
      "Adds type checking to JavaScript so code is clearer and safer to change.",
    benefits: [
      "Fewer runtime bugs",
      "Better editor support and autocomplete",
      "Safer refactoring as the team grows",
    ],
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    category: "Library",
    whyWeUse:
      "It keeps spacing, colours and typography consistent without large custom stylesheets.",
    purpose:
      "Provides utility classes for building layouts and components quickly.",
    benefits: [
      "Consistent design tokens",
      "Smaller production CSS",
      "Quick visual adjustments",
    ],
  },
  "Node.js": {
    name: "Node.js",
    category: "Language",
    whyWeUse:
      "It lets us use JavaScript on the server, so front end and back end share skills.",
    purpose: "Runs backend services, APIs and background jobs.",
    benefits: [
      "Handles many concurrent requests well",
      "Large package ecosystem",
      "Fast development with a shared language",
    ],
  },
  Express: {
    name: "Express",
    category: "Framework",
    whyWeUse: "It is a simple, proven way to build APIs on Node.js.",
    purpose:
      "Handles routing, middleware and request processing for backend services.",
    benefits: [
      "Minimal and easy to understand",
      "Flexible middleware for auth and logging",
      "Mature and widely supported",
    ],
  },
  Python: {
    name: "Python",
    category: "Language",
    whyWeUse: "It is strong for data work, automation and AI-related features.",
    purpose:
      "Powers backend services, data processing, scripts and machine learning workflows.",
    benefits: [
      "Readable code that is quick to build with",
      "Rich libraries for data and AI",
      "Good fit for automation tasks",
    ],
  },
  Java: {
    name: "Java",
    category: "Language",
    whyWeUse:
      "It is reliable for large systems that need stability and a long life.",
    purpose:
      "Builds enterprise backend services and high-throughput applications.",
    benefits: [
      "Strong performance under heavy load",
      "Mature tooling and libraries",
      "Well suited to long-lived systems",
    ],
  },
  "Spring Boot": {
    name: "Spring Boot",
    category: "Framework",
    whyWeUse: "It speeds up building production-ready Java services.",
    purpose:
      "Provides a structured framework for APIs, security, data access and scheduling.",
    benefits: [
      "Production-ready defaults",
      "Strong security and data integration",
      "Easier to maintain at scale",
    ],
  },
  PostgreSQL: {
    name: "PostgreSQL",
    category: "Database",
    whyWeUse:
      "It is a dependable relational database for structured business data.",
    purpose:
      "Stores records, relationships and transactions with strong consistency.",
    benefits: [
      "Data integrity and transactions",
      "Handles complex queries well",
      "Open source with a long track record",
    ],
  },
  Redis: {
    name: "Redis",
    category: "Database",
    whyWeUse: "It makes frequently used data available very quickly.",
    purpose: "Provides caching, session storage and fast temporary data.",
    benefits: [
      "Reduces load on the main database",
      "Speeds up repeated requests",
      "Useful for queues and rate limiting",
    ],
  },
  "React Native": {
    name: "React Native",
    category: "Mobile",
    whyWeUse:
      "It lets one team build for iOS and Android from a shared codebase.",
    purpose:
      "Builds cross-platform mobile apps with native-feeling interfaces.",
    benefits: [
      "One codebase for two platforms",
      "Faster delivery for many use cases",
      "Access to native device features",
    ],
  },
  Swift: {
    name: "Swift",
    category: "Language",
    whyWeUse: "It gives the deepest integration with Apple devices.",
    purpose: "Builds native iOS and macOS applications.",
    benefits: [
      "Best performance on Apple platforms",
      "Full access to native APIs",
      "Modern, safe language design",
    ],
  },
  Kotlin: {
    name: "Kotlin",
    category: "Language",
    whyWeUse: "It is the modern choice for native Android development.",
    purpose: "Builds native Android applications.",
    benefits: [
      "Concise and safe code",
      "Official support for Android",
      "Good interoperability with Java",
    ],
  },
  Firebase: {
    name: "Firebase",
    category: "Cloud",
    whyWeUse:
      "It removes a lot of setup for authentication, data and notifications.",
    purpose:
      "Provides managed services such as auth, realtime data, storage and push notifications.",
    benefits: [
      "Quick to start",
      "Managed infrastructure",
      "Scales without server management",
    ],
  },
  Figma: {
    name: "Figma",
    category: "Design",
    whyWeUse:
      "It lets designers and stakeholders review and edit together in one place.",
    purpose:
      "Creates wireframes, prototypes, UI designs and shared design libraries.",
    benefits: [
      "Real-time collaboration",
      "Clear handoff to developers",
      "Reusable components and styles",
    ],
  },
  FigJam: {
    name: "FigJam",
    category: "Design",
    whyWeUse: "It makes workshops and early planning visual and collaborative.",
    purpose: "Supports flows, sitemaps, brainstorming and discovery sessions.",
    benefits: [
      "Quick shared planning",
      "Easy to capture decisions visually",
      "Works well with Figma designs",
    ],
  },
  "Design Systems": {
    name: "Design Systems",
    category: "Design",
    whyWeUse: "It keeps every screen consistent as the product grows.",
    purpose:
      "Defines reusable components, colours, typography and usage rules.",
    benefits: [
      "Consistent experience across screens",
      "Faster design and development",
      "Easier onboarding for new team members",
    ],
  },
  "Adobe Illustrator": {
    name: "Adobe Illustrator",
    category: "Design",
    whyWeUse: "It is the standard tool for scalable vector graphics and logos.",
    purpose:
      "Creates logos, icons, illustrations and print-ready vector artwork.",
    benefits: [
      "Logos that scale without losing quality",
      "Precise control over shapes",
      "Works for both print and digital",
    ],
  },
  "Adobe Photoshop": {
    name: "Adobe Photoshop",
    category: "Design",
    whyWeUse: "It is useful for detailed image editing and campaign visuals.",
    purpose:
      "Edits photos and creates raster graphics for digital and print use.",
    benefits: [
      "Precise image editing",
      "Good for campaign and social visuals",
      "Familiar tool for many teams",
    ],
  },
  "Adobe InDesign": {
    name: "Adobe InDesign",
    category: "Design",
    whyWeUse: "It handles multi-page layouts with precision.",
    purpose:
      "Designs brochures, reports, presentations and other multi-page documents.",
    benefits: [
      "Consistent multi-page layouts",
      "Print-ready output",
      "Strong text and grid control",
    ],
  },
  AWS: {
    name: "AWS",
    category: "Cloud",
    whyWeUse:
      "It offers a broad set of reliable cloud services that scale with demand.",
    purpose:
      "Hosts applications, databases, storage and networking in the cloud.",
    benefits: [
      "Scales with traffic",
      "Pay for what you use",
      "Wide range of managed services",
    ],
  },
  Docker: {
    name: "Docker",
    category: "DevOps",
    whyWeUse: "It makes applications run the same way on every machine.",
    purpose:
      "Packages applications and their dependencies into portable containers.",
    benefits: [
      "Consistent environments",
      "Simpler deployments",
      "Faster onboarding for developers",
    ],
  },
  Kubernetes: {
    name: "Kubernetes",
    category: "DevOps",
    whyWeUse: "It helps run many containers reliably at larger scale.",
    purpose: "Orchestrates containers, scaling, restarts and rolling updates.",
    benefits: [
      "Automatic recovery from failures",
      "Scales services on demand",
      "Controlled, low-downtime updates",
    ],
  },
  Terraform: {
    name: "Terraform",
    category: "DevOps",
    whyWeUse:
      "It records infrastructure as code, so changes are reviewed and repeatable.",
    purpose:
      "Provisions and manages cloud infrastructure through configuration files.",
    benefits: [
      "Repeatable environments",
      "Changes tracked in version control",
      "Less risk from manual setup",
    ],
  },
  "GitHub Actions": {
    name: "GitHub Actions",
    category: "DevOps",
    whyWeUse:
      "It automates tests and deployments directly from the code repository.",
    purpose:
      "Runs CI/CD pipelines for building, testing and releasing software.",
    benefits: [
      "Automated testing on every change",
      "Faster and safer releases",
      "Built into the repository workflow",
    ],
  },
  Datadog: {
    name: "Datadog",
    category: "DevOps",
    whyWeUse: "It gives one view of application and infrastructure health.",
    purpose: "Monitors metrics, logs and performance across systems.",
    benefits: [
      "Early warning of issues",
      "Clear dashboards for the team",
      "Faster root-cause analysis",
    ],
  },
  Sentry: {
    name: "Sentry",
    category: "DevOps",
    whyWeUse:
      "It shows developers exactly where an error happened in production.",
    purpose: "Tracks application errors and crashes with useful context.",
    benefits: [
      "Errors found before users report them",
      "Detailed stack traces",
      "Faster fixes",
    ],
  },
  PagerDuty: {
    name: "PagerDuty",
    category: "DevOps",
    whyWeUse:
      "It makes sure the right person is alerted when something important breaks.",
    purpose: "Manages incident alerts, on-call schedules and escalations.",
    benefits: [
      "Reliable alert routing",
      "Clear on-call ownership",
      "Faster incident response",
    ],
  },
  "OpenAI APIs": {
    name: "OpenAI APIs",
    category: "AI",
    whyWeUse:
      "They provide capable language and vision models through a stable API.",
    purpose:
      "Adds text generation, summarization, classification and other AI features to products.",
    benefits: [
      "Quick to integrate",
      "Strong language understanding",
      "Works alongside your existing systems",
    ],
  },
  "Anthropic APIs": {
    name: "Anthropic APIs",
    category: "AI",
    whyWeUse:
      "They offer dependable language models that are well suited to careful, structured tasks.",
    purpose: "Powers AI assistants, document analysis and workflow automation.",
    benefits: [
      "Reliable instruction following",
      "Good for long documents",
      "Clear integration through an API",
    ],
  },
  LangChain: {
    name: "LangChain",
    category: "AI",
    whyWeUse:
      "It gives structure to AI workflows that combine models, data and tools.",
    purpose:
      "Builds chains, retrieval pipelines and agent-style workflows around language models.",
    benefits: [
      "Reusable AI components",
      "Easier connection to data sources",
      "Clear structure for complex workflows",
    ],
  },
  "Headless CMS": {
    name: "Headless CMS",
    category: "Other",
    whyWeUse:
      "It separates content from design, so the same content can power many pages and channels.",
    purpose:
      "Lets your team manage content in a dedicated editor and deliver it to the website through APIs.",
    benefits: [
      "Non-technical editing",
      "Content reused across channels",
      "Flexible front end",
    ],
  },
  "Search Console": {
    name: "Search Console",
    category: "Marketing",
    whyWeUse: "It shows how search engines see your website.",
    purpose: "Reports indexing issues, search queries, clicks and impressions.",
    benefits: [
      "Finds crawl and indexing problems",
      "Shows which searches bring visitors",
      "Tracks progress over time",
    ],
  },
  "Google Analytics": {
    name: "Google Analytics",
    category: "Marketing",
    whyWeUse: "It shows what visitors do on your site and where they drop off.",
    purpose: "Measures traffic, user behaviour and conversions.",
    benefits: [
      "Understand visitor journeys",
      "Measure campaign results",
      "Support data-led decisions",
    ],
  },
  "Email HTML": {
    name: "Email HTML",
    category: "Other",
    whyWeUse:
      "Email clients render code differently, so email needs its own careful markup.",
    purpose:
      "Builds responsive email templates that display correctly across inboxes.",
    benefits: [
      "Consistent display across email clients",
      "Readable on mobile",
      "Reusable template structure",
    ],
  },
  "Campaign Platforms": {
    name: "Campaign Platforms",
    category: "Marketing",
    whyWeUse:
      "They manage sending, lists and tracking in one dependable system.",
    purpose:
      "Schedules campaigns, manages subscribers and reports delivery and engagement.",
    benefits: [
      "Reliable delivery infrastructure",
      "Built-in reporting",
      "Subscriber management and consent handling",
    ],
  },
};

export function getTechInfo(name: string): TechInfo | undefined {
  return TECH_INFO[name];
}

// ---------- Service page extras (naya content) ----------

export const SERVICE_EXTRAS: Record<string, ServiceExtras> = {
  "custom-software-development": {
    valueCards: [
      {
        title: "Workflow-first design",
        description:
          "The software follows how your team actually works, not a generic template.",
      },
      {
        title: "Replace manual work",
        description:
          "Spreadsheets and disconnected tools are brought into one reliable system.",
      },
      {
        title: "Room to grow",
        description:
          "The architecture supports new users, features and integrations over time.",
      },
      {
        title: "Clear ownership",
        description:
          "Documentation and handover mean your team can maintain what we build.",
      },
    ],
    approachParagraphs: [
      "Custom software starts with the work itself: who does what, where information comes from, and where things get stuck. We map those workflows before proposing any screens or features.",
      "We then turn the findings into a focused first release, built in short cycles so your team sees progress early and can adjust priorities as the business changes.",
    ],
    ctaHeading: "Ready to explore custom software for your business?",
    ctaText:
      "Tell us about the workflow that slows your team down, and we will suggest a practical starting point.",
    ctaButton: "Get in touch",
  },
  "web-development": {
    valueCards: [
      {
        title: "Customer-facing websites",
        description:
          "A clear site that explains your offer and makes it easy to contact you or buy.",
      },
      {
        title: "Internal portals and dashboards",
        description:
          "A secure place for your team to manage requests, records and reports by role.",
      },
      {
        title: "Booking and enquiry flows",
        description:
          "Forms that guide visitors step by step and send details to the right person.",
      },
      {
        title: "Faster, lighter pages",
        description:
          "Optimised images and clean code so pages open quickly on slower mobile connections.",
      },
      {
        title: "Easy content updates",
        description:
          "Your team edits text and images without waiting for a developer each time.",
      },
      {
        title: "Search-ready structure",
        description:
          "Clear titles, headings and URLs that help search engines understand each page.",
      },
    ],
    approachParagraphs: [
      "Every good website starts with a task. A visitor wants to find a service, compare options or book a call. A team member wants to update a record or approve a request.",
      "We plan the pages, business rules, content and integrations together, so the product works as one system from the first release.",
    ],
    ctaHeading: "Ready to plan your web development project?",
    ctaText:
      "Tell us what your users need to do, and we will suggest a clear structure and next steps.",
    ctaButton: "Get in touch",
  },
  "brand-identify": {
    valueCards: [
      {
        title: "Distinct brand identity",
        description:
          "A logo, colours and typography that set your business apart from competitors.",
      },
      {
        title: "Consistent across touchpoints",
        description:
          "The same visual language on your website, app, documents and social channels.",
      },
      {
        title: "Brand guidelines",
        description:
          "Clear rules for logo use, colours and type so your team stays on brand.",
      },
      {
        title: "Ready-to-use assets",
        description:
          "Logo files and brand kits organised for web, print and presentations.",
      },
    ],
    approachParagraphs: [
      "A strong brand starts with understanding who you are and who you serve. We begin by learning about your business, your audience and the impression you want to leave on the people who meet you.",
      "We then explore visual directions, refine the chosen identity and build a brand system with logo variations, colour palette, typography and usage rules that your team can apply with confidence.",
    ],
    ctaHeading: "Ready to build a brand people remember?",
    ctaText:
      "Tell us about your business and audience, and we will suggest a brand identity direction that fits.",
    ctaButton: "Get in touch",
  },
  "mobile-app-development": {
    valueCards: [
      {
        title: "Device-first experience",
        description:
          "Screens and gestures are designed for how people use phones.",
      },
      {
        title: "One team, two platforms",
        description:
          "Shared code can cover iOS and Android where it makes sense.",
      },
      {
        title: "Native features",
        description:
          "Camera, notifications, location and offline support work as users expect.",
      },
      {
        title: "Smooth releases",
        description:
          "Testing and store preparation are planned from the start.",
      },
    ],
    approachParagraphs: [
      "A mobile app earns its place when it helps someone do something useful on the go. We start by defining the key journeys and the first release that delivers the most value.",
      "We prototype the important screens, test them with real devices and then build in stages. You see a working app early, and we plan the store launch and updates together.",
    ],
    ctaHeading: "Ready to plan your mobile app?",
    ctaText:
      "Share the idea or problem you want the app to solve, and we will help you define a realistic first release.",
    ctaButton: "Get in touch",
  },
  "ui-ux-design": {
    valueCards: [
      {
        title: "Clear user journeys",
        description:
          "Important actions are easy to find, understand and complete.",
      },
      {
        title: "Tested decisions",
        description:
          "Ideas are checked with users before they become expensive development work.",
      },
      {
        title: "Consistent interface",
        description: "Reusable patterns keep the product coherent as it grows.",
      },
      {
        title: "Developer-ready handoff",
        description:
          "Specs and components are organised so builds match the design.",
      },
    ],
    approachParagraphs: [
      "Good design is less about how a screen looks and more about whether someone can finish a task without confusion. We begin with research into who the users are and what they need to achieve.",
      "From there we map flows, test quick prototypes and refine the interface. The result is a set of screens and components your developers can build from with confidence.",
    ],
    ctaHeading: "Ready to make your product easier to use?",
    ctaText:
      "Tell us where users get stuck today, and we will suggest where design can make the biggest difference.",
    ctaButton: "Get in touch",
  },
  "cloud-devops": {
    valueCards: [
      {
        title: "Repeatable releases",
        description:
          "Automated pipelines replace manual deployment steps that cause errors.",
      },
      {
        title: "Visible system health",
        description:
          "Monitoring shows problems early, before customers feel them.",
      },
      {
        title: "Controlled infrastructure",
        description:
          "Infrastructure is defined as code, so changes are reviewed and reversible.",
      },
      {
        title: "Planned for growth",
        description: "The setup can scale with traffic without a rebuild.",
      },
    ],
    approachParagraphs: [
      "Reliable software depends on a reliable way to ship and run it. We review how your application is currently deployed, where the risks are and what would make releases calmer.",
      "We then set up the pipelines, environments and monitoring in a way your team can understand and maintain, with documentation to support them.",
    ],
    ctaHeading: "Ready to make your releases more reliable?",
    ctaText:
      "Tell us how you deploy today and where it hurts, and we will suggest a practical next step.",
    ctaButton: "Get in touch",
  },
  "ai-automation": {
    valueCards: [
      {
        title: "Start with real work",
        description:
          "We pick a repeatable task that costs time today, not a trend to chase.",
      },
      {
        title: "Human review where it matters",
        description:
          "Important outputs can be checked by your team before they are used.",
      },
      {
        title: "Fits your existing tools",
        description:
          "Automation connects to the systems your team already uses.",
      },
      {
        title: "Measured results",
        description:
          "We track accuracy and time saved so you know whether it works.",
      },
    ],
    approachParagraphs: [
      "AI is most useful when it removes the repetitive parts of a job: sorting requests, summarising documents or moving data between systems. We begin by finding those tasks and defining what a good outcome looks like.",
      "We prototype with real examples, build the integration and monitor the results. Where accuracy matters, we design review steps so the system supports your team rather than replacing its judgement.",
    ],
    ctaHeading: "Ready to find the right automation for your team?",
    ctaText:
      "Tell us which tasks take the most time, and we will suggest where AI or automation can help first.",
    ctaButton: "Get in touch",
  },
  "api-backend-development": {
    valueCards: [
      {
        title: "Clear contracts",
        description:
          "Well-documented APIs make frontend and partner work faster and safer.",
      },
      {
        title: "Secure access",
        description:
          "Users and roles are handled deliberately, with authentication and permissions.",
      },
      {
        title: "Easy integrations",
        description:
          "Other systems can connect through documented, predictable interfaces.",
      },
      {
        title: "Built to scale",
        description:
          "The backend handles growing traffic without falling over at peak times.",
      },
    ],
    approachParagraphs: [
      "A product is only as good as the data and logic behind it. We design the backend around the data, users and integrations the product needs, so each part has a clear responsibility.",
      "We then implement the endpoints, permissions and tests, and document the system so future developers and partners can work with it confidently.",
    ],
    ctaHeading: "Ready to build a backend that scales?",
    ctaText:
      "Tell us what data and systems need to connect, and we will suggest a clean backend structure.",
    ctaButton: "Get in touch",
  },
  "maintenance-support": {
    valueCards: [
      {
        title: "Issues caught early",
        description:
          "Monitoring and reviews find problems before they affect customers.",
      },
      {
        title: "Fast response",
        description:
          "Clear escalation paths mean urgent issues reach the right person quickly.",
      },
      {
        title: "Planned improvements",
        description:
          "Support time also goes into performance, security and useful upgrades.",
      },
      {
        title: "Predictable cost",
        description: "Support plans make ongoing work easier to budget for.",
      },
    ],
    approachParagraphs: [
      "A product needs care after launch, just like any other asset. We start by understanding the system, its risks and what your team needs most from support.",
      "We then work through a regular rhythm of fixes, updates and improvements, and share progress clearly so you always know what has been done and what comes next.",
    ],
    ctaHeading: "Ready to keep your product running well?",
    ctaText:
      "Tell us about your current product and support needs, and we will suggest a suitable plan.",
    ctaButton: "Get in touch",
  },
  "e-commerce-solutions": {
    valueCards: [
      {
        title: "Smoother checkout",
        description:
          "Clear steps and fast pages help customers complete their purchase.",
      },
      {
        title: "Connected operations",
        description:
          "Orders, stock and customer data can move between the store and your tools.",
      },
      {
        title: "Mobile-ready shopping",
        description:
          "The store works well on phones, where most browsing happens.",
      },
      {
        title: "Room to expand",
        description:
          "New products, markets and payment options can be added as you grow.",
      },
    ],
    approachParagraphs: [
      "A successful online store makes it easy to find a product, trust the price and finish the order. We plan the catalog, storefront and checkout around those moments.",
      "We then connect payments, inventory and fulfilment so the store runs smoothly behind the scenes, with analytics that show where customers hesitate.",
    ],
    ctaHeading: "Ready to plan your online store?",
    ctaText:
      "Tell us about your products and how orders are handled today, and we will suggest a practical setup.",
    ctaButton: "Get in touch",
  },
  "landing-pages": {
    valueCards: [
      {
        title: "One clear message",
        description:
          "The page focuses on one audience, one offer and one action.",
      },
      {
        title: "Quick to launch",
        description: "A compact scope helps campaigns go live on time.",
      },
      {
        title: "Measurable results",
        description:
          "Tracking shows which messages and sections bring real responses.",
      },
      {
        title: "Reusable sections",
        description: "Proven blocks can be reused for future campaigns.",
      },
    ],
    approachParagraphs: [
      "A landing page succeeds when a visitor understands the offer within seconds and knows what to do next. We start with the audience, the promise and the action we want them to take.",
      "We then structure the page, build it responsively and connect the forms and analytics your team needs. After launch, we help you review what is working and what to test next.",
    ],
    ctaHeading: "Ready to launch your next campaign page?",
    ctaText:
      "Tell us about the offer and audience, and we will suggest a focused page structure.",
    ctaButton: "Get in touch",
  },
  "websites-with-cms": {
    valueCards: [
      {
        title: "Update without developers",
        description:
          "Your team publishes pages and articles through a simple editing screen.",
      },
      {
        title: "Consistent pages",
        description:
          "Templates keep every published page aligned with your design.",
      },
      {
        title: "Structured content",
        description:
          "Content is organised so it can be reused across pages and channels.",
      },
      {
        title: "Faster publishing",
        description: "Reviews and approvals can be built into the workflow.",
      },
    ],
    approachParagraphs: [
      "Many websites become hard to manage because every change needs a developer. We plan the content types, fields and page templates first, so editing feels natural to the people who use it.",
      "We then build the public website and connect it to the content system, and we prepare guidance so your team can publish confidently from day one.",
    ],
    ctaHeading: "Ready to make your website easier to update?",
    ctaText:
      "Tell us what your team updates most often, and we will suggest the right content structure.",
    ctaButton: "Get in touch",
  },
  "it-consulting-strategy": {
    valueCards: [
      {
        title: "Better decisions",
        description:
          "Technology choices are tied to business goals and real constraints.",
      },
      {
        title: "Clear trade-offs",
        description:
          "Options are explained in plain language, with their costs and risks.",
      },
      {
        title: "Lower risk",
        description:
          "Problems are found in a review before significant money is spent.",
      },
      {
        title: "Actionable roadmap",
        description: "You receive prioritised next steps your team can act on.",
      },
    ],
    approachParagraphs: [
      "Before committing to a large build, leaders need a clear view of what to do and why. We begin by listening to the goals, the current systems and the people who will live with the decisions.",
      "We then review the options, explain the trade-offs and turn the advice into a roadmap your team can follow, whether or not you choose us for implementation.",
    ],
    ctaHeading: "Ready to get clarity on your next technology decision?",
    ctaText:
      "Tell us the decision in front of you, and we will suggest how to approach it.",
    ctaButton: "Book a consultation",
  },
  "graphic-design": {
    valueCards: [
      {
        title: "Clear visual communication",
        description:
          "Design supports your message instead of distracting from it.",
      },
      {
        title: "Consistent brand presence",
        description: "Assets across channels follow one visual language.",
      },
      {
        title: "Ready-to-use files",
        description:
          "Final files are organised for print, web and presentations.",
      },
      {
        title: "Reusable templates",
        description: "Your team can create future materials with confidence.",
      },
    ],
    approachParagraphs: [
      "Every graphic should have a job: explain an idea, support a campaign or make a product easier to trust. We start by clarifying the audience, the message and where the asset will be used.",
      "We then explore visual directions, refine the chosen one and deliver the files and guidance your team needs to keep the work consistent.",
    ],
    ctaHeading: "Ready to create visuals that match your brand?",
    ctaText:
      "Tell us what you need to communicate and where it will appear, and we will suggest a direction.",
    ctaButton: "Get in touch",
  },
  "logo-colors": {
    valueCards: [
      {
        title: "Recognisable identity",
        description:
          "A logo and palette people can spot across every touchpoint.",
      },
      {
        title: "Practical colour use",
        description:
          "Colours are organised for both brand and interface contexts.",
      },
      {
        title: "Accessible combinations",
        description: "Colour pairings are checked for readability.",
      },
      {
        title: "Easy handoff",
        description:
          "Guidance helps internal teams and partners use the system correctly.",
      },
    ],
    approachParagraphs: [
      "A logo and colour system is the foundation of how people recognise your business. We begin by understanding the company, its audience and the impression it should leave.",
      "We explore options, refine the chosen direction and deliver a palette and usage guide that works on screens, print and everyday materials.",
    ],
    ctaHeading: "Ready to define your brand foundations?",
    ctaText:
      "Tell us about your business and audience, and we will suggest a logo and colour direction.",
    ctaButton: "Get in touch",
  },
  "social-media": {
    valueCards: [
      {
        title: "Consistent voice",
        description:
          "Posts follow a clear tone and visual style across channels.",
      },
      {
        title: "Sustainable schedule",
        description: "A practical calendar makes regular publishing realistic.",
      },
      {
        title: "Better creative",
        description:
          "Visuals and copy are planned around what your audience responds to.",
      },
      {
        title: "Learning loop",
        description: "Simple reporting shows what to keep, change or stop.",
      },
    ],
    approachParagraphs: [
      "Social media works best when it is planned around your audience and goals, not posted at random. We start by reviewing your channels, your current content and the people you want to reach.",
      "We then define content themes and a realistic rhythm, prepare the creative and review results regularly so the plan improves over time.",
    ],
    ctaHeading: "Ready to build a steadier social presence?",
    ctaText:
      "Tell us which channels matter most, and we will suggest a plan your team can sustain.",
    ctaButton: "Get in touch",
  },
  seo: {
    valueCards: [
      {
        title: "Technical foundations",
        description:
          "Search engines can crawl, understand and index your pages properly.",
      },
      {
        title: "Useful content",
        description:
          "Pages answer the questions your customers are actually asking.",
      },
      {
        title: "Clear priorities",
        description:
          "We focus on the changes most likely to make a difference.",
      },
      {
        title: "Honest reporting",
        description:
          "Progress is measured with real search data, without unrealistic promises.",
      },
    ],
    approachParagraphs: [
      "Search visibility comes from getting the basics right and then steadily improving them. We start with an audit of technical health, page structure and content against what your audience searches for.",
      "We then implement the highest-value improvements and review search data regularly, so each round of work builds on what the previous one taught us.",
    ],
    ctaHeading: "Ready to improve how customers find you?",
    ctaText:
      "Share your website and main services, and we will suggest where to start.",
    ctaButton: "Get in touch",
  },
  "bulk-email": {
    valueCards: [
      {
        title: "Reliable delivery",
        description:
          "Campaigns are set up to reach inboxes and avoid common delivery issues.",
      },
      {
        title: "Readable on every device",
        description:
          "Templates adapt to phones, tablets and desktop email clients.",
      },
      {
        title: "Organised audiences",
        description: "Lists and segments make messages more relevant.",
      },
      {
        title: "Clear results",
        description:
          "Reports show opens, clicks and other signals that guide the next send.",
      },
    ],
    approachParagraphs: [
      "Email still performs well when the message is clear and the audience is right. We begin by defining the goal of each campaign and who it should reach.",
      "We then build reusable templates, set up the sending workflow and review results after each campaign, so every send is better than the last.",
    ],
    ctaHeading: "Ready to make your email campaigns more effective?",
    ctaText:
      "Tell us who you email and why, and we will suggest a campaign setup that fits.",
    ctaButton: "Get in touch",
  },
  "digital-marketing": {
    valueCards: [
      {
        title: "Connected channels",
        description:
          "Content, search, social and email work toward the same goal.",
      },
      {
        title: "Focused effort",
        description:
          "We choose a small set of activities that suit your audience.",
      },
      {
        title: "Practical measurement",
        description: "Tracking shows what drives enquiries and sales.",
      },
      {
        title: "Continuous improvement",
        description: "Each cycle of results informs the next plan.",
      },
    ],
    approachParagraphs: [
      "Good marketing connects your message, your channels and your measurement into one plan. We begin by reviewing your goals, audience and current activity so we know what is working and what is not.",
      "We then choose a focused mix of campaigns and content, prepare the required pages and tracking, and review results in regular cycles so effort keeps moving toward real outcomes.",
    ],
    ctaHeading: "Ready to build a joined-up marketing plan?",
    ctaText:
      "Tell us your goals and current channels, and we will suggest where to focus first.",
    ctaButton: "Get in touch",
  },
};

// ---------- Legacy site content and service catalog ----------

export const SERVICES: Service[] = [
  {
    icon: "code-2",
    title: "Custom Software Development",
    desc: "Bespoke systems engineered around how your business operates.",
    tags: [".NET", "Node.js", "Java", "Python"],
  },
  {
    icon: "globe",
    title: "Web Development",
    desc: "Fast, accessible, SEO-ready websites and web applications.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    desc: "Native and cross-platform apps that feel fast on every device.",
    tags: ["React Native", "Swift", "Kotlin"],
  },
  {
    icon: "pen-tool",
    title: "UI/UX Design",
    desc: "Interfaces shaped by research and usability testing.",
    tags: ["Figma", "Design Systems"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    desc: "Infrastructure, CI/CD and monitoring that scale with your product.",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    icon: "brain-circuit",
    title: "AI & Automation",
    desc: "Practical AI features and workflow automation.",
    tags: ["LLMs", "RPA", "Data Pipelines"],
  },
];

export const WHY: WhyItem[] = [
  {
    icon: "target",
    title: "Business-Focused Solutions",
    desc: "Every technical decision is tied to a measurable business outcome.",
  },
  {
    icon: "cpu",
    title: "Modern Technology",
    desc: "We build on current, well-supported tools.",
  },
  {
    icon: "layers",
    title: "Scalable Architecture",
    desc: "Systems designed to handle growth without a rebuild.",
  },
  {
    icon: "shield-check",
    title: "Security First",
    desc: "Security is reviewed at every stage of delivery.",
  },
  {
    icon: "refresh-cw",
    title: "Agile Development",
    desc: "Short cycles, visible progress and room to adjust.",
  },
  {
    icon: "handshake",
    title: "Long-Term Partnership",
    desc: "Support, iteration and scaling after launch.",
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
    slug: "edumiles",
    title: "EduMiles",
    cat: "Travel",
    industry: "Travel",
    tech: "MongoDB · Express · React · Node.js · Redis · Kafka · Zod",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redis",
      "Kafka",
      "Zod",
    ],
    desc: "A travel platform that helps teams organize journeys and customer experiences.",
    result: "Connected travel workflows",
    color: "from-sky-500 to-cyan-400",
    challenge:
      "Journey details were spread across messages, spreadsheets and separate tools, which made it hard to keep every trip and customer update current.",
    solution: [
      "We built a connected MERN platform with a React interface, Node.js and Express services and MongoDB for flexible journey data.",
    ],
    impact: [
      "Journey planning and updates in one connected platform",
      "Event-driven updates keep related services in step",
    ],
  },
  {
    slug: "manpower-gateway",
    title: "Manpower Gateway",
    cat: "Dynamic Website",
    industry: "Dynamic Website",
    tech: "Next.js · TypeScript · MongoDB · Redis · Kafka · Zod",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Redis", "Kafka", "Zod"],
    desc: "A dynamic website experience structured around clear content and reliable workflows.",
    result: "Flexible content experience",
    color: "from-blue-500 to-indigo-500",
    challenge:
      "Page content changed often, but every update needed a developer, which slowed down how quickly the website could reflect new information.",
    solution: [
      "We built a dynamic website with Next.js and TypeScript, with content stored in MongoDB rather than hardcoded in pages.",
    ],
    impact: [
      "Pages are generated from stored content, so updates need no code changes",
      "Redis reduces repeated work for frequently requested content",
    ],
  },
  {
    slug: "zenixu",
    title: "Zenixu",
    cat: "E-commerce",
    industry: "E-commerce",
    tech: "Next.js · TypeScript · NeonDB · Redis · Kafka · Zod",
    techStack: ["Next.js", "TypeScript", "NeonDB", "Redis", "Kafka", "Zod"],
    desc: "An e-commerce experience designed around product discovery and dependable operations.",
    result: "Connected commerce foundation",
    color: "from-indigo-500 to-violet-500",
    challenge:
      "Shoppers needed to find products quickly and check out with confidence, while product and order data had to stay accurate behind the storefront.",
    solution: [
      "We built the storefront with Next.js and TypeScript, using NeonDB (serverless PostgreSQL) for product and order data.",
    ],
    impact: [
      "Storefront, data and order events work as one system",
      "Relational data keeps orders and products consistent",
    ],
  },
  {
    slug: "wifrit",
    title: "WIFRIT-HRMS",
    cat: "HR Software",
    industry: "Human Resources",
    tech: "Next.js · TypeScript · PostgreSQL · Redis · Kafka · Zod",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Zod"],
    desc: "HR management system for employee records, attendance, leave and payroll.",
    result: "HR operations in one system",
    color: "from-blue-600 to-cyan-500",
    challenge:
      "HR data was spread across spreadsheets and chats, which made leave, attendance and payroll slow and hard to track.",
    solution: [
      "We built one platform for employee records, attendance, leave approvals and payroll support.",
      "Role-based access and event-driven updates keep every module in sync.",
    ],
    impact: [
      "Employee, leave and payroll data in one place",
      "Clear approval flows for managers and HR",
    ],
  },
  {
    slug: "wifrit-lms",
    title: "WIFRIT-LMS",
    cat: "Education Software",
    industry: "Education & Training",
    tech: "Next.js · TypeScript · PostgreSQL · Redis · Zod",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Zod"],
    desc: "Learning management system to publish courses, track learners and issue certificates.",
    result: "Courses and learners in one platform",
    color: "from-violet-600 to-indigo-500",
    challenge:
      "Course content and learner records were scattered, and instructors had no easy way to see progress.",
    solution: [
      "We built a platform with a course builder, learner tracking, quizzes and automatic certificates.",
      "Separate dashboards for admins, instructors and learners keep each role focused.",
    ],
    impact: [
      "Courses organised in one platform",
      "Progress and completion visible at a glance",
    ],
  },
  {
    slug: "wifrit-erp",
    title: "WIFRIT-ERP",
    cat: "Business Software",
    industry: "Enterprise Operations",
    tech: "Next.js · TypeScript · PostgreSQL · Redis · Kafka · Zod",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Zod"],
    desc: "ERP system connecting inventory, sales, purchasing, finance and reports.",
    result: "One source of truth for operations",
    color: "from-emerald-600 to-teal-500",
    challenge:
      "Sales, stock and accounts ran in separate tools, so teams waited on manual reports to make decisions.",
    solution: [
      "We built connected modules for inventory, sales, purchasing and finance on shared live data.",
      "Kafka events keep stock, orders and invoices in sync automatically.",
    ],
    impact: [
      "Inventory, sales and finance share one data source",
      "Reports come from live data, not manual work",
    ],
  },
];

// data-extras.ts -> CASE_STUDIES object mein ye entries add karein

export const CASE_STUDIES: Record<string, CaseStudy> = {
  edumiles: {
    client: "EduMiles",
    timeline: "1 months",
    platform: "Web platform",
    team: "Wifrit",
    services: [
      "Custom Software Development",
      "Web Development",
      "API & Backend Development",
    ],
    overview: [
      "EduMiles is a travel platform built to help teams organise journeys and customer experiences in one place. Travel plans often move between messages, spreadsheets and separate tools, which makes it hard to keep every detail current.",
      "We built a connected platform on the MERN stack, with a React interface, a Node.js and Express backend and MongoDB for flexible journey data. Redis, Kafka and Zod support fast access, reliable event flow and validated data at every step.",
    ],
    challengePoints: [
      "Journey details were spread across messages, sheets and separate tools.",
      "Customer experiences depended on manual updates that were easy to miss.",
      "Growing data made it harder to keep information consistent across screens.",
    ],
    features: [
      {
        title: "Journey organisation",
        description:
          "Trip details are stored and displayed in a structure that is easy to review and update.",
      },
      {
        title: "Customer experience flow",
        description:
          "Clear screens guide users through planning and the information they need along the way.",
      },
      {
        title: "Event-driven updates",
        description:
          "Kafka carries important changes between services so related parts of the system stay in step.",
      },
      {
        title: "Fast data access",
        description:
          "Redis caches frequently requested information to keep common screens responsive.",
      },
      {
        title: "Validated input",
        description:
          "Zod checks incoming data so invalid or incomplete records are caught early.",
      },
    ],
    process: [
      {
        title: "Discovery",
        duration: "To be confirmed",
        description:
          "We mapped how journeys were planned, shared and updated today.",
      },
      {
        title: "Design",
        duration: "To be confirmed",
        description:
          "Core screens and data structures were defined around the main travel workflows.",
      },
      {
        title: "Build",
        duration: "To be confirmed",
        description:
          "The React interface, Node.js services and MongoDB models were built and tested in stages.",
      },
      {
        title: "Launch and support",
        duration: "Ongoing",
        description:
          "Release, monitoring and improvements based on how the platform is used.",
      },
    ],
    techUse: {
      React: "Interactive interface for planning and managing journeys.",
      "Node.js":
        "Backend services that handle requests, business logic and integrations.",
      Express: "API routing and middleware for the backend.",
      MongoDB: "Flexible document storage for journey and customer data.",
      Redis: "Caching for frequently accessed data.",
      Kafka: "Event streaming between services for reliable updates.",
      Zod: "Schema validation for incoming data.",
    },
    results: [
      {
        value: "Connected",
        label: "Travel workflows",
        description:
          "Journey planning and updates happen in one connected platform.",
      },
      {
        value: "Consistent",
        label: "Data across screens",
        description:
          "Shared data structures keep information aligned across the product.",
      },
    ],
    faqs: [
      {
        q: "Why MongoDB for a travel platform?",
        a: "Journey data often varies in shape from one trip to another, and a document model handles that flexibly.",
      },
      {
        q: "What does Kafka do here?",
        a: "It passes important events between services, so a change in one part of the system can reach the others reliably.",
      },
      {
        q: "How is data kept valid?",
        a: "Zod checks incoming data against defined schemas before it is saved or processed.",
      },
    ],
  },

  "manpower-gateway": {
    client: "Manpower Gateway",
    timeline: "1 months",
    platform: "Dynamic website",
    team: "Wifrit",
    services: [
      "Web Development",
      "Websites with CMS",
      "API & Backend Development",
    ],
    overview: [
      "Manpower Gateway needed a website whose content could change often without rebuilding pages each time. Static pages made every update slow, and the site had to stay clear for the people using it.",
      "We built a dynamic website with Next.js and TypeScript, backed by MongoDB. Content is loaded from data rather than hardcoded, and Redis, Kafka and Zod keep caching, events and input validation dependable.",
    ],
    challengePoints: [
      "Page content changed often, but every change needed a developer.",
      "Information shown on pages needed to stay consistent and accurate.",
      "Growing traffic and data required faster responses and reliable updates.",
    ],
    features: [
      {
        title: "Dynamic content",
        description:
          "Pages are generated from stored content, so updates do not require code changes.",
      },
      {
        title: "Structured data",
        description:
          "Content is organised in MongoDB, making it easier to reuse across pages.",
      },
      {
        title: "Typed codebase",
        description:
          "TypeScript keeps page and data logic clear and safer to change.",
      },
      {
        title: "Cached responses",
        description:
          "Redis reduces repeated work for content that is requested frequently.",
      },
      {
        title: "Validated input",
        description:
          "Zod checks submitted data before it reaches the database.",
      },
    ],
    process: [
      {
        title: "Discovery",
        duration: "To be confirmed",
        description:
          "We reviewed the content types, update frequency and the people who manage them.",
      },
      {
        title: "Design",
        duration: "To be confirmed",
        description:
          "Page templates and content structures were planned around those needs.",
      },
      {
        title: "Build",
        duration: "To be confirmed",
        description:
          "The site and content layer were developed, tested and reviewed in stages.",
      },
      {
        title: "Launch and support",
        duration: "Ongoing",
        description:
          "Release and continued improvements as content and requirements change.",
      },
    ],
    techUse: {
      "Next.js": "Dynamic pages and routing for the public website.",
      TypeScript: "Typed code for pages, data handling and components.",
      MongoDB: "Storage for content and dynamic data.",
      Redis: "Caching for frequently requested content.",
      Kafka:
        "Event flow for updates that need to reach other parts of the system.",
      Zod: "Validation for forms and incoming data.",
    },
    results: [
      {
        value: "Dynamic",
        label: "Content management",
        description: "Content can change without code changes for each update.",
      },
      {
        value: "Structured",
        label: "Data foundation",
        description:
          "Content is organised so it stays consistent across pages.",
      },
    ],
    faqs: [
      {
        q: "Can non-technical users update content?",
        a: "Content is stored as data, so updates can be made without changing the code, depending on the admin setup agreed for the project.",
      },
      {
        q: "Why Next.js for a dynamic website?",
        a: "It supports both server rendering and dynamic routes, which helps pages load quickly and stay search-friendly.",
      },
    ],
  },

  zenixu: {
    client: "Zenixu",
    timeline: "1 months",
    platform: "E-commerce web application",
    team: "Wifrit",
    services: [
      "E-commerce & Solutions",
      "Web Development",
      "API & Backend Development",
    ],
    overview: [
      "Zenixu is an e-commerce experience designed around how shoppers discover products and complete a purchase. A good storefront also needs reliable operations behind it, so product, order and customer data stay accurate.",
      "We built the storefront with Next.js and TypeScript, with NeonDB (serverless PostgreSQL) for product and order data. Redis, Kafka and Zod support caching, order events and validated input.",
    ],
    challengePoints: [
      "Product discovery needed to be quick and clear on every device.",
      "Orders and product data had to stay consistent across the store and operations.",
      "Checkout needed validated input to reduce errors.",
    ],
    features: [
      {
        title: "Product discovery",
        description:
          "Catalog pages and search are structured so shoppers can find items quickly.",
      },
      {
        title: "Clear checkout",
        description:
          "Purchase steps are kept short, with validated details at each stage.",
      },
      {
        title: "Reliable order data",
        description:
          "Orders and products are stored in a relational database with strong consistency.",
      },
      {
        title: "Order events",
        description:
          "Kafka passes order updates to the systems that need them.",
      },
      {
        title: "Fast catalog pages",
        description: "Redis caches frequently viewed product data.",
      },
    ],
    process: [
      {
        title: "Discovery",
        duration: "To be confirmed",
        description:
          "We mapped the shopper journey and the operational steps behind each order.",
      },
      {
        title: "Design",
        duration: "To be confirmed",
        description:
          "Storefront and checkout flows were planned around discovery and purchase.",
      },
      {
        title: "Build",
        duration: "To be confirmed",
        description:
          "The storefront, data layer and event flow were built and tested in stages.",
      },
      {
        title: "Launch and support",
        duration: "Ongoing",
        description:
          "Release, monitoring and improvements based on store activity.",
      },
    ],
    techUse: {
      "Next.js": "Storefront pages and routing.",
      TypeScript: "Typed code across storefront and data logic.",
      NeonDB: "Serverless PostgreSQL for product, customer and order data.",
      Redis: "Caching for catalog and frequently viewed data.",
      Kafka: "Order and inventory events between services.",
      Zod: "Validation for checkout and other input.",
    },
    results: [
      {
        value: "Connected",
        label: "Commerce foundation",
        description: "Storefront, data and order events work as one system.",
      },
      {
        value: "Reliable",
        label: "Order data",
        description:
          "Structured relational data keeps orders and products consistent.",
      },
    ],
    faqs: [
      {
        q: "Why NeonDB?",
        a: "It is a serverless PostgreSQL service, so the database scales with usage and stays familiar for relational data.",
      },
      {
        q: "How are orders kept in sync?",
        a: "Order changes are published as events, so related services can react without tight coupling.",
      },
    ],
  },

  wifrit: {
    client: "WIFRIT-HRMS",
    timeline: "Ongoing",
    platform: "Web and cloud platform",
    team: "Wifrit",
    services: [
      "Custom Software Development",
      "Web Development",
      "Cloud & DevOps",
      "API & Backend Development",
    ],
    overview: [
      "WIFRIT-HRMS is a human resource management system that brings employee records, attendance, leave, payroll and hiring into one place, so HR teams stop working across spreadsheets and chat threads.",
      "It is built with Next.js and TypeScript on the front end, PostgreSQL for employee and payroll data, and Redis, Kafka and Zod for caching, events and validation.",
    ],
    challengePoints: [
      "Employee data is spread across spreadsheets, emails and separate tools.",
      "Leave and attendance approvals are slow and hard to track.",
      "Payroll needs accurate data and a clear audit trail.",
    ],
    features: [
      {
        title: "Employee records",
        description:
          "One profile per employee with documents, roles and history.",
      },
      {
        title: "Attendance and leave",
        description:
          "Check-ins, leave requests and approvals in a single flow.",
      },
      {
        title: "Payroll support",
        description: "Salary structures and payslips built on consistent data.",
      },
      {
        title: "Role-based access",
        description:
          "Admins, managers and employees see only what they should.",
      },
      {
        title: "Event-driven updates",
        description:
          "Kafka sends changes, such as an approved leave, to every part that needs it.",
      },
    ],
    process: [
      {
        title: "Discover",
        duration: "Varies by project",
        description:
          "We study the company's HR policies, roles and approval flows.",
      },
      {
        title: "Plan",
        duration: "Varies by project",
        description: "Modules, data model and access rules are agreed upfront.",
      },
      {
        title: "Build",
        duration: "Varies by project",
        description:
          "Modules ship in short cycles with working builds at each checkpoint.",
      },
      {
        title: "Launch and support",
        duration: "Ongoing",
        description: "Rollout, training, monitoring and continued improvement.",
      },
    ],
    techUse: {
      "Next.js": "Employee portal and HR admin dashboard.",
      TypeScript: "Typed code across the product.",
      PostgreSQL: "Employee, attendance and payroll records.",
      Redis: "Caching for dashboards and session data.",
      Kafka: "Events between modules such as leave, attendance and payroll.",
      Zod: "Validation for forms and API input.",
    },
    results: [
      {
        value: "One place",
        label: "For HR data",
        description:
          "Employee, leave, attendance and payroll data in a single system.",
      },
      {
        value: "Clear",
        label: "Approval flows",
        description: "Requests and approvals are easy to track and review.",
      },
    ],
    faqs: [
      {
        q: "Can the HRMS follow our company policies?",
        a: "Yes. Leave types, approval steps and roles are configured around your policies.",
      },
      {
        q: "Do you support the product after launch?",
        a: "Yes. Ongoing support and improvements can continue after release.",
      },
    ],
  },

  "wifrit-lms": {
    client: "WIFRIT-LMS",
    timeline: "Ongoing",
    platform: "Web and cloud platform",
    team: "Wifrit",
    services: [
      "Custom Software Development",
      "Web Development",
      "UI/UX Design",
      "API & Backend Development",
    ],
    overview: [
      "WIFRIT-LMS is a learning management system for institutes, training companies and internal teams. It lets them publish courses, enrol learners, track progress and issue certificates.",
      "It is built with Next.js and TypeScript, PostgreSQL for course and learner data, Redis for fast access, and Zod for validated input.",
    ],
    challengePoints: [
      "Course content and learner records are scattered across tools.",
      "Instructors cannot easily see who is progressing and who is stuck.",
      "Assessments and certificates are handled manually.",
    ],
    features: [
      {
        title: "Course builder",
        description:
          "Create courses with modules, lessons, videos and documents.",
      },
      {
        title: "Learner tracking",
        description:
          "Progress, completion and activity visible per learner and per course.",
      },
      {
        title: "Quizzes and assessments",
        description: "Tests with automatic scoring and results.",
      },
      {
        title: "Certificates",
        description: "Certificates generated when a course is completed.",
      },
      {
        title: "Role-based access",
        description: "Separate views for admins, instructors and learners.",
      },
    ],
    process: [
      {
        title: "Discover",
        duration: "Varies by project",
        description:
          "We learn how courses are taught, assessed and certified today.",
      },
      {
        title: "Plan",
        duration: "Varies by project",
        description:
          "Course structure, roles and reporting needs are agreed upfront.",
      },
      {
        title: "Build",
        duration: "Varies by project",
        description:
          "Features ship in short cycles with working builds at each checkpoint.",
      },
      {
        title: "Launch and support",
        duration: "Ongoing",
        description:
          "Release, onboarding, monitoring and continued improvement.",
      },
    ],
    techUse: {
      "Next.js": "Learner portal and instructor dashboard.",
      TypeScript: "Typed code across the product.",
      PostgreSQL: "Courses, enrolments, scores and progress.",
      Redis: "Caching for course pages and sessions.",
      Zod: "Validation for forms, quizzes and API input.",
    },
    results: [
      {
        value: "Organised",
        label: "Learning content",
        description: "Courses and learners managed in one platform.",
      },
      {
        value: "Visible",
        label: "Learner progress",
        description: "Instructors can see progress and completion at a glance.",
      },
    ],
    faqs: [
      {
        q: "Can we use it for both students and employees?",
        a: "Yes. It works for institutes as well as internal company training.",
      },
      {
        q: "Can it issue certificates?",
        a: "Yes. Certificates can be generated automatically on course completion.",
      },
    ],
  },

  "wifrit-erp": {
    client: "WIFRIT-ERP",
    timeline: "Ongoing",
    platform: "Web and cloud platform",
    team: "Wifrit",
    services: [
      "Custom Software Development",
      "Cloud & DevOps",
      "API & Backend Development",
      "IT Consulting & Strategy",
    ],
    overview: [
      "WIFRIT-ERP is an enterprise resource planning system that connects inventory, sales, purchasing, finance and reporting, so every team works from the same live data.",
      "It uses Next.js and TypeScript for the interface, PostgreSQL for transactional data, Redis for caching, Kafka for events between modules, and Zod for validation.",
    ],
    challengePoints: [
      "Sales, stock and accounts run in separate tools that do not match.",
      "Teams wait on manual reports to make decisions.",
      "Growth makes disconnected processes harder to manage.",
    ],
    features: [
      {
        title: "Inventory management",
        description:
          "Live stock levels across items, warehouses and locations.",
      },
      {
        title: "Sales and purchasing",
        description: "Orders, invoices and supplier purchases in one flow.",
      },
      {
        title: "Finance and billing",
        description: "Invoices, payments and basic accounting records.",
      },
      {
        title: "Reports and dashboards",
        description: "Live reports built from the same shared data.",
      },
      {
        title: "Connected modules",
        description:
          "Kafka events keep stock, sales and finance in sync automatically.",
      },
    ],
    process: [
      {
        title: "Discover",
        duration: "Varies by project",
        description:
          "We map the company's departments, processes and reporting needs.",
      },
      {
        title: "Plan",
        duration: "Varies by project",
        description:
          "Modules, data model and rollout order are agreed upfront.",
      },
      {
        title: "Build",
        duration: "Varies by project",
        description: "Modules ship in phases, each tested with real workflows.",
      },
      {
        title: "Launch and support",
        duration: "Ongoing",
        description: "Phased rollout, training, monitoring and improvements.",
      },
    ],
    techUse: {
      "Next.js": "Dashboards and module interfaces.",
      TypeScript: "Typed code across all modules.",
      PostgreSQL: "Transactional data with strong consistency.",
      Redis: "Caching for reports and frequently used data.",
      Kafka: "Event streaming between inventory, sales and finance.",
      Zod: "Validation for orders, invoices and API input.",
    },
    results: [
      {
        value: "Connected",
        label: "Business modules",
        description: "Inventory, sales and finance share one source of truth.",
      },
      {
        value: "Faster",
        label: "Reporting",
        description:
          "Reports come from live data instead of manual compilation.",
      },
    ],
    faqs: [
      {
        q: "Can we start with only some modules?",
        a: "Yes. We can launch in phases, such as inventory and sales first, then add more.",
      },
      {
        q: "Can it connect with our existing tools?",
        a: "Yes. Integrations are planned through APIs during the planning stage.",
      },
    ],
  },
};

export const PROJECT_CARD_DETAILS: Record<
  string,
  { challenge: string; solution: string; impact: string[] }
> = {
  "medlink-patient-portal": {
    challenge:
      "MedLink Health was drowning in manual administrative phone calls for routine intake, appointments, and record requests.",
    solution:
      "We engineered a modern responsive application with automated scheduling.\nEncrypted data and role-based access keep the workflow safe.",
    impact: [
      "42% decrease in routine front-desk phone volume",
      "Over 120,000 monthly active patient interactions",
    ],
  },
  "cartly-commerce-engine": {
    challenge:
      "Cartly needed a smoother path from product discovery to purchase across a growing catalog and multiple fulfillment steps.",
    solution:
      "We structured a flexible storefront and checkout flow around reusable commerce components.\nConnected order data and fast interactions keep purchasing simple.",
    impact: [
      "2.1x faster checkout completion",
      "Clearer catalog-to-order workflow",
    ],
  },
  "routepilot-logistics": {
    challenge:
      "The delivery network needed better visibility into routes, fleet movement and the operational choices affecting daily fuel use.",
    solution:
      "We brought route planning and fleet tracking into one operational workflow.\nTeams can review delivery context and adjust plans more confidently.",
    impact: [
      "18% reduction in fuel costs",
      "Improved route and fleet visibility",
    ],
  },
  "voya-trip-planner": {
    challenge:
      "Travelers needed one simple place to organize itineraries and share plans, including moments when connectivity was limited.",
    solution:
      "We designed a cross-platform mobile experience around quick itinerary access.\nCollaborative sharing and offline-friendly trip information support travelers on the move.",
    impact: [
      "4.8 average app store rating",
      "Shared itineraries across devices",
    ],
  },
  "lendra-credit-dashboard": {
    challenge:
      "Loan officers were working across scattered credit signals and needed a clearer view before making lending decisions.",
    solution:
      "We organized the important signals into a focused dashboard with readable risk context.\nA focused review workflow helps loan officers make decisions faster.",
    impact: [
      "30% faster loan decisions",
      "More consistent credit-signal review",
    ],
  },
  "classly-lms": {
    challenge:
      "Instructors needed a simpler way to manage learning content while students needed a clearer path through each course.",
    solution:
      "We redesigned the learning workflow around course structure and instructor tasks.\nFocused student progress views carry the experience into the product UI.",
    impact: [
      "55% increase in course completion",
      "Clearer instructor workflow",
    ],
  },
};

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
  },
  {
    slug: "a-practical-guide-to-cutting-your-aws-bill-by-30",
    cat: "Cloud",
    title: "A Practical Guide to Cutting Your AWS Bill by 30%",
    excerpt:
      "Right-sizing, reserved capacity and overlooked defaults that quietly inflate cloud spend.",
    author: "Daniel Cho",
    date: "Aug 3, 2026",
    read: "8 min",
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
  },
  {
    slug: "designing-forms-people-actually-finish",
    cat: "UI/UX",
    title: "Designing Forms People Actually Finish",
    excerpt:
      "Field order, inline validation and error tone are worth more than visual polish.",
    author: "Marcus Webb",
    date: "Jul 19, 2026",
    read: "4 min",
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
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amelia Voss",
    role: "VP of Product",
    company: "MedLink Health",
    quote:
      "WIFRIT rebuilt our patient portal and it has held up under real hospital-scale traffic.",
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
    d: "We learn your business, users and constraints before proposing a solution.",
  },
  {
    n: "02",
    t: "Strategize",
    d: "We define scope, architecture and success metrics together.",
  },
  {
    n: "03",
    t: "Design",
    d: "Flows and prototypes are tested before development starts.",
  },
  {
    n: "04",
    t: "Develop",
    d: "Work ships in short, visible cycles with working builds.",
  },
  {
    n: "05",
    t: "Test",
    d: "We check edge cases, devices and performance before launch.",
  },
  {
    n: "06",
    t: "Launch",
    d: "We use a controlled rollout with monitoring in place.",
  },
  {
    n: "07",
    t: "Scale",
    d: "We stay available to optimize, extend and support the product.",
  },
];

export const VALUES: ValueItem[] = [
  {
    icon: "lightbulb",
    t: "Innovation",
    d: "We ship new tools only when they earn their place.",
  },
  {
    icon: "shield",
    t: "Integrity",
    d: "Honest estimates, timelines and communication.",
  },
  {
    icon: "gem",
    t: "Excellence",
    d: "Code review, testing and documentation matter.",
  },
  {
    icon: "users",
    t: "Collaboration",
    d: "Your team and ours work from the same board.",
  },
  {
    icon: "flag",
    t: "Ownership",
    d: "Every engineer treats the product as their own.",
  },
  {
    icon: "trophy",
    t: "Customer Success",
    d: "A launch is the midpoint of the relationship.",
  },
];

export const TECH = {
  Frontend: ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"],
  Backend: ["Node.js", "Express", "Java", "Spring Boot", "Python"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  Cloud: ["AWS", "Docker", "CI/CD", "Cloud Infrastructure"],
};

export const ABOUT_CONTENT = {
  eyebrow: "About WIFRIT",
  headlineStart: "Technology That Turns",
  headlineAccent: "Vision",
  headlineEnd: "Into Reality",
  storyEyebrow: "Our Story",
  storyTitle:
    "Started by engineers who were tired of rebuilding the same broken process.",
  story: [
    "WIFRIT began as a small team of engineers and designers who kept encountering the same problem: software that technically worked, but never matched how the business actually ran.",
    "We built WIFRIT to close that gap. Every engagement starts with understanding the workflow before touching a design tool or a line of code.",
    "Today we work across healthcare, fintech, logistics, travel and education, building products for teams that need a partner who ships and stays.",
  ],
  mission:
    "Use technology to simplify complex business challenges and create digital products that deliver measurable value.",
  vision:
    "Become a trusted technology partner for businesses building the future.",
  valuesEyebrow: "What We Stand For",
  valuesTitle: "Core Values",
  toolsEyebrow: "Technology Expertise",
  toolsTitle: "Tools We Build With",
};

export const FAQS: FAQ[] = [
  {
    q: "How long does a typical project take?",
    a: "Most web and software projects take 8-16 weeks from kickoff to launch, depending on scope.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. Our process can scale down for an MVP and up for complex systems.",
  },
  {
    q: "What does your pricing look like?",
    a: "We use fixed pricing for defined scopes and time-and-materials for evolving products.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We start with a codebase audit before making changes.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Ongoing support and feature work can continue after launch.",
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

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "custom-software-development",
    category: "Development",
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
    illustration: "/custom-software-development.png",
    illustrationAlt: "Custom software development illustration",
  },
  {
    slug: "web-development",
    category: "Development",
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
    illustration: "/web-devlopment.png",
    illustrationAlt: "Web development illustration",
  },
  {
    slug: "mobile-app-development",
    category: "Development",
    icon: "smartphone",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences that feel built for the device.",
    caps: [
      "iOS & Android native apps",
      "Cross-platform apps",
      "App store launch & maintenance",
    ],
    tech: "React Native, Swift, Kotlin",
    benefit: "One codebase, two platforms, and an app that still feels native.",
    illustration: "/development.png",
    illustrationAlt: "Mobile app development illustration",
  },
  {
    slug: "ui-ux-design",
    category: "Design",
    icon: "pen-tool",
    title: "UI/UX Design",
    desc: "User-centered interfaces focused on usability, aesthetics and conversion.",
    caps: [
      "User research & testing",
      "Wireframes & prototypes",
      "Design systems",
    ],
    tech: "Figma, Framer, Sketch & Adobe XD",
    benefit: "Interfaces people navigate without instructions.",
    illustration: "/ui-ux-design.png",
    illustrationAlt: "UI and UX design illustration",
  },
  {
    slug: "cloud-devops",
    category: "Development",
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
    illustration: "/cloud-devops.png",
    illustrationAlt: "Cloud and DevOps illustration",
  },
  {
    slug: "ai-automation",
    category: "Development",
    icon: "brain-circuit",
    title: "AI & Automation",
    desc: "AI-powered workflows, intelligent automation and modern AI integrations.",
    caps: ["LLM-powered features", "Workflow automation", "Data pipelines"],
    tech: "OpenAI APIs, Python, LangChain",
    benefit: "Hours of manual work removed from repeatable processes.",
    illustration: "/AI-automation.png",
    illustrationAlt: "AI automation illustration",
  },
  {
    slug: "api-backend-development",
    category: "Development",
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
    illustration: "/api-backend-development.png",
    illustrationAlt: "API and backend development illustration",
  },
  {
    slug: "maintenance-support",
    category: "Development",
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
    illustration: "/maintenance-support.png",
    illustrationAlt: "Maintenance and support illustration",
  },
    {
    slug: "brand-identify",
    category: "Design",
    icon: "fingerprint",
    title: "Brand Identity",
    desc: "A complete brand identity that makes your business recognisable and trusted at every touchpoint.",
    caps: ["Logo design", "Brand guidelines", "Typography & colour systems"],
    tech: "Figma, Adobe Illustrator, Design Systems",
    benefit: "A recognisable brand your customers trust from first sight.",
    illustration: "/development.png",
    illustrationAlt: "Brand identity illustration",
  },
  {
    slug: "e-commerce-solutions",
    category: "Development",
    icon: "layers",
    title: "E-commerce & Solutions",
    desc: "Digital commerce experiences structured around your catalog, customers and workflows.",
    caps: [
      "Catalog and storefront experiences",
      "Checkout workflows",
      "Commerce integrations",
    ],
    tech: "Next.js, React, Node.js",
    benefit: "A smoother path from product discovery to completed purchase.",
    illustration: "/e-commerce-solutions.png",
    illustrationAlt: "E-commerce illustration of a phone with shopping cart",
  },
  {
    slug: "landing-pages",
    category: "Development",
    icon: "target",
    title: "Landing Pages",
    desc: "Focused landing pages for campaigns, launches and customer journeys.",
    caps: [
      "Campaign page development",
      "Conversion-focused layouts",
      "Analytics-ready implementation",
    ],
    tech: "Next.js, React, Tailwind CSS",
    benefit: "Clearer campaigns that give visitors a focused next step.",
    illustration: "/websites-with-cms.svg",
    illustrationAlt: "Landing page illustration",
  },
  {
    slug: "websites-with-cms",
    category: "Development",
    icon: "file-text",
    title: "Websites with CMS",
    desc: "Editable websites that give your team control over content.",
    caps: ["Content modeling", "Editorial workflows", "Responsive publishing"],
    tech: "Next.js, Headless CMS, TypeScript",
    benefit: "Faster content updates with a consistent digital experience.",
    illustration: "/websites-with-cms.svg",
    illustrationAlt: "Content management system website illustration",
  },
  {
    slug: "it-consulting-strategy",
    category: "Development",
    icon: "telescope",
    title: "IT Consulting & Strategy",
    desc: "Practical technical direction for product decisions and modernization.",
    caps: ["Technical discovery", "Architecture reviews", "Delivery planning"],
    tech: "Architecture, Cloud, Product Strategy",
    benefit: "More confident decisions before significant build investment.",
  },
  {
    slug: "graphic-design",
    category: "Design",
    icon: "gem",
    title: "Graphic Design",
    desc: "Clear visual systems and assets for a consistent brand presence.",
    caps: ["Visual direction", "Marketing assets", "Brand collateral"],
    tech: "Figma, Adobe Creative Cloud, Webflow",
    benefit: "A more consistent visual language across customer touchpoints.",
    illustration: "/graphic-designer.webp",
    illustrationAlt: "Graphic design illustration",
  },
  {
    slug: "logo-colors",
    category: "Design",
    icon: "sparkles",
    title: "Logo & Colors",
    desc: "Foundational brand elements that make your product recognizable.",
    caps: ["Logo concepts", "Color systems", "Usage guidance"],
    tech: "Figma, Design Systems, VistaPrint Logomaker, LogoDesign.Net",
    benefit: "Brand foundations your team can use consistently.",
    illustration: "/logo-colors.png",
    illustrationAlt: "Logo and color design illustration",
  },
  {
    slug: "social-media",
    category: "Digital Marketing",
    icon: "users",
    title: "Social Media",
    desc: "Structured social content and creative direction for your digital presence.",
    caps: ["Content planning", "Creative direction", "Channel systems"],
    tech: "Content Strategy, Analytics",
    benefit:
      "A more consistent presence across the channels your audience uses.",
    illustration: "/social-media.png",
    illustrationAlt: "Social media marketing illustration",
  },
  {
    slug: "seo",
    category: "Digital Marketing",
    icon: "search",
    title: "SEO",
    desc: "Technical and content foundations that help customers find your website.",
    caps: ["Technical audits", "On-page optimization", "Search reporting"],
    tech: "SEO, Analytics, Search Console",
    benefit: "More discoverable pages with a stronger technical foundation.",
    illustration: "/seo.svg",
    illustrationAlt: "Search engine optimization illustration",
  },
  {
    slug: "bulk-email",
    category: "Digital Marketing",
    icon: "mail",
    title: "Bulk Email",
    desc: "Campaign email systems designed for clear communication and measurement.",
    caps: ["Campaign setup", "Template systems", "Performance tracking"],
    tech: "Email Platforms, HTML, Analytics",
    benefit: "More reliable campaign delivery and clearer engagement signals.",
    illustration: "/bulk-email.png",
    illustrationAlt: "Bulk email marketing illustration",
  },
  {
    slug: "digital-marketing",
    category: "Digital Marketing",
    icon: "trending-up",
    title: "Digital Marketing",
    desc: "Connected digital campaigns that bring content, channels and measurement together.",
    caps: [
      "Campaign planning",
      "Channel coordination",
      "Performance measurement",
    ],
    tech: "Analytics, Content, Paid Media",
    benefit: "A more joined-up approach to reaching and converting customers.",
    illustration: "/digital-marketing.png",
    illustrationAlt: "Digital marketing illustration",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "where-ai-actually-belongs-in-your-product-roadmap",
    title: "Where AI Actually Belongs in Your Product Roadmap",
    cat: "AI",
    excerpt:
      "Most AI features fail not because the model is weak, but because the problem was never worth solving with AI.",
    intro:
      "Every few years a new technology arrives and teams rush to add it to existing products. AI is no different. Most AI features that fail do not fail because the model is weak. They fail because nobody checked whether the problem needed AI at all.",
    author: "Rhea Malhotra",
    authorRole: "Engineering Lead",
    authorInitials: "RM",
    date: "Aug 12, 2026",
    read: "6 min",
    featured: true,
    sections: [
      {
        heading: "Where teams usually go wrong",
        paragraphs: [
          "Most delays come from unclear ownership rather than technical difficulty. A feature is started before anyone has agreed who signs off on the scope, the data it uses, or the result that counts as success.",
          "Before writing a scope document or tuning a prompt, we ask two questions: who approves each decision, and is the user's need probabilistic or deterministic?",
        ],
      },
      {
        heading: "Deterministic work does not need a language model",
        paragraphs: [
          "If a user needs an exact answer, such as calculating tax, sorting a grid or applying a fixed business rule, a language model adds risk. It can produce wrong answers, respond slowly and cost more per request than a simple calculation.",
        ],
      },
      {
        heading: "Where AI is genuinely useful",
        paragraphs: [
          "AI works well with unstructured information. It can draft summaries, sort messy free-text submissions into categories and pull structured details out of long documents.",
        ],
        bullets: [
          "Summarising long documents or conversations",
          "Categorising free-text requests",
          "Extracting fields from unstructured files",
        ],
      },
      {
        heading: "What we recommend instead",
        paragraphs: [
          "Start with a short discovery sprint that produces a written scope, an architecture outline and clear success criteria. It takes time at the start, but it removes one of the biggest causes of budget overruns later.",
        ],
      },
    ],
    takeaways: [
      "Decide who owns the decision before writing code.",
      "Use normal logic for exact, rule-based work.",
      "Use AI where the input is messy and the output can be reviewed.",
    ],
    tags: ["AI", "Product strategy", "Roadmap"],
    relatedSlugs: [
      "the-case-for-boring-technology",
      "how-to-brief-a-software-vendor-without-wasting-six-weeks",
    ],
  },
  {
    slug: "a-practical-guide-to-cutting-your-aws-bill-by-30",
    title: "A Practical Guide to Cutting Your AWS Bill by 30%",
    cat: "Cloud",
    excerpt:
      "Right-sizing, reserved capacity and overlooked defaults that quietly inflate cloud spend.",
    intro:
      "Cloud bills tend to grow quietly. A resource is created for a test, a database is sized for a launch that happened two years ago, and nobody removes the things that are no longer used. This guide covers the checks that usually find savings first.",
    author: "Daniel Cho",
    authorRole: "Cloud Engineer",
    authorInitials: "DC",
    date: "Aug 3, 2026",
    read: "8 min",
    sections: [
      {
        heading: "Start by auditing idle resources",
        paragraphs: [
          "The first step is finding what is running but not doing useful work. Common examples include unattached storage volumes, old snapshots, and load balancers with no traffic.",
        ],
        bullets: [
          "Unattached EBS volumes",
          "Old snapshots and unused machine images",
          "Idle load balancers and unused IP addresses",
        ],
      },
      {
        heading: "Right-size oversized databases and servers",
        paragraphs: [
          "Databases and servers are often sized for peak load that rarely happens. If a database instance has very low CPU use over several weeks, a smaller size may handle the same work.",
          "Check utilisation over a full business cycle before resizing, so month-end or seasonal peaks are not missed.",
        ],
      },
      {
        heading: "Watch network costs",
        paragraphs: [
          "Traffic routed through a NAT Gateway is billed per gigabyte. Where services only need to reach AWS resources, VPC endpoints can keep that traffic private and often reduce cost.",
        ],
      },
      {
        heading: "Use commitments and newer instance types",
        paragraphs: [
          "For steady workloads, reserved capacity or savings plans reduce the hourly rate. Newer processor families, such as Graviton instances, can also deliver the same work for less, often with little or no code change.",
          "Based on our experience, these changes typically bring a meaningful reduction within the first billing cycle. Results depend on the workload, so measure before and after each change.",
        ],
      },
    ],
    takeaways: [
      "Remove idle resources first; it is the fastest saving.",
      "Resize only after checking utilisation over a full cycle.",
      "Commit to capacity only for workloads that are stable.",
    ],
    tags: ["AWS", "Cost optimisation", "Cloud"],
    relatedSlugs: [
      "why-we-moved-every-new-project-to-the-app-router",
      "native-vs-cross-platform-in-2026-a-decision-framework",
    ],
  },
  {
    slug: "why-we-moved-every-new-project-to-the-app-router",
    title: "Why We Moved Every New Project to the App Router",
    cat: "Web Development",
    excerpt:
      "Server components changed how we think about data fetching, loading states and bundle size.",
    intro:
      "Over the past year we moved every new web project to the App Router in Next.js. The change is not only about routing. It changes where code runs, how data is loaded and how much JavaScript reaches the browser.",
    author: "Priya Nair",
    authorRole: "Frontend Engineer",
    authorInitials: "PN",
    date: "Jul 27, 2026",
    read: "5 min",
    sections: [
      {
        heading: "Server components reduce what the browser loads",
        paragraphs: [
          "React Server Components let heavy logic and dependencies stay on the server. Only the interactive parts of a page are sent to the browser as client code.",
          "In our projects this has meaningfully reduced the JavaScript needed for the first page load, which helps people on slower mobile connections.",
        ],
      },
      {
        heading: "Data fetching becomes simpler",
        paragraphs: [
          "Components can fetch the data they need directly on the server. This removes many small client-side requests and the loading logic that used to go with them.",
        ],
      },
      {
        heading: "Streaming keeps pages responsive",
        paragraphs: [
          "Suspense boundaries let a page show its main content while slower sections are still loading. Users see something useful sooner, and the layout does not jump around as each part arrives.",
        ],
      },
      {
        heading: "What to watch for",
        paragraphs: [
          "The model takes time to learn. Teams need to be clear about which components run on the server and which run in the browser. Without that clarity, code becomes harder to reason about.",
        ],
      },
    ],
    takeaways: [
      "Keep heavy dependencies on the server.",
      "Fetch data close to where it is shown.",
      "Use streaming so users see content sooner.",
    ],
    tags: ["Next.js", "React", "Performance"],
    relatedSlugs: [
      "designing-forms-people-actually-finish",
      "a-practical-guide-to-cutting-your-aws-bill-by-30",
    ],
  },
  {
    slug: "designing-forms-people-actually-finish",
    title: "Designing Forms People Actually Finish",
    cat: "UI/UX",
    excerpt:
      "Field order, inline validation and error tone are worth more than visual polish.",
    intro:
      "A form is often the last step between a visitor and a customer, yet many forms are built without much thought. Each extra field and each confusing error message gives people a reason to leave.",
    author: "Marcus Webb",
    authorRole: "Product Designer",
    authorInitials: "MW",
    date: "Jul 19, 2026",
    read: "4 min",
    sections: [
      {
        heading: "Ask only for what you need",
        paragraphs: [
          "Every field should have a clear purpose. Before adding one, ask whether the team will use the answer in the next step. If not, remove it or ask for it later.",
        ],
      },
      {
        heading: "Group related questions",
        paragraphs: [
          "Fields that belong together, such as name and contact details or address parts, should sit near each other with clear labels. This makes the form feel shorter and easier to follow.",
        ],
      },
      {
        heading: "Validate while people type",
        paragraphs: [
          "Inline validation tells people about a problem as soon as it happens, instead of after they press submit. Show what is expected, not only what went wrong.",
        ],
        bullets: [
          "Show the expected format, such as a date pattern, near the field",
          "Mark required fields clearly",
          "Keep entered data when an error occurs",
        ],
      },
      {
        heading: "Write errors in a calm, specific tone",
        paragraphs: [
          "An error message should say what to change. 'Enter a phone number with 10 digits' helps more than 'Invalid input'. A calm tone keeps the person willing to finish.",
        ],
      },
    ],
    takeaways: [
      "Remove fields that the next step does not use.",
      "Validate early and say what the correct input looks like.",
      "Use the right keyboard type on mobile.",
    ],
    tags: ["UX", "Forms", "Conversion"],
    relatedSlugs: [
      "why-we-moved-every-new-project-to-the-app-router",
      "the-case-for-boring-technology",
    ],
  },
  {
    slug: "how-to-brief-a-software-vendor-without-wasting-six-weeks",
    title: "How to Brief a Software Vendor Without Wasting Six Weeks",
    cat: "Business",
    excerpt:
      "The five things a scoping call needs before anyone writes an estimate.",
    intro:
      "Many projects lose weeks at the start, not because the work is hard, but because the first conversation did not give the vendor enough to work with. A clear brief makes estimates more accurate and the first milestone easier to reach.",
    author: "Rhea Malhotra",
    authorRole: "Engineering Lead",
    authorInitials: "RM",
    date: "Jul 8, 2026",
    read: "7 min",
    sections: [
      {
        heading: "The five things a scoping call needs",
        paragraphs: [
          "Bring these five points to the first call. They do not need to be perfect, but having them ready saves a lot of back-and-forth.",
        ],
        bullets: [
          "The business outcome you want, in one or two sentences",
          "The main constraints, such as budget range, deadline or compliance rules",
          "The systems the product must connect to",
          "The main people who will use the product, and what they need to do",
          "The target launch window and any fixed events it must meet",
        ],
      },
      {
        heading: "Constraints help, not hurt",
        paragraphs: [
          "Engineers can suggest better options when they know the limits. A clear budget or deadline often leads to a simpler first release, which is usually the better outcome.",
        ],
      },
      {
        heading: "What a good estimate looks like",
        paragraphs: [
          "A reliable estimate lists what is included, what is not, and the assumptions behind the timeline. If a vendor gives a number before a discovery phase, ask which assumptions it depends on.",
        ],
      },
    ],
    takeaways: [
      "Prepare the business outcome before the first call.",
      "Share constraints openly.",
      "Ask what each estimate assumes.",
    ],
    tags: ["Business", "Vendor selection", "Planning"],
    relatedSlugs: [
      "where-ai-actually-belongs-in-your-product-roadmap",
      "native-vs-cross-platform-in-2026-a-decision-framework",
    ],
  },
  {
    slug: "native-vs-cross-platform-in-2026-a-decision-framework",
    title: "Native vs Cross-Platform in 2026: A Decision Framework",
    cat: "Mobile",
    excerpt:
      "It rarely comes down to performance anymore. Here is what it actually comes down to.",
    intro:
      "The question of native versus cross-platform comes up in almost every mobile project. Performance used to be the main concern. In most apps today it is no longer the deciding factor, so the choice depends on other things.",
    author: "Daniel Cho",
    authorRole: "Cloud Engineer",
    authorInitials: "DC",
    date: "Jun 30, 2026",
    read: "6 min",
    sections: [
      {
        heading: "Performance is rarely the deciding factor",
        paragraphs: [
          "Modern compilers and graphics acceleration have narrowed the gap between native and cross-platform frameworks for most business apps. The difference is seldom what users notice day to day.",
        ],
      },
      {
        heading: "Look at device features first",
        paragraphs: [
          "If the app depends heavily on specific hardware, such as Bluetooth devices, advanced sensors or platform-specific background tasks, check how well each option supports them before deciding.",
        ],
      },
      {
        heading: "Consider your team and your roadmap",
        paragraphs: [
          "Existing skills, the number of platforms you need, and how often you will ship updates all matter. One shared codebase can simplify a small team's workload, while separate native apps may suit teams with specialists on each platform.",
        ],
        bullets: [
          "Existing team skills in JavaScript, Swift or Kotlin",
          "Number of platforms and how quickly they must stay in step",
          "Need for platform-specific design and gestures",
          "Long-term maintenance capacity",
        ],
      },
      {
        heading: "A simple way to decide",
        paragraphs: [
          "Write down the three features the app must do well in its first release. If those features rely on deep platform integration, lean native. If they are mostly screens, data and standard device features, a cross-platform approach is often a good fit.",
        ],
      },
    ],
    takeaways: [
      "Performance usually does not decide the question.",
      "Check hardware and platform features early.",
      "Choose based on the team and the first release.",
    ],
    tags: ["Mobile", "React Native", "Swift", "Kotlin"],
    relatedSlugs: [
      "how-to-brief-a-software-vendor-without-wasting-six-weeks",
      "a-practical-guide-to-cutting-your-aws-bill-by-30",
    ],
  },
  {
    slug: "the-case-for-boring-technology",
    title: "The Case for Boring Technology",
    cat: "Technology",
    excerpt:
      "Novelty is a cost. Spend your team's innovation budget where it matters.",
    intro:
      "New tools appear every month, and each one promises to make development faster. But every new tool also has to be learned, monitored, secured and maintained. That cost is easy to underestimate.",
    author: "Marcus Webb",
    authorRole: "Product Designer",
    authorInitials: "MW",
    date: "Jun 21, 2026",
    read: "5 min",
    sections: [
      {
        heading: "Mature tools have known failure modes",
        paragraphs: [
          "Well-established databases and runtimes have years of documented problems and solutions. When something goes wrong at 2 a.m., the team can usually find an answer quickly.",
        ],
      },
      {
        heading: "Monitoring and hiring are easier",
        paragraphs: [
          "Mature technology has mature monitoring tools, documentation and people who know how to use it. That makes onboarding simpler and reduces the risk of depending on one person's knowledge.",
        ],
      },
      {
        heading: "Spend innovation where it differentiates you",
        paragraphs: [
          "Every product has a part that makes it valuable to its customers. Put new ideas, custom logic and experimentation there. Use proven tools for everything else, such as storage, authentication and deployment.",
        ],
        bullets: [
          "Use established databases for core data",
          "Use managed services for infrastructure that is not unique to you",
          "Build custom only where your customers see the difference",
        ],
      },
    ],
    takeaways: [
      "Every new tool has an ongoing cost.",
      "Choose proven tools for the foundation.",
      "Save new ideas for what makes your product different.",
    ],
    tags: ["Engineering", "Architecture", "Strategy"],
    relatedSlugs: [
      "designing-forms-people-actually-finish",
      "where-ai-actually-belongs-in-your-product-roadmap",
    ],
  },
];

export const SERVICE_PAGE_CONTENT: Record<string, ServicePageContent> =
  Object.fromEntries(
    SERVICE_DETAILS.map((service) => {
      const extras = SERVICE_EXTRAS[service.slug!];
      const valueCards = extras?.valueCards ?? [];
      return [
        service.slug,
        {
          overview: extras?.approachParagraphs?.join(" ") ?? service.desc,
          whatWeDeliver: service.caps,
          keyCapabilities: valueCards.slice(0, 4).map((card) => ({
            title: card.title,
            description: card.description,
          })),
          technologies: service.tech.split(", "),
          technologyStackDetails: service.tech.split(", ").map((name) => {
            const info = getTechInfo(name);
            return {
              name,
              whyWeUse:
                info?.whyWeUse ??
                `Selected to support the needs of this ${service.title.toLowerCase()} engagement.`,
              role:
                info?.purpose ??
                "Supports the implementation and ongoing operation of the solution.",
              technicalBenefits: info?.benefits ?? [],
              businessBenefit: `Helps keep the ${service.title.toLowerCase()} solution practical, maintainable and aligned with your goals.`,
            };
          }),
          goodFitForDetails: valueCards.slice(0, 3).map((card) => ({
            title: card.title,
            description: card.description,
          })),
          businessValue:
            `${service.benefit} ${extras?.approachParagraphs?.join(" ") ?? ""}`.trim(),
          process: [
            {
              title: "Discovery",
              description: "We understand your goals, users and constraints.",
            },
            {
              title: "Plan",
              description: "We define a focused path and clear priorities.",
            },
            {
              title: "Build",
              description:
                "We develop and review the work in practical cycles.",
            },
            {
              title: "Launch and support",
              description:
                "We prepare the release and stay available for next steps.",
            },
          ],
          idealFor: valueCards.slice(0, 3).map((card) => card.title),
          faqs: [
            {
              question: `What does ${service.title} include?`,
              answer: service.desc,
            },
            {
              question: "How do we get started?",
              answer:
                "Start with a conversation about your goals and current workflow so we can suggest a practical next step.",
            },
          ],
        } satisfies ServicePageContent,
      ];
    }),
  );
