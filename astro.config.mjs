// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` is a placeholder until the client confirms the domain. It is only used to
// build absolute URLs for the sitemap and social sharing tags.
const SITE = process.env.PUBLIC_SITE_URL || 'https://sentones-denton.example';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    // Trailer poster thumbnails from YouTube are the only remote images right now.
    domains: ['i.ytimg.com', 'cdn.sanity.io'],
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/preview-'),
    }),
  ],
  devToolbar: { enabled: false },
});
