import { Button } from "@/components/misc";
import { Container } from "@/components/sections";
import { useTranslation } from "react-i18next";

export default function NotFound_Page() {
  const { t } = useTranslation("pages");

  return (
    <Container className="p-16 text-center font-[Cairo] font-medium" as="section">
      <span className="text-destructive text-9xl">404</span>
      <p className="mt-20 text-2xl sm:text-5xl dark:text-accent-foreground">{t("notFound.statement")}</p>
      <Button className="mt-10" onClick={() => history.back()}>
        {t("notFound.callToAction")}
      </Button>
    </Container>
  );
}
