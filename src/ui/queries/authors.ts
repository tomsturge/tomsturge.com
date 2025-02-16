export const getAuthor = `*[_type == "author"]{
  name,
  slug,
  bio,
  image,
  linkedin,
  website,
  "posts": *[
    ${import.meta.env.DEV ? "_type == 'article'" : "_type == 'article' && !(_id in path('drafts.**'))"} 
    && author._ref in *[_type=="author" 
    && name == name ]._id 
  ] | order(publishedAt desc){
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    categories,
    excerpt,
    "draft": _id in path("drafts.**"),
  }
}`;
