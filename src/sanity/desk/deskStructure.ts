import { type StructureBuilder } from "sanity/structure";

export const deskStructure = (S: StructureBuilder) => {
  return S.list()
    .title(`Home`)
    .items([
      S.listItem()
        .title("Articles")
        .child(S.documentTypeList("article").title("Articles")),
      S.listItem()
        .title("Categories")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title(`Settings`)
        .child(
          S.document().schemaType(`siteSettings`).documentId(`siteSettings`),
        ),
    ]);
};
