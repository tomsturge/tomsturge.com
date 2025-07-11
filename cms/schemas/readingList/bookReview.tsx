import { IconArticle as icon } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";
import { format } from "date-fns";

export const bookReviewSchemaType = defineType({
  name: "bookReview",
  title: "Book Review",
  type: "document",
  icon,
  orderings: [
    {
      title: "Review Published, Desc",
      name: "reviewPublishedAtDesc",
      by: [{ field: "publishedAAt", direction: "desc" }],
    },
    {
      title: "Book Published, Desc",
      name: "bookPublishedAtDesc",
      by: [{ field: "bookPublishedAt", direction: "desc" }],
    },
  ],
  groups: [
    {
      name: `book`,
      title: `Book Details`,
      default: true,
    },
    {
      name: `ratings`,
      title: `At a Glance`,
    },
    {
      name: `content`,
      title: `Review Content`,
    },
  ],
  fields: [
    // Basic Details
    defineField({
      name: "title",
      title: "Book Title",
      type: "string",
      group: "book",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      group: "book",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "book",
      options: {
        source: "title",
        maxLength: 72,
      },
    }),

    // Publication Dates
    defineField({
      name: "publishedAt",
      title: "Review Published Date",
      type: "datetime",
      group: "content",
      description: "When this review was published on the site",
      initialValue: new Date().toISOString(),
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "bookPublishedAt",
      title: "Book Published Date",
      type: "date",
      group: "book",
      description: "When the book was originally published",
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      rows: 4,
      type: "text",
      group: "book",
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error("An excerpt of min. 10 characters is required"),
        Rule.max(250).warning("Shorter excerpts are usually better"),
      ],
    }),

    // Book Cover & Social Images
    defineField({
      name: "mainImage",
      title: "Book Cover",
      type: "image",
      group: "book",
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
      title: "Social Image",
      type: "image",
      group: "book",
      options: {
        hotspot: true,
      },
      validation: (Rule) => [Rule.required()],
    }),

    // Purchase Links
    defineField({
      name: "amazonLink",
      title: "Amazon Affiliate Link",
      type: "url",
      group: "book",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "worldOfBooksLink",
      title: "World of Books Link",
      type: "url",
      group: "book",
    }),

    // At a Glance Ratings with Explanations
    defineField({
      name: "practical",
      title: "Practical",
      type: "object",
      group: "ratings",
      fields: [
        {
          name: "rating",
          title: "Rating (1-5)",
          type: "number",
          validation: (Rule) => [Rule.required(), Rule.min(1).max(5).integer()],
          options: {
            list: [
              { title: "1 - Not Practical", value: 1 },
              { title: "2 - Somewhat Practical", value: 2 },
              { title: "3 - Moderately Practical", value: 3 },
              { title: "4 - Very Practical", value: 4 },
              { title: "5 - Extremely Practical", value: 5 },
            ],
          },
        },
        {
          name: "explanation",
          title: "Explanation",
          type: "text",
          rows: 2,
          description: "Brief explanation for the practical rating",
          validation: (Rule) => [Rule.required().min(10).max(200)],
        },
      ],
    }),

    defineField({
      name: "approach",
      title: "Approach",
      type: "object",
      group: "ratings",
      fields: [
        {
          name: "rating",
          title: "Rating (1-5)",
          type: "number",
          validation: (Rule) => [Rule.required(), Rule.min(1).max(5).integer()],
          options: {
            list: [
              { title: "1 - Poor Approach", value: 1 },
              { title: "2 - Weak Approach", value: 2 },
              { title: "3 - Decent Approach", value: 3 },
              { title: "4 - Strong Approach", value: 4 },
              { title: "5 - Excellent Approach", value: 5 },
            ],
          },
        },
        {
          name: "explanation",
          title: "Explanation",
          type: "text",
          rows: 2,
          description: "Brief explanation for the approach rating",
          validation: (Rule) => [Rule.required().min(10).max(200)],
        },
      ],
    }),

    defineField({
      name: "clarity",
      title: "Clarity",
      type: "object",
      group: "ratings",
      fields: [
        {
          name: "rating",
          title: "Rating (1-5)",
          type: "number",
          validation: (Rule) => [Rule.required(), Rule.min(1).max(5).integer()],
          options: {
            list: [
              { title: "1 - Very Unclear", value: 1 },
              { title: "2 - Somewhat Unclear", value: 2 },
              { title: "3 - Clear Enough", value: 3 },
              { title: "4 - Very Clear", value: 4 },
              { title: "5 - Exceptionally Clear", value: 5 },
            ],
          },
        },
        {
          name: "explanation",
          title: "Explanation",
          type: "text",
          rows: 2,
          description: "Brief explanation for the clarity rating",
          validation: (Rule) => [Rule.required().min(10).max(200)],
        },
      ],
    }),

    defineField({
      name: "insights",
      title: "Insights",
      type: "object",
      group: "ratings",
      fields: [
        {
          name: "rating",
          title: "Rating (1-5)",
          type: "number",
          validation: (Rule) => [Rule.required(), Rule.min(1).max(5).integer()],
          options: {
            list: [
              { title: "1 - No New Insights", value: 1 },
              { title: "2 - Few Insights", value: 2 },
              { title: "3 - Some Good Insights", value: 3 },
              { title: "4 - Many Great Insights", value: 4 },
              { title: "5 - Groundbreaking Insights", value: 5 },
            ],
          },
        },
        {
          name: "explanation",
          title: "Explanation",
          type: "text",
          rows: 2,
          description: "Brief explanation for the insights rating",
          validation: (Rule) => [Rule.required().min(10).max(200)],
        },
      ],
    }),

    // Overview Summary
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      group: "ratings",
      rows: 4,
      description:
        "Quick read assessment, key strengths, limitations, and target audience (aim for 60-100 words)",
      validation: (Rule) => [
        Rule.required()
          .min(50)
          .error("Overview should be at least 50 characters"),
        Rule.max(500).warning("Keep overview concise - aim for 60-100 words"),
      ],
    }),

    // Main Review Content
    defineField({
      name: "body",
      title: "Review Body",
      type: "blockContent",
      group: "content",
      description: "Full review content (aim for 500-700 words)",
      validation: (Rule) => [Rule.required()],
    }),

    // Genre/Categories
    defineField({
      name: "genre",
      title: "Genre",
      type: "array",
      group: "book",
      of: [{ type: "reference", to: { type: "genre" } }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author",
      media: "bookCover",
      reviewDate: "publishedAt",
    },
    prepare(selection) {
      const { title, author, reviewDate } = selection;
      const publishDate = new Date(reviewDate);

      return {
        title: title,
        subtitle: `by ${author} • Review: ${format(publishDate, "MM-yy")}`,
        media: selection.media,
      };
    },
  },
});
