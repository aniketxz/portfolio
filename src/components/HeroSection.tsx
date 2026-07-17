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
          className="h-40 w-full rounded object-cover object-[0%_80%] opacity-90 transition-[object-position] duration-700 ease-in-out md:h-56 dark:object-top"
          src={"/dawn.jpg"}
          alt=""
        />
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
          Hi! I am
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {data.name}
        </h1>
        <span className="text-muted-foreground">
          {data.title}
        </span>
        <p className="mt-1 max-w-xl text-base text-muted-foreground">
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
          className="btn-primary"
        >
          <FileText className="size-4" />
          Resume / CV
        </a>
        <a
          href={`mailto:${data.email}`}
          className="btn-secondary"
        >
          <Send className="size-4" />
          Get in touch
        </a>
      </div>
    </section>
  );
}
