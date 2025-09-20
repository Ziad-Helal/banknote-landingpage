import MainNavigation_Mobile from "./main-navigation-mobile";
import { useMediaQuery } from "@/hooks";
import { cn } from "@/lib/utils";
import { mainNavigationRoutes } from "@/routes";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export default function MainNavigation() {
  const { t } = useTranslation("layout");
  const isMobile = useMediaQuery("(max-width: 48rem)");

  return isMobile ? (
    <MainNavigation_Mobile />
  ) : (
    <>
      <h2 className="sr-only">{t("header.navigation.heading")}</h2>
      <ul className="flex gap-8" aria-label={t("header.navigation.heading")}>
        {mainNavigationRoutes.map(({ label, route }) => (
          <li key={route} aria-label={label}>
            <NavLink to={route} className={({ isActive }) => cn("hover:text-accent transition-colors", isActive ? "text-accent" : "")}>
              {t(`header.navigation.${label}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
