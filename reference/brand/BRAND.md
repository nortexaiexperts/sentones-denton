# Sent Ones brand reference (pulled from sentones.com, 2026-10-14)

Source site: https://www.sentones.com (WordPress + Enfold/Avia theme, child theme `sentones-child`).
Everything here was extracted from the live site's HTML/CSS and verified against the
full-page screenshots in `../screenshots/`.

## Colors

| Role | Hex | Where it's used |
|---|---|---|
| Primary orange | `#F95103` | Buttons, links, nav hover, footer headings/text, hero bars, "As the Father has sent me" band, marquee strip background |
| Orange (alt) | `#F95203` / `#FB5401` | Same orange, slight variants in different CSS rules. Treat as one color. |
| Orange hover / border | `#D73001` | Button border + hover |
| Orange dark | `#B51000` | Secondary/pressed state |
| Orange stripe | `#FB7325` / `#FA6214` | Gradient stripes in Enfold components |
| Yellow | `#F5DE57` | Hero headline highlight ("LOST PEOPLE MATTER TO GOD"), full-width yellow sections on the home page |
| Black | `#000000` | Page background (main + alternate sections), header background |
| Near-black | `#1C1C1C` | Dark cards |
| Grey | `#595959` / `#484848` | Secondary dark backgrounds |
| Meta grey | `#C2C2C2` | Meta text on dark |
| White | `#FFFFFF` | Body text on dark, footer background, light sections |
| Footer bg 2 | `#F8F8F8` | Footer alt background |

Overall scheme: **black background, white text, orange accents, yellow as the "shout" color.**
Light sections (white/yellow) break up long black runs.

## Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Headings (h1-h3, special headings, nav) | **Bebas Neue** | 400 | All caps by nature, very tight leading, used HUGE (hero h1 renders ~144px on desktop; Enfold h1 var is 80px) |
| Body / buttons / labels | **Montserrat** | variable 100-900 | Body 16-17px; buttons use uppercase ~11-13px, letter-spaced |
| Quotes (rarely) | Droid Serif / Georgia italic | 400 | Enfold "classic-quote" style, barely used |

Font files are in `fonts/` (woff2, self-hosted copies from the child theme). Both fonts are
also free on Google Fonts: https://fonts.google.com/specimen/Bebas+Neue and
https://fonts.google.com/specimen/Montserrat. Ready-made `@font-face` + CSS variables are in
`tokens.css`.

Heading style: ALL CAPS, line-height ~0.9-1.0, stacked one word per line for impact
("DISCOVER / YOUR / CALLING").

## Logo and marks

| File | What |
|---|---|
| `logos/sent-ones-white-logo.png` | Primary wordmark, white on transparent. "SENT ⊙ ONES" with a circle/target glyph replacing the O. Use on black. |
| `logos/sentones-icon-white.png` | Standalone icon (the circle glyph), white. Used as the podcast cover. |
| `logos/favicon.png` | Favicon (tiny, 416 bytes). Needs a hi-res version for the new site. |
| `logos/sentones-website-graphic.png` | Large orange graphic used on the Coaching page hero. |
| `logos/dmc-logo.png` | "Disciple Making Communities" sub-brand logo. |

No black-on-white version of the logo was found on the site; the header is always black.

## Taglines and core copy

- Site title: **"Discover Your Calling"**
- Three pillars, used everywhere (marquee, home sections, podcast description):
  **DISCOVER YOUR CALLING 〰️ DEVELOP YOUR SKILLS 〰️ DEPLOY WITH PURPOSE**
- Hero quote: *"Lost people matter to God, and so they must matter to us"*
- Scripture band: *"As the Father has sent me, so I am sending you." John 20:21*
- Hudson Taylor quote: *"The Great Commission is not an option to be considered; it is a command to be obeyed."*
- Meta description: "God placed you here for a reason, with a unique, beautiful purpose to build His kingdom. Let's discover together how He wants to work through your life."
- Footer: `info@sentones.com` / `(918) 221-9470` / "© Sent Ones. All Rights Reserved."
- Chat widget greeting: "Hey there! 👋 Looking for your next step in living sent?"

## Layout and component patterns (see screenshots)

1. **Header**: black, full width, white wordmark left, uppercase Montserrat nav right
   (HOME, COACHING, MEDIA ▾, EVENTS, MERCH), cart icon. Sticky.
2. **Hero**: full-bleed photo with dark overlay, giant Bebas Neue quote, yellow on the first
   lines then white, orange CTA button below on black ("FIND YOUR NEXT STEP").
3. **Marquee strip**: orange background, black uppercase Montserrat bold text scrolling
   horizontally: the three pillars separated by a 〰️ wave glyph. Appears between most
   sections. This is the most recognizable brand element.
4. **Scripture band**: solid orange block, white Bebas Neue quote, small reference below.
5. **Alternating split sections** (Discover / Develop / Deploy): 50/50 grid, black text
   panel with stacked Bebas Neue heading + Montserrat paragraph + orange text-link button,
   photo on the other side; alternates left/right.
6. **Yellow full-bleed sections** (`#F5DE57`) for the quote block and "WE ARE…" accordion.
7. **"The latest…"**: black section, Bebas heading, row of social icons (Instagram,
   Facebook, TikTok, YouTube, Apple Podcasts, Spotify), newsletter email field with orange
   pill submit button.
8. **Footer**: white background, orange Bebas headings ("SENT ONES", "FOLLOW US"), orange
   contact text, orange social icons. Orange "scroll to top" circle button bottom-right.
9. **Buttons**, two variants:
   - Orange: fill `#F95103`, white uppercase Montserrat text, radius ~3px, border `#D73001`
     (home hero "FIND YOUR NEXT STEP", newsletter submit).
   - Yellow: fill `#F5DE57`, black uppercase text (Events page "EVENT DETAILS",
     "I'M INTERESTED!", "LET US KNOW"). Yellow is the dominant button on inner pages.
   - Secondary: orange text link with orange underline ("LET'S DISCOVER").
10. **Event cards** (Events page, see screenshot 02): black background, thin orange
    horizontal rule between cards, thumbnail photo left, **yellow** Bebas Neue title
    ("DETROIT GOSPEL TRAINING"), **orange** bold Montserrat date line ("SEPT 26 | DETROIT, MI"),
    white paragraph, yellow button. Page H1 is white Bebas over a photo hero.
11. **Blog grid**: 3-column cards with image, date, title, excerpt, "Read more"; filter bar
    by Category / Author / Sort.
12. **Training page**: numbered "Four Fields" sections (0. abiding, 1. entry, 2. gospel,
    3. discipleship, 4. church, 5. leaders, X. develop) each with a line-art icon
    (`icons/`), a one-liner, and Video / Document links.

## Brand personality

Bold, high-energy, missional. Shouty headlines, short declarative copy, scripture used as
design elements. Target audience: believers exploring a call to missions, church leaders,
disciple-makers.

## Screenshot artifacts to be aware of

Some blocks on the home screenshot render as solid yellow/black with no content. Those are
lazy-loaded video/accordion blocks (hero trailer video, "WE ARE…" accordion) that hadn't
painted when the capture ran. The copy for them is in `../content/01-home.md`.
