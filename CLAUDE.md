# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Dev Server

On Windows, `npx` does not work reliably. Start the dev server with:

```bash
node node_modules/next/dist/bin/next dev
```

Runs on `http://localhost:3000`.

## Stack

- **Next.js 14** App Router, TypeScript, Tailwind CSS
- **Resend** for transactional email (`/api/contact` POST route)
- **Google Fonts**: Raleway (300/400/500/600/700/800) — loaded in `layout.tsx`
- `next/image` with Unsplash remote pattern in `next.config.mjs`

## Architecture

All page sections are individual components assembled in `src/app/page.tsx`. The `ScrollReveal` component uses `IntersectionObserver` to animate any element with the `.reveal` class.

### Key components
- `ParticleCanvas.tsx` — canvas with 70 animated gold particles, client-only
- `SectionLabel.tsx` — reusable section header: `— LABEL —` line + two-tone heading
- `ScrollReveal.tsx` — client component, attaches IntersectionObserver to `.reveal` elements

### Tailwind color tokens
```
bg: #0a0a0a   card: #111111   card-border: #222222
accent: #d4a853   accent-hover: #e0b965
text: #f0f0f0   sub: #888888
```

### CSS utility classes (globals.css)
- `.glow-card` — scale(1.03) + gold box-shadow on hover
- `.glow-btn` — scale(1.05) + gold glow on hover
- `.hero-fade-1` through `.hero-fade-5` — staggered fadeUp animations
- `.reveal` / `.reveal.visible` — scroll-triggered fade-up via IntersectionObserver

## Environment

Copy `.env.local` and fill in:
```
RESEND_API_KEY=
CONTACT_EMAIL=
```

The Resend client is instantiated **inside** the POST handler (not at module level) to avoid build failures when the key is empty.

## Logo

`public/logo.svg` — Century Gothic-style: gold "In" + white "tint". Used at `width={220} height={64}` in both Navbar and Footer.
