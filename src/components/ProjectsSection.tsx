import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { PortfolioData } from "@/types/portfolio";

interface ProjectsSectionProps {
	data: PortfolioData;
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
	return (
		<section id="projects">
			<div>
				<p className="text-neutral-500 dark:text-neutral-400 text-sm">
					Things I&apos;ve built
				</p>
				<h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
					Projects
				</h2>
			</div>

			<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
				{data.projects.map((project) => (
					<div
						key={project.name}
						className="group flex flex-col rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-neutral-200 dark:hover:border-neutral-700"
					>
						<div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
							<Image
								alt={`${project.name} preview`}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								src={project.image}
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
						<div className="flex flex-col flex-1 space-y-2 px-6 py-4">
							<h3 className="text-xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
								{project.name}
							</h3>
							<p className="line-clamp-3 text-neutral-600 dark:text-neutral-400 text-sm flex-1">
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
							<div className="flex items-center gap-3 pt-1">
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 inline-flex items-center gap-1 text-sm transition-colors hover:underline hover:underline-offset-4"
								>
									<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
									Source
								</a>
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 inline-flex items-center gap-1 text-sm transition-colors hover:underline hover:underline-offset-4"
									>
										<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
										Live demo
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
