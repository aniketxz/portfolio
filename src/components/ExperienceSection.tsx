import { SkillBadge } from "./SkillBadge";
import type { PortfolioData } from "@/types/portfolio";

interface ExperienceSectionProps {
	data: PortfolioData;
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
	return (
		<section id="experience" className="mt-20">
			<div>
				<p className="text-neutral-500 dark:text-neutral-400 text-sm">
					Work history
				</p>
				<h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
					Experience
				</h2>
			</div>

			<div className="mt-8 flex flex-col gap-0">
				{data.experience.map((exp, index) => (
					<div
						key={exp.company}
						className="relative flex gap-6 pb-10 last:pb-0"
					>
						{/* Timeline line + dot */}
						<div className="flex flex-col items-center">
							<div className="mt-1.5 size-2.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500 ring-2 ring-white dark:ring-neutral-950" />
							{index < data.experience.length - 1 && (
								<div className="mt-1 w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
							)}
						</div>

						{/* Content */}
						<div className="flex flex-col gap-3 pb-2 w-full">
							<div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
								<div>
									<h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
										{exp.role}
									</h3>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										{exp.company} · {exp.location}
									</p>
								</div>
								<p className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400 md:text-right">
									{exp.period}
								</p>
							</div>

							<div className="flex flex-wrap gap-2">
								{exp.skills.map((skill) => (
									<SkillBadge key={skill} name={skill} size="xs" />
								))}
							</div>

							<ul className="text-neutral-600 dark:text-neutral-400 list-inside list-disc space-y-1 text-sm">
								{exp.highlights.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
