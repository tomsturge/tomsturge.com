// src/pages/rss.xml.js
import rss from "@astrojs/rss";
import { getArticles } from "@/ui/queries";
import { urlForImage } from "@/sanity/urlForImage";

export async function GET(context) {
  // Fetch published articles from Sanity (exclude drafts for RSS)
  const articles = await getArticles({
    limit: 50, // Adjust as needed
    drafts: false, // Only published articles in RSS
  });

  return rss({
    // Basic RSS feed info
    title: "Your Blog Title",
    description: "Your blog description",
    site: context.site,

    // RSS feed items from your Sanity articles
    items: articles.map((article) => ({
      title: article.title,
      description: article.excerpt || "",
      link: `/articles/${article.slug.current}`,
      pubDate: new Date(article.publishedAt),

      // Add category (using the first category from your query structure)
      categories: article.category ? [article.category.title] : [],

      // Add featured image as enclosure
      enclosure: article.mainImage
        ? {
            url: urlForImage(article.mainImage).width(1200).height(630).url(),
            type: "image/jpeg",
            length: 0,
          }
        : undefined,

      // Include just the excerpt in content (image is handled by enclosure)
      customData: `
        <content:encoded><![CDATA[${article.excerpt || ""}]]></content:encoded>
      `,
    })),

    xmlns: {
      content: "http://purl.org/rss/1.0/modules/content/",
    },
  });
}
