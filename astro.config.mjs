import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL खाली रहने पर भी canonical/OG/sitemap टूटें नहीं — डिफ़ॉल्ट डोमेन
// (https://dassamfall.com) लागू होता है। ओवरराइड के लिए SITE_URL भरें।
const SITE = process.env.SITE_URL?.trim() || 'https://dassamfall.com';

// पूरा साइट स्टैटिक है (कोई SSR / API route नहीं), इसलिए Cloudflare Workers
// Static Assets पर सीधे deploy किया जाता है — कोई server adapter ज़रूरी नहीं।
export default defineConfig({
  site: SITE,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: SITE ? [sitemap()] : [],
});
