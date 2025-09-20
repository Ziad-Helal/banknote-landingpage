import { Change_ColorTheme, Change_Country, Change_Locale } from "@/components/misc";
import { Container } from "@/components/sections";
import { buttonVariants } from "@/components/ui";
import { routes } from "@/routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Header_Actions() {
  const { t } = useTranslation("layout");

  return (
    <section className="bg-primary py-1.5 lg:py-0.75">
      <Container className="flex gap-2 max-lg:flex-col items-center justify-between max-w-318">
        <Change_Country />
        <div className="max-sm:w-full">
          <h2 className="sr-only">{t("header.actions.heading")}</h2>
          <ul
            className="grid grid-cols-[repeat(2,auto)] sm:grid-cols-[repeat(4,auto)] items-center sm:gap-4 lg:gap-8 max-sm:*:even:text-end"
            aria-label={t("header.actions.heading")}
          >
            <li aria-label={t("header.actions.coloTheme")}>
              <Change_ColorTheme />
            </li>
            <li aria-label={t("header.actions.language")}>
              <Change_Locale />
            </li>
            <li aria-label={t("header.actions.trackOrder")}>
              <Link to={routes.trackOrder} className={buttonVariants({ variant: "ghost", className: "max-sm:px-3" })}>
                {t("header.actions.trackOrder")}
              </Link>
            </li>
            <li aria-label={t("header.actions.supplier")}>
              <Link to={routes.supplier} className={buttonVariants({ variant: "ghost", className: "max-sm:px-3" })}>
                {t("header.actions.supplier")}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
