# Next phase: CMS, hosting and automation (deferred)

Phase 1 delivered the local website. Once the design is approved, follow `workflow.pdf` (the Website Launch Playbook) in this order. Nothing below has been started; no accounts exist.

## 1. Sanity CMS

- `studio/` with schemas for: site settings (singleton), homepage (singleton), events, MTC (singleton), deployment opportunities, resources (groups + items), media, blog posts, authors. Field shapes already match `src/lib/types.ts`.
- Plain-English descriptions, required alt text, validation, previews, no create/delete on singletons.
- `src/lib/sanity.ts`: build-time client + image URL helper (no token; public dataset).
- `src/lib/content.ts`: when `SANITY_PROJECT_ID` is set, fetch from Sanity and **fail the build on fetch errors** (never fall back to seed silently). Today it throws if the variable is set, by design.
- `scripts/export-seed.ts`: turn `seed.ts` into `sanity-seed/seed.ndjson` for `sanity dataset import`.
- Blog bodies: Portable Text in Sanity, rendered with `astro-portabletext`; seed bodies stay Markdown.

## 2. GitHub

- `git init`, `main` branch, feature branches + pull requests for every change.
- `.github/workflows/verify.yml`: `npm ci`, `npm run check`, `npm run build` on pull requests.
- `.github/workflows/daily-rebuild.yml`: cron `0 11 * * *` (06:00 Central during daylight time, 05:00 in winter; GitHub cron is UTC and does not shift) + `workflow_dispatch`, POSTing to `secrets.CLOUDFLARE_DEPLOY_HOOK`. The daily rebuild only refreshes date-dependent content (past events roll off); it does not discover new videos.

## 3. Cloudflare Workers (static assets)

- `wrangler.jsonc`: `name`, `compatibility_date`, `assets.directory: ./dist`, `assets.not_found_handling: 404-page`, `previews: {}` for branch previews.
- Build command `npm run build`, deploy `npx wrangler deploy`, production branch `main`.
- Variables on Production **and** Previews Base: `SANITY_PROJECT_ID`, `SANITY_DATASET`, `PUBLIC_FORMSPREE_INQUIRY_ID`, `PUBLIC_SITE_URL`, and `PUBLIC_ALLOW_INDEXING=true` on production only. Replace `public/robots.txt` with an allow rule + sitemap line on production.
- Deploy hooks: "Sanity publish" (Sanity webhook on create/update/delete, drafts off) and "Daily rebuild" (GitHub secret).

## 4. Formspree

- One form for inquiries (`PUBLIC_FORMSPREE_INQUIRY_ID`). The form component already posts with `Accept: application/json`, includes a `_gotcha` honeypot, and only reports success on a 2xx response.
- Decide recipients and privacy wording with the client first.

## 5. Launch

- Confirm domain, set `PUBLIC_SITE_URL` (enables canonical URLs, absolute sharing images and share links).
- Add redirects only for genuine legacy Denton URLs (none known).
- Submit `/sitemap-index.xml` in Search Console after DNS.
- Hand over every account to the client's role email.
