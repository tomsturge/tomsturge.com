import { defineConfig, type Config } from "sanity";
import { dashboardTool, projectUsersWidget } from "@sanity/dashboard";
import { structureTool } from "sanity/structure";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
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
    unsplashImageAsset(),
  ],

  schema: schema as any,
};

export default defineConfig(sanityStudioConfig);
