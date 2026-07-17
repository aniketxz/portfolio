import { SkillBadge } from "./SkillBadge";
import type { PortfolioData } from "@/types/portfolio";

interface ExperienceSectionProps {
  data: PortfolioData;
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section id="experience">
      <div>
        <p className="section-eyebrow">
          Work history
        </p>
        <h2 className="section-heading">
          Experience
        </h2>
      </div>

      <div className="mt-8 flex flex-col gap-0">
        {data.experience.map((exp, index) => (
          <div key={exp.company} className="relative flex gap-3 last:pb-0">
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center">
              <span className="mt-3 shrink-0 text-lg font-bold text-foreground">
                #
              </span>
            </div>

            {/* Content */}
            <div className="flex w-full flex-col gap-3 rounded-md p-3 transition-all duration-400 hover:bg-neutral-200/30 dark:hover:bg-neutral-800/30">
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    @ <span className="font-semibold">{exp.company}</span> ·{" "}
                    {exp.location}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-muted-foreground md:text-right">
                  {exp.period}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} size="xs" />
                ))}
              </div>

              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
