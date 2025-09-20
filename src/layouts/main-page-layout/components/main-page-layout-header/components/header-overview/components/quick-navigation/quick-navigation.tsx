import { Button } from "@/components/misc";
import { buttonVariants } from "@/components/ui";
import { useMediaQuery } from "@/hooks";
import { cn } from "@/lib/utils";
import { handleDirectionChange } from "@/localization";
import { quickNavigationRoutes } from "@/routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface QuickNavigation_Props {
  className?: string;
}

export default function QuickNavigation({ className }: QuickNavigation_Props) {
  const { t, i18n } = useTranslation("layout");
  const isMobile = useMediaQuery("(max-width: 40rem)");
  const counts: { [key: string]: number } = { compare: 0, wishlist: 0, cart: 0 };

  return (
    <div className={className}>
      <h2 className="sr-only">{t("header.overview.quickNavigation.heading")}</h2>
      <ul className="flex gap-2" aria-label={t("header.overview.quickNavigation.heading")}>
        {quickNavigationRoutes.map(({ label, route, icon: Icon, isIcon }) => (
          <li key={route} aria-label={label}>
            <Link to={route} className="block relative">
              <Button
                variant="outline"
                size={isIcon || isMobile ? "icon" : "lg"}
                tooltip={isIcon || isMobile ? t(`header.overview.quickNavigation.${label}`) : undefined}
                icon={isIcon || isMobile ? Icon : undefined}
                leadingIcon={isIcon || isMobile ? undefined : Icon}
                className="!px-4 w-auto h-12 text-lg shadow"
                tabIndex={-1}
              >
                {t(`header.overview.quickNavigation.${label}`)}
              </Button>
              {counts[label] == undefined || (
                <span
                  className={cn(
                    "absolute top-2 font-[Cairo] font-semibold text-xs size-4 p-1 bg-primary rounded-full text-background flex items-center justify-center",
                    handleDirectionChange(i18n.dir(), "left-7.5", "right-7.5")
                  )}
                >
                  {counts[label]}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
