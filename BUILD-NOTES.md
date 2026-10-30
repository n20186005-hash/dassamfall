# Build validation scope

Use the exact versions in package.json with the existing frozen lockfile and Node pin. Run pnpm install --frozen-lockfile, pnpm run check, npm run build and pnpm exec wrangler deploy --dry-run. Local evidence is retained outside the public repository. A dry-run is not deployment; actual build, browser and production acceptance remain separate gates.
