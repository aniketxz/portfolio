import * as simpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { SkillBadge } from "./SkillBadge";
import type { PortfolioData } from "@/types/portfolio";

interface TechStackSectionProps {
  data: PortfolioData;
}

/**
 * Resolve a simple-icons key (e.g. "siTypescript") to the actual icon object.
 * Returns undefined when the key is missing or invalid — the badge will
 * render in text-only mode.
 */
function resolveIcon(key?: string): SimpleIcon | undefined {
  if (!key) return undefined;
  return (simpleIcons as Record<string, SimpleIcon>)[key];
}

export function TechStackSection({ data }: TechStackSectionProps) {
  return (
    <section id="tech-stack">
      <div>
        <p className="section-eyebrow">What I work with</p>
        <h2 className="section-heading">Tech Stack</h2>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {data.techStack.map((group) => (
          <div key={group.category} className="flex flex-row gap-2 sm:gap-4">
            {/* Category label */}
            <span className="w-20 text-wrap sm:w-28 shrink-0 text-sm font-medium text-muted-foreground sm:pt-1.5 sm:text-right">
              {group.category}
            </span>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const icon = resolveIcon(item.iconKey);
                return (
                  <SkillBadge
                    key={item.name}
                    name={item.name}
                    icon={icon}
                    variant={icon ? "icon-text" : "text-only"}
                    size="xs"
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
