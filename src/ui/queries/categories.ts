export const getCategories = `*[_type == "category"]{
  _id,
  title,
  slug,
  "articleCount": count(*[
    ${import.meta.env.DEV ? "_type == 'article'" : "_type == 'article' && !(_id in path('drafts.**'))"} 
    && references(^._id )
  ])
}`;
