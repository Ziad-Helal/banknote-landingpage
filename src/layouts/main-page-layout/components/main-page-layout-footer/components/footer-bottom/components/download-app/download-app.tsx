import { Image } from "@/components/misc";
import { apps } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function DownloadApp() {
  const { t } = useTranslation("layout");

  return (
    <div className="flex gap-6 items-center dark:text-white">
      <h3 className="max-md:sr-only">{t("footer.apps.heading")}</h3>
      <ul className="flex max-sm:flex-col gap-2 sm:gap-6 items-center" aria-label={t("footer.apps.heading")}>
        {apps.map(({ store, url, image }) => (
          <li key={url} aria-label={t(`footer.apps.stores.${store}`)}>
            <Link to={url} target="_blank" aria-label={t(`footer.apps.stores.${store}`)}>
              <Image src={image} className="h-9" alt={t(`footer.apps.stores.${store}`)} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
