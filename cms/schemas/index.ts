import { articleTypes } from "./articles";
import { readingListTypes } from "./readingList";
import { customFields } from "./customFields";
import { siteSettings } from "./siteSettings";

export const schema = {
  name: "default",
  types: [...articleTypes, ...readingListTypes, ...customFields, siteSettings],
};
