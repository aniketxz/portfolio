import { Calendar } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

interface BlogsSectionProps {
  data: PortfolioData;
}

export function BlogsSection({ data }: BlogsSectionProps) {
  return (
    <section id="blogs">
      <div>
        <p className="section-eyebrow">Articles &amp; Writing</p>
        <h2 className="section-heading">Blogs</h2>
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
            <div className="flex h-full flex-col card-ghost p-4 transition-all duration-200 hover:bg-black/8 dark:hover:bg-white/8">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-muted-foreground group-hover:underline">
                {blog.title}
              </h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                {blog.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {blog.tags.map((tag) => (
                  <span key={tag} className="tag">
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
    </section>
  );
}
