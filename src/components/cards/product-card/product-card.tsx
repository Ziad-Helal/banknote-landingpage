import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Actions, AddToCart, Price } from "./components";
import { Image, Rating } from "@/components/misc";
import { routes } from "@/routes";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks";
import type { Product } from "@/types";
import { handleDirectionChange } from "@/localization";
import { useTranslation } from "react-i18next";

interface Product_Card_Props {
  product: Product;
  sale?: boolean;
  orientation?: "horizontal" | "vertical";
}

export default function Product_Card({ product, sale, orientation = "vertical" }: Product_Card_Props) {
  const { id, name, price, rating, image } = product;
  const { t, i18n } = useTranslation("keyWords");
  const isTight = useMediaQuery("(max-width: 440px)");
  const [isVertical, setIsVertical] = useState(orientation === "vertical" || isTight);

  useEffect(() => {
    setIsVertical(orientation === "vertical" || isTight);
  }, [isTight]);

  return (
    <Link to={`${routes.products}/${id}`} className={cn("p-3 bg-secondary hover:bg-secondary/90 rounded flex gap-2 max-sm:text-sm", isVertical ? "flex-col" : "")}>
      <div className="relative overflow-hidden hover:[&>*:last-child]:bottom-0">
        <Image src={image} className="object-cover" containerProps={{ className: cn("aspect-[16/13] rounded", isVertical ? "h-auto w-full" : "h-32.5") }} alt={name} />
        {sale && (
          <p
            className={cn(
              "uppercase bg-accent font-bold font-[Cairo] text-[10px] px-2.5 pt-1 pb-4.5 flex flex-col absolute top-0 [clip-path:polygon(0_0,_100%_0,_100%_100%,_50%_75%,_0_100%)]",
              handleDirectionChange(i18n.dir(), "left-2.5", "right-2.5")
            )}
          >
            <span>{price.discountPercentage}%</span>
            <span>{t("off")}</span>
          </p>
        )}
        <Actions id={id} />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <p className="flex-1">{name}</p>
        <div className="flex items-center justify-between max-sm:flex-col">
          <Price price={price} />
          <Rating rating={rating} />
        </div>
        <AddToCart />
      </div>
    </Link>
  );
}
