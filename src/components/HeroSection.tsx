import { FileText, Send } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import type { PortfolioData } from "@/types/portfolio";
import { siReact } from "simple-icons";
import { SKILLS } from "@/data/portfolio";

interface HeroSectionProps {
	data: PortfolioData;
}

export function HeroSection({ data }: HeroSectionProps) {
	return (
		<section id="about" className="pt-12">
			<div
				className="size-24 shrink-0 overflow-hidden rounded-full bg-blue-300 dark:bg-yellow-300"
				aria-hidden="true"
			></div>

			<div className="mt-8 flex flex-col gap-2">
				<h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
					Hi, I&apos;m {data.name} —{" "}
					<span className="text-neutral-500 dark:text-neutral-400">
						A {data.title}.
					</span>
				</h1>
				<div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base text-neutral-500 dark:text-neutral-400 md:text-lg">
					{data.bio}
				</div>
			</div>

			<div className="mt-6 flex flex-wrap gap-2">
				{SKILLS.map((skill, idx) => (
					<SkillBadge
						key={idx}
						icon={skill}
						name={skill.title}
						variant="icon-text"
						size="sm"
					/>
				))}
			</div>

			<div className="mt-8 flex flex-wrap gap-4">
				<a
					href={data.resumeUrl}
					className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all h-9 px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 rounded-md"
				>
					<FileText className="size-4" />
					Resume / CV
				</a>
				<a
					href={`mailto:${data.email}`}
					className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all h-9 px-4 py-2 border border-neutral-200 bg-white hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/30 dark:hover:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 rounded-md"
				>
					<Send className="size-4" />
					Get in touch
				</a>
			</div>
		</section>
	);
}
