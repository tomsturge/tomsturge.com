import { sanityClient } from "sanity:client";
import { SiteSettings } from "@/ui/types";

export const getSiteSettings = async (): Promise<SiteSettings> =>
  await sanityClient.fetch(`*[_type == "siteSettings"][0]{
  title,
  description,
  seoImage,
  bio
}`);
