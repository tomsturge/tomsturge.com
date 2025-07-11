import type { SanityImageObject } from "@sanity/types";

export interface SiteSettings {
  title: string;
  description: string;
  bio: string;
  seoImage: SanityImageObject;
}
