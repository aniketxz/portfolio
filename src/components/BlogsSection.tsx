import { Calendar } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

interface BlogsSectionProps {
  data: PortfolioData;
}

export function BlogsSection({ data }: BlogsSectionProps) {
  return (
    <section id="blogs">
      <div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Articles & Writing
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
            <div className="flex h-full flex-col rounded-md border border-dashed border-black/20 bg-black/5 p-4 transition-all duration-200 hover:bg-black/8 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/8">
              <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-600 group-hover:underline dark:text-neutral-100 dark:group-hover:text-neutral-300">
                {blog.title}
              </h3>
              <p className="mt-1 flex-1 text-sm text-neutral-600 dark:text-neutral-400">
                {blog.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-0.5 text-xs text-neutral-800 dark:border-white/30 dark:bg-white/15 dark:text-white"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
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
        <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white dark:border-neutral-800 dark:bg-neutral-900">
          <div className="space-y-4 px-6 py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  GitHub
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
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
                className="inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                View profile
              </a>
            </div>
            <div className="overflow-hidden rounded-md bg-neutral-50 p-3 dark:bg-neutral-800">
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
