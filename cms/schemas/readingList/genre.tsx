import { IconCategory2 } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";

export const genreSchemaType = defineType({
  name: "genre",
  title: "Book Genre",
  type: "document",
  icon: () => <IconCategory2 size={33} />,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 72,
      },
    }),
  ],
});
