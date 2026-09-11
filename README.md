# दशम जलप्रपात — Astro + Cloudflare Worker

झारखण्ड के **Dassam Falls** के लिए बनाया गया एकल-पृष्ठ हिन्दी पर्यटन वेबसाइट प्रोजेक्ट। डिज़ाइन झरने, चट्टानी घाटी, साल-वृक्षों और प्राकृतिक धुंध/जल-ऊर्जा की भावना से प्रेरित है — कोई generic template नहीं।

## तकनीकी स्टैक

- Astro **7.3.2** (static output)
- @astrojs/sitemap **3.7.4**
- Tailwind CSS **4.3.3**
- @tailwindcss/vite **4.3.3**
- TypeScript **6.0.3**
- @astrojs/check **0.9.10**
- Wrangler **4.130.0**
- pnpm **10.11.1**
- Node.js **24.21.0**

सभी versions `package.json` में exact pins के रूप में दिए गए हैं।

## डोमेन / URL — केवल एक जगह

`astro.config.mjs` में:

```js
const SITE = process.env.SITE_URL?.trim() || '';
```

यही एकमात्र source of truth है।

- `SITE_URL` खाली होने पर build रुकना नहीं चाहिए
- `site` फ़ील्ड `undefined` रहती है
- canonical / absolute Open Graph URL omit हो जाते हैं
- sitemap integration enable नहीं होती
- domain मिलने पर केवल `SITE_URL` भरकर पुनः build करें

## फ़ोटो

`public/images/` में 4 वास्तविक Dassam Falls फोटो शामिल हैं। इन्हें Wikimedia Commons के सार्वजनिक फ़ाइल पृष्ठों से प्राप्त स्टेज्ड इमेज के आधार पर प्रोजेक्ट में रखा गया है। स्रोत और श्रेय `ATTRIBUTIONS.md` में हैं।

## स्थानीय विकास

```bash
corepack enable
corepack prepare pnpm@10.11.1 --activate
CI=1 pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare deploy (Workers Static Assets)

यह साइट पूरी तरह स्टैटिक है, इसलिए कोई server adapter नहीं लगाया गया। `astro build` से `dist/` बनता है
और `wrangler.jsonc` का `assets.directory` उसी `dist/` की ओर इशारा करता है — `wrangler deploy` सीधे
स्टैटिक assets को Worker पर प्रकाशित करता है।

```bash
pnpm build
pnpm deploy
```

## महत्वपूर्ण टिप्पणी

इस रनिंग environment में registry/network resolution उपलब्ध नहीं थी, इसलिए `pnpm install --frozen-lockfile` और वास्तविक `pnpm-lock.yaml` जनरेशन का स्वचालित सत्यापन यहाँ निष्पादित नहीं किया जा सका।
स्रोत कोड, कॉन्फ़िगरेशन, स्थानीय इमेज, लोगो, favicon, JSON-LD, FAQ और Cloudflare/Wrangler सेटअप तैयार हैं; network-enabled मशीन पर install/build चलाकर lockfile regenerate/verify करें।
