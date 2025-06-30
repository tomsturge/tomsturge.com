import type { PortableTextBlock, SanityImageObject } from "@sanity/types";

export interface Article {
  title: string;
  slug: {
    current: string;
  };
  body: PortableTextBlock[];
  excerpt: string;
  publishedAt: string;
  featured: boolean;
  category: Category;
  mainImage: SanityImageObject;
  draft: boolean;
}

interface Category {
  title: string;
  slug: {
    current: string;
  };
}

// Category type for reference
export type CategoryType =
  | "leadership"
  | "culture"
  | "communication"
  | "sustainability"
  | "growth"
  | "strategy";
