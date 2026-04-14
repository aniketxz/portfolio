"use client";

import { useEffect, useState } from "react";

export function useTheme() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		const stored = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		const resolved =
			stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
		setTheme(resolved);
		document.documentElement.classList.toggle("dark", resolved === "dark");
	}, []);

	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		localStorage.setItem("theme", next);
		document.documentElement.classList.toggle("dark", next === "dark");
	};

	return { theme, toggle };
}
