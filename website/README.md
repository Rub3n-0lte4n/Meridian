# Meridian Website

Multi-page marketing website for **Meridian — The AI Operator System**.

## Stack

- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll animations)
- Wouter (client-side routing)
- Vite

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Thesis, Features, MacBook mockup, Pull quote, Audience, Testimonials, CTA |
| `/program` | Program — Full 9-module curriculum, App mockups, What's included |
| `/about` | About — Founder story, Philosophy, Brand references, Rejection list |
| `/enroll` | Enroll — Pricing card, Comparison, FAQ accordion, CTA |

## Design System

**Design Philosophy:** Premium Editorial Magazine — Stripe Press meets a16z.

| Token | Value | Usage |
|-------|-------|-------|
| Obsidian | `#0B0C0E` | Body text, headings |
| Bone | `#F2EEE5` | Primary background |
| Deep Meridian | `#0B0F45` | Hero sections, pull quotes |
| Antique Brass | `#C9A961` | Eyebrows, CTAs, hairlines |
| Stone | `#E5E1D7` | Card surfaces, alternating sections |

**Typography:** Cormorant Garamond (editorial display) + DM Sans (operator body) + JetBrains Mono (terminal data)

## Development

```bash
pnpm install
pnpm dev
```

## Assets

All brand assets (logos, mockups, founder photo) are stored in `/home/ubuntu/webdev-static-assets/` and served via Manus CDN at `/manus-storage/`.
