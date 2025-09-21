import { Category_Card } from "@/components/cards";
import { Carousel } from "@/components/misc";
import { categories } from "@/db";
import { useTranslation } from "react-i18next";

export default function Categories() {
  const { i18n } = useTranslation("keyWords");

  return (
    <Carousel
      slideBasis="basis-1/3 sm:basis-1/5 md:basis-1/6 lg:basis-1/8"
      slides={categories.map((category) => (
        <Category_Card category={{ ...category, category: category.category[i18n.language] }} isCompact />
      ))}
    />
  );
}
