import { defineConfig, type Config } from "sanity";
import { dashboardTool, projectUsersWidget } from "@sanity/dashboard";
import { structureTool } from "sanity/structure";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import { config } from "./config";
import { schema } from "./schemas";
import { deskStructure } from "./desk";

export const sanityStudioConfig: Config = {
  name: "default",
  title: "tomsturge.com",
  studioHost: "tomsturge",
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
