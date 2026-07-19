import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";
import Image from "next/image";
import type { PortfolioData } from "@/types/portfolio";

interface ProjectsSectionProps {
  data: PortfolioData;
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projects">
      <div>
        <p className="section-eyebrow">Things I&apos;ve built</p>
        <h2 className="section-heading">Projects</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {data.projects.map((project) => (
          <div
            key={project.name}
            className="group flex flex-col overflow-hidden card-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-200 hover:shadow-lg dark:hover:border-neutral-700"
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
            <div className="flex flex-1 flex-col space-y-2 px-6 py-4">
              <h3 className="text-xl leading-tight font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="line-clamp-3 flex-1 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-link"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={siGithub.path} />
                  </svg>
                  Source
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-link"
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
