import type { SanityImageObject } from "@sanity/types";

import type { Category } from "@/ui/types";

export interface ArticleHeaderProps {
  title: string;
  readingTime?: number;
  publishedAt: Date;
  excerpt: string;
  image: SanityImageObject;
  categories?: Category[];
}
