import { sanityClient } from "sanity:client";
import { getTomorrowDateString } from "@/scripts";

const tomorrowDate = getTomorrowDateString();

export const getListBookReviews = async ({
  limit = 0,
  drafts = import.meta.env.DEV,
}: {
  limit?: number;
  drafts?: boolean;
} = {}) => {
  const params = [
    drafts
      ? `_type == 'bookReview' && publishedAt < "${tomorrowDate}"`
      : `_type == 'bookReview' && publishedAt < "${tomorrowDate}" && !(_id in path('drafts.**'))`,
  ]
    .filter(Boolean)
    .join(" ");

  const query = `*[${params}] | order(publishedAt desc)
  ${limit > 0 ? `[0..${limit - 1}]` : ""}{
    title,
    slug,
    body,
    excerpt,
    publishedAt,
    featured,
    "category": genre[0] -> {title, slug},
    mainImage,
    "draft": _id in path("drafts.**")}`;

  return await sanityClient.fetch(query);
};

export const getFullBookReviews = `*[_type == "bookReview"]{
    _id,
    title,
    slug,
    body,
    excerpt,
    publishedAt,
    mainImage,
    socialImage,
    "category": genre[] -> {title, slug},
  }`;
