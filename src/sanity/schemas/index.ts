import { articleTypes } from "./articles";
import { customFields } from "./customFields";
import { siteSettings } from "./siteSettings";

export const schema = {
  name: "default",
  types: [...articleTypes, ...customFields, siteSettings],
};
