<!-- .github/copilot-instructions.md -->
# Repo orientation for AI coding agents

This is a small, static portfolio built with Astro (framework + Vite). Keep instructions short, actionable and project-specific — below are the patterns and files that matter.

- **Big picture**: Astro static site with reusable components and Markdown content collections. Layouts live in `src/layouts/`, pages in `src/pages/`, reusable UI in `src/components/` and content in `src/content/` (see `projects` and `experience`). Netlify is used for deployment (`netlify.toml`).

- **How to run**:
  - `npm install` (the project runs `npm install` as `prebuild`)
  - `npm run dev` — start Astro dev server (hot reload)
  - `npm run build` — produce production output in `dist` (Netlify publishes `dist`)
  - `npm run preview` — preview the built output
  - Node 18 is used in CI/deploy (`netlify.toml`)

- **Content & pages**:
  - Content collections: `src/content/projects` and `src/content/experience` are read with `getCollection()` (see [src/pages/projects.astro](src/pages/projects.astro)).
  - Markdown frontmatter fields used by the site: `title`, `description`, `date`, `img`, `url`, `author`, `technologies` (array), `tags`, `order`. Example frontmatter: 

```md
---
title: My Project
description: Short description
date: "2025-04-20"
img: "/my-image.webp"
technologies: ["Astro","Tailwind"]
order: 1
---
```

  - Projects listing sorts by `order` (default fallback `999`) in [src/pages/projects.astro](src/pages/projects.astro).
  - Individual project pages use `MarkdownPostLayout.astro` (see [src/layouts/MarkdownPostLayout.astro](src/layouts/MarkdownPostLayout.astro)).

- **Components & patterns**:
  - Components are `.astro` files in `src/components/`. React components are `.tsx` under `src/components/ui/` and require the `@astrojs/react` integration (configured in `astro.config.mjs`).
  - Use the TS path alias `@/*` (maps to `src/*`) from `tsconfig.json`. Example: `import { cn } from "@/lib/utils"`.
  - SVGs are imported directly (Vite handles them). Example: `import Hamburger from '../assets/svg/hamburguer.svg'` in [src/components/Header.astro](src/components/Header.astro).

- **Styling & theme**:
  - Tailwind + handcrafted CSS variables are used. Global styles: [src/styles/global.css](src/styles/global.css) and [src/styles/tokens.css](src/styles/tokens.css).
  - Theme toggling uses a `data-theme` attribute and `localStorage`. See the inline script in [src/layouts/Layout.astro](src/layouts/Layout.astro) and [src/components/ThemeToggle.astro](src/components/ThemeToggle.astro).

- **Build & deploy details**:
  - Netlify configuration is [netlify.toml](netlify.toml): `npm run build`, publish `dist`, `NODE_VERSION=18`.
  - `package.json` scripts: `dev`, `build`, `preview`.

- **What is NOT present**:
  - There are no automated tests or lint scripts in the repository — add CI tooling consciously and document it.

- **When editing**:
  - Add content markdown to `src/content/*` (projects or experience) if you want the item to show up in collections.
  - Prefer using the existing layout components (`Layout.astro`, `MarkdownPostLayout.astro`) and style tokens from `tokens.css`.

If anything here is unclear or you want more detail on build hooks, routing, or adding CI tests, tell me which section to expand and I will iterate.
