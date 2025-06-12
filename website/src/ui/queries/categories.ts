import { sanityClient } from "sanity:client";

export const getCategories = `*[_type == "category"]{
  _id,
  title,
  slug,
  "articleCount": count(*[
    ${import.meta.env.DEV ? "_type == 'article'" : "_type == 'article' && !(_id in path('drafts.**'))"} 
    && references(^._id )
  ])
} | order(articleCount desc)`;

export const getCategory = `
  *[_type == "category"] {
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
      author-> {
        name,
        slug
      },
      "category": categories[0]-> {
        title,
        slug,
      }
    }
  }
`;
