import { Button } from "@/components/misc";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { useMediaQuery } from "@/hooks";
import { categories } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { handleDirectionChange } from "@/localization";
import { routes } from "@/routes";
import { BarChart2Icon, ChevronRightIcon, CircleEllipsisIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface Categories_Props {
  className?: string;
}

export default function Categories({ className }: Categories_Props) {
  const { t, i18n } = useTranslation("layout");
  const isMobile = useMediaQuery("(max-width: 40rem)");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("font-[Cairo]", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            size={isMobile ? "icon" : undefined}
            tooltip={isMobile ? t("header.overview.categories.label") : undefined}
            icon={isMobile ? BarChart2Icon : undefined}
            leadingIcon={isMobile ? undefined : BarChart2Icon}
            iconClassName={cn("", handleDirectionChange(i18n.dir(), "rotate-x-180 rotate-z-90", "-rotate-z-90"))}
            className={cn("bg-secondary text-foreground hover:bg-primary font-semibold", isMobile ? "size-12" : "h-12")}
          >
            {t("header.overview.categories.label")}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 max-h-[50svh] overflow-auto" align="start">
          <Accordion type="single" collapsible>
            {categories.map(({ label, icon: Icon, items }) => (
              <AccordionItem key={label} value={label}>
                <AccordionTrigger
                  className={cn(
                    "py-0 pe-2 hover:no-underline has-hover:bg-primary has-hover:text-accent-foreground rounded-none items-baseline",
                    items ? "" : "[&>svg:last-child]:hidden"
                  )}
                >
                  <Link
                    to={`${routes.categories}/${label}`}
                    className="flex items-center gap-2 p-2.5"
                    onClick={() => setIsOpen(false)}
                    aria-label={t(`header.overview.categories.${label}.default`)}
                  >
                    <Icon className="size-5" />
                    {t(`header.overview.categories.${label}.default`)}
                  </Link>
                </AccordionTrigger>
                {items && (
                  <AccordionContent className="pb-0">
                    {items.map((item) => (
                      <Link
                        key={item}
                        to={`${routes.categories}/${label}/${item}`}
                        className="flex items-center gap-2 p-2 ps-8 hover:bg-primary"
                        onClick={() => setIsOpen(false)}
                        aria-label={t(`header.overview.categories.${label}.items.${item}`)}
                      >
                        <ChevronRightIcon className="size-5" />
                        {t(`header.overview.categories.${label}.items.${item}`)}
                      </Link>
                    ))}
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
            <AccordionItem value="all">
              <AccordionTrigger className="py-0 pe-2 hover:no-underline has-hover:bg-primary has-hover:text-accent-foreground rounded-none items-baseline [&>svg:last-child]:hidden">
                <Link to={routes.categories} className="flex items-center gap-2 p-2.5" onClick={() => setIsOpen(false)} aria-label={t(`header.overview.categories.all`)}>
                  <CircleEllipsisIcon className="size-5" />
                  {t(`header.overview.categories.all`)}
                </Link>
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>
        </PopoverContent>
      </Popover>
    </div>
  );
}
