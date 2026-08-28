# Gaurav Nitesh Gandhi — Portfolio

A sophisticated, minimalist, black & white portfolio for Gaurav Nitesh Gandhi, built with Next.js 14, React 18, TypeScript, and Three.js.

## Tech Stack

- **Next.js 14** (App Router) with SSR/SSG
- **React 18** + TypeScript 5
- **Three.js** with `@react-three/fiber` + `@react-three/drei`
- **Framer Motion** for subtle animations
- **Tailwind CSS** for the monochrome design system
- **Zustand** for global state

## Features

- ⚫ Pure black & white minimalist design, no color
- 🎨 Subtle greyscale 3D scene (geometric sculpture, no particles)
- ⏳ Minimal preloader with loading progress
- 🧭 Clean navbar with active-section highlighting + scroll progress
- 🚀 Hero with split-screen content and magnetic CTAs
- 📊 About with education and stats
- 🗺️ Experience timeline with expandable card
- 🃏 Projects grid with category filters
- 🏷️ Skills tag grid with categories
- ✉️ Contact form with floating labels
- ♿ Reduced-motion support, semantic HTML, keyboard-friendly
- 📈 SEO: metadata API, Open Graph, sitemap, robots

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start development server         |
| `npm run build` | Production build + typecheck     |
| `npm run start` | Serve production build           |
| `npm run lint`  | Run ESLint                       |

## Customizing Content

All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) — edit experiences, projects, skills, achievements, and testimonials there.

**Project structure:**

```
src/
├── app/              # App Router pages, layout, SEO files
├── components/
│   ├── effects/      # Cursor, preloader, scroll progress
│   ├── sections/     # Hero, About, Experience, Projects, etc.
│   ├── three/        # WebGL scenes (background, skill sphere)
│   └── ui/           # Reusable UI (Magnetic, TiltCard, Navbar, Footer)
├── data/             # Portfolio content
└── store/            # Zustand global state
```

## Deployment

Deploy to Vercel with zero configuration. Set the env vars from `.env.example` as needed.
