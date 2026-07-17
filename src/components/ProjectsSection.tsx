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
				<p className="section-eyebrow">
					Things I&apos;ve built
				</p>
				<h2 className="section-heading">
					Projects
				</h2>
			</div>

			<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
				{data.projects.map((project) => (
					<div
						key={project.name}
						className="card-surface group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-neutral-200 dark:hover:border-neutral-700"
					>
						<div className="relative aspect-video w-full overflow-hidden bg-muted">
							<Image
								alt={`${project.name} preview`}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								src={project.image}
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
						<div className="flex flex-col flex-1 space-y-2 px-6 py-4">
							<h3 className="text-xl font-semibold leading-tight text-foreground">
								{project.name}
							</h3>
							<p className="line-clamp-3 text-sm text-muted-foreground flex-1">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 pt-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="tag"
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
									className="text-link inline-flex items-center gap-1 text-sm"
								>
									<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
									Source
								</a>
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-link inline-flex items-center gap-1 text-sm"
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
