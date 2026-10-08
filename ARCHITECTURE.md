# douglassemail.com: architecture

Last checked against the code and Cloudflare on Oct 8, 2026.

## What it does

A one page "coming soon" sandbox for douglassemail.com. Static only, no forms. It is not related to Walton Dune Lakes (that site is the `waltondunelakes` Worker and repo).

## Domains and Worker

- Worker: `douglassemail`
- Custom domains (attached in the Cloudflare dashboard): `douglassemail.com`, `www.douglassemail.com`
- workers.dev host is enabled.

## Data and images

- Static files only: `index.html` and `styles.css` in this repo. `wrangler.jsonc` sets `assets.directory` to `.` with no `main` script.
- No bindings, no D1, R2, KV, or external services.
- `.assetsignore` keeps `wrangler.jsonc`, `package.json`, and `README.md` from being served.

## Secrets and env vars (names only)

None. An assets only Worker cannot hold secrets or variables. Adding a form means adding a `main` script first.

## Cron and scheduled jobs

None. The Worker has only a fetch handler and no cron trigger.

## How it deploys

- Cloudflare Workers Builds, auto deploy on merge to `main`. Repo `marcongit850/douglassemail`, trigger `bf1e2c46-ce09-4e00-919a-ba19cbc030b5`, build command empty, deploy command `npx wrangler deploy`, root `/`.
- If a merge does not deploy: `POST /accounts/f1c59948520f1ec39473238b621c7e24/builds/triggers/bf1e2c46-ce09-4e00-919a-ba19cbc030b5/builds` with body `{"branch": "main", "commit_hash": "<full 40 character sha>"}`. The sha must be a commit in THIS repo. Check builds with `GET /accounts/f1c59948520f1ec39473238b621c7e24/builds/workers/b429f0e9f71d4d82b261967c24dfda9e/builds?per_page=2` and match `commit_hash`.
- Last successful deploy: commit `a5a2e0d` on Sep 28, 2026.

## Known gotchas

- On Oct 8, 2026 a manual build was mistakenly started on this trigger with a Walton Dune Lakes commit (`35e942bc`). It failed at "Cloning repository" because that commit is not in this repo. It was harmless: the live page did not change, and Walton Dune Lakes deployed from its own trigger. Never use this trigger for Walton Dune Lakes.
- Older notes may list this Worker's tag (`b429f0e9f71d4d82b261967c24dfda9e`) and trigger as Walton Dune Lakes. They are not. Walton Dune Lakes is tag `7be6a2f266ff4cff9bf9cf8a9d8929c8`, trigger `87283c23-4b70-4994-9f61-1b58ac42442f`.

TODO: decide whether douglassemail.com should keep its coming soon page or be removed (Worker, trigger, and custom domains). Nothing has been deleted.

## Standing rule

Any PR that changes architecture (new secret, cron, storage, binding, or deploy change) must update this file in the same PR.
