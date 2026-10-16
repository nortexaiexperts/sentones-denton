/**
 * The single content-access layer. Pages import from here and nowhere else.
 *
 * Today: seed content (+ clearly labelled sample content when preview mode is on).
 * Later:  if SANITY_PROJECT_ID is set, fetch from Sanity at build time and fail the
 *         build loudly on fetch errors instead of silently falling back to seed data.
 */
import { marked } from 'marked';
import * as seed from '../data/seed';
import * as demo from '../data/demo';
import type {
  Author,
  CoachingOption,
  Event,
  Homepage,
  MediaItem,
  MtcProgram,
  Opportunity,
  Post,
  ResourceGroup,
  SiteSettings,
} from './types';
import { isPast } from './format';

/** Preview content is on in `astro dev`, and in builds only when explicitly requested. */
export const previewContentEnabled: boolean =
  import.meta.env.PUBLIC_PREVIEW_CONTENT === 'true' ||
  (import.meta.env.DEV && import.meta.env.PUBLIC_PREVIEW_CONTENT !== 'false');

export const sanityConfigured: boolean = Boolean(import.meta.env.SANITY_PROJECT_ID);

if (sanityConfigured) {
  // Phase 2: replace the seed reads below with Sanity queries (see src/lib/sanity.ts, to be added).
  throw new Error(
    'SANITY_PROJECT_ID is set but the Sanity client is not wired up yet. Unset it to build from seed content.',
  );
}

function withDemo<T>(confirmed: T[], sample: T[]): T[] {
  return previewContentEnabled ? [...confirmed, ...sample] : confirmed;
}

// ---------- Site-wide ----------

export function getSiteSettings(): SiteSettings {
  return seed.siteSettings;
}

export function getHomepage(): Homepage {
  return seed.homepage;
}

// ---------- Events ----------

export function getAllEvents(): Event[] {
  return withDemo(seed.events, demo.demoEvents)
    .filter((e) => e.published)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
}

export function getUpcomingEvents(now = new Date()): Event[] {
  return getAllEvents().filter((e) => !isPast(e, now));
}

export function getPastEvents(now = new Date()): Event[] {
  return getAllEvents()
    .filter((e) => isPast(e, now))
    .reverse();
}

export function getFeaturedEvents(limit = 3, now = new Date()): Event[] {
  const upcoming = getUpcomingEvents(now);
  const featured = upcoming.filter((e) => e.featured);
  return (featured.length ? featured : upcoming).slice(0, limit);
}

export function getEvent(slug: string): Event | undefined {
  return getAllEvents().find((e) => e.slug === slug);
}

// ---------- MTC ----------

export function getMtc(): MtcProgram {
  const base = seed.mtc;
  if (!previewContentEnabled) return base;
  // Overlay sample facts for layout review; each sample section is badged on the page.
  const { residential, location, duration, dates, accommodation, cost, financialSupport, apply } = demo.demoMtcFormat;
  return {
    ...base,
    format: {
      ...base.format,
      residential: base.format.residential ?? residential ?? null,
      location: base.format.location ?? location ?? null,
      duration: base.format.duration ?? duration ?? null,
      dates: base.format.dates ?? dates ?? null,
    },
    accommodation: base.accommodation ?? accommodation,
    cost: base.cost ?? cost,
    financialSupport: base.financialSupport ?? financialSupport,
    apply: base.apply ?? apply,
  };
}

/** Which MTC facts are still sample values (for badges). */
export function getMtcSampleFlags(): Record<string, boolean> {
  const base = seed.mtc;
  if (!previewContentEnabled) return {};
  return {
    residential: !base.format.residential,
    location: !base.format.location,
    duration: !base.format.duration,
    dates: !base.format.dates,
    accommodation: !base.accommodation,
    cost: !base.cost,
    financialSupport: !base.financialSupport,
    apply: !base.apply,
  };
}

// ---------- Deployment opportunities ----------

const availabilityOrder = { open: 0, upcoming: 1, closed: 2 } as const;

export function getOpportunities(): Opportunity[] {
  return withDemo(seed.opportunities, demo.demoOpportunities)
    .filter((o) => o.published)
    .sort((a, b) => availabilityOrder[a.availability] - availabilityOrder[b.availability]);
}

export function getOpportunity(slug: string): Opportunity | undefined {
  return getOpportunities().find((o) => o.slug === slug);
}

// ---------- Resources & coaching ----------

export function getResourceGroups(): ResourceGroup[] {
  return seed.resourceGroups;
}

export function getCoachingOptions(): CoachingOption[] {
  return seed.coachingOptions;
}

// ---------- Media ----------

export function getMedia(): MediaItem[] {
  return seed.media;
}

export function getFeaturedMedia(limit = 2): MediaItem[] {
  return seed.media.filter((m) => m.featured).slice(0, limit);
}

// ---------- Blog ----------

export interface RenderedPost extends Post {
  author: Author;
  bodyHtml: string;
}

export function getAuthors(): Author[] {
  return withDemo(seed.authors, demo.demoAuthors);
}

export function getPosts(): Post[] {
  return withDemo(seed.posts, demo.demoPosts)
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogCategories(): string[] {
  const used = new Set<string>();
  for (const p of getPosts()) for (const c of p.categories) used.add(c);
  // Keep the shared taxonomy order, then any extra categories.
  return [...seed.blogCategories.filter((c) => used.has(c)), ...[...used].filter((c) => !seed.blogCategories.includes(c))];
}

export function getPost(slug: string): RenderedPost | undefined {
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) return undefined;
  const author = getAuthors().find((a) => a.slug === post.authorSlug) ?? {
    slug: 'unknown',
    name: 'Sent Ones Denton',
    role: '',
    bio: '',
    status: 'proposed' as const,
  };
  const bodyHtml = marked.parse(post.body, { async: false }) as string;
  return { ...post, author, bodyHtml };
}

export function getAdjacentPosts(slug: string): { previous: Post | null; next: Post | null } {
  const all = getPosts();
  const i = all.findIndex((p) => p.slug === slug);
  return {
    previous: i >= 0 && i < all.length - 1 ? all[i + 1] : null, // older
    next: i > 0 ? all[i - 1] : null, // newer
  };
}
