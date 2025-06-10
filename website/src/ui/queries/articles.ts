import { sanityClient } from "sanity:client";

export const getArticles = async ({
  limit = 0,
  drafts = import.meta.env.DEV,
  featured = null,
  category = null,
  articleMonth = null,
}: {
  limit?: number;
  drafts?: boolean;
  featured?: boolean;
  category?:
    | "leadership"
    | "culture"
    | "communication"
    | "sustainability"
    | "growth";
  articleMonth?: number;
} = {}) => {
  const year = new Date().getFullYear();
  const month = new Date().toJSON().slice(0, 10).split("-");

  const params = [
    category && `&& '${category}' in categories[]->slug.current`,
    articleMonth &&
      `&& (publishedAt >= "${year}-${articleMonth}-01" && publishedAt <= "${year}-${articleMonth}-31")`,
    ``,
    drafts
      ? `_type == 'article' && publishedAt < "${month[0]}-${month[1]}-${parseInt(month[2]) + 1}"`
      : `_type == 'article' && publishedAt < "${month[0]}-${month[1]}-${parseInt(month[2]) + 1}" && !(_id in path('drafts.**'))`,
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
    "category": categories[0] -> {title, slug},
    mainImage,
    "draft": _id in path("drafts.**")}`;

  return await sanityClient.fetch(query);
};

export const getArticle = `*[_type == "article"]{
  _id,
  title,
  slug,
  body,
  "headings": body[length(style) == 2 && string::startsWith(style, "h")],
  excerpt,
  publishedAt,
  mainImage,
  socialImage,
  author->{ name, image, slug, bio, website, linkedin},
  "categories": categories[] -> {title, slug},
  "readingTime": round(length(pt::text(body)) / 5 / 180 ),
}`;
