/**
 * The single content-access layer. Pages import from here and nowhere else.
 *
 * Events, standing rhythms, blog posts and authors come from Sanity when
 * SANITY_PROJECT_ID is set (the editors' dashboard). Everything else, and those four
 * collections when Sanity is not configured, comes from src/data/seed.ts.
 * A Sanity fetch error fails the build loudly: we never silently publish stale seed data.
 */
import { marked } from 'marked';
import * as seed from '../data/seed';
import * as demo from '../data/demo';
import { blocksToHtml, blocksToParagraphs, blocksToText, sanityClient, sanityImageUrl } from './sanity';
import type {
  Author,
  CoachingOption,
  Event,
  EventType,
  Homepage,
  MediaItem,
  MtcProgram,
  Opportunity,
  Post,
  ResourceGroup,
  Rhythm,
  SiteSettings,
} from './types';
import { isPast } from './format';

/** Preview content is on in `astro dev`, and in builds only when explicitly requested. */
export const previewContentEnabled: boolean =
  import.meta.env.PUBLIC_PREVIEW_CONTENT === 'true' ||
  (import.meta.env.DEV && import.meta.env.PUBLIC_PREVIEW_CONTENT !== 'false');

export const sanityConfigured: boolean = Boolean(sanityClient);

/** Sample content only fills a collection that has no real content yet. */
function withDemo<T>(confirmed: T[], sample: T[]): T[] {
  return previewContentEnabled && confirmed.length === 0 ? sample : confirmed;
}

// ---------- Sanity (loaded once per build) ----------

const TZ = 'America/Chicago';

type SanityImage = { asset?: unknown; alt?: string } | null;
interface SanityEvent {
  _id: string; title: string; slug: string; types?: Event['types']; start: string; end?: string;
  featured?: boolean; online?: boolean; venueName?: string; address?: string; city?: string;
  image?: SanityImage; summary: string; description?: unknown;
  registrationUrl?: string; registrationLabel?: string; cost?: string;
}
interface SanityRhythm {
  _id: string; title: string; cadence: string; time?: string; online?: boolean; venueName?: string; city?: string;
  description: string; points?: string[]; audience?: string; joinLabel?: string; joinUrl?: string;
}
interface SanityAuthor { _id: string; name: string; slug: string; role?: string; bio?: string }
interface SanityOpportunity {
  _id: string; title: string; slug: string; region: string; scope: Opportunity['scope']; availability: Opportunity['availability'];
  overview: string; image?: SanityImage; dates?: string; duration?: string; purpose?: string[]; requirements?: string[];
  preparation?: string[]; partner?: string; cost?: string; applyLabel?: string; applyUrl?: string;
}
interface SanityPost {
  _id: string; title: string; slug: string; authorSlug?: string; date: string; categories?: string[];
  image?: SanityImage; imageCaption?: string; excerpt: string; body?: unknown; seoTitle?: string; seoDescription?: string;
}

const QUERY = `{
  "events": *[_type == "event" && defined(slug.current) && defined(start)] | order(start asc) {
    _id, title, "slug": slug.current,
    // "types" (list) is current; older documents only have the single "type" field.
    "types": select(defined(types[0]) => types, defined(type) => [type], ["training"]),
    start, end, featured, online, venueName, address, city,
    image, summary, description, registrationUrl, registrationLabel, cost
  },
  "rhythms": *[_type == "rhythm"] | order(coalesce(order, 100) asc, title asc) {
    _id, title, cadence, time, online, venueName, city, description, points, audience, joinLabel, joinUrl
  },
  "authors": *[_type == "author" && defined(slug.current)] { _id, name, "slug": slug.current, role, bio },
  "opportunities": *[_type == "opportunity" && defined(slug.current)] | order(title asc) {
    _id, title, "slug": slug.current, region, scope, availability, overview, image, dates, duration,
    purpose, requirements, preparation, partner, cost, applyLabel, applyUrl
  },
  "posts": *[_type == "post" && defined(slug.current) && defined(date)] | order(date desc) {
    _id, title, "slug": slug.current, "authorSlug": author->slug.current, date, categories,
    image, imageCaption, excerpt, body, seoTitle, seoDescription
  }
}`;

interface SanityData {
  events: SanityEvent[]; rhythms: SanityRhythm[]; authors: SanityAuthor[]; posts: SanityPost[]; opportunities: SanityOpportunity[];
}

async function loadSanity(): Promise<SanityData | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<SanityData>(QUERY);
  } catch (err) {
    throw new Error(
      `Could not load content from Sanity (project ${sanityClient.config().projectId}). ` +
        `The build stops here so the live site keeps its last good version. Cause: ${(err as Error).message}`,
    );
  }
}

const cms = await loadSanity();

function imageRef(img: SanityImage | undefined, fallbackAlt: string) {
  const src = img?.asset ? sanityImageUrl(img, 1600) : '';
  return { src: src || 'walking-together', alt: img?.alt || fallbackAlt };
}

