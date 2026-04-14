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
}

export interface Blog {
	title: string;
	description: string;
	tags: string[];
	date: string;
	url: string;
}

export interface PortfolioData {
	name: string;
	title: string;
	bio: string;
	about: string[];
	resumeUrl: string;
	email: string;
	calUrl: string;
	quote: { text: string; author: string };
	social: { twitter: string; linkedin: string; github: string };
	githubUsername: string;
	experience: Experience[];
	projects: Project[];
	blogs: Blog[];
}
