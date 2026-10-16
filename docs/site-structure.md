# Sent Ones Denton: proposed site structure

Bakht's plan (2026-10-14), with each item mapped to the original sentones.com page we
captured so the rebuild has a reference for layout and copy.

## Home page
Three pillars, same as the original home page (`reference/content/01-home.md`):

| Pillar | Copy direction | Links to |
|---|---|---|
| **Discover** …your calling | | (Coaching / discovery CTA) |
| **Develop** …your skills | | Events, MTC, Resources |
| **Deploy** …with purpose | | Deployment Opportunities |

## Pages

| Page | Purpose | Original reference |
|---|---|---|
| **Events** | Training and Worship Events | `/events` → `reference/content/02-events.md`, screenshot 02 |
| **MTC** | Residential Missions Training Opportunity | `/missionary-training-center` → `03-missionary-training-center.md`, screenshot 03; virtual variant in `14-east-idaho-dmc.md` |
| **Deployment Opportunities** | Field Deployment Opportunities | No direct equivalent on the original. Closest patterns: event cards (02) and the residency page (14). Coaching CTAs (05) cover the "I'm ready, send me" angle. |
| **Resources** | Training and Coaching Resources | `/training` → `04-training-resources.md`, screenshot 04; `/coaching` → `05-coaching.md`, screenshot 05 |
| **Media** | Links to Videos and Media | `/podcast` → `07-podcast-media.md`, screenshot 07; `/doc` → `08-documentary.md`, screenshot 08 |
| **Blog** | | `/blog` → `06-blog.md`, screenshots 06 + 13 |

Not in scope (captured for reference only): Merch (10), Host an Event form (11),
Revival Maps partner page (12), Disciple Making landing (09).

## What non-technical editors will need to change (CMS collections)

Derived from the "CMS fields this implies" notes in each content file:

- **events**: title, type (training | worship), date, location, image, description, cta_label, cta_url
- **deployment_opportunities**: title, location, date range, description, image, apply_url, contact
- **mtc** (single page settings): city, venue, schedule, dates, register_url, stats, FAQ list, contact
- **resources**: group, title, one-liner, icon, video_url, document_url
- **media**: title, type, description, cover, links
- **blog**: title, date, author, categories, image, excerpt, body
- **site settings**: homepage banner, contact email/phone, social links
