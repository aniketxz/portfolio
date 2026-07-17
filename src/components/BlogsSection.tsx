import { Calendar } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

interface BlogsSectionProps {
  data: PortfolioData;
}

export function BlogsSection({ data }: BlogsSectionProps) {
  return (
    <section id="blogs">
      <div>
        <p className="section-eyebrow">
          Articles & Writing
        </p>
        <h2 className="section-heading">
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
            <div className="card-ghost flex h-full flex-col p-4 transition-all duration-200 hover:bg-black/8 dark:hover:bg-white/8">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-muted-foreground group-hover:underline">
                {blog.title}
              </h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                {blog.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
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
        <div className="card-surface flex flex-col overflow-hidden">
          <div className="space-y-4 px-6 py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  GitHub
                </h3>
                <p className="text-sm text-muted-foreground">
                  Recent contributions by{" "}
                  <span className="font-semibold text-foreground">
                    {data.githubUsername}
                  </span>
                </p>
              </div>
              <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex items-center gap-1 text-sm"
              >
                View profile
              </a>
            </div>
            <div className="overflow-hidden rounded-md bg-muted p-3">
              <img
                alt={`GitHub contribution chart for ${data.githubUsername}`}
                className="w-full rounded"
                src={`https://ghchart.rshah.org/${data.githubUsername}`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
