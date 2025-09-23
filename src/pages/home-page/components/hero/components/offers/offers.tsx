import { cn } from "@/lib/utils";
import { FeaturedItem } from "./components";
import { Carousel, Image, LiveChat } from "@/components/misc";
import { handleDirectionChange } from "@/localization";
import { Trans, useTranslation } from "react-i18next";
import { heroSpecialOfferCategories } from "@/db";
import { Link } from "react-router";
import { routes } from "@/routes";

export default function Offers() {
  const { i18n } = useTranslation();

  return (
    <div className="grid md:grid-cols-[1fr_auto] gap-6 relative">
      <div className="relative rounded-xl overflow-hidden bg-[url(/images/sale-bg.png)] bg-no-repeat bg-center">
        <Carousel
          carouselClassName="h-full py-15"
          contentClassName="h-[326.75px] md:h-[316.25px]"
          align="center"
          slideBasis="basis-1/3 min-[480px]:basis-[20%] md:basis-1/4 lg:basis-1/5"
          activeSlideBasis="!basis-1/2 min-[480px]:!basis-[25%] md:!basis-1/3 lg:!basis-1/4"
          slides={heroSpecialOfferCategories.map(({ id, image }) => (
            <Link key={id} to={`${routes.categories}/${id}`} className="block overflow-hidden rounded-full border border-accent">
              <Image src={image} className="" containerProps={{ className: "" }} alt={id} />
            </Link>
          ))}
          autoPlayDelay={4000}
          pagination
        />
        <p
          className={cn(
            "w-fit px-32 font-[Cairo] text-center flex flex-col text-[#3F351E] bg-[#FBD771] absolute top-5",
            handleDirectionChange(i18n.dir(), "-rotate-30 -left-25", "rotate-30 -right-25")
          )}
        >
          <Trans i18nKey="keyWords:specialOffer" components={[<span className="font-medium text-xl" />, <span className="uppercase font-bold text-3xl" />]} />
        </p>
      </div>
      <FeaturedItem />
      <LiveChat
        className={cn("absolute bottom-3 2xl:bottom-0", handleDirectionChange(i18n.dir(), "right-3 2xl:-right-3 2xl:translate-x-full", "left-3 2xl:-left-3 2xl:-translate-x-full"))}
      />
    </div>
  );
}
