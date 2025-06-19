import { IconAdjustments } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: `siteSettings`,
  title: `Settings`,
  type: `document`,
  icon: () => <IconAdjustments size={33} />,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  __experimental_actions: [/*'create',*/ `update`, /*'delete',*/ `publish`],
  fields: [
    defineField({
      name: `title`,
      title: `Site Title`,
      type: `string`,
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: `description`,
      title: `Site Description`,
      type: `text`,
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "seoImage",
      title: "SEO image",
      type: "image",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: `bio`,
      title: `Bio (used in footer)`,
      type: `text`,
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
