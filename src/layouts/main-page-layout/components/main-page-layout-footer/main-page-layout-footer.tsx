import { useTranslation } from "react-i18next";
import { Contacts, Footer_Bottom, Newsletter, PaymentMethods, SiteMap, SocialMedia } from "./components";
import { Container } from "@/components/sections";
import { Separator } from "@/components/ui";
import { Logo } from "@/components/misc";

export default function Main_PageLayout_Footer() {
  const { t } = useTranslation("layout");

  return (
    <footer className="font-[Cairo] font-medium" aria-label={t("footer.label")}>
      <section className="bg-black text-white py-8 sm:py-16">
        <Container>
          <div className="font-medium flex max-sm:flex-wrap gap-8 justify-center sm:justify-between xl:items-center">
            <h2>
              <Logo className="!size-42.5" />
            </h2>
            <div className="flex max-xl:flex-wrap gap-8">
              <div className="flex max-md:flex-wrap gap-8 justify-between">
                <Contacts />
                <SiteMap />
              </div>
              <Newsletter />
            </div>
          </div>
          <Separator className="my-8 sm:mt-18" />
          <div className="font-semibold flex max-lg:flex-col items-center gap-4 sm:gap-8 justify-between">
            <SocialMedia />
            <PaymentMethods />
          </div>
        </Container>
      </section>
      <Footer_Bottom />
    </footer>
  );
}
