import { Image } from "@/components/misc";
import { heroSaleCategory } from "@/db";
import { cn } from "@/lib/utils";
import { handleDirectionChange } from "@/localization";
import { routes } from "@/routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function FeaturedItem() {
  const { t, i18n } = useTranslation("keyWords");

  return (
    <Link to={`${routes.categories}/${heroSaleCategory.id}`} className="relative hover:*:last:bg-secondary/65">
      <Image
        src={heroSaleCategory.image}
        alt={heroSaleCategory.category[i18n.language]}
        className="object-cover"
        containerProps={{ className: "rounded-lg min-w-73.5 aspect-[450/306] sm:aspect-video md:aspect-[306/450]" }}
      />
      <div
        className={cn(
          "bg-secondary/50 p-5 font-[Cairo] max-w-45 flex gap-8 flex-col items-center justify-center transition-colors absolute top-0 bottom-0",
          handleDirectionChange(i18n.dir(), "left-0", "right-0")
        )}
      >
        <p className="text-[#004333] font-bold text-2xl">{heroSaleCategory.category[i18n.language]}</p>
        <p>{heroSaleCategory.description[i18n.language]}</p>
        <p
          className={cn(
            "uppercase *:leading-6 font-black text-center text-2xl flex flex-col justify-center p-7 size-30 text-accent-foreground bg-[url(/icons/star.svg)] bg-no-repeat bg-center absolute top-10",
            handleDirectionChange(i18n.dir(), "right-0 translate-x-1/2", "left-0 -translate-x-1/2")
          )}
        >
          <span>{t("sale")}</span>
          <span>{heroSaleCategory.percentage}%</span>
        </p>
      </div>
    </Link>
  );
}
