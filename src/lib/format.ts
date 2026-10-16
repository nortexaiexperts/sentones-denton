const DEFAULT_TZ = 'America/Chicago';

function fmt(iso: string, tz: string, opts: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat('en-US', { timeZone: tz, ...opts }).format(new Date(iso));
}

/** "Sat, Nov 14, 2026" */
export function formatDate(iso: string, tz = DEFAULT_TZ): string {
  return fmt(iso, tz, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

/** "November 14, 2026" */
export function formatLongDate(iso: string, tz = DEFAULT_TZ): string {
  return fmt(iso, tz, { month: 'long', day: 'numeric', year: 'numeric' });
}

/** "9:00 AM" */
export function formatTime(iso: string, tz = DEFAULT_TZ): string {
  return fmt(iso, tz, { hour: 'numeric', minute: '2-digit' });
}

/** "CST" / "CDT" */
export function formatTzAbbr(iso: string, tz = DEFAULT_TZ): string {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'short' }).formatToParts(
    new Date(iso),
  );
  return parts.find((p) => p.type === 'timeZoneName')?.value ?? '';
}

/** "NOV" and "14" for the calendar tile */
export function dateParts(iso: string, tz = DEFAULT_TZ): { month: string; day: string; weekday: string } {
  return {
    month: fmt(iso, tz, { month: 'short' }).toUpperCase(),
    day: fmt(iso, tz, { day: 'numeric' }),
    weekday: fmt(iso, tz, { weekday: 'long' }),
  };
}

/**
 * Full human range for an event:
 *  same day  → "Sat, Nov 14, 2026 · 9:00 AM – 3:00 PM CST"
 *  multi-day → "Fri, Jun 4 – Sun, Jun 13, 2027"
 */
export function formatEventRange(start: string, end: string | null, tz = DEFAULT_TZ): string {
  const abbr = formatTzAbbr(start, tz);
  if (!end) return `${formatDate(start, tz)} · ${formatTime(start, tz)} ${abbr}`;
  const sameDay = fmt(start, tz, { dateStyle: 'medium' }) === fmt(end, tz, { dateStyle: 'medium' });
  if (sameDay) {
    return `${formatDate(start, tz)} · ${formatTime(start, tz)} – ${formatTime(end, tz)} ${abbr}`;
  }
  const startPart = fmt(start, tz, { weekday: 'short', month: 'short', day: 'numeric' });
  return `${startPart} – ${formatDate(end, tz)}`;
}

export function isPast(event: { start: string; end: string | null }, now = new Date()): boolean {
  const reference = new Date(event.end ?? event.start);
  // An event without an end time counts as past 3 hours after it starts.
  const cutoff = event.end ? reference.getTime() : reference.getTime() + 3 * 60 * 60 * 1000;
  return cutoff < now.getTime();
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function readingTime(markdown: string): string {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
