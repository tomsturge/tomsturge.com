import rss from "@astrojs/rss";
import { getArticles } from "@/ui/queries";
import { urlForImage } from "@/sanity/urlForImage";

export async function GET(context) {
  const articles = await getArticles({
    limit: 50,
    drafts: false,
  });

  return rss({
    title: "Tom Sturge",
    description:
      "Thoughtful leadership content exploring professional growth, team culture, effective communication, and sustainable practices for today's leaders.",
    site: context.site,
    items: articles.map((article) => ({
      title: article.title,
      description: article.excerpt || "",
      link: `/articles/${article.slug.current}`,
      pubDate: new Date(article.publishedAt),
      categories: article.category ? [article.category.title] : [],
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
    })),

    xmlns: {
      content: "http://purl.org/rss/1.0/modules/content/",
    },
  });
}
