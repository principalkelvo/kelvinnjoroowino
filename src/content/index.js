// Single source of truth for the site's content: edit site.json and drop images
// into ./images. Raster images are resized + converted to WebP at build time
// (vite-imagetools), so originals of any size can be committed as-is.
import site from "./site.json";

// Per-folder size presets. Each glob only bundles files that exist in that folder.
const presets = [
  import.meta.glob("./images/profile/*.{png,jpg,jpeg,webp}", {
    eager: true, import: "default", query: { h: 1000, format: "webp", quality: 82 },
  }),
  import.meta.glob("./images/projects/*.{png,jpg,jpeg,webp}", {
    eager: true, import: "default", query: { w: 760, format: "webp", quality: 80 },
  }),
  import.meta.glob("./images/testimonials/*.{png,jpg,jpeg,webp}", {
    eager: true, import: "default", query: { w: 160, h: 160, fit: "cover", format: "webp" },
  }),
  // icons are small already; SVGs can't go through the raster pipeline
  import.meta.glob("./images/icons/*", {
    eager: true, import: "default", query: "?url",
  }),
];

const urls = Object.assign({}, ...presets);

/** Resolve an image path from site.json (relative to ./images) to its built URL. */
export function img(path) {
  const url = urls[`./images/${path}`];
  if (!url) console.warn(`[content] image not found: images/${path}`);
  return url;
}

export default site;
