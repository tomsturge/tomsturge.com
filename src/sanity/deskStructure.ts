import { type StructureBuilder } from "sanity/structure";

export function deskStructure(S: StructureBuilder) {
  const typeIdsToIgnore = [`siteSettings`, `personalInfo`, `media.tag`];

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
        .title("Admin")
        .child(
          S.list()
            .title("Admin")
            .items([
              S.listItem()
                .title(`Details`)
                .child(
                  S.document()
                    .schemaType(`personalInfo`)
                    .documentId(`personalInfo`),
                ),
              S.listItem()
                .title(`Settings`)
                .child(
                  S.document()
                    .schemaType(`siteSettings`)
                    .documentId(`siteSettings`),
                ),
            ]),
        ),
    ]);
}
