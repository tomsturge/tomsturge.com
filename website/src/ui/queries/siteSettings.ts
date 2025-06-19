import { sanityClient } from "sanity:client";

export const getSiteSettings = async () =>
  await sanityClient.fetch(`*[_type == "siteSettings"][0]{
  title,
  description,
  seoImage,
  bio
}`);
