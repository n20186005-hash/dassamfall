# दशम जलप्रपात — Astro + Cloudflare Worker

झारखण्ड के **Dassam Falls** के लिए बनाया गया एकल-पृष्ठ हिन्दी पर्यटन वेबसाइट प्रोजेक्ट। डिज़ाइन झरने, चट्टानी घाटी, साल-वृक्षों और प्राकृतिक धुंध/जल-ऊर्जा की भावना से प्रेरित है — कोई generic template नहीं।

## तकनीकी स्टैक

- Astro **7.3.2** (static output)
- @astrojs/sitemap **3.7.4**
- Tailwind CSS **4.3.3**
- @tailwindcss/vite **4.3.3**
- TypeScript **6.0.3**
- @astrojs/check **0.9.10**
- Wrangler **4.131.0**
- pnpm **10.11.1**
- Node.js **24.21.0**

सभी versions `package.json` में exact pins के रूप में दिए गए हैं।

## डोमेन / URL — केवल एक जगह

`astro.config.mjs` में:

```js
const SITE = process.env.SITE_URL?.trim() || 'https://dassamfall.com';
```

यह canonical और metadata का source है; Worker में canonical host भी इससे मेल खाना चाहिए।

- डिफ़ॉल्ट `https://dassamfall.com` लागू होता है, इसलिए canonical / absolute Open Graph URL / sitemap हमेशा बनते हैं
- दूसरा डोमेन चाहिए तो `SITE_URL=https://...` भरकर override करें (खाली रहने पर भी सेफ़ डिफ़ॉल्ट लागू होगा)
- `public/robots.txt` `sitemap-index.xml` को ही point करता है

## फ़ोटो

`public/images/` में 3 वास्तविक Dassam Falls फोटो शामिल हैं। इन्हें Wikimedia Commons के सार्वजनिक फ़ाइल पृष्ठों से प्राप्त स्टेज्ड इमेज के आधार पर प्रोजेक्ट में रखा गया है। स्रोत और श्रेय `ATTRIBUTIONS.md` में हैं।

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

## सत्यापन और स्रोत

मूल fixed dependencies और frozen lockfile संरक्षित हैं। स्थानीय install/check/build/dry-run से स्थानीय candidate तैयार होता है, production release का प्रमाण नहीं। पुराने generation-environment दावे अब लागू नहीं हैं। Native static ASSETS wrapper HTTP/www canonical redirect और वास्तविक noindex404 संभालता है; SSR adapter सक्रिय नहीं है। Cloudflare project `dassamfall` है; domain bindings नहीं बदले गए।

पृष्ठ पर स्रोतों, फोटो लाइसेंस, dated Maps snapshot और operational uncertainty का उल्लेख है। Google Analytics consent UI बरकरार है; Maps/Cloudflare अलग third-party processing कर सकते हैं। निजी performance reports public repository का हिस्सा नहीं हैं।
