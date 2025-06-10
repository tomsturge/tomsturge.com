import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

const { SANITY_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({
  site: "https://tomsturge.com",
  trailingSlash: "ignore",
  integrations: [
    react(),
    sanity({
      dataset: "production",
      projectId: "99wuhwjd",
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
