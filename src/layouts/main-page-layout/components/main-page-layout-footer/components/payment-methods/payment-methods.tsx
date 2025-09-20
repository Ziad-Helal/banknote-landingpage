import { Image } from "@/components/misc";
import { paymentMethods } from "@/lib/constants";
import { useTranslation } from "react-i18next";

export default function PaymentMethods() {
  const { t } = useTranslation("layout");

  return (
    <div className="flex gap-6 items-center">
      <h3 className="max-sm:sr-only">{t("footer.paymentMethods.heading")}:</h3>
      <ul className="flex gap-2" aria-label={t("footer.paymentMethods.heading")}>
        {paymentMethods.map(({ method, icon }) => (
          <li key={method} aria-label={t(`footer.paymentMethods.items.${method}`)}>
            <Image src={icon} containerProps={{ className: "h-7" }} alt={t(`footer.paymentMethods.items.${method}`)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
