import { currency } from "@/lib/constants";
import type { Price } from "@/types";

interface Price_Props {
  price: Price;
}

export default function Price({ price }: Price_Props) {
  const { afterDiscount } = price;

  return (
    <p className="text-xl font-[Cairo] font-bold text-[#FF6606] flex items-center gap-1">
      <span className="text-xs">{currency}</span>
      <span>{afterDiscount}</span>
    </p>
  );
}
