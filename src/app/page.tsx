import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogsSection } from "@/components/BlogsSection";
// import { ContactSection } from "@/components/ContactSection";
import { Separator } from "@/components/common/Separator";
import { Footer } from "@/components/Footer";
import SideBorders from "@/components/common/SideBorders";
import { data } from "@/data/portfolio";
import { GithubContributionGraph } from "@/components/GithubContributionGraph";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-neutral-950">
      <Navbar />
      <div
        id="top"
        className="container mx-auto max-w-3xl animate-fade-in-blur bg-white px-7 pb-24 md:px-12 dark:border-neutral-800 dark:bg-black"
      >
        <SideBorders />

        <HeroSection data={data} />
        <Separator />
        <AboutSection data={data} />
        <Separator />
        <ExperienceSection data={data} />
        <Separator />
        <ProjectsSection data={data} />
        <Separator />
        <GithubContributionGraph data={data} />
        <Separator />
        <BlogsSection data={data} />
        <Separator />
        {/* <ContactSection data={data} /> */}
        <Footer data={data} />
      </div>
    </div>
  );
}
