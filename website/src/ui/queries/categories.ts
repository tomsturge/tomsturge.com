import { sanityClient } from "sanity:client";

export const getCountedCategories = async () => {
  const query = `*[_type == "category"]{
    _id,
    title,
    slug,
    "articleCount": count(*[
      ${import.meta.env.DEV ? "_type == 'article'" : "_type == 'article' && !(_id in path('drafts.**'))"} 
      && references(^._id )
    ])
  } | order(articleCount desc)`;

  return await sanityClient.fetch(query);
};

export const getCategories = async () => {
  const query = `*[_type == "category"] {
    _id,
    title,
    slug,
    description,
    "articles": *[_type == "article" && references(^._id)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      "category": categories[0]-> {
        title,
        slug,
      }
    }
  }`;

  return await sanityClient.fetch(query);
};

export const getCategoryArticles = async () => {
  const query = `*[_type == "category"] {
    _id,
    title,
    slug,
    description,
    "articles": *[_type == "article" && references(^._id)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      "category": categories[0]-> {
        title,
        slug,
      }
    }
  }`;

  return await sanityClient.fetch(query);
};
