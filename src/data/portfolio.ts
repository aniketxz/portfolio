import { PortfolioData } from "@/types/portfolio";
import {
  siReact,
  siJavascript,
  siTypescript,
  siNextdotjs,
  siTailwindcss,
} from "simple-icons";

export const SKILLS = [
  siReact,
  siJavascript,
  siTypescript,
  siNextdotjs,
  siTailwindcss,
];

export const data: PortfolioData = {
	name: "Aniket",
	title: "Full Stack Web Developer",
	bio: "I build high-performance, scalable web applications using TypeScript, Next.js, and Node.js. Experienced in migrating complex systems to modern stacks and architecting AI-integrated workflows.",
	about: [
		"Software Engineer with a focus on high-velocity development and performance optimization.",
		"Specialized in Next.js, React Native, and robust backend architectures with a track record of reducing load times by 90%.",
		"Currently pursuing a Bachelor of Technology in Computer Science and Engineering.",
	],
	resumeUrl: "https://github.com/aniketxz",
	email: "aniketkumar8x@gmail.com",
	calUrl: "",
	quote: {
		text: "Engineered a fault-tolerant background execution engine... delivering real-time status updates via WebSockets.",
		author: "Aniket Kumar Mahato",
	},
	social: {
		twitter: "",
		linkedin: "https://linkedin.com/in/aniket-kumar-mahato",
		github: "https://github.com/aniketxz",
	},
	githubUsername: "aniketxz",
	experience: [
		{
			company: "Makunai Global",
			role: "Frontend Developer Intern",
			period: "Dec 2025 – Feb 2026",
			location: "Noida, India",
			skills: ["Next.js", "React", "SSR", "SEO"],
			highlights: [
				"Spearheaded a migration of 25+ landing pages to Next.js within a 4-day deadline[cite: 12].",
				"Achieved a 90% reduction in initial page load times, from 6s down to 500ms[cite: 12].",
				"Optimized Core Web Vitals using SSR and static generation for high-performance SEO[cite: 13].",
			],
		},
		{
			company: "Magnifier Solutions",
			role: "Software Engineer Intern",
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
				"https://images.unsplash.com/photo-1467232004584-a241de8bcf0d?w=800&q=80",
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
