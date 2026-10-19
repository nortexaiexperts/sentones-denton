/**
 * One-time migration (2026-10-19): events used to have a single "type"; they now have a
 * list "types". Copies type → types for every event that has no list yet. Safe to re-run.
 *
 *   cd studio
 *   npx sanity exec migrations/copy-event-type.ts --with-user-token
 */
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-02-19'})

const docs = await client.fetch<{_id: string; type: string}[]>(
  `*[_type == "event" && defined(type) && !defined(types)]{_id, type}`,
)
console.log(`Events to update: ${docs.length}`)
for (const d of docs) {
  await client.patch(d._id).set({types: [d.type]}).commit()
  console.log(` - ${d._id}: types = ["${d.type}"]`)
}
console.log('Done.')
