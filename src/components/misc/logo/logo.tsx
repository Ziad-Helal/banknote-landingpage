import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { Image } from "@/components/misc";
import { cn } from "@/lib/utils";
import { routes } from "@/routes";

interface Logo_Props {
  className?: string;
  onClick?: VoidFunction;
}

export default function Logo({ className, onClick }: Logo_Props) {
  const { t } = useTranslation("brand");

  return (
    <Link to={routes.home} className={cn("block w-fit size-25 md:size-33.5", className)} onClick={onClick}>
      <Image src="/logo.svg" alt={t("name")} />
      {/* <span className="sr-only">{t("name")}</span> */}
    </Link>
  );
}
