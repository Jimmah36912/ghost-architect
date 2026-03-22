# Ghost Architect — AI Consulting Sales Page

Production-ready single-page sales site for Ghost Architect AI consulting.

---

## Running locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

Open [http://localhost:3000/design-lab](http://localhost:3000/design-lab) for the visual playground.

---

## Project structure

```
ghost-architect/
├── design/
│   ├── stitch/            ← Drop Stitch exports here
│   ├── nano-banana/       ← Drop Nano Banana assets here
│   └── references/        ← Palette notes, logo explorations, visual refs
├── src/
│   ├── app/
│   │   ├── design-lab/
│   │   │   └── page.tsx   ← Visual playground (not linked from production)
│   │   ├── globals.css    ← ALL design tokens live here (:root CSS vars)
│   │   ├── layout.tsx     ← Metadata, font, HTML shell
│   │   └── page.tsx       ← Assembles all sections
│   ├── components/
│   │   ├── ui/            ← Shared primitives (CTAButton, Card, etc.)
│   │   ├── Nav.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AudienceFitSection.tsx
│   │   ├── PainPointsSection.tsx
│   │   ├── TriedAlreadySection.tsx
│   │   ├── WhyDifferentSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── BeforeAfterSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── StrategyIntensiveSection.tsx
│   │   ├── WhyStartHereSection.tsx
│   │   ├── MonthlyAdvisorySection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   ├── ContactFormSection.tsx
│   │   └── Footer.tsx
│   └── data/
│       ├── assets.ts      ← Asset slot registry (swap files here)
│       ├── content.ts     ← ALL page copy (edit here, not in components)
│       └── theme.ts       ← Theme token reference + TypeScript types
└── public/
    └── Ghost_Architect.png  ← Drop your portrait here
```

---

## Editing copy

**All text lives in `src/data/content.ts`.** To update any headline, paragraph, deliverable, or FAQ answer — edit that file only. No component changes needed.

The booking URL is set at the top of `content.ts`:
```ts
const BOOKING_URL = "https://calendar.app.google/nZLxNEPADvUKwN9w7"
```

---

## Swapping media assets

Asset paths are registered in `src/data/assets.ts`. To swap:

| Asset | What to do |
|-------|-----------|
| Hero portrait | Drop file into `public/`, update `assets.hero.portrait.path` in `assets.ts` |
| Logo image | Add to `public/`, set `assets.logo.imagePath` in `assets.ts` |
| Favicon | Replace `public/favicon.ico` |
| OG image | Add to `public/`, set `assets.graphics.ogImage` in `assets.ts`, then reference in `layout.tsx` |

---

## Changing the visual system

All design tokens are CSS custom properties in `src/app/globals.css` under `:root`:

```css
:root {
  --ga-accent:      #3B6EA5;  /* ← Change this to recolor all CTAs, icons, links */
  --ga-dark:        #0D1520;  /* ← Hero + dark section background */
  --ga-bg:          #F7F8FA;  /* ← Page background */
  ...
}
```

Changing a `:root` value updates it everywhere on the site instantly.

Use the **Design Lab** (`/design-lab`) to preview token changes live before committing them.

---

## Design Lab (`/design-lab`)

An internal visual playground — not linked from the production page.

| Tab | What it does |
|-----|-------------|
| **Tokens** | Live color pickers for all CSS vars. See changes update across samples instantly. |
| **Hero** | Switch between hero layout variants (split-image, split-illustration, centered) |
| **Cards** | Compare all card style variants side by side |
| **Buttons** | Compare all CTA button variants at all sizes |
| **Sections** | Preview any section tone (light / tinted / dark) with live components |

To lock in a visual decision from the design lab:
1. Note the hex values or variant name
2. Update `globals.css` or the relevant prop in `page.tsx`

---

## Connecting the contact form

The contact form in `ContactFormSection.tsx` currently intercepts the submit event and shows a success state. To connect it to a real handler:

1. Set up [Formspree](https://formspree.io), [Resend](https://resend.com), or similar
2. Update `contact.formAction` in `src/data/content.ts` with your endpoint
3. Remove the `e.preventDefault()` in `ContactFormSection.tsx` (or use `fetch` for AJAX submission)

---

## Remaining TODOs

| Item | File |
|------|------|
| Add phone number | `src/data/content.ts` → `footer.phone` |
| Add Privacy Policy URL | `src/data/content.ts` → `footer.legal[0].href` |
| Add Terms of Service URL | `src/data/content.ts` → `footer.legal[1].href` |
| Replace favicon | `public/favicon.ico` |
| Add OG image | `public/og.png` + `assets.ts` + `layout.tsx` |
| Connect contact form | `ContactFormSection.tsx` + `content.ts` |
| Add logo image (optional) | `public/logo.svg` + `assets.ts` |

---

## Deploying

This is a standard Next.js app. Deploy to Vercel with zero configuration:

```bash
npx vercel
```

Or build a static export:

```bash
npm run build
```
