import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

const { SANITY_TOKEN, SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  "",
);

export default defineConfig({
  site: "https://tomsturge.com",
  trailingSlash: "ignore",
  integrations: [
    react(),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      token: SANITY_TOKEN,
      useCdn: false,
    }),
    sitemap(),
    icon(),
  ],
  define: {
    global: {},
  },
});
