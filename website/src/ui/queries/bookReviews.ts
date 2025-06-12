import { sanityClient } from "sanity:client";

export const getBookReviews = async ({
  limit = 0,
  drafts = import.meta.env.DEV,
}: {
  limit?: number;
  drafts?: boolean;
} = {}) => {
  const year = new Date().getFullYear();
  const month = new Date().toJSON().slice(0, 10).split("-");

  const params = [
    drafts
      ? `_type == 'bookReview' && publishedAt < "${month[0]}-${month[1]}-${parseInt(month[2]) + 1}"`
      : `_type == 'bookReview' && publishedAt < "${month[0]}-${month[1]}-${parseInt(month[2]) + 1}" && !(_id in path('drafts.**'))`,
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
    "genre": genre[0] -> {title, slug},
    mainImage,
    "draft": _id in path("drafts.**")}`;

  return await sanityClient.fetch(query);
};

export const getBookReview = `*[_type == "bookReview"]{
    _id,
    title,
    slug,
    body,
    excerpt,
    publishedAt,
    mainImage,
    socialImage,
    "genre": genre[] -> {title, slug},
  }`;
