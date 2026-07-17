import type { PortfolioData } from "@/types/portfolio";

interface AboutSectionProps {
  data: PortfolioData;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about">
      <div>
        <p className="section-eyebrow">
          Who I am
        </p>
        <h2 className="section-heading">
          About Me
        </h2>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        {data.about.map((paragraph, i) => (
          <p
            key={i}
            className="leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
