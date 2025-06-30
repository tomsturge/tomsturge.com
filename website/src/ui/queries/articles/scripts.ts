import { getCurrentDate } from "@/scripts";

const { month: currentMonth, year: currentYear } = getCurrentDate();

export const extractFeatured = (arr) => {
  const featured = [];
  const remaining = [];

  for (let item of arr) {
    if (item.featured && featured.length < 5) {
      featured.push(item);
    } else {
      remaining.push(item);
    }
  }

  return { featured, remaining };
};

export const extractCurrentMonth = (arr) => {
  const currentMonthItems = [];
  const otherItems = [];

  for (let item of arr) {
    const itemDate = new Date(item.publishedAt);

    if (
      itemDate.getUTCFullYear() === currentYear &&
      itemDate.getUTCMonth() === currentMonth &&
      currentMonthItems.length < 3
    ) {
      currentMonthItems.push(item);
    } else {
      otherItems.push(item);
    }
  }

  return { currentMonthItems, otherItems };
};
