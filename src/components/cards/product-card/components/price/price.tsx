import { useTranslation } from "react-i18next";
import { currency } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Price } from "@/types";

interface Price_Props {
  price: Price;
  className?: string;
  strong?: boolean;
}

export default function Price({ price, strong, className }: Price_Props) {
  const { t } = useTranslation("keyWords");
  const { afterDiscount } = price;

  return (
    <p className={cn("text-xl font-[Cairo] font-bold text-[#FF6606] flex items-center gap-1", className)}>
      <span className="text-xs relative">
        {strong && <span className="strong absolute bottom-full text-accent-foreground">{t("only")}</span>}
        <span>{currency}</span>
      </span>
      <span>{afterDiscount}</span>
    </p>
  );
}
