import { General_Section } from "@/components/sections";
import { Hero } from "./components";
import { products, subcategories } from "@/db";
import { Category_Card, Product_Card } from "@/components/cards";
import { useTranslation } from "react-i18next";
import { routes } from "@/routes";

export default function Home_Page() {
  const { t, i18n } = useTranslation("keyWords");

  return (
    <>
      <Hero />
      <General_Section heading={subcategories.householdSupplies.category[i18n.language]} seeMore={{ label: t("shopAll"), route: routes.categories }}>
        {subcategories.householdSupplies.subcategories.map((category) => (
          <Category_Card key={category.id} category={{ ...category, category: category.category[i18n.language] }} />
        ))}
      </General_Section>
      <General_Section heading={subcategories.beauty.category[i18n.language]} seeMore={{ label: t("shopAll"), route: routes.categories }}>
        {subcategories.beauty.subcategories.map((category) => (
          <Category_Card key={category.id} category={{ ...category, category: category.category[i18n.language] }} />
        ))}
      </General_Section>
      <General_Section heading={subcategories.furniture.category[i18n.language]} seeMore={{ label: t("shopAll"), route: routes.categories }}>
        {subcategories.furniture.subcategories.map((category) => (
          <Category_Card key={category.id} category={{ ...category, category: category.category[i18n.language] }} />
        ))}
      </General_Section>
      <General_Section heading={products.beautyPicks.category[i18n.language]} seeMore={{ label: t("shopNow"), route: `${routes.categories}/${products.beautyPicks.id}` }}>
        {products.beautyPicks.products.map((product) => (
          <Product_Card key={product.id} product={{ ...product, name: product.name[i18n.language] }} />
        ))}
      </General_Section>
      <General_Section heading={subcategories.cleaningSupplies.category[i18n.language]} seeMore={{ label: t("shopAll"), route: routes.categories }}>
        {subcategories.cleaningSupplies.subcategories.map((category) => (
          <Category_Card key={category.id} category={{ ...category, category: category.category[i18n.language] }} />
        ))}
      </General_Section>
      <General_Section
        heading={products.featuredGroceryProducts.category[i18n.language]}
        seeMore={{ label: t("shopNow"), route: `${routes.categories}/${products.featuredGroceryProducts.id}` }}
      >
        {products.featuredGroceryProducts.products.map((product) => (
          <Product_Card key={product.id} product={{ ...product, name: product.name[i18n.language] }} />
        ))}
      </General_Section>
    </>
  );
}
