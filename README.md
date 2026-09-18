# Sanu Raj — Product Engineer portfolio

A custom Next.js App Router portfolio using React, TypeScript, Tailwind CSS, and Lucide icons. Most sections render on the server; navigation and native project dialogs provide the client interactions. No additional runtime dependencies were added for the redesign.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows with PowerShell script execution disabled, use `npm.cmd` instead of `npm`.

## Content and project links

- `src/data/project-links.ts`: replace the two Instagram Comment Picker placeholder URLs here. Placeholder notices disappear automatically once both URLs have been replaced.
- `src/data/featured-projects.ts`: featured project descriptions, features, stacks, and previews.
- `src/data/portfolio.ts`: identity, social accounts, original project archive, experience, and education.
- `public/projects/`: existing project screenshots. The Instagram Comment Picker card intentionally uses a labeled illustrative interface until a screenshot is provided. Its technology stack has not been invented.
- `src/components/Skills.tsx` and `Approach.tsx`: grouped technologies and engineering process.
- `src/app/globals.css`: design tokens, layout, responsive breakpoints, and reduced-motion support.

The existing homepage, `#work` anchor, project links, email contact, and Google Analytics, Microsoft Clarity, and Vercel Analytics integrations are preserved. The original site did not have a contact form backend or theme switcher.

## Deployment configuration

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL`: the real public origin, such as `https://your-domain.com`. Required for correct canonical URLs, absolute social preview URLs, and sitemap entries. Vercel deployments can fall back to `VERCEL_PROJECT_PRODUCTION_URL`.
- `CLARITY_PROJECT_ID`: your Microsoft Clarity project ID. Empty and placeholder values do not initialize Clarity.

Do not deploy with the example domain. Without a configured origin, the sitemap intentionally contains no entries rather than publishing a made-up domain; Next.js may use localhost for generated social metadata in a local build.

```sh
npm run lint
npm run build
npm run start
```

Metadata routes: `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/twitter-image`, and `/icon.svg`. Social preview images are generated at build time. The existing Geist fonts use Next.js font optimization and require access to Google Fonts during a clean build.

## Review

Build, TypeScript, and lint validation passed during implementation. Local HTTP checks verified the homepage, project image assets, metadata routes, unknown-route 404 behavior, and internal section links.

Desktop/mobile browser review remains pending: the session's browser runtime reported no connected browsers. Before publishing, review at 320, 390, 768, 1024, and 1440 px; check horizontal overflow, project dialogs (Escape, focus containment and restoration), mobile navigation, the archive, and reduced motion. Replace the Instagram placeholder URLs and confirm the final domain.
