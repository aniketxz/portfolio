"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  // { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-20 rounded-md backdrop-blur-sm">
      <div className="container mx-auto flex max-w-3xl items-center justify-between border-b border-border px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link href="/" className="text-muted-foreground max-sm:hidden">
            {"</>"}
          </Link>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-link decoration-2 duration-300 ease-in-out"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={toggle}
          className="flex size-10 cursor-pointer items-center justify-center rounded-full p-0 text-muted-foreground transition-all duration-300 hover:text-foreground active:scale-95"
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
