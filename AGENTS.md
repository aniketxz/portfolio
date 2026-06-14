# Portfolio — Agent Guide

<!-- BEGIN:nextjs-agent-rules -->
## Next.js Version Warning

This is **Next.js 16.2.3** with **Turbopack** — NOT the Next.js you know from training data.
APIs, conventions, and file structure differ from older versions.
Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project Overview

Personal portfolio website for **Aniket Kumar Mahato** — a Full Stack Web Developer.
The site is a single-page app (`/`) with multiple scroll sections: Hero, About, Experience, Projects, Blogs, and Footer/Contact.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind CSS v4 · `simple-icons` · `lucide-react`

**Live dev server:** `npm run dev` → `http://localhost:3000`
**Build:** `npm run build` — outputs as fully static (all routes are `○ Static`)

---

## Directory Structure

```
portfolio/
├── next.config.ts              # Next.js config (Unsplash image domain whitelisted)
├── src/
│   ├── app/
│   │   ├── globals.css         # Global CSS: Tailwind import, CSS vars, scroll-padding, fonts, keyframes
│   │   ├── layout.tsx          # Root layout: fonts, metadata (OG/Twitter), dark-mode FOUC script
│   │   └── page.tsx            # Single page — assembles all section components
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky top nav with dark-mode toggle (client component)
│   │   ├── HeroSection.tsx     # Avatar, headline, bio, skill badges, CTA buttons
│   │   ├── AboutSection.tsx    # "About Me" paragraphs
│   │   ├── ExperienceSection.tsx # Timeline-style work history
│   │   ├── ProjectsSection.tsx # 2-col project cards with Next/Image, hover effects
│   │   ├── BlogsSection.tsx    # Blog cards + GitHub contribution chart
│   │   ├── Footer.tsx          # Quote blockquote, social icons, copyright
│   │   └── SkillBadge.tsx      # Reusable badge with optional simple-icons SVG
│   ├── data/
│   │   └── portfolio.ts        # ← SINGLE SOURCE OF TRUTH for all content
│   ├── hooks/
│   │   └── useTheme.ts         # Theme hook (reads/writes localStorage + system preference)
│   └── types/
│       └── portfolio.ts        # TypeScript interfaces for all data shapes
```

---

## Content: The Only File You Need to Edit

**All personal content lives in `src/data/portfolio.ts`.**
Do NOT hardcode text into components. Every piece of data must come from this file via the `data` or `SKILLS` exports.

### Key fields

| Field | Notes |
|-------|-------|
| `name` | First name used in the hero heading |
| `title` | Role string, shown in hero subtitle |
| `bio` | One-paragraph hero bio |
| `about` | Array of `string` — each is a paragraph in the About section |
| `resumeUrl` | Must link to the actual resume PDF (Google Drive), not GitHub |
| `email` | Used in hero CTA + footer mailto |
| `calUrl` | Optional booking link — leave `""` if unused |
| `quote` | `{ text, author }` shown as a `<blockquote>` above the footer |
| `social.twitter` | Set to `undefined` if no Twitter (link is conditionally rendered) |
| `social.linkedin` | Full URL |
| `social.github` | Full URL |
| `githubUsername` | Used for the GitHub contribution chart URL |
| `experience[]` | `role` is displayed prominently (bold), `company` is secondary |
| `projects[].url` | GitHub/source URL |
| `projects[].liveUrl` | Optional — renders "Live demo" link if set |
| `projects[].image` | Must be an Unsplash URL (`images.unsplash.com`) — see image rules below |
| `blogs[].url` | Must be a real URL — placeholder `blog.example.com` URLs hurt credibility |

### SKILLS array

```ts
export const SKILLS = [ siTypescript, siNodedotjs, siReact, siNextdotjs, ... ];
```
Order matters — badges render left-to-right. Import icons from `simple-icons` (e.g. `siNodedotjs`, `siPostgresql`). Browse available icons at https://simpleicons.org.

---

## Styling Rules

### Tailwind CSS v4
This project uses **Tailwind v4**, which has a different config model than v3:
- No `tailwind.config.js` — configuration is done in CSS with `@theme` directives if needed.
- The import in `globals.css` is `@import "tailwindcss"` (not `@tailwind base/components/utilities`).
- The dark mode variant is registered as `@custom-variant dark (&:where(.dark, .dark *))`.
- Gradient syntax changed: use `bg-linear-to-br` instead of `bg-gradient-to-br`.

