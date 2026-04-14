import { data } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogsSection } from "@/components/BlogsSection";
// import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<div className="bg-white dark:bg-neutral-950 min-h-screen">
			<Navbar />
			<div
				id="top"
				className="container mx-auto max-w-3xl animate-fade-in-blur px-4 pb-24"
			>
				<HeroSection data={data} />
				<AboutSection data={data} />
				<ExperienceSection data={data} />
				<ProjectsSection data={data} />
				<BlogsSection data={data} />
				{/* <ContactSection data={data} /> */}
				<Footer data={data} />
			</div>
		</div>
	);
}
