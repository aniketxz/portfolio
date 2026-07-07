"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";

const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Blogs", href: "#blogs" },
	{ label: "Contact", href: "#contact" },
];

export function Navbar() {
	const { theme, toggle } = useTheme();

	return (
		<nav className="sticky top-0 z-20 rounded-md backdrop-blur-sm">
			<div className="container py-3 mx-auto flex max-w-3xl items-center justify-between px-6">
				<div className="flex flex-wrap items-center gap-2 sm:gap-4">
					<Link href="/" className="text-neutral-500 dark:text-neutral-200">
						{"</>"}
					</Link>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm text-neutral-500 dark:text-neutral-400 transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100"
						>
							{link.label}
						</a>
					))}
				</div>
				<button
					type="button"
					aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
					onClick={toggle}
					className="size-10 cursor-pointer rounded-full p-0 transition-all duration-300 active:scale-95 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
				>
					<span className="sr-only">Toggle theme</span>
					{theme === "dark" ? (
						<Sun className="size-4" />
					) : (
						<Moon className="size-4" />
					)}
				</button>
			</div>
		</nav>
	);
}
