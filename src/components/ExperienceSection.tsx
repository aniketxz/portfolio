"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import type { PortfolioData } from "@/types/portfolio";

interface ExperienceSectionProps {
  data: PortfolioData;
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  // First entry open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="experience">
      <div>
        <p className="section-eyebrow">Work history</p>
        <h2 className="section-heading">Experience</h2>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {data.experience.map((exp, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={exp.company}
              className="overflow-hidden card-surface transition-colors duration-300"
            >
              {/* ── Clickable header ── */}
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full cursor-pointer items-start gap-3 p-4 text-left transition-colors duration-200 hover:bg-muted/30"
                aria-expanded={isOpen}
              >
                {/* Left content */}
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  {/* Role + company row */}
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-2">
                    <h3 className="font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      @ <span className="font-medium">{exp.company}</span>
                      <span className="mx-1">·</span>
                      {exp.location}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <SkillBadge key={skill} name={skill} size="xs" />
                    ))}
                  </div>
                </div>

                {/* Right: period + chevron */}
                <div className="flex shrink-0 items-center gap-2 pt-0.5">
                  <span className="hidden tag sm:inline-block">
                    {exp.period}
                  </span>
                  <ChevronDown
                    className={`size-4 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Period on mobile (below header) */}
              <div className="px-4 pb-1 sm:hidden">
                <span className="tag">{exp.period}</span>
              </div>

              {/* ── Collapsible body ── */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden bg-white dark:bg-black">
                  <ul className="list-inside list-disc space-y-1.5 border-t border-border px-4 pt-3 pb-4 text-sm text-muted-foreground marker:text-muted-foreground/40">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
