import { Calendar, ExternalLink } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

interface BlogsSectionProps {
	data: PortfolioData;
}

export function BlogsSection({ data }: BlogsSectionProps) {
	return (
		<section id="blogs" className="mt-20">
			<div>
				<p className="text-neutral-500 dark:text-neutral-400 text-sm">
					Featured
				</p>
				<h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
					Blogs
				</h2>
			</div>

			<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
				{data.blogs.map((blog) => (
					<a
						key={blog.title}
						href={blog.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group block h-full"
					>
						<div className="flex h-full flex-col rounded-md border border-dashed border-black/20 bg-black/5 p-4 transition-all dark:border-white/10 dark:bg-white/5">
							<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 group-hover:underline">
								{blog.title}
							</h3>
							<p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
								{blog.description}
							</p>
							<div className="mt-2 flex flex-wrap items-center gap-2">
								{blog.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-0.5 text-xs text-neutral-800 dark:border-white/30 dark:bg-white/15 dark:text-white"
									>
										{tag}
									</span>
								))}
								<span className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
									<Calendar className="h-3 w-3" aria-hidden="true" />
									{blog.date}
								</span>
							</div>
						</div>
					</a>
				))}
			</div>

			{/* GitHub card */}
			<div className="mt-8">
				<div className="flex flex-col rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
					<div className="space-y-4 px-6 py-4">
						<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
							<div>
								<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
									GitHub
								</h3>
								<p className="text-neutral-500 dark:text-neutral-400 text-sm">
									Recent contributions by{" "}
									<span className="font-semibold text-neutral-900 dark:text-neutral-100">
										{data.githubUsername}
									</span>
								</p>
							</div>
							<a
								href={data.social.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 inline-flex items-center gap-1 text-sm transition-colors hover:underline hover:underline-offset-4"
							>
								View profile
								<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
							</a>
						</div>
						<div className="overflow-hidden rounded-md bg-neutral-50 dark:bg-neutral-800 p-3">
							<img
								alt={`GitHub contribution chart for ${data.githubUsername}`}
								className="w-full rounded"
								src={`https://ghchart.rshah.org/${data.githubUsername}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
