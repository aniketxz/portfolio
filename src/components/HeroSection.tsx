import { FileText, Send } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import type { PortfolioData } from "@/types/portfolio";
import { SKILLS } from "@/data/portfolio";
import Image from "next/image";

interface HeroSectionProps {
  data: PortfolioData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section id="about" className="pt-12">
      <div className="relative w-full bg-amber-400" aria-hidden="true">
        <Image height={96} width={1200} className="w-full h-56 object-cover object-top" src={"/dawn.jpg"} alt="" />
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          Hi, I&apos;m {data.name} —{" "}
          <span className="text-neutral-500 dark:text-neutral-400">
            A {data.title}.
          </span>
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base text-neutral-500 md:text-lg dark:text-neutral-400">
          {data.bio}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {SKILLS.map((skill, idx) => (
          <SkillBadge
            key={idx}
            icon={skill}
            name={skill.title}
            variant="icon-text"
            size="sm"
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={data.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-all hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
        >
          <FileText className="size-4" />
          Resume / CV
        </a>
        <a
          href={`mailto:${data.email}`}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-neutral-900 transition-all hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/30 dark:text-neutral-100 dark:hover:bg-neutral-800/60"
        >
          <Send className="size-4" />
          Get in touch
        </a>
      </div>
    </section>
  );
}
