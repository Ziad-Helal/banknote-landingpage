import { sitemap } from "@/routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function SiteMap() {
  const { t } = useTranslation("layout");

  return (
    <div className="shrink-0">
      <h3 className="sr-only">{t("footer.sitemap.heading")}</h3>
      <ul className="flex gap-8" aria-label={t("footer.sitemap.heading")}>
        {sitemap.map(({ heading, routes }) => (
          <li key={heading} className="space-y-4 lg:min-w-36" aria-label={t(`footer.sitemap.items.${heading}.label`)}>
            <h4 className="font-bold text-xl">{t(`footer.sitemap.items.${heading}.label`)}</h4>
            <ul className="space-y-4" aria-label={t(`footer.sitemap.items.${heading}.label`)}>
              {routes.map(({ label, route }) => (
                <li key={label} aria-label={t(`footer.sitemap.items.${heading}.${label}`, { defaultValue: label })}>
                  <Link to={route} className="hover:text-primary transition-colors">
                    {t(`footer.sitemap.items.${heading}.${label}`, { defaultValue: label })}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
