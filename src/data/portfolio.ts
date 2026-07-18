import { PortfolioData } from "@/types/portfolio";
import {
  siReact,
  siTypescript,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siPostgresql,
  siMongodb,
  siDocker,
} from "simple-icons";

export const SKILLS = [
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siDocker,
  siMongodb,
  siPostgresql,
];

export const data: PortfolioData = {
  name: "Aniket Kumar",
  title: "Full Stack Developer",
  bio: "I build high-performance, scalable web applications using TypeScript, Next.js, and Node.js. Experienced in migrating complex systems to modern stacks and architecting AI-integrated workflows.",
  about: [
    "Software Engineer with a focus on high-velocity development and performance optimization.",
    "Specialized in Next.js, React Native, and robust backend architectures with a track record of reducing load times by 90%.",
    "Currently pursuing a Bachelor of Technology in Computer Science and Engineering.",
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1LzQfyG3PJ6vKXB64iOUe-wU8_uuPG1rV/view",
  email: "aniketkumar8x@gmail.com",
  calUrl: "",
  location: "Noida, UP",
  timezone: "GMT+5:30",
  website: "https://aniketxz.dev",
  phone: "+91 950 823 6050",
  quote: {
    text: "I'm a very neat monster.",
    author: "Dexter Morgan",
  },
  social: {
    twitter: "https://twitter.com/aniketxz",
    linkedin: "https://linkedin.com/in/aniketxz",
    github: "https://github.com/aniketxz",
  },
  githubUsername: "aniketxz",
  techStack: [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", iconKey: "siTypescript" },
        { name: "JavaScript", iconKey: "siJavascript" },
        { name: "HTML", iconKey: "siHtml5" },
        { name: "CSS", iconKey: "siCss" },
        { name: "SQL", iconKey: "" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", iconKey: "siReact" },
        { name: "Next.js", iconKey: "siNextdotjs" },
        { name: "Tailwind CSS", iconKey: "siTailwindcss" },
        { name: "Expo", iconKey: "siExpo" },
        { name: "Tanstack", iconKey: "siTanstack" },
        { name: "Redux", iconKey: "siRedux" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", iconKey: "siNodedotjs" },
        { name: "Express", iconKey: "siExpress" },
        { name: "RabbitMQ", iconKey: "siRabbitmq" },
        { name: "Drizzle", iconKey: "siDrizzle" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", iconKey: "siPostgresql" },
        { name: "MongoDB", iconKey: "siMongodb" },
        { name: "Redis", iconKey: "siRedis" },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", iconKey: "siDocker" },
        { name: "Git", iconKey: "siGit" },
        { name: "GitHub", iconKey: "siGithub" },
        { name: "GitHub Actions", iconKey: "siGithubactions" },
        { name: "Vercel", iconKey: "siVercel" },
      ],
    },
    {
      category: "AI & Tools",
      items: [
        { name: "Claude", iconKey: "siClaude" },
        { name: "Cursor", iconKey: "siCursor" },
        { name: "Bash", iconKey: "siGnubash" },
        { name: "Antigravity CLI", iconKey: "" },
      ],
    },
    {
      category: "Learning",
      items: [
        { name: "LangGraph", iconKey: "siLanggraph" },
        { name: "System Design", iconKey: "" },
        { name: "Accessibility", iconKey: "" },
      ],
    },
  ],
  experience: [
    {
      company: "Makunai Global",
      role: "Frontend Developer Intern",
      period: "Dec 2025 – Feb 2026",
      location: "Noida, India",
      skills: ["Next.js", "React", "SSR", "SEO"],
      highlights: [
        "Spearheaded a migration of 25+ landing pages to Next.js within a 4-day deadline.",
        "Achieved a 90% reduction in initial page load times, from 6s down to 500ms.",
        "Optimized Core Web Vitals using SSR and static generation for high-performance SEO.",
      ],
    },
    {
      company: "Magnifier Solutions",
      role: "Software Developer Intern",
      period: "Aug 2025 – Oct 2025",
      location: "Remote",
      skills: ["Node.js", "Express", "JWT", "Bcrypt"],
      highlights: [
        "Architected a secure Node.js backend with 4-tier Role-Based Access Control (RBAC).",
        "Refactored an AI-generated prototype into a modular, layered architecture to improve maintainability.",
        "Implemented JWT access/refresh token rotation and OTP-based authentication.",
      ],
    },
  ],
  education: [
    {
      institution: "Dr. APJ Abdul Kalam Techincal University",
      degree: "B.Tech in Computer Science & Engineering",
      grade: "7.6 CGPA",
      period: "2022 - 2026",
      location: "Ghaziabad, UP, India",
      highlights: [
        "Relevant coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks.",
        "Built multiple full-stack projects as part of coursework and personal learning.",
      ],
    },
  ],
  projects: [
    {
      name: "Nodebase AI Integration",
      description:
        "A visual workflow builder using React Flow and Inngest for fault-tolerant, multi-step LLM workflows.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      tags: [
        "Next.js",
        "React Flow",
        "tRPC",
        "Prisma",
        "Inngest",
        "PostgreSQL",
      ],
      url: "https://github.com/aniketxz",
    },
    {
      name: "Seeker",
      description:
        "Interactive video learning interface with real-time milestone tracking and Stripe payment integration.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      tags: ["React.js", "Node.js", "MongoDB", "Clerk", "Stripe"],
      url: "https://github.com/aniketxz",
    },
    {
      name: "Logbook",
      description:
        "Content creation platform featuring rich-text authoring and optimized client-side data fetching.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      tags: ["React.js", "Node.js", "TanStack Query", "ImageKit", "MongoDB"],
      url: "https://github.com/aniketxz",
    },
  ],
  blogs: [
    {
      title: "How I Ship Faster",
      description: "My workflow for rapid iteration without breaking things.",
      tags: ["productivity", "engineering"],
      date: "Jan 2024",
      url: "https://blog.example.com/ship-faster",
    },
    {
      title: "TypeScript Tips for React",
      description: "Patterns I use daily to get the most out of TS.",
      tags: ["typescript", "react"],
      date: "Dec 2023",
      url: "https://blog.example.com/ts-react",
    },
  ],
};
