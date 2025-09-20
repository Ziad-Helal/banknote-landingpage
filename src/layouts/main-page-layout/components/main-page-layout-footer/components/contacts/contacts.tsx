import { contacts } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Contacts() {
  const { t } = useTranslation("layout");

  return (
    <div className="space-y-6">
      <h3 className="font-bold text-xl sr-only">{t("footer.contacts.heading")}</h3>
      <ul className="space-y-6" aria-label={t("footer.contacts.heading")}>
        {contacts.map(({ label, url, icon: Icon }) => (
          <li key={label} aria-label={t(`footer.contacts.items.${label}.label`)}>
            <Link to={url} className="flex gap-4 w-fit hover:text-primary transition-colors" target="_blank" aria-label={t(`footer.contacts.items.${label}.label`)}>
              <Icon className="size-6 shrink-0" />
              {t(`footer.contacts.items.${label}.placeholder`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
