import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.SITE_URL?.trim() || '';

// पूरा साइट स्टैटिक है (कोई SSR / API route नहीं), इसलिए Cloudflare Workers
// Static Assets पर सीधे deploy किया जाता है — कोई server adapter ज़रूरी नहीं।
export default defineConfig({
  site: SITE || undefined,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: SITE ? [sitemap()] : [],
});
