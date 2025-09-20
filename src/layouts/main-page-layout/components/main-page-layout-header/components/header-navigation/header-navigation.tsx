import { Container } from "@/components/sections";
import { MainNavigation } from "./components";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { handleDirectionChange } from "@/localization";
import { useTranslation } from "react-i18next";
import { routes } from "@/routes";

export default function Header_Navigation() {
  const { t, i18n } = useTranslation("layout");
  const { t: tSale } = useTranslation("keyWords");

  return (
    <section className="bg-secondary border-y border-y-primary text-lg">
      <Container className="flex items-center justify-between pe-0 max-w-308">
        <MainNavigation />
        <Link
          to={`${routes.products}?tag=discount`}
          className={cn(
            "flex gap-2 items-center bg-accent text-accent-foreground focus-visible:bg-accent/85 hover:bg-accent/85 h-15 ps-7 sm:ps-15 pe-3.5",
            handleDirectionChange(i18n.dir(), "[clip-path:polygon(0_0,_100%_0,_100%_100%,_22%_100%)]", "[clip-path:polygon(0_0,_100%_0,_78%_100%,_0_100%)]")
          )}
        >
          <span className="max-sm:hidden">{t("header.navigation.sale", { discountPercentage: "20%" })}</span>
          <span className="px-2 text-accent bg-accent-foreground rounded-full h-6 flex items-center justify-center">{tSale("sale")}</span>
        </Link>
      </Container>
    </section>
  );
}
