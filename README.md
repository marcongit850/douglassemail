# douglassemail

Coming soon page for douglassemail.com.

## Deploy

Cloudflare Workers Builds deploys this repository with `npx wrangler deploy`. The Worker name in `wrangler.jsonc` is `douglassemail`. The site is assets-only: `assets.directory` is `.`, and there is no Worker script.

Preview the page locally:

```bash
python3 -m http.server 8080
```
