import { defineConfig, type Config } from "sanity";
import { dashboardTool, projectUsersWidget } from "@sanity/dashboard";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import { config } from "./src/sanity/config";
import { schema } from "./src/sanity/schemas";
import { deskStructure } from "./src/sanity/deskStructure";

export const sanityStudioConfig: Config = {
  name: "default",
  title: "tom.sturge.co",
  projectId: config.projectId,
  dataset: config.dataset,

  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: "Netlify deploys",
          sites: [
            {
              title: "Site",
              apiId: "d65ae022-1e39-40b0-b2ab-ea258f836e4a",
              buildHookId: "649d5dbc2bcf4f60e9d4928b",
              name: "tomsturge",
              url: "https://tom.sturge.co",
            },
          ],
        }),
        projectUsersWidget(),
        documentListWidget({
          title: "Articles",
          types: ["article"],
          order: "_createdAt desc",
          createButtonText: "New article",
        }),
      ],
    }),
    structureTool({ structure: deskStructure }),
    media(),
    unsplashImageAsset(),
  ],

  schema: schema as any,
};

export default defineConfig(sanityStudioConfig);
