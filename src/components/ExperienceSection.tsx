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
					Featured
				</p>
				<h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
					Experience
				</h2>
			</div>

			<div className="mt-8 flex flex-col gap-8">
				{data.experience.map((exp) => (
					<div key={exp.company} className="flex flex-col gap-4">
						<div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
							<div>
								<h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
									{exp.company}
								</h3>
								<p className="text-neutral-500 dark:text-neutral-400">
									{exp.role}
								</p>
							</div>
							<div className="text-right text-sm text-neutral-500 dark:text-neutral-400">
								<p>{exp.period}</p>
								<p>{exp.location}</p>
							</div>
						</div>

						<div className="flex flex-wrap gap-2">
							{exp.skills.map((skill) => (
								<SkillBadge key={skill} name={skill} size="xs" />
							))}
						</div>

						<ul className="text-neutral-500 dark:text-neutral-400 list-inside list-disc space-y-1 text-sm">
							{exp.highlights.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
