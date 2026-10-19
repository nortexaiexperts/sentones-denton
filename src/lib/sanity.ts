/**
 * Build-time Sanity client and helpers. Runs only during `astro build` / `astro dev`
 * (never in the browser). The dataset is public, so no token is needed.
 */
import {createClient, type SanityClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'
import {toHTML, uriLooksSafe} from '@portabletext/to-html'

// Read from the process (GitHub Actions) or from the local .env file.
const env = (name: string): string | undefined =>
  (typeof process !== 'undefined' ? process.env[name] : undefined) || (import.meta.env as Record<string, string | undefined>)[name]

export const sanityProjectId = env('SANITY_PROJECT_ID')
export const sanityDataset = env('SANITY_DATASET') || 'production'

export const sanityClient: SanityClient | null = sanityProjectId
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: '2025-02-19',
      // Builds must see content the moment it is published, so skip the CDN cache.
      useCdn: false,
      perspective: 'published',
    })
  : null

const builder = sanityProjectId ? createImageUrlBuilder({projectId: sanityProjectId, dataset: sanityDataset}) : null

/** A resized, auto-format (WebP/AVIF) URL for a Sanity image, respecting the editor's hotspot. */
export function sanityImageUrl(source: unknown, width = 1600, height?: number): string {
  if (!builder || !source) return ''
  let b = builder.image(source as Parameters<typeof builder.image>[0]).width(width).auto('format').quality(78)
  if (height) b = b.height(height).fit('crop')
  return b.url()
}

type Block = {_type: string; style?: string; children?: {text?: string}[]}

/** Portable Text → one plain-text string per paragraph (used for event descriptions). */
export function blocksToParagraphs(blocks: unknown): string[] {
  if (!Array.isArray(blocks)) return []
  return (blocks as Block[])
    .filter((b) => b._type === 'block')
    .map((b) => (b.children ?? []).map((c) => c.text ?? '').join('').trim())
    .filter(Boolean)
}

/** Portable Text → plain text (used for reading time). */
export function blocksToText(blocks: unknown): string {
  return blocksToParagraphs(blocks).join('\n\n')
}

const escape = (s: string) => s.replace(/[&<>"]/g, (c) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'})[c]!)

/** Portable Text → HTML for blog articles (headings, quotes, lists, links, inline images). */
export function blocksToHtml(blocks: unknown): string {
  if (!Array.isArray(blocks)) return ''
  return toHTML(blocks as Parameters<typeof toHTML>[0], {
    components: {
      types: {
        image: ({value}: {value: {alt?: string; caption?: string}}) => {
          const src = sanityImageUrl(value, 1400)
          if (!src) return ''
          const alt = escape(value.alt ?? '')
          const cap = value.caption ? `<figcaption>${escape(value.caption)}</figcaption>` : ''
          return `<figure><img src="${src}" alt="${alt}" loading="lazy" decoding="async" />${cap}</figure>`
        },
      },
      marks: {
        link: ({children, value}: {children: string; value?: {href?: string}}) => {
          const href = value?.href ?? ''
          if (!uriLooksSafe(href)) return children
          const external = /^https?:\/\//.test(href) && !href.includes('sentonesdenton.org')
          return `<a href="${escape(href)}"${external ? ' target="_blank" rel="noopener"' : ''}>${children}</a>`
        },
      },
    },
  })
}
