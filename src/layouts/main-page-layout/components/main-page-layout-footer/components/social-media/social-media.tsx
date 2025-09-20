import { Image } from "@/components/misc";
import { socialMedia } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function SocialMedia() {
  const { t } = useTranslation("layout");

  return (
    <div className="flex gap-6 items-center">
      <h3 className="max-sm:sr-only">{t("footer.socialMedia.heading")}:</h3>
      <ul className="flex gap-2" aria-label={t("footer.socialMedia.heading")}>
        {socialMedia.map(({ name, url, icon }) => (
          <li key={url} aria-label={t(`footer.socialMedia.items.${name}`)}>
            <Link to={url} target="_blank" className="rounded-full block bg-muted hover:bg-primary transition-colors" aria-label={t(`footer.socialMedia.items.${name}`)}>
              <Image src={icon} className="size-10 p-2" alt={t(`footer.socialMedia.items.${name}`)} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
