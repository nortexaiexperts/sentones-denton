/**
 * Turns the confirmed content in src/data/seed.ts into a Sanity import file.
 *
 *   node scripts/export-seed.ts            → writes sanity-seed/seed.ndjson
 *   cd studio
 *   npx sanity dataset import ../sanity-seed/seed.ndjson production --replace
 *
 * Document IDs are fixed, so re-running the import updates the same documents
 * instead of creating duplicates. Images are uploaded from src/assets/photos.
 * Requires Node 22.18+ (runs TypeScript directly).
 */
import {mkdirSync, writeFileSync, existsSync} from 'node:fs'
import {dirname, join, resolve} from 'node:path'
import {fileURLToPath, pathToFileURL} from 'node:url'
import {events, rhythms} from '../src/data/seed.ts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const photos = join(root, 'src', 'assets', 'photos')
let keyCounter = 0
const key = () => `k${(keyCounter++).toString(36)}`

function imageFor(src: string, alt: string) {
  for (const ext of ['jpg', 'jpeg', 'png', 'webp']) {
    const file = join(photos, `${src}.${ext}`)
    if (existsSync(file)) {
      return {_type: 'image', _sanityAsset: `image@${pathToFileURL(file).href}`, alt}
    }
  }
  throw new Error(`Photo not found for "${src}"`)
}

function paragraphs(texts: string[]) {
  return texts.map((text) => ({
    _type: 'block',
    _key: key(),
    style: 'normal',
    markDefs: [],
    children: [{_type: 'span', _key: key(), text, marks: []}],
  }))
}

const docs: Record<string, unknown>[] = []

for (const e of events.filter((x) => x.status === 'confirmed')) {
  docs.push({
    _id: `event-${e.slug}`,
    _type: 'event',
    title: e.title,
    slug: {_type: 'slug', current: e.slug},
    types: e.types,
    start: new Date(e.start).toISOString(),
    ...(e.end ? {end: new Date(e.end).toISOString()} : {}),
    featured: e.featured,
    online: e.venue.online,
    venueName: e.venue.name,
    ...(e.venue.address ? {address: e.venue.address} : {}),
    city: e.venue.city,
    image: imageFor(e.image.src, e.image.alt),
    summary: e.summary,
    description: paragraphs(e.description),
    ...(e.registration ? {registrationUrl: e.registration.href, registrationLabel: e.registration.label} : {}),
    ...(e.cost ? {cost: e.cost} : {}),
  })
}

rhythms
  .filter((r) => r.status === 'confirmed')
  .forEach((r, i) => {
    docs.push({
      _id: `rhythm-${r.slug}`,
      _type: 'rhythm',
      title: r.title,
      cadence: r.cadence,
      ...(r.time ? {time: r.time} : {}),
      online: r.venue.online,
      venueName: r.venue.name,
      city: r.venue.city,
      description: r.description,
      ...(r.points?.length ? {points: r.points} : {}),
      ...(r.audience ? {audience: r.audience} : {}),
      ...(r.cta ? {joinLabel: r.cta.label, joinUrl: r.cta.href} : {}),
      order: (i + 1) * 10,
    })
  })

const outDir = join(root, 'sanity-seed')
mkdirSync(outDir, {recursive: true})
const out = join(outDir, 'seed.ndjson')
writeFileSync(out, docs.map((d) => JSON.stringify(d)).join('\n') + '\n')
console.log(`Wrote ${docs.length} documents to ${out}`)
for (const d of docs) console.log(' -', d._type, d._id)