const cmsEvents: Event[] | null = cms
  ? cms.events.map((e) => ({
      slug: e.slug,
      title: e.title,
      types: e.types?.length ? e.types : ['training'],
      start: e.start,
      end: e.end ?? null,
      timezone: TZ,
      venue: {
        name: e.venueName ?? (e.online ? 'Online' : 'To be announced'),
        address: e.online ? null : (e.address ?? null),
        city: e.online ? 'Online' : (e.city ?? 'Denton, TX'),
        online: Boolean(e.online),
      },
      image: imageRef(e.image, e.title),
      summary: e.summary,
      description: blocksToParagraphs(e.description).length ? blocksToParagraphs(e.description) : [e.summary],
      registration: e.registrationUrl
        ? { label: e.registrationLabel || 'Register', href: e.registrationUrl, external: /^https?:/.test(e.registrationUrl) }
        : null,
      cost: e.cost ?? null,
      published: true,
      featured: e.featured ?? true,
      status: 'confirmed',
    }))
  : null;

const cmsRhythms: Rhythm[] | null = cms
  ? cms.rhythms.map((r) => ({
      slug: r._id,
      title: r.title,
      cadence: r.cadence,
      time: r.time ?? null,
      venue: { name: r.online ? 'Online' : (r.venueName ?? 'Location shared on request'), city: r.online ? 'Online' : (r.city ?? 'Denton, TX'), online: Boolean(r.online) },
      description: r.description,
      points: r.points ?? [],
      audience: r.audience ?? null,
      cta: r.joinUrl ? { label: r.joinLabel || 'Ask to join', href: r.joinUrl, external: /^https?:/.test(r.joinUrl) } : null,
      published: true,
      status: 'confirmed',
    }))
  : null;

const cmsOpportunities: Opportunity[] | null = cms
  ? cms.opportunities.map((o) => ({
      slug: o.slug,
      title: o.title,
      region: o.region,
      scope: o.scope ?? 'local',
      availability: o.availability ?? 'open',
      overview: o.overview,
      purpose: o.purpose ?? [],
      dates: o.dates ?? null,
      duration: o.duration ?? null,
      requirements: o.requirements ?? [],
      preparation: o.preparation ?? [],
      partner: o.partner ?? null,
      cost: o.cost ?? null,
      apply: o.applyUrl ? { label: o.applyLabel || 'Ask about this opportunity', href: o.applyUrl, external: /^https?:/.test(o.applyUrl) } : null,
      image: imageRef(o.image, o.title),
      published: true,
      status: 'confirmed',
    }))
  : null;

const cmsAuthors: Author[] | null = cms
  ? cms.authors.map((a) => ({ slug: a.slug, name: a.name, role: a.role ?? '', bio: a.bio ?? '', status: 'confirmed' }))
  : null;

const cmsPosts: Post[] | null = cms
  ? cms.posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      authorSlug: p.authorSlug ?? 'unknown',
      date: p.date,
      categories: p.categories?.length ? p.categories : ['Discipleship'],
      image: { ...imageRef(p.image, p.title), credit: p.imageCaption },
      excerpt: p.excerpt,
      body: blocksToText(p.body),
      bodyHtml: blocksToHtml(p.body),
      seo: { title: p.seoTitle, description: p.seoDescription },
      published: true,
      status: 'confirmed',
    }))
  : null;

// ---------- Site-wide ----------

export function getSiteSettings(): SiteSettings {
  return seed.siteSettings;
}

export function getHomepage(): Homepage {
  return seed.homepage;
}

// ---------- Events ----------

export function getAllEvents(): Event[] {
  return withDemo(cmsEvents ?? seed.events, demo.demoEvents)
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

/** Public listing of all events (Eventbrite organizer page), shown as a secondary link. */
export const eventsListingUrl = seed.eventsListingUrl;

/** Standing rhythms: recurring gatherings that are not tied to a single date. */
export function getRhythms(): Rhythm[] {
  return withDemo(cmsRhythms ?? seed.rhythms, demo.demoRhythms).filter((r) => r.published);
}

export const eventTypeLabels: Record<EventType, string> = {
  training: 'Training',
  worship: 'Worship',
  mobilization: 'Mobilization',
  harvest: 'Harvest',
};

/** Badge colour per event type. */
export const eventTypeBadge = (t: EventType): string =>
  t === 'worship' ? 'badge--yellow' : t === 'training' ? 'badge--orange' : 'badge--outline';

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
    accommodation: base.accommodation ?? accommodation ?? null,
    cost: base.cost ?? cost ?? null,
    financialSupport: base.financialSupport ?? financialSupport ?? null,
    apply: base.apply ?? apply ?? null,
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
  // Sample opportunities are switched off (client, 2026-10-19): only real ones from the dashboard show,
  // with the "Opportunities are being confirmed" message until the first is published.
  return (cmsOpportunities ?? seed.opportunities)
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

const realPosts = cmsPosts ?? seed.posts;
const realAuthors = cmsAuthors ?? seed.authors;
/**
 * Sample articles are switched off (client decision, 2026-10-19): the blog shows only
 * posts published in Sanity, and an honest "coming soon" message until the first one.
 */
const useDemoBlog = false;

export function getAuthors(): Author[] {
  return useDemoBlog ? [...realAuthors, ...demo.demoAuthors] : realAuthors;
}

export function getPosts(): Post[] {
  return (useDemoBlog ? demo.demoPosts : realPosts)
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
  const bodyHtml = post.bodyHtml ?? (marked.parse(post.body, { async: false }) as string);
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
