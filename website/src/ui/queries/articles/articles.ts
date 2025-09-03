import { sanityClient } from "sanity:client";

import type { Article, Category } from "@/ui/types";
import { getTomorrowDateString, getCurrentDate } from "@/scripts";

import { extractFeatured, extractCurrentMonth } from "./scripts";

const tomorrowDate = getTomorrowDateString();
const { month: currentMonth, year: currentYear } = getCurrentDate();

export const getListArticles = async ({
  limit = 0,
  drafts = import.meta.env.DEV,
  featured = null,
  category = null,
  excludeSlug = null,
}: {
  limit?: number;
  drafts?: boolean;
  featured?: boolean;
  category?: Category;
  excludeSlug?: string;
} = {}): Promise<Article[]> => {
  const params = [
    drafts
      ? `_type == 'article' && publishedAt < "${tomorrowDate}"`
      : `_type == 'article' && publishedAt < "${tomorrowDate}" && !(_id in path('drafts.**'))`,
    category && `&& '${category}' in categories[]->slug.current`,
    excludeSlug && `&& slug.current != '${excludeSlug}'`,
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

export const getRelatedArticles = async ({
  currentSlug,
  category,
  limit = 3,
  drafts = import.meta.env.DEV,
}: {
  currentSlug: string;
  category: string;
  limit?: number;
  drafts?: boolean;
}): Promise<Article[]> => {
  const params = [
    drafts
      ? `_type == 'article' && publishedAt < "${tomorrowDate}"`
      : `_type == 'article' && publishedAt < "${tomorrowDate}" && !(_id in path('drafts.**'))`,
    `&& '${category}' in categories[]->slug.current`,
    `&& slug.current != '${currentSlug}'`,
  ]
    .filter(Boolean)
    .join(" ");

  const query = `*[${params}] | order(publishedAt asc)[0..${limit - 1}]{
    title,
    slug,
    excerpt,
    publishedAt,
    "category": categories[0] -> {title, slug},
    mainImage
  }`;

  return await sanityClient.fetch(query);
};

export const getHomepageArticles = async () => {
  const articles = await getListArticles({ limit: 24 });

  const { featured: featuredArticles, remaining } = extractFeatured(articles);
  const { currentMonthItems: recentArticles, otherItems: remainingArticles } =
    extractCurrentMonth(remaining);

  return {
    featuredArticles,
    recentArticles,
    remainingArticles,
  };
};

export const getFullArticles = async () => {
  const query = `*[_type == "article"]{
    _id,
    title,
    slug,
    body,
    "headings": body[length(style) == 2 && string::startsWith(style, "h")],
    excerpt,
    publishedAt,
    mainImage,
    socialImage,
    "categories": categories[] -> {title, slug},
    "readingTime": round(length(pt::text(body)) / 8 / 180 ),
    "wordCount": round(length(pt::text(body)) / 8),
  }`;

  return await sanityClient.fetch(query);
};
