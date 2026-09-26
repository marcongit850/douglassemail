# Coastal Dune Lakes of Walton County

A static reference and education site about the coastal dune lakes of Walton County, Florida. Phase 1 introduces the lakes in general, a west-to-east guide map, and a page for each of the 15 named lakes.

The older Friends of Scenic 30A sandbox pages are gone. Visits to `/get-involved/`, `/impact/`, and `/membership/` redirect to the home page.

## Preview

From the repository root:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

Cloudflare Pages serves this directory as static assets (`wrangler.jsonc`, `assets.directory` set to `.`). The Wrangler project name is still `douglassemail` so an existing Pages project can keep deploying this folder.

## Pages

- `/` explains what coastal dune lakes are, and leads into the map
- `/lakes/` is the guide map and the west-to-east list
- `/lakes/<slug>/` is one lake, for example `/lakes/western/`

Slugs, west to east: `fuller`, `morris`, `campbell`, `stallworth`, `allen`, `oyster`, `draper`, `big-redfish`, `little-redfish`, `alligator`, `western`, `eastern`, `deer`, `camp-creek`, `powell`.

Shared files are `styles.css` and `site.js` (menu and map highlighting only). There are no rights-cleared photographs in the repo. Figures are original schematics, with TODO notes where a photograph should replace them later.

Acreages are approximate and vary by source. The site footer says where the figures come from, without linking to addresses this repo has not verified.
