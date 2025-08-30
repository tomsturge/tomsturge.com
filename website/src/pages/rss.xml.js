import rss from "@astrojs/rss";
import { getListArticles } from "@/ui/queries";
import { urlForImage } from "@/scripts/urlForImage";

export async function GET(context) {
  const articles = await getListArticles({
    limit: 50,
    drafts: false,
  });

  return rss({
    title: "Tom Sturge",
    description:
      "Thoughtful leadership content exploring professional growth, team culture, effective communication, and sustainable practices for today's leaders.",
    site: context.site,
    items: articles.map((article) => {
      // Use category.slug for URL (already URL-friendly)
      const topicSlug = article.category?.slug?.current || "uncategorized";
      // Use category.title for display name
      const topicTitle = article.category?.title || "Uncategorized";

      return {
        title: article.title,
        description: article.excerpt || "",
        // Fix the URL structure using category.slug
        link: `/${topicSlug}/${article.slug.current}`,
        pubDate: new Date(article.publishedAt),
        // Include the category title for RSS readers
        categories: article.category ? [topicTitle] : [],
        enclosure: article.mainImage
          ? {
              url: urlForImage(article.mainImage).width(1200).height(630).url(),
              type: "image/jpeg",
              length: 0,
            }
          : undefined,
        customData: `
          <content:encoded><![CDATA[${article.excerpt || ""}]]></content:encoded>
        `,
      };
    }),

    xmlns: {
      content: "http://purl.org/rss/1.0/modules/content/",
    },
  });
}
