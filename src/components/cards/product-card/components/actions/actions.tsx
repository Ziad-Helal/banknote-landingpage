import { toast } from "sonner";
import { EyeIcon, GitCompareArrowsIcon, HeartIcon } from "lucide-react";
import { Button } from "@/components/misc";
import { useTranslation } from "react-i18next";
import type { MouseEvent } from "react";

interface Actions_Props {
  id?: string;
}

const buttonClassName =
  "rounded-full border-dashed bg-transparent border-accent-foreground text-accent-foreground hover:border-accent-foreground hover:border-solid hover:bg-accent-foreground hover:!text-accent";

export default function Actions({}: Actions_Props) {
  const { t } = useTranslation("keyWords");

  function addToWishlist_Handler(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    event.preventDefault();
    toast(t("wishlist"));
  }

  function addToCompare_Handler(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    event.preventDefault();
    toast(t("compare"));
  }

  return (
    <div className="bg-accent w-fit flex gap-2.5 px-4 py-2 rounded-t *:size-7 [&_svg]:!size-4 absolute -bottom-full left-1/2 -translate-x-1/2 transition-[bottom]">
      <Button size="icon" variant="outline" tooltip={t("wishlist")} icon={HeartIcon} className={buttonClassName} onClick={addToWishlist_Handler}>
        {t("wishlist")}
      </Button>
      <Button size="icon" variant="outline" tooltip={t("compare")} icon={GitCompareArrowsIcon} className={buttonClassName} onClick={addToCompare_Handler}>
        {t("compare")}
      </Button>
      <Button size="icon" variant="outline" tooltip={t("details")} icon={EyeIcon} className={buttonClassName}>
        {t("details")}
      </Button>
    </div>
  );
}
