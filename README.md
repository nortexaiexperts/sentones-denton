# Sent Ones Denton

A Denton expression of [sentones.com](https://www.sentones.com): a static Astro + TypeScript website that helps people **discover their calling, develop their skills, and deploy with purpose**.

**Status: live preview at [sentonesdenton.org](https://sentonesdenton.org)** (noindex until launch is approved). Code on GitHub (`nortexaiexperts/sentones-denton`), hosted on Cloudflare Workers in the ministry's account. Sanity CMS and Formspree are next (see `docs/NEXT_PHASE.md`).

Publishing is automatic: every merge into `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to Cloudflare. Pull requests run `verify.yml` (type-check + build) first. A manual fallback is `npm run build:preview && npx wrangler deploy`.

## Preview it

```bash
npm install
npm run dev        # http://localhost:4321/  (includes clearly-labelled sample content)
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Production build into `dist/`. Sample content is **excluded**; empty states render instead. |
| `npm run build:preview` | Production build **with** sample content, for sharing a design preview. |
| `npm run preview` | Serve `dist/` locally (http://localhost:4321/). |
| `npm run check` | Type-check `.astro` and `.ts` files. |

Requires Node 22.12+ (built on Node 24, Astro 7.4).

## Pages

| Route | Page |
|---|---|
| `/` | Home: hero, pillar strip, Denton intro, trailer, scripture band, Discover / Develop / Deploy, events, MTC teaser, resource picks, values, final CTA |
| `/events/` + `/events/<slug>/` | Training and worship events with filters, past events, detail pages |
| `/mtc/` | Missions Training Center (residential missions training) |
| `/deployment-opportunities/` + `/<slug>/` | Local, regional and international opportunities with filters and detail pages |
| `/resources/` | Coaching conversations, DMC guide, Four Fields library, Head / Heart / Hands, inquiry form |
| `/media/` | Documentary, trailer, podcasts, playlists (click-to-load players) |
| `/blog/` + `/blog/<slug>/` | Article index with category filters and article template |
| `/404` | Not-found page |

## Project shape

```
src/
  data/seed.ts         approved / shared / proposed content (the fallback when Sanity is unset)
  data/demo.ts         FICTIONAL sample content, only merged in preview mode
  lib/content.ts       the single content-access layer; pages import only from here
  lib/types.ts         content model shared by seed, demo and (later) Sanity
  lib/images.ts        resolves photo keys to optimised local images
  lib/format.ts        date/time helpers (America/Chicago)
  components/          header, footer, hero, pillar strip, cards, forms, accordion, video…
  layouts/BaseLayout   <head> metadata, header, preview banner, footer
  pages/               routes
  styles/global.css    design tokens + global styles
  assets/photos/       photography (frames from the Sent Ones trailer, see docs/CLIENT_DELIVERABLES.md)
public/                fonts, logos, icons, trailer (web copy + poster), robots.txt
docs/                  deliverables tracker, design system, QA report, next phase plan
qa/screenshots/        full-page captures at 390 / 820 / 1440 px (git-ignored)
reference/             original sentones.com reference material (do not edit)
```

### Preview (sample) content

Sample events, opportunities, articles and MTC details live only in `src/data/demo.ts` and carry a **Sample** badge. They are included when `PUBLIC_PREVIEW_CONTENT=true` or during `astro dev`; `npm run build` never includes them. To add real content, put it in `src/data/seed.ts` (phase 2: Sanity) and delete the sample records.

### Forms

The inquiry form validates locally and shows a "preview, not sending" notice. When `PUBLIC_FORMSPREE_INQUIRY_ID` is set it posts to Formspree and only reports success on a confirmed 2xx response.

## Documentation

- `docs/CLIENT_DELIVERABLES.md`: everything needed from the client, content status register, and a draft client update.
- `docs/DESIGN_SYSTEM.md`: tokens, type scale, components, contrast decisions.
- `docs/QA_REPORT.md`: verification results and known limitations.
- `docs/NEXT_PHASE.md`: Sanity, Cloudflare, GitHub, Formspree and rebuild plan (deferred).
- `docs/site-structure.md`: the original page plan.

Brand assets belong to Sent Ones; the Denton site must be approved by them before it goes live.
