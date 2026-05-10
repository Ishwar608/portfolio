import type { CertificateItem, EducationItem, ExperienceRole, Project } from "@/types/cv";

export const person = {
  fullName: "Ishwar Suthar",
  title: "Full Stack Developer",
  headline:
    "Full stack developer with 3+ years building performant product UIs and scalable backends.",
  email: "me.ishwarsuthar@gmail.com",
  phone: "+91 77348 32608",
  location: "Vadodara, Gujarat, India",
  addressLine: "B179, Sayaji Township, BHD Estate, New VIP Road, Vadodara — 390019",
  linkedinUrl: "https://www.linkedin.com/in/ishwar-suthar/",
  githubUrl: "https://github.com/Ishwar6",
} as const;

export const professionalSummary = [
  "Full stack developer experienced across React.js, Next.js, Node.js, NestJS, and MongoDB.",
  "Comfortable owning responsive interfaces with Tailwind CSS and mature component systems, pairing them with pragmatic backend design and observable operations.",
  "Shipped workloads on AWS (Lambda, S3, API Gateway) with CI/CD automation and a focus on performance, reliability, and maintainability.",
] as const;

export const experiences: readonly ExperienceRole[] = [
  {
    title: "Associate Software Engineer",
    company: "Digiflux Technologies",
    location: "Vadodara, Gujarat",
    period: "Mar 2024 – Present",
    bullets: [
      "Optimized React/Next components, reducing page load times ~35% and improving Core Web Vitals.",
      "Improved NestJS + MongoDB performance through query optimization, cutting typical API latency ~40%.",
      "Deployed and scaled services on AWS (Lambda, S3, API Gateway) with strong uptime across traffic growth.",
      "Automated CI/CD to move releases from weekly to daily while tightening quality gates.",
      "Reduced production defects ~25% through reusable UI primitives and structured code review.",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Rockers Technology",
    location: "Vadodara, Gujarat",
    period: "May 2023 – Feb 2024",
    bullets: [
      "Built responsive, production UIs using React.js, Redux, and Bootstrap across multiple products.",
      "Accelerated delivery with reusable components and dependable cross-team collaboration.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Redux Toolkit",
      "Redux Saga",
      "TanStack Query",
      "SWR",
      "Tailwind CSS",
      "Bootstrap",
      "React Bootstrap",
      "SCSS",
      "Chakra UI",
      "shadcn/ui",
    ],
  },
  {
    label: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs"],
  },
  {
    label: "Data",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    label: "Forms & DX",
    skills: ["React Hook Form", "Formik"],
  },
  {
    label: "Cloud & Delivery",
    skills: ["AWS (Lambda, S3, API Gateway)", "Git", "GitLab", "Bitbucket", "Jira", "CI/CD"],
  },
  {
    label: "Collaboration & AI tooling",
    skills: ["Cursor AI", "GitHub Copilot"],
  },
] as const;

export const projects: readonly Project[] = [
  {
    name: "Listing IQ powered by Zikhara",
    subtitle: "Amazon listing automation & Pricing IQ · Zikhara AI",
    links: {
      product: "https://www.zikhara.ai/",
      app: "https://beta.zikhara.ai/login?redirectTo=%2Fpricing-iq",
    },
    bullets: [
      "Listing IQ is part of Zikhara AI’s Amazon listing suite: sellers connect Seller Central to generate compliant copy and visuals (including New Listing, Enhance Listing, and A+ content), optimize for conversions, then review and publish at scale.",
      "The public product narrative centers on compliant automation, stronger keyword capture, clearer conversion levers, and replacing slow manual or agency-heavy listing work.",
      "Engineering spans the authenticated app (including Pricing IQ in beta via the beta login/deep links) backed by Express + Mongo services and multimodal AI integrations.",
    ],
    stack: [
      "Next.js 15 · App Router · React 19 · TypeScript",
      "TanStack Query · TanStack Store",
      "Tailwind CSS 4 · Radix UI · shadcn patterns · next-themes",
      "React Hook Form · Zod · axios · i18next",
      "Node.js · Express (ESM)",
      "MongoDB · Mongoose",
      "OpenAI · Google Generative AI · Replicate · Creatomate",
      "Creatomate",
      "AWS SDK · Serverless (Serverless Framework deploy)",
      "Stripe · Razorpay · PostHog",
    ],
  },
  {
    name: "Zikara AI",
    subtitle: "AI SaaS for branded creative output",
    stack: [
      "Next.js 13",
      "Redux-Saga",
      "Context API",
      "Chakra UI",
      "Node.js",
      "Express.js",
      "GPT",
      "Replicate",
      "Freepik API",
      "Creatomate",
    ],
    bullets: [
      "Shipped an AI-powered SaaS that generates branded graphics, images, and videos in under 30 seconds.",
      "Integrated model and vendor APIs (GPT, Replicate, Freepik) behind reliable Node/Express services.",
      "Improved rendering performance and UX with a responsive Next.js UI and disciplined state management.",
    ],
  },
  {
    name: "Streetgains",
    subtitle: "Fintech research & trading platform",
    stack: ["Next.js", "React", "Node.js", "NestJS", "MongoDB", "AWS", "Tailwind CSS"],
    bullets: [
      "Built high-performance modules for research, subscriptions, dashboards, and engagement flows.",
      "Improved speed, SEO, and Core Web Vitals through focused frontend optimization.",
    ],
  },
  {
    name: "PEC Priority Sheets",
    subtitle: "Trello-inspired work management",
    stack: ["React.js", "Redux-Saga", "Theme UI", "SSE", "Node.js"],
    bullets: [
      "Delivered project, stage, and task views with real-time progress tracking.",
      "Used Redux-Saga for complex async flows and SSE-friendly update patterns.",
    ],
  },
  {
    name: "Real Estate Crowdfunding",
    subtitle: "Campaigns, pledges, and investor UX",
    stack: ["React", "SWR", "Redux-Saga", "React Bootstrap", "React Hook Form"],
    bullets: [
      "Led responsive UI work for crowdfunding flows end-to-end.",
      "Reduced form friction with React Hook Form and resilient data syncing via SWR.",
    ],
  },
  {
    name: "Donation Crowdfunding Platform",
    subtitle: "Campaign goals, donations, and trust UX",
    stack: ["React", "SWR", "Redux-Saga", "Tailwind CSS", "React Hook Form"],
    bullets: [
      "Built resilient campaign and donation journeys with Tailwind-backed UI polish.",
      "Improved perceived performance with selective SWR caches and Saga-orchestrated workflows.",
    ],
  },
];

export const education: readonly EducationItem[] = [
  {
    institution: "Janardan Rai Nagar Vidhyapeeth University",
    degree: "MCA — Masters in Computer Application",
    period: "2019 – 2022",
  },
  {
    institution: "Aachary Shree Mahapragya Institute of Excellence (MDSU)",
    degree: "BCA — Bachelor's in Computer Application",
    period: "2017 – 2019",
  },
];

export const certificates: readonly CertificateItem[] = [
  { name: "Front-End Development with React JS", date: "Mar 2023" },
  { name: "AWS Certified Cloud", date: "Oct 2025" },
  { name: "Full Stack Development (MERN stack)", date: "Mar 2024" },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Fluent" },
] as const;
