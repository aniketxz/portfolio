import type { PortfolioData } from "@/types/portfolio";

interface AboutSectionProps {
	data: PortfolioData;
}

export function AboutSection({ data }: AboutSectionProps) {
	return (
		<section className="mt-20">
			<div>
				<p className="text-neutral-500 dark:text-neutral-400 text-sm">About</p>
				<h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
					Me
				</h2>
			</div>
			<div className="mt-8 flex flex-col gap-4">
				{data.about.map((paragraph, i) => (
					<p key={i} className="text-neutral-500 dark:text-neutral-400">
						{paragraph}
					</p>
				))}
			</div>
		</section>
	);
}
