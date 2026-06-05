@AGENTS.md

# Solara Tinting Solutions — Project Memory

## Business Context
- **Business:** Solara Tinting Solutions — handmade window tinting for commercial, marine, residential, and agricultural projects
- **Owner:** Hasan Malik (hmalik117@gmail.com)
- **Phone:** 240-593-0019
- **Email:** solaratinting@gmail.com
- **Address:** 3112 Rices Ln, Windsor Mill, MD 21224
- **Hours:** Monday–Sunday, 7:00 AM – 7:00 PM
- **Service Area:** Eastern Shore of Maryland, Maryland, Delaware, Pennsylvania, DC, Northern Virginia
- **Certifications:** 3M Authorized Dealer, Flat Glass Certified, PPF Certified

## Tech Stack
- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`) — custom color tokens in `app/globals.css`
- **Analytics:** Vercel Analytics (`@vercel/analytics/next`) + Google Analytics (G-6PPS7GMYXK)
- **Email:** Web3Forms API (access key: `503b8884-4b41-42ed-ac9f-49f94e700d94`) — sends to solaratinting@gmail.com
- **Deployment:** Vercel project `solara-next` → auto-deploys from `main` branch on GitHub (`hustlinmalik/solara`)
- **Domain:** solaratinting.com (DNS managed at domain registrar, pointing to Vercel)

## Repository
- **GitHub:** github.com/hustlinmalik/solara
- **Branch:** `main` (only branch — `nextjs` branch was merged and deleted)
- **Local path:** `/Users/hasanmalik/Documents/Solara/solara-next/`

## File Structure
```
app/
  layout.jsx          — Root layout: metadata, GA, Vercel Analytics, favicon
  globals.css         — Tailwind v4 @import + @theme color tokens
  page.jsx            — Homepage (/)
  services/
    residential/page.jsx
    commercial/page.jsx
    marine/page.jsx
    agricultural/page.jsx
components/
  Navbar.jsx          — 'use client' — usePathname for active route detection
  Hero.jsx            — Server Component
  Services.jsx        — Server Component — service cards linking to service pages
  WhyUs.jsx           — Server Component
  ServiceAreas.jsx    — Server Component
  Contact.jsx         — 'use client' — Web3Forms email form
  Footer.jsx          — Server Component
  SolaraLogo.jsx      — Server Component — inline SVG logo with clipPath
  BeforeAfterSlider.jsx — 'use client' — commented out pending photos
  GoogleAnalytics.jsx — 'use client' — next/script GA4 tag
data/
  seoData.js          — BUSINESS object, localBusinessSchema, faqSchema, serviceSchema
public/
  favicon.svg
  apple-touch-icon.png  — 180x180 PNG generated from favicon
  robots.txt
  sitemap.xml
```

## Custom Tailwind Colors
Defined in `app/globals.css` via `@theme`:
- `navy-950` through `navy-500` — dark blue/navy palette (background, cards)
- `sun-500`, `sun-400`, `sun-300` — gold/orange palette (accents, CTAs)

## SEO Setup
- **Metadata API:** `export const metadata` in each `page.jsx` — no react-helmet-async
- **Canonical URLs:** Relative paths (`/`, `/services/residential`, etc.) resolved via `metadataBase` in `layout.jsx`
- **JSON-LD Schemas:** Injected via `dangerouslySetInnerHTML` directly in page JSX
  - Every page: `localBusinessSchema`
  - Service pages: `serviceSchema` + `faqSchema`
- **Sitemap:** `/public/sitemap.xml` — 5 URLs with priority scores
- **robots.txt:** Allows all crawlers, points to sitemap

## Key Design Decisions
- Before/After slider sections are **commented out** on all service pages — uncomment when photos are ready
- Service pages open in the **same tab** (internal Next.js navigation, not `target="_blank"`)
- Navbar detects service pages via `usePathname()` and prefixes hash links with `/#` when needed
- `SolaraLogo` accepts an `id` prop to namespace SVG `clipPath` IDs — always pass unique IDs (`"nav-logo"`, `"footer-logo"`)

## Pending Items
- [ ] Add `og-image.jpg` (1200×630px) to `/public/` for social sharing previews — currently referenced in metadata but file does not exist
- [ ] Uncomment Before/After slider sections once photos are ready
- [x] Connect custom domain `solaratinting.com` to the `solara-next` Vercel project — complete
- [ ] Delete old Vercel `solara` project (original Vite site) from Vercel dashboard

## What Was Migrated From
The site was originally built as a **Vite + React SPA** (`solara-app/`) and migrated to Next.js for:
- Server-rendered HTML (fixes SEO tool complaints about missing H1/H2)
- Native routing (no more `vercel.json` rewrite hacks)
- Next.js Metadata API (fixes duplicate meta description issue)
- Better Core Web Vitals and page speed