### Dark Mode
- Toggled via the `.dark` class on `<html>`.
- Controlled by `useTheme.ts` hook (reads `localStorage` + `prefers-color-scheme`).
- Always include dark variants: `dark:text-neutral-100`, `dark:bg-neutral-900`, etc.
- A FOUC-prevention script in `layout.tsx` applies the class before React hydrates.

### Color Palette
The design uses a neutral monochrome palette. Use only these families unless explicitly told otherwise:
- Text: `neutral-900` (dark) / `neutral-100` (light) for primary, `neutral-500`/`neutral-400` for secondary
- Backgrounds: `white` / `neutral-900` / `neutral-950`
- Borders: `neutral-100`/`neutral-800` (solid) or `black/20`/`white/10` (dashed)
- Accent: gradient `from-indigo-400 via-purple-500 to-pink-500` (avatar only — keep accents minimal)

### Typography
- Body font: **Hanken Grotesk** (`--font-hanken-grotesk`), loaded via `next/font/google`
- Mono font: **Geist Mono** (`--font-geist-mono`), loaded via `next/font/google`
- Do NOT change the font stack without updating `layout.tsx` and `globals.css`.

### Spacing Pattern
Sections are vertically spaced with `mt-20` between them. The hero uses `pt-12` (accounts for the fixed navbar). Do not break this rhythm when adding new sections.

---

## Component Rules

### `SkillBadge`
Props: `name: string`, `icon?: SimpleIcon`, `size?: "sm" | "xs"`, `variant?: "icon-text" | "text-only"`
- `size="sm"` → used in hero skill row
- `size="xs"` → used in experience skills row

### `Navbar` (client component)
- Uses `useTheme` hook — must remain a `"use client"` component.
- `navLinks` array controls visible nav items. Only add a link if the target `id` exists on the page.
- Navbar height is ~64px — `scroll-padding-top: 67px` in `globals.css` accounts for this.

### Section anchors
Every section that appears in `navLinks` must have a matching `id` attribute:
```
#about      → <section id="about">     in HeroSection
#experience → <section id="experience"> in ExperienceSection
#projects   → <section id="projects">  in ProjectsSection
#blogs      → <section id="blogs">     in BlogsSection
#contact    → <footer id="contact">    in Footer
```

### Images in projects
- **Always use `next/image`** (`import Image from "next/image"`) — never bare `<img>` tags for project images.
- `images.unsplash.com` is the only whitelisted external domain (see `next.config.ts`).
- To add another external image domain, add a new `remotePatterns` entry in `next.config.ts`.
- The GitHub chart in `BlogsSection` uses a bare `<img loading="lazy">` — this is intentional (third-party service, no optimization needed).

---

## Theme System

`useTheme.ts` is a client-side hook. It is **only used in `Navbar.tsx`**.

```
Priority: localStorage "theme" key → system prefers-color-scheme → default "light"
```

To add a new client component that reads the theme, import `useTheme` — do not read `localStorage` directly.

---

## Adding New Sections

1. Create `src/components/NewSection.tsx`
2. Accept `{ data: PortfolioData }` as props (follow the existing pattern)
3. Add the corresponding data fields to `src/types/portfolio.ts` and `src/data/portfolio.ts`
4. Import and render it in `src/app/page.tsx` between existing sections
5. If it needs a nav link, add it to `navLinks` in `Navbar.tsx` with a matching `id`
6. Use `mt-20` as top margin to maintain section rhythm

---

## Known Gotchas

- **`bg-gradient-to-*` is deprecated in Tailwind v4.** Use `bg-linear-to-*` instead.
- **`useTheme` initializes as `"light"`** before the `useEffect` runs — the FOUC script in `layout.tsx` prevents visible flicker, but SSR-rendered HTML will always have `theme = "light"` on first render.
- **`social.twitter` is `undefined`** (not `""`) — the Footer conditionally renders the Twitter link with `{data.social.twitter && ...}`. If you set it to `""`, a dead link will render.
- **Blog URLs are placeholders** (`blog.example.com`) — replace with real URLs before considering the blogs section production-ready.
- **`metadataBase`** in `layout.tsx` is set to `https://aniketxz.dev` — update this when the actual domain is known/live.
- **`calUrl`** is unused in the UI — it's in the data type but no component renders it yet.

---

## Commands

```bash
npm run dev      # Start local dev server (Turbopack, hot reload)
npm run build    # Production build — validates TS + generates static output
npm run lint     # ESLint (eslint-config-next)
```

The production build outputs all routes as **fully static** — no server or edge runtime is used. Keep it that way unless specifically requested.
