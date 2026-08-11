// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://my-site.eugeneolok.workers.dev',
  redirects: {
    '/about': '/#about',
  },
});