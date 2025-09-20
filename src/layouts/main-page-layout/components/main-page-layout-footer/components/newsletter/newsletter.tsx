import { Newsletter_Form } from "@/components/forms";
import { useTranslation } from "react-i18next";

export default function Newsletter() {
  const { t } = useTranslation("layout");

  return (
    <div className="space-y-4 max-xl:w-full xl:min-w-88">
      <h3 className="font-bold text-xl">{t("footer.newsletter.heading")}</h3>
      <p>{t("footer.newsletter.description")}</p>
      <Newsletter_Form />
    </div>
  );
}
