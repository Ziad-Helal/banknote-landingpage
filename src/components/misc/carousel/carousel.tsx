import Autoplay from "embla-carousel-autoplay";
import { Carousel as CarouselClassic, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useEffect, useState, type ReactNode } from "react";
import { handleDirectionChange } from "@/localization";

interface Carousel_Props {
  slides: ReactNode[];
  align?: "start" | "center" | "end";
  gap?: string;
  slideBasis?: string;
  activeSlideBasis?: string;
  slideClassName?: string;
  contentClassName?: string;
  carouselClassName?: string;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  dragFree?: boolean;
  loop?: boolean;
  middleFocus?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  isGeneralSection?: boolean;
}

export default function Carousel({
  slides,
  align = "start",
  gap = "1rem",
  slideBasis = "basis-full",
  activeSlideBasis,
  slideClassName,
  contentClassName,
  carouselClassName,
  autoPlay = true,
  autoPlayDelay = 3000,
  dragFree = true,
  loop = false,
  pagination,
  navigation,
  isGeneralSection,
}: Carousel_Props) {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState(i18n.dir());
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(activeSlideBasis ? api.slideNodes().length : api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  useEffect(() => {
    setDirection(i18n.dir());
  }, [i18n.dir()]);

  return (
    <CarouselClassic
      className={cn("relative", carouselClassName)}
      setApi={setApi}
      opts={{ align, containScroll: activeSlideBasis ? undefined : "trimSnaps", direction, dragFree, loop }}
      plugins={autoPlay ? [Autoplay({ delay: autoPlayDelay, stopOnInteraction: false })] : undefined}
    >
      <CarouselContent className={cn("items-center", contentClassName)} style={{ marginLeft: `-${gap}` }}>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className={cn("transition-[flex-basis] delay-500 duration-500", slideBasis, slideClassName, current - 1 === index ? activeSlideBasis : "")}
            style={{ paddingLeft: gap }}
          >
            {slide}
          </CarouselItem>
        ))}
      </CarouselContent>
      {navigation && (
        <div
          className={cn(
            "*:static *:-translate-y-8 *:rounded *:border-primary *:text-muted-foreground [&_svg]:!size-6 w-fit flex gap-2 absolute bottom-full",
            handleDirectionChange(i18n.dir(), "right-0", "left-0 [&_svg]:rotate-180")
          )}
        >
          <CarouselPrevious />
          <CarouselNext />
        </div>
      )}
      {pagination && (
        <ul className="flex gap-1 justify-center absolute bottom-5 left-0 right-0">
          {Array.from({ length: count }, (_, index) => (
            <li
              key={index}
              className={cn("cursor-pointer size-2 rounded-full hover:bg-muted/50", current - 1 === index ? "bg-primary" : "bg-muted")}
              onClick={() => api?.scrollTo(index)}
            >
              <span className="sr-only">{index + 1}</span>
            </li>
          ))}
        </ul>
      )}
    </CarouselClassic>
  );
}
