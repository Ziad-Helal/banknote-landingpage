import { Product_Card } from "@/components/cards";
import { Price } from "@/components/cards/product-card/components";
import { Image } from "@/components/misc";
import { General_Section } from "@/components/sections";
import { saleProducts } from "@/db";
import { routes } from "@/routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Sale() {
  const { i18n } = useTranslation("keyWords");

  return (
    <General_Section
      heading={saleProducts.productsWithDiscounts.category[i18n.language]}
      due={saleProducts.productsWithDiscounts.due}
      className="grid-flow-col gap-2 sm:gap-4 !grid-cols-1 md:!grid-cols-2 xl:!grid-cols-3 grid-rows-[repeat(9,auto)] md:grid-rows-5 xl:grid-rows-3 border border-primary p-2 sm:p-5.5 rounded"
    >
      {saleProducts.productsWithDiscounts.featuredProducts.map(({ id, name, price, image }) => (
        <Link
          key={id}
          to={`${routes.products}/${id}`}
          className="block min-h-37.5 max-h-58 relative [&:nth-child(even)_.sname]:max-w-42 [&:nth-child(even)_.sname]:font-[Cairo] [&:nth-child(odd)_.sname]:text-white [&:nth-child(even)_p:has(.strong)]:text-[#410383] [&:nth-child(even)_.strong]:text-black"
        >
          <Image src={image} className="object-cover rounded" containerProps={{ className: "roudned" }} alt={name[i18n.language]} />
          <div className="max-w-54 absolute inset-4 space-y-8">
            <p className="sname text-lg font-medium">{name[i18n.language]}</p>
            <Price price={price} className="text-[#FDC714]" strong />
          </div>
        </Link>
      ))}
      {saleProducts.productsWithDiscounts.products.map((product) => (
        <Product_Card key={product.id} product={{ ...product, name: product.name[i18n.language] }} orientation="horizontal" sale />
      ))}
    </General_Section>
  );
}
