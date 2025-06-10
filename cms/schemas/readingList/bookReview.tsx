import { IconArticle as icon } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";

export const bookReviewSchemaType = defineType({
  name: "bookReview",
  title: "Book Review",
  type: "document",
  icon,
  orderings: [
    {
      title: "Published, Desc",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  groups: [
    {
      name: `book`,
      title: `Book`,
      default: true,
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [Rule.required()],
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
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: new Date().toISOString(),
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      rows: 4,
      type: "text",
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error("An excerpt of min. 10 characters is required"),
        Rule.max(250).warning("Shorter excerpts are usually better"),
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "socialImage",
      title: "Social image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "genre",
      title: "Genre",
      type: "array",
      of: [{ type: "reference", to: { type: "genre" } }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
