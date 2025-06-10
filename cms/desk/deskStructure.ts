import { type StructureBuilder } from "sanity/structure";

export const deskStructure = (S: StructureBuilder) => {
  return S.list()
    .title(`Home`)
    .items([
      S.listItem()
        .title("Archive")
        .child(
          S.list()
            .title("Archive")
            .items([
              S.listItem()
                .title("Articles")
                .child(S.documentTypeList("article").title("Articles")),
              S.listItem()
                .title("Categories")
                .child(S.documentTypeList("category").title("Categories")),
            ]),
        ),
      S.listItem()
        .title("Reading List")
        .child(
          S.list()
            .title("Reading List")
            .items([
              S.listItem()
                .title("Book Reviews")
                .child(S.documentTypeList("bookReview").title("Book Reviews")),
              S.listItem()
                .title("Genres")
                .child(S.documentTypeList("genre").title("Genres")),
            ]),
        ),
      S.listItem()
        .title(`Settings`)
        .child(
          S.document().schemaType(`siteSettings`).documentId(`siteSettings`),
        ),
    ]);
};
