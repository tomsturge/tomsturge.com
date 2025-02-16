import { defineCliConfig } from "sanity/cli";

import { config } from "./src/sanity/config";

export default defineCliConfig({
  api: {
    dataset: config.dataset,
    projectId: config.projectId,
  },
});
