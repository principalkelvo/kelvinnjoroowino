# Kelvin Njoro Owino — Portfolio

Vue 3 + Vite, deployed on Netlify: https://principalkelvo.netlify.app/

## Updating the site

All content lives in one place:

```
src/content/
├── site.json          ← every text, link, project, testimonial, SEO tag
├── site.schema.json   ← rules for site.json (VS Code uses it for autocomplete + errors)
└── images/
    ├── profile/       hero photos       → resized to 1000px tall, WebP
    ├── projects/      project screenshots → resized to 760px wide, WebP
    ├── testimonials/  client avatars    → cropped to 160×160, WebP
    └── icons/         small UI icons    → used as-is
```

Edit `site.json`, commit, push — Netlify rebuilds. Image paths in `site.json` are
relative to `images/` (e.g. `"projects/my-app.png"`).

**Add a project:** drop the screenshot into `images/projects/` (any size, PNG/JPG
is fine — it's optimised at build time), then add an entry at the top of
`projects.items`:

```json
{
  "name": "My App",
  "image": "projects/my-app.png",
  "description": "What it is and what it's built with.",
  "demo": "https://my-app.example.com",
  "design": "https://figma.com/..."
}
```

`demo` and `design` are optional; their buttons only show when set.

The skill logos on the rings are hand-placed, so they live in the code
(`src/components/skills.vue` + `src/assets/socialIcons/`) rather than in `site.json`;
the skills section's text and button are in `site.json` as usual.

**Other things you can change in `site.json`:**
- **Tab title and Google snippet:** the `meta` section.
- **Hero photo and social links:** the `hero` section.
- **Testimonials:** the `testimonials` list. Set it to `[]` to hide the carousel.

Hover over any key in VS Code for a description of what it controls.

### Safety net

`npm run build` fails, naming the exact field, if `site.json`:
- breaks the schema (a typo'd key, a missing required field, a bad URL), or
- points at an image that doesn't exist.

So a mistake can't reach the live site — Netlify keeps serving the last good deploy.

## Development

```sh
npm install
npm run dev      # http://localhost:5173, reloads on every save (site.json included)
npm run build    # production build into dist/
npm run preview  # serve the production build
```
