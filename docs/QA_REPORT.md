# QA report, phase 1 (local design preview)

Date: 2026-10-15 · Astro 7.4.0 · Node 24.14 · Chromium (Playwright) · Lighthouse 12

Screenshots: `qa/screenshots/` (desktop 1440, tablet 820, mobile 390 for every primary page and one detail page of each type; `production-empty-states/` shows `npm run build` without sample content).

## Routes

| Route | Dev | Prod build | Notes |
|---|---|---|---|
| `/` | 200 | ✓ | Empty state for events when no confirmed events |
| `/events/`, `/events/<slug>/` | 200 | ✓ (index only in prod: no confirmed events) | Past events collapsed, 2 in sample data |
| `/mtc/` | 200 | ✓ | "To be announced" facts in prod |
| `/deployment-opportunities/`, `/<slug>/` | 200 | ✓ (index only in prod) | Empty state in prod |
| `/resources/` | 200 | ✓ | 21 PDFs + 29 YouTube links verified 2026-10-15 |
| `/media/` | 200 | ✓ | |
| `/blog/`, `/blog/<slug>/` | 200 | ✓ (index only in prod) | Empty state in prod |
| anything else | 404 | ✓ real 404 page | |

Production build: 8 pages, **0 "Sample" badges** in output. Preview build: 24 pages. `npm run check`: 0 errors, 0 warnings.

## Interactions (automated, 43/43 pass)

- Mobile menu: hidden by default, opens with `aria-expanded`, focus moves into the menu, Escape closes and returns focus, closes on breakpoint change and after choosing a link.
- Keyboard: first Tab reaches "Skip to content"; visible 3px focus ring on links, buttons and chips.
- Pillar strip: pause button toggles `aria-pressed`; static under `prefers-reduced-motion`; pauses on hover/focus.
- Accordions: "We are…" exclusive open; MTC FAQs independent; past events disclosure.
- Video: no `<video>` or iframe in the DOM until the visitor clicks; local trailer plays with controls; YouTube uses the privacy-enhanced domain. No autoplay audio anywhere.
- Filters (events, opportunities, blog categories, media types): hide non-matching items, update `aria-pressed`, persist in the URL query, restore on reload, "All" resets, empty message appears when nothing matches, live region announces counts.
- Inquiry form: required/invalid fields are flagged with messages and `aria-invalid`, focus moves to the first error, invalid email is caught, and with no Formspree ID configured a submit shows a clear "preview, not sending" notice and makes **no network request**.

## Layout

- No horizontal overflow on any route at 390, 820 or 1440 px (measured `scrollWidth - clientWidth = 0`).
- Headlines scale fluidly; longest sample titles ("Disciple Making Community: Winter Cohort Info Night", "From Denton to the nations: preparing for a first vision trip") wrap without clipping.
- Images carry width/height and reserved aspect ratios: CLS 0 on every audited page.
- Optional fields tested empty: event without end time or registration, opportunity without partner/cost/apply link, MTC with all facts null (production build).
- Date boundaries: events are sorted ascending; an event is "past" once its end time passes (or 3 hours after start when no end is given); formatting uses America/Chicago and shows CST/CDT.

## Lighthouse (preview build served by `astro preview`, mobile throttling unless noted)

| Page | Performance | Accessibility | Best practices | LCP | CLS | TBT |
|---|---|---|---|---|---|---|
| Home (mobile) | 99 | 100 | 100 | 2.1 s | 0 | 170 ms |
| Home (desktop) | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| Events (mobile) | 100 | 100 | 100 | 1.8 s | 0 | 0 ms |
| Media (mobile) | 100 | 100 | 100 | 1.7 s | 0 | 0 ms |
| Resources (mobile) | 100 | 100 | 100 | | 0 | |
| MTC (mobile) | 100 | 100 | 100 | | 0 | |
| Blog article (mobile) | 100 | 100 | 100 | 1.5 s | 0 | 0 ms |
| Opportunity detail (mobile) | 100 | 100 | 100 | | 0 | |

SEO scores 66 on every page **by design**: the `<meta name="robots" content="noindex">` tag and `robots.txt` disallow stay until `PUBLIC_ALLOW_INDEXING=true` is set on the production deployment. Everything else in the SEO category passes.

Contrast fixes made during QA: body text on orange bands is black (white was 3.4:1); small orange text on #1C1C1C panels uses a slightly brighter orange token (6.0:1 instead of 4.2:1); orange on white uses a deeper orange (5.1:1).

## Known limitations

- Photography is 1280 px frames from the Sent Ones trailer, cropped to 2.34:1. Hero images are upscaled on large screens and look soft; real Denton photos ≥ 2000 px are requested.
- The wordmark is a 340 px PNG; fine in the header, soft in the sharing image.
- Sample content is fictional and must be replaced; registration links in sample events are `#`.
- Canonical URLs, absolute sharing images and share links wait for the confirmed domain (`PUBLIC_SITE_URL`).
- Forms are preview-only until Formspree is connected (phase 2).
- No pagination on the blog or events: unnecessary at current volume; add when a list exceeds about 12 items.
- Tested in Chromium only. A quick manual pass in Safari/iOS and Firefox is recommended before launch (native `<details name>` grouping is a progressive enhancement there).
