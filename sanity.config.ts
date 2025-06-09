import { defineConfig, type Config } from "sanity";
import { dashboardTool, projectUsersWidget } from "@sanity/dashboard";
import { structureTool } from "sanity/structure";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import { config } from "./src/sanity/config";
import { schema } from "./src/sanity/schemas";
import { deskStructure, documentNode } from "./src/sanity/desk";

export const sanityStudioConfig: Config = {
  name: "default",
  title: "tom.sturge.co",
  dataset: process.env.SANITY_PROJECT_ID,
  projectId: process.env.SANITY_DATASET,

  plugins: [
    dashboardTool({
      widgets: [
        projectUsersWidget(),
        documentListWidget({
          title: "Articles",
          types: ["article"],
          order: "_createdAt desc",
          createButtonText: "New article",
        }),
      ],
    }),
    structureTool({
      documentNode,
      structure: deskStructure,
    }),
    unsplashImageAsset(),
  ],

  schema: schema as any,
};

export default defineConfig(sanityStudioConfig);
