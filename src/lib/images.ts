import type { ImageMetadata } from 'astro';

/**
 * Local photo registry. Content refers to photos by key (e.g. "hero-prayer-circle");
 * this resolves the key to an optimisable Astro image. Remote URLs and /public paths
 * pass straight through so Sanity image URLs will work later without page changes.
 */
const photos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

const byKey = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(photos)) {
  const key = path.split('/').pop()!.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  byKey.set(key, mod.default);
}

export type ResolvedImage = ImageMetadata | string;

export function resolveImage(src: string): ResolvedImage {
  if (/^(https?:)?\/\//.test(src) || src.startsWith('/')) return src;
  const found = byKey.get(src);
  if (!found) {
    throw new Error(`Unknown photo key "${src}". Add the file to src/assets/photos or use a URL.`);
  }
  return found;
}

export function isLocalImage(img: ResolvedImage): img is ImageMetadata {
  return typeof img !== 'string';
}

export const photoKeys = [...byKey.keys()];
