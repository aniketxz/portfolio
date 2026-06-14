import type { Metadata } from "next";
import { Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
	variable: "--font-hanken-grotesk",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Aniket Kumar Mahato — Full Stack Developer",
	description: "Full Stack Web Developer specializing in Next.js, TypeScript, and Node.js. Building high-performance web applications.",
	metadataBase: new URL("https://aniketxz.dev"),
	openGraph: {
		title: "Aniket Kumar Mahato — Full Stack Developer",
		description: "Full Stack Web Developer specializing in Next.js, TypeScript, and Node.js.",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Aniket Kumar Mahato — Full Stack Developer",
		description: "Full Stack Web Developer specializing in Next.js, TypeScript, and Node.js.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${hankenGrotesk.variable} ${geistMono.variable} h-full antialiased`}
		>
			<head>
				{/* Prevent dark-mode flash on load */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){var t=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(!t&&p))document.documentElement.classList.add('dark');})()`
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
