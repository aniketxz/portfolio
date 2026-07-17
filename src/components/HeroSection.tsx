import Image from "next/image";
import { Clock, FileText, Link2, Mail, MapPin, Send } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import { InfoStrip } from "./InfoStrip";
import { SKILLS } from "@/data/portfolio";
import type { PortfolioData } from "@/types/portfolio";

interface HeroSectionProps {
  data: PortfolioData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section id="about" className="pt-12 md:flex md:flex-col md:justify-center">
      <div className="relative w-full" aria-hidden="true">
        <Image
          height={96}
          width={1200}
          priority
          className="h-40 w-full rounded object-cover object-[0%_80%] md:h-56 opacity-90"
          src={"/dawn.jpg"}
          alt=""
        />
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
          Hi! I am
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-6xl dark:text-neutral-100">
          {data.name}
        </h1>
        <span className="text-neutral-700 dark:text-neutral-400">
          {data.title}
        </span>
        <p className="mt-1 max-w-xl text-base text-neutral-500 dark:text-neutral-400">
          {data.bio}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
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
      </div>

      <div className="mt-6">
        <InfoStrip
          items={[
            { icon: MapPin, label: data.location },
            { icon: Clock, label: data.timezone },
            { icon: Mail, label: data.email, href: `mailto:${data.email}` },
            ...(data.website
              ? [
                  {
                    icon: Link2,
                    label: data.website.replace(/^https?:\/\//, ""),
                    href: data.website,
                  },
                ]
              : []),
          ]}
        />
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
