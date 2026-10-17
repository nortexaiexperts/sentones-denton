# Client deliverables & content status

Last updated: 2026-10-15 (phase 1 design preview).

The website is complete as a local preview. Everything below is what we still need from the client to replace sample content and launch. **Blocks launch** means the public site cannot go live without it; everything else can be added after launch through the CMS.

## 1. Checklist

| # | Deliverable / decision | Why it is needed | Where it appears | Priority | Blocks launch | Status | Suggested format |
|---|---|---|---|---|---|---|---|
| 1 | **Official local name** and relationship to Sent Ones (chapter, affiliate, partner?) | Header, footer, titles, legal line | Every page | High | Yes | Working name "Sent Ones Denton" | One sentence by email |
| 2 | **Approval to use Sent Ones branding and shared content** (logo, fonts, taglines, values text, scripture band, resources, podcasts, trailer footage) | The brand belongs to Sent Ones | Every page | High | Yes | Pending | Email confirmation from Sent Ones |
| 3 | **Logo files** (vector or high-res PNG of the wordmark and icon) and a hi-res favicon | Header, footer, browser tab, sharing image | Header, footer, sharing image | High | No | **Received 2026-10-16:** "Sent Ones Denton" lockup, 2172 px PNG (black on transparent). White and black variants generated; used in header, footer and sharing image. Original kept in `reference/brand/logos/`. Still useful: a vector (SVG/AI) and a square icon version for the favicon | SVG if available |
| 4 | **Denton mission statement / introduction** (2 short paragraphs) | Home intro and page descriptions | Home "Sent to Denton. Sent from Denton." | High | Yes | Proposed copy written, needs review | Plain text |
| 5 | **Public contact email**, optional phone, and **Denton social accounts** | Footer, inquiry replies, "Follow" blocks | Footer, Media page | High | Yes (email) | **Socials received 2026-10-16:** Instagram @sentonesdenton and the Sent Ones Denton Facebook page, now in footer and Media. National icons removed. Public email still missing (footer links to the form) | Email address |
| 6 | **Discovery / coaching destination**: use the national Calendly links, a Denton booking link, or the inquiry form? | Discover journey CTA | Home Discover section, Resources coaching cards | High | No (form used for now) | Pending | Decision + link |
| 7 | **Events and standing rhythms**: for each dated event: title, type (training / mobilization / harvest / worship), date/time, venue, description, cost, registration link, image. For each standing rhythm (e.g. Denton County Strategy Meeting): cadence, time, venue, who it is for, how to join | Events page, home | Events, Home | High | No (honest empty states exist) | **Structure agreed 2026-10-16** (rhythms pinned above dated events). Content still sample | Spreadsheet or one email per item |
| 8 | **MTC facts**: residential format, housing, meals, location, dates, duration, cost, scholarships, facilitators, application link | MTC page facts and FAQs | MTC | High | No | **Partly received 2026-10-16:** open enrollment, 12–18 months (condition-based), Denton TX, cost TBD, full-time commitment. Client will "develop out this page" later and may link the Hall of Tyrannus flyer + booklet (Google Drive). Still open: housing/meals, facilitators, whether to use the "Hall of Tyrannus" name on the site | Short doc or form |
| 9 | **Deployment opportunities** and what may be published (partners, regions, costs, sensitivity) | Deployment Opportunities page | Deployment | Medium | No (empty state exists) | Sample only | List per opportunity |
| 10 | **Training documents / resource links** owned by Denton, if any, plus confirmation the shared Sent Ones library may be listed | Resources page | Resources | Medium | No | Shared library verified and listed with source label | Links |
| 11 | **Media**: Denton recordings, YouTube channel, and permission to embed national podcasts/documentary | Media page | Media, Home | Medium | No | **Decision 2026-10-16:** client wants only *general* tools (Four Fields, CPM training videos, modules, docs). No documentaries, blog posts or podcasts from other streams; link to sentones.com for those instead. Removed from Home; Media page to follow the same rule | Links |
| 12 | **Blog**: first 1–3 articles, author names, roles, short bios, photos, and whether the Sent Ones disclaimer applies | Blog index and articles | Blog | Medium | No | Client (2026-10-16): "Blog posts will be forthcoming." Sample articles remain until then | Google Doc per article |
| 13 | **Photography** of real Denton gatherings, with permission from identifiable people | Replaces trailer frames; hero quality | Every page | High | No | **In progress (2026-10-16):** client will replace all five home photos (banner + Discover, Develop, Deploy, MTC); Karen is gathering them | 10–20 landscape photos ≥ 2000 px |
| 14 | **Domain** choice and any existing website / old URLs | Canonical URLs, sitemap, sharing, redirects | Site-wide | High | Yes | Unknown | Domain name + registrar |
| 15 | **Account owner email** (role address like web@…) and the list of CMS editors | Sanity, Cloudflare, GitHub, Formspree ownership | Phase 2 setup | High | Yes | Unknown | Email list |
| 16 | **Form recipients** and any privacy wording required | Inquiry form delivery | Resources, MTC inquiry forms | High | Yes | **Received 2026-10-16:** deliver all inquiries (coaching, discovery, deployment, DMC guide) to both jead09023@praxwell.com and kaad09023@praxwell.com, addresses hidden from the sender; client asked for spam screening (Formspree filtering + honeypot + optional reCAPTCHA) | Configure in Formspree (phase 2) |
| 17 | **Newsletter**: do you want one, and which provider? | A real subscription workflow needs a provider and consent text | Home / Media (not built yet) | Low | No | Not built; contact form is not a mailing list | Decision |
| 18 | **Hero quotation and statements**: keep "Lost people matter to God…", John 20:21, Hudson Taylor quote, "We are…" values? | Home | Home | Medium | No | Shared copy in place pending approval | Yes/no per item |

