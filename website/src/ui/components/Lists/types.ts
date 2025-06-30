export interface ArticleListProps {
  limit?: number;
  compact?: boolean;
  theme?: "light" | "dark";
  featured?: boolean;
  articles?: Article[] | null;
  itemsPerRow?: number;
  minCount?: number;
}
