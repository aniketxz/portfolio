import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogsSection } from "@/components/BlogsSection";
// import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { data } from "@/data/portfolio";
import { Separator } from "@/components/common/Separator";
import SideBorders from "@/components/common/SideBorders";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <div
        id="top"
        className="animate-fade-in-blur container mx-auto max-w-200 border-r border-l border-neutral-200 px-10 pb-24 dark:border-neutral-800"
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
        <BlogsSection data={data} />
        <Separator />
        {/* <ContactSection data={data} /> */}
        <Footer data={data} />
      </div>
    </div>
  );
}
