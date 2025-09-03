import type { CategoryType } from "@/ui/types";

export interface ArticleListProps {
  limit?: number;
  compact?: boolean;
  theme?: "light" | "dark";
  featured?: boolean;
  articles?: Article[] | null;
  itemsPerRow?: number;
  minCount?: number;
  category?: CategoryType | null;
  excludeSlug?: string | null;
  title?: string | null;
}
