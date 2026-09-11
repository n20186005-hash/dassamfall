# Build notes

अपेक्षित स्व-परीक्षण:

1. `CI=1 corepack pnpm install --frozen-lockfile`
2. `pnpm check`
3. `pnpm build`
4. प्लेसहोल्डर या अवैध URL की जाँच
5. `SITE_URL` मौजूद होने पर sitemap validation

इस sandbox में outbound package-registry access उपलब्ध न होने के कारण step 1–3 को वास्तव में पूरा करना संभव नहीं हुआ।
फिर भी source structure और code इन्हीं checks को ध्यान में रखकर तैयार किए गए हैं।
