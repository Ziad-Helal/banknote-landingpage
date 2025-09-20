import { Link } from "react-router";
import { Actions, AddToCart, Price } from "./components";
import { Image, Rating } from "@/components/misc";
import { routes } from "@/routes";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface Product_Card_Props {
  product: Product;
  orientation?: "horizontal" | "vertical";
}

export default function Product_Card({ product, orientation = "vertical" }: Product_Card_Props) {
  const { id, name, price, rating, image } = product;

  return (
    <Link to={`${routes.products}/${id}`} className={cn("p-3 bg-secondary hover:bg-secondary/90 rounded flex gap-2 max-sm:text-sm", orientation === "vertical" ? "flex-col" : "")}>
      <div className="relative overflow-hidden hover:[&>*:last-child]:bottom-0">
        <Image
          src={image}
          className="object-cover"
          containerProps={{ className: cn("aspect-[16/13] rounded", orientation === "vertical" ? "h-auto w-full" : "h-32.5") }}
          alt={name}
        />
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