## 2. Content status register

| Status | Meaning | Items |
|---|---|---|
| **Confirmed Denton content** | Approved by the client | None yet |
| **Shared Sent Ones material, pending approval** | Copied from sentones.com; needs Sent Ones permission for Denton use | Wordmark, icon, fonts, three pillars, hero quotation, John 20:21 band, Hudson Taylor quote, "We are…" values (4 items), MTC pitch and FAQ wording (adapted from the LA page), Four Fields / Head-Heart-Hands resource library (links verified 2026-10-15; the "Role of Elders" PDF returned 404 and was left out), three podcasts, documentary, trailer video and the photographs taken from it, national social links, article disclaimer |
| **Proposed local copy, pending review** | Written for Denton by the designer | Home intro, pillar paragraphs (adapted), MTC audience and application steps, deployment "how it works" steps, page leads and CTAs, 404 copy, footer note, meta descriptions |
| **Sample (fictional) content** | Layout review only, badge-labelled, never in production builds | 7 events, 4 deployment opportunities, 5 articles, 2 authors, MTC dates / cost / housing / apply link |
| **Missing** | Not available yet | Contact details, Denton photos, real events, MTC facts, domain, editor list, form recipients |

Photo provenance: all `src/assets/photos/*.jpg` are frames extracted from `reference/brand/images/hero-trailer.mp4` (Sent Ones' own trailer), cropped to remove letterboxing and subtitles. They do not depict Denton participants. The two Unsplash-derived OG images from the original site were not used.

## 3. Draft client update (not sent)

Subject: Sent Ones Denton website preview, and what we need from you

Hi,

The first full version of the Sent Ones Denton website is ready for you to review locally. All seven pages are built in the Sent Ones style with Denton as the clear local identity. Anything marked "Sample" is a fictional placeholder so you can see the layout; it will be swapped for your real content.

**Needed now (so we can replace the samples and finish copy):**
1. Your official local name and how you describe the relationship to Sent Ones.
2. Confirmation from Sent Ones that we may use their branding, trailer footage, values text and resource library.
3. A public contact email (and phone if you want it listed).
4. A short Denton introduction, or a thumbs-up on the draft intro on the homepage.
5. Which booking destination you want for discovery and coaching calls.
6. Any upcoming events with dates, venue and registration links.

**Needed before launch:**
7. MTC details: residential format, housing and meals, dates, duration, cost, scholarships, who facilitates, how to apply.
8. Deployment opportunities you are comfortable publishing.
9. Real photos of Denton gatherings (with permission from people who are identifiable) and your logo files in the largest size you have.
10. Your domain name and the email address that should own the website accounts, plus who should be able to edit content.
11. Where inquiry-form messages should be delivered.
12. First blog articles and author details, if you want the blog live at launch.

Nothing here blocks you from reviewing the design now. Once you approve the look and feel, I will connect the content dashboard, hosting and forms.

Thanks,
