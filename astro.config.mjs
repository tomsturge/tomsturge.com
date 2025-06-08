import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
const { SANITY_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");
import { config } from "./src/sanity/config";

export default defineConfig({
  site: "https://tomsturge.com",
  title: "Tom Sturge",
  description:
    "Leadership reflections and practical advice from decades of experience building teams, fostering growth, and creating productive work cultures.",

  trailingSlash: "ignore",
  integrations: [
    react(),
    sanity({
      projectId: config.projectId,
      dataset: config.dataset,
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
