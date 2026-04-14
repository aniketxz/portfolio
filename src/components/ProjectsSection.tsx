import { ExternalLink } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

interface ProjectsSectionProps {
	data: PortfolioData;
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
	return (
		<section id="projects" className="mt-20">
			<div>
				<p className="text-neutral-500 dark:text-neutral-400 text-sm">
					Featured
				</p>
				<h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
					Projects
				</h2>
			</div>

			<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
				{data.projects.map((project) => (
					<div
						key={project.name}
						className="flex flex-col rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden transition-all"
					>
						<div className="aspect-video w-full overflow-hidden">
							<img
								alt={`${project.name} preview`}
								className="h-full w-full object-cover"
								src={project.image}
							/>
						</div>
						<div className="space-y-2 px-6 py-4">
							<h3 className="text-xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
								{project.name}
							</h3>
							<p className="line-clamp-3 text-neutral-500 dark:text-neutral-400 text-sm">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 pt-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-0.5 text-xs text-neutral-800 dark:border-white/30 dark:bg-white/15 dark:text-white"
									>
										{tag}
									</span>
								))}
							</div>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 mt-2 inline-flex items-center gap-1 text-sm transition-colors hover:underline hover:underline-offset-4"
							>
								View project
								<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
