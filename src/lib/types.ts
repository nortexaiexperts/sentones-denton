/**
 * Content types shared by the seed data, the demo data and (later) the Sanity client.
 * Keep these the single source of truth: pages only ever see these shapes.
 */

/** Where a piece of content stands with the client. Used for the content register and for badges. */
export type ContentStatus =
  | 'confirmed' // Confirmed Denton content
  | 'shared' // Shared Sent Ones material, pending approval for Denton use
  | 'proposed' // Proposed local copy, pending client review
  | 'demo'; // Fictional sample content for layout review only (never in production)

export interface ImageRef {
  /** Key of a photo in src/assets/photos (without extension) OR an absolute URL / public path. */
  src: string;
  alt: string;
  /** Short provenance note for the content register (not rendered). */
  credit?: string;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  network: 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'apple-podcasts' | 'spotify' | 'email';
  label: string;
  href: string;
}

export interface SiteSettings {
  name: string; // "Sent Ones Denton"
  shortName: string; // "Sent Ones"
  locationLabel: string; // "Denton"
  tagline: string;
  description: string;
  nav: Link[];
  headerCta: Link | null;
  contactEmail: string | null; // null until confirmed
  contactPhone: string | null;
  /** Denton's own social channels only. Empty until the client supplies accounts; national channels are never listed. */
  social: SocialLink[];
  nationalSite: Link;
  /** Plain links to media on the national site (allowed), never embedded or featured. */
  nationalMediaLinks: Link[];
  footerNote: string;
  disclaimer: string;
}

export interface Pillar {
  key: 'discover' | 'develop' | 'deploy';
  eyebrow: string; // "Step one"
  titleLines: string[]; // ["Discover", "your", "calling"]
  body: string;
  cta: Link;
  secondaryLinks?: Link[];
  image: ImageRef;
}

export interface ValueItem {
  title: string;
  body: string;
}

export interface Homepage {
  hero: {
    kicker: string;
    headline: string; // supports *emphasis* marks for the yellow highlight
    lead: string;
    primaryCta: Link;
    secondaryCta: Link | null;
    image: ImageRef;
  };
  intro: {
    title: string;
    body: string[];
  };
  scripture: { quote: string; reference: string };
  pillars: Pillar[];
  video: {
    title: string;
    description: string;
    youtubeId?: string; // preferred: click-to-load YouTube embed
    src?: string; // or a self-hosted file
    poster: string;
    duration?: string;
  } | null;
  mtcTeaser: { eyebrow: string; title: string; body: string; cta: Link; image: ImageRef };
  values: { title: string; intro: string; items: ValueItem[] };
  quote: { text: string; attribution: string } | null;
  finalCta: { title: string; body: string; primary: Link; secondary: Link };
}

export type EventType = 'training' | 'worship' | 'mobilization' | 'harvest';

/** A regularly scheduled gathering (e.g. a weekly strategy meeting). Not date-driven; stays listed until removed. */
export interface Rhythm {
  slug: string;
  title: string;
  cadence: string; // "Every Tuesday" / "First Saturday of the month"
  time: string | null; // "7:00 – 8:30 PM"
  venue: { name: string; city: string; online: boolean };
  description: string;
  /** Optional bullet points (what the gathering is for). */
  points?: string[];
  audience: string | null; // "Open to all" / "Church leaders"
  cta: Link | null;
  published: boolean;
  status: ContentStatus;
}

export interface Event {
  slug: string;
  title: string;
  type: EventType;
  /** ISO 8601 with offset, e.g. 2026-11-14T09:00:00-06:00 */
  start: string;
  end: string | null;
  timezone: string; // IANA, default America/Chicago
  venue: {
    name: string;
    address: string | null;
    city: string;
    online: boolean;
  };
  image: ImageRef;
  summary: string;
  description: string[]; // paragraphs
  registration: Link | null;
  cost: string | null;
  published: boolean;
  featured: boolean;
  status: ContentStatus;
}

export interface MtcProgram {
  title: string;
  kicker: string;
  intro: string;
  statement: string; // large pitch
  audience: { title: string; body: string }[];
  format: {
    residential: string | null;
    location: string | null;
    duration: string | null;
    dates: string | null;
    weeklyCommitment: { label: string; hours: string; body: string }[];
  };
  focus: { title: string; body: string; icon: string }[];
  accommodation: string | null;
  eligibility: string[];
  applicationSteps: string[];
  cost: string | null;
  financialSupport: string | null;
  faqs: { question: string; answer: string }[];
  apply: Link | null;
  /** Files visitors can download (flyer, booklet). Hosted in public/downloads. */
  downloads: { label: string; description: string; href: string; format: string; size?: string }[];
  contactNote: string;
  image: ImageRef;
  status: ContentStatus;
}

export type OpportunityScope = 'local' | 'regional' | 'international';
export type OpportunityStatus = 'open' | 'upcoming' | 'closed';

export interface Opportunity {
  slug: string;
  title: string;
  region: string;
  scope: OpportunityScope;
  availability: OpportunityStatus;
  overview: string;
  purpose: string[];
  dates: string | null;
  duration: string | null;
  requirements: string[];
  preparation: string[];
  partner: string | null;
  cost: string | null;
  apply: Link | null;
  image: ImageRef;
  published: boolean;
  status: ContentStatus;
}

export type ResourceFormat = 'video' | 'document' | 'playlist' | 'guide' | 'graphic' | 'coaching';

export interface ResourceItem {
  title: string;
  description?: string;
  format: ResourceFormat;
  links: Link[];
}

export interface ResourceGroup {
  key: string;
  number?: string; // "0", "1", … "X"
  title: string;
  tagline: string;
  description?: string;
  icon?: string; // public path
  image?: string; // public path (graphic)
  items: ResourceItem[];
  subgroups?: { title: string; items: ResourceItem[] }[];
  source: 'sentones' | 'denton';
  status: ContentStatus;
}

export interface CoachingOption {
  title: string;
  body: string;
  cta: Link;
  status: ContentStatus;
}

export type MediaType = 'video' | 'podcast' | 'playlist' | 'documentary';

export interface MediaItem {
  slug: string;
  title: string;
  type: MediaType;
  summary: string;
  cover: ImageRef;
  provider: string; // "YouTube", "Spotify / Apple Podcasts", "Self-hosted"
  youtubeId?: string;
  localVideo?: { src: string; poster: string };
  links: Link[];
  featured: boolean;
  status: ContentStatus;
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  status: ContentStatus;
}

export interface Post {
  slug: string;
  title: string;
  authorSlug: string;
  date: string; // ISO date
  categories: string[];
  image: ImageRef;
  excerpt: string;
  body: string; // Markdown (seed/demo) or plain text (Sanity, for reading time)
  /** Pre-rendered HTML, set for posts that come from Sanity. */
  bodyHtml?: string;
  seo: { title?: string; description?: string };
  published: boolean;
  status: ContentStatus;
}
