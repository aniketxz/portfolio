"use client";

import { useState } from "react";
import { ChevronDown, GraduationCap } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

interface EducationSectionProps {
  data: PortfolioData;
}

export function EducationSection({ data }: EducationSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="education">
      <div>
        <p className="section-eyebrow">Academic background</p>
        <h2 className="section-heading">Education</h2>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {data.education.map((edu, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={edu.institution}
              className="overflow-hidden card-surface transition-colors duration-300"
            >
              {/* ── Clickable header ── */}
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full cursor-pointer items-start gap-3 p-4 text-left transition-colors duration-200 hover:bg-muted/30"
                aria-expanded={isOpen}
              >
                {/* Icon */}
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground">
                  <GraduationCap className="size-4" />
                </div>

                {/* Left content */}
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <h3 className="font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                    <span className="mx-1">·</span>
                    {edu.location}
                  </p>
                  {edu.grade && (
                    <p className="text-sm font-medium text-foreground">
                      {edu.grade}
                    </p>
                  )}
                </div>

                {/* Right: period + chevron */}
                <div className="flex shrink-0 items-center gap-2 pt-0.5">
                  <span className="hidden tag sm:inline-block">
                    {edu.period}
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
                <span className="tag">{edu.period}</span>
              </div>

              {/* ── Collapsible body ── */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden bg-white dark:bg-black">
                  <ul className="list-inside list-disc space-y-1.5 border-t border-border px-4 pt-3 pb-4 text-sm text-muted-foreground marker:text-muted-foreground/40">
                    {edu.highlights.map((item, i) => (
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
