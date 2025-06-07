// src/pages/rss.xml.js - Enhanced version with full content
import rss from "@astrojs/rss";
import { getArticles } from "@/ui/queries";
import { urlForImage } from "@/sanity/urlForImage";
import { toHTML } from "@portabletext/to-html";

export async function GET(context) {
  // Fetch published articles with full body content
  const articles = await getArticles({
    limit: 50,
    drafts: false,
  });

  return rss({
    title: "Your Blog Title",
    description: "Your blog description",
    site: context.site,

    items: articles.map((article) => {
      // Convert Portable Text body to HTML
      let htmlContent = article.excerpt || "";

      if (article.body) {
        try {
          htmlContent = toHTML(article.body);
        } catch (error) {
          console.warn(
            `Failed to convert body for article: ${article.title}`,
            error,
          );
          htmlContent = article.excerpt || "";
        }
      }

      return {
        title: article.title,
        description: article.excerpt || "",
        link: `/articles/${article.slug.current}`,
        pubDate: new Date(article.publishedAt),

        // Add category
        categories: article.category ? [article.category.title] : [],

        // Full content in RSS
        content: htmlContent,

        // Enhanced custom data with full content
        customData: `
          <content:encoded><![CDATA[
            ${
              article.mainImage
                ? `
              <img 
                src="${urlForImage(article.mainImage).width(800).url()}" 
                alt="${article.title}"
                style="max-width: 100%; height: auto; margin-bottom: 1rem;"
              />
            `
                : ""
            }
            ${htmlContent}
          ]]></content:encoded>
        `,
      };
    }),

    xmlns: {
      content: "http://purl.org/rss/1.0/modules/content/",
      atom: "http://www.w3.org/2005/Atom",
    },
  });
}
