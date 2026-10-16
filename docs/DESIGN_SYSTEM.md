# Design system

Source of truth: `src/styles/global.css`. Brand reference: `reference/brand/BRAND.md`.

## Identity

- **Wordmark**: Sent Ones white wordmark, unchanged, with a thin rule and a yellow letter-spaced **DENTON** label beside it. No chapter logo has been invented.
- **Voice**: bold, declarative, missional. Headlines shout; body copy stays calm and readable.
- **Rhythm**: black sections carry the weight; near-black (#1C1C1C) panels add depth; one orange band and one yellow section per page break up long dark runs.

## Colour

| Token | Hex | Use |
|---|---|---|
| `--c-black` | #000000 | Page background, header |
| `--c-ink` | #1C1C1C | Panels, cards, alternate sections |
| `--c-orange` | #F95103 | Accents, eyebrows, rules, scripture band, marquee |
| `--c-orange-deep` | #C63F00 | Orange **text on white** (5.1:1); the brand orange is only 3.4:1 on white |
| `--c-yellow` | #F5DE57 | Highlight words, primary buttons, statement sections |
| `--c-grey-300` | #C2C2C2 | Muted text on dark (11.9:1) |
| `--c-white` | #FFFFFF | Text on dark, footer background |

Contrast decisions: black text on yellow (15:1) and black text on orange (6.2:1) are used for buttons instead of white on orange (3.4:1). White Bebas text on orange is reserved for the large scripture band where the large-text threshold applies. Orange text on black is 6.2:1.

Theme contexts (`.theme-dark`, `.theme-ink`, `.theme-yellow`, `.theme-orange`, `.theme-light`) remap `--bg`, `--text`, `--text-muted`, `--heading`, `--accent-text`, `--rule` and `--focus` so components work on any background.

## Type

- **Bebas Neue** (display): all headings, uppercase, line-height 0.9, stacked one word per line in hero/split sections.
- **Montserrat** (variable 100–900): body, nav, labels, buttons. Body 17px / 1.65.
- Fluid scale: `--fs-display` 60–160px, `--fs-h1` 52–116px, `--fs-h2` 40–80px, `--fs-h3` 30–48px, `--fs-h4` 24–30px, `--fs-lead` 18–22px. Headlines use `text-wrap: balance` and `overflow-wrap: break-word`, so they shrink fluidly without clipping on a 390px screen.
- Labels (`.eyebrow`, `.meta`, `.link`, buttons): 13px, 700, 0.12em tracking, uppercase.

Fonts are self-hosted WOFF2 files from the Sent Ones child theme (`public/fonts/`), with the two Latin subsets preloaded.

## Spacing & layout

- 4px base. Section padding `--section` (72–128px) and `--section-sm` (48–80px).
- Content widths: `--w-wide` 88rem, `--w-content` 74rem, `--w-narrow` 56rem, `--w-prose` 42rem (article measure ≈ 70 characters).
- Gutter `clamp(1rem, 4vw, 2.5rem)`; 16px minimum on phones.
- Radius 3px (brand), pill for podcast badges.

## Components

| Component | Purpose |
|---|---|
| `Header` | Sticky black header, wordmark + Denton label, 6 nav items, yellow CTA, accessible full-screen mobile menu (Escape, focus management, scroll lock) |
| `PillarStrip` | The signature orange marquee. CSS animation, pauses on hover/focus, pause button, static under reduced motion, screen-reader text |
| `Hero` | Full-bleed photo with gradient overlay, kicker, yellow-highlighted headline, lead, actions. Sizes: full / page / short |
| `SplitSection` | Alternating 50/50 photo + stacked headline, the brand's core editorial pattern |
| `StatementBand` | Orange scripture band, yellow quote block, or yellow-on-black statement |
| `Accordion` | Native `<details>`; display variant for "We are…" |
| `EventCard` | Row (events page) and tile (home) variants with date tile, type badge, time in America/Chicago |
| `OpportunityCard`, `BlogCard` | Card grid items with scope/status/category metadata |
| `VideoEmbed` | Click-to-load poster for YouTube (privacy-enhanced) or self-hosted MP4. No autoplay, no download before click |
| `InquiryForm` | Formspree-ready form with validation, honeypot, pending/success/error states and preview notice |
| `FilterChips` | Client-side filtering with URL state and live region |
| `CtaBand`, `PageHeader`, `EmptyState`, `SampleBadge`, `ResourceLinks`, `SocialIcon`, `Photo` | Supporting pieces |

## Imagery

Photos are 2.34:1 frames from the Sent Ones trailer, served through `astro:assets` as AVIF/WebP/JPG at 480–1280px with lazy loading, except hero images which load eagerly. Replace with Denton photography ≥ 2000px wide when supplied; drop the files in `src/assets/photos/` and reference them by filename in content.

## Motion

One animation (the strip), one hover scale on card images, small transitions. Everything respects `prefers-reduced-motion`.
