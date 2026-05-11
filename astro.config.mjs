// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { DEFAULT_SITE_URL } from './site.constants.js';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
  integrations: [sitemap()],
  // Why: Windows currently reserves Astro's default 4321 port, so local dev uses 3000 instead.
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
});
