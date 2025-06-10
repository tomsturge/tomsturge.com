import { defineCliConfig } from "sanity/cli";

import { config } from "./config";

export default defineCliConfig({
  api: {
    dataset: config.dataset,
    projectId: config.projectId,
  },
  studioHost: "tomsturge",
});
