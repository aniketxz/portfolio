export interface Experience {
	company: string;
	role: string;
	period: string;
	location: string;
	skills: string[];
	highlights: string[];
}

export interface Project {
	name: string;
	description: string;
	image: string;
	tags: string[];
	url: string;
	liveUrl?: string;
}

export interface Blog {
	title: string;
	description: string;
	tags: string[];
	date: string;
	url: string;
}

export interface TechStackItem {
	name: string;
	iconKey?: string;
}

export interface TechStackCategory {
	category: string;
	items: TechStackItem[];
}

export interface PortfolioData {
	name: string;
	title: string;
	bio: string;
	about: string[];
	resumeUrl: string;
	email: string;
	calUrl: string;
	location: string;
	timezone: string;
	website: string;
	phone: string;
	quote: { text: string; author: string };
	social: { twitter?: string; linkedin: string; github: string };
	githubUsername: string;
	techStack: TechStackCategory[];
	experience: Experience[];
	projects: Project[];
	blogs: Blog[];
}
