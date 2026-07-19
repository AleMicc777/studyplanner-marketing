# studyplanner-astro

StudyPlanner marketing site. Astro 6 + Tailwind v4, static output, single-page site.

## Stack

- Astro 6 (static build, no SSR adapter)
- Tailwind v4 (`@tailwindcss/vite`)
- Node >=22.12.0

## File map

- `src/pages/` — route files. `index.astro` is the single-page marketing site; `contact.astro` is the only other route. All other "pages" referenced in copy (how-it-works, universities, demo) are anchor-linked sections within `index.astro`, not separate routes.
- `src/components/` — Astro components composed into `index.astro` (Hero, Problem, Features, HowItWorks, Screenshots, CaseStudy, ForUniversities, Stats, FAQ, CTAFooter, Navbar).
- `src/layouts/Base.astro` — shared HTML shell/layout.
- `src/styles/global.css` — Tailwind entry + global styles.
- `public/` — static assets (favicon, robots.txt, sitemap.xml).

## Commands

- `npm run dev` — local dev server (localhost:4321)
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview the production build locally

## Deploy

Vercel, project `studyplanner-marketing` — live at `https://studyplanner-marketing.vercel.app`.

## Notes

- This is a single-page site: prefer adding new sections/components to `index.astro` over new routes, unless a genuinely separate page is needed (as `contact.astro` is).
- There is no Next.js in this project. Do not consult Next.js docs or apply Next.js conventions.
