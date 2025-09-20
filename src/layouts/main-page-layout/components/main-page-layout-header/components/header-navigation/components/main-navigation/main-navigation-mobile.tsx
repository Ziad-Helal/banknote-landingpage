import { Button, Logo } from "@/components/misc";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";
import { handleDirectionChange } from "@/localization";
import { mainNavigationRoutes } from "@/routes";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export default function MainNavigation_Mobile() {
  const { t, i18n } = useTranslation("layout");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" icon={MenuIcon} tooltip={t("header.navigation.heading")}>
          {t("header.navigation.heading")}
        </Button>
      </SheetTrigger>
      <SheetContent side={handleDirectionChange(i18n.dir(), "left", "right")}>
        <SheetHeader className="pb-0">
          <SheetTitle>
            <Logo onClick={() => setIsOpen(false)} />
          </SheetTitle>
          <SheetDescription className="sr-only">{t("header.navigation.heading")}</SheetDescription>
        </SheetHeader>
        <ul aria-label={t("header.navigation.heading")}>
          {mainNavigationRoutes.map(({ label, route }) => (
            <li key={route} className="border-b first:border-t" aria-label={label}>
              <NavLink
                to={route}
                className={({ isActive }) =>
                  cn(
                    "block p-2 dark:text-accent-foreground hover:!text-sidebar-foreground hover:bg-secondary transition-colors",
                    isActive ? "text-sidebar-accent-foreground bg-sidebar-accent" : ""
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                {t(`header.navigation.${label}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
