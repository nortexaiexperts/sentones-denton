/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PREVIEW_CONTENT?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_ALLOW_INDEXING?: string;
  readonly PUBLIC_FORMSPREE_INQUIRY_ID?: string;
  readonly SANITY_PROJECT_ID?: string;
  readonly SANITY_DATASET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
