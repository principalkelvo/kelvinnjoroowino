import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { imagetools } from "vite-imagetools";
import Ajv from "ajv";

const CONTENT_FILE = fileURLToPath(new URL("./src/content/site.json", import.meta.url));
const IMAGES_DIR = fileURLToPath(new URL("./src/content/images/", import.meta.url));
const SCHEMA_FILE = fileURLToPath(new URL("./src/content/site.schema.json", import.meta.url));
const IMAGE_FOLDERS = ["profile", "projects", "testimonials", "icons"];

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

// every string in site.json that looks like a local image path, with its JSON path
function* imageRefs(value, path = "") {
  if (typeof value === "string") {
    if (/\.(png|jpe?g|webp|svg|gif|avif)$/i.test(value) && !/^https?:/.test(value)) {
      yield [path, value];
    }
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) yield* imageRefs(v, path ? `${path}.${k}` : k);
  }
}

/**
 * Wires src/content/site.json into the parts of the site Vue can't reach:
 * fills {{meta.*}} placeholders in index.html, and fails the build early
 * when site.json breaks its schema or points at an image that doesn't exist.
 */
function siteContent() {
  const load = () => JSON.parse(readFileSync(CONTENT_FILE, "utf8"));
  return {
    name: "site-content",
    buildStart() {
      this.addWatchFile(CONTENT_FILE);
      const content = load();
      const validate = new Ajv({ allErrors: true }).compile(
        JSON.parse(readFileSync(SCHEMA_FILE, "utf8"))
      );
      const problems = validate(content)
        ? []
        : validate.errors.map((e) => `${e.instancePath || "(top level)"} ${e.message}`);
      for (const [path, file] of imageRefs(content)) {
        if (!IMAGE_FOLDERS.includes(file.split("/")[0])) {
          problems.push(`${path}: "${file}" must be inside one of: ${IMAGE_FOLDERS.join(", ")}`);
        } else if (!existsSync(IMAGES_DIR + file)) {
          problems.push(`${path}: src/content/images/${file} does not exist`);
        }
      }
      if (problems.length) this.error(`site.json has problems:\n  ${problems.join("\n  ")}`);
    },
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        const content = load();
        return html.replace(/\{\{\s*([a-zA-Z][\w.]*)\s*\}\}/g, (match, key) => {
          const value = key.split(".").reduce((o, k) => o?.[k], content);
          if (value === undefined) throw new Error(`index.html: ${match} is not in site.json`);
          return escapeHtml(value);
        });
      },
    },
    handleHotUpdate({ file, server }) {
      // meta tags live in index.html, which only refreshes on a full reload
      if (file === CONTENT_FILE) server.ws.send({ type: "full-reload" });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // base: "/kelvinnjoroowino/",
  plugins: [vue(), imagetools(), siteContent()],
});
