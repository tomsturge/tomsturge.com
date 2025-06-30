import type {
  SanityImageObject,
  SanityReference,
  SanityDocument,
  PortableTextBlock,
} from "@sanity/types";

// TypeScript interfaces
export interface Genre extends SanityDocument {
  title: string;
  slug: {
    current: string;
  };
}

export interface BookReview extends SanityDocument {
  title: string;
  author: string;
  slug: {
    current: string;
  };
  reviewPublishedAt: string;
  bookPublishedAt: string;
  excerpt: string;
  bookCover: SanityImageObject;
  socialImage: SanityImageObject;
  amazonLink: string;
  worldOfBooksLink?: string;
  practicalRating: number;
  approachRating: number;
  clarityRating: number;
  insightsRating: number;
  overview: string;
  body: PortableTextBlock[];
  category: Genre;
  draft: boolean;
}
