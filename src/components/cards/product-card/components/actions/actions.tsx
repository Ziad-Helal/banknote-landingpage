import { toast } from "sonner";
import { EyeIcon, GitCompareArrowsIcon, HeartIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/misc";
import type { MouseEvent } from "react";

interface Actions_Props {
  id?: string;
}

const buttonClassName =
  "rounded-full border-dashed bg-transparent border-accent-foreground text-accent-foreground hover:border-accent-foreground hover:border-solid hover:bg-accent-foreground hover:!text-accent";

export default function Actions({}: Actions_Props) {
  const { t } = useTranslation();

  function addToWishlist_Handler(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    event.preventDefault();
    toast("Wishlist");
  }

  function addToCompare_Handler(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    event.preventDefault();
    toast("Compare");
  }

  return (
    <div className="bg-accent w-fit flex gap-2.5 px-4 py-2 rounded-t *:size-7 [&_svg]:!size-4 absolute -bottom-full left-1/2 -translate-x-1/2 transition-[bottom]">
      <Button size="icon" variant="outline" tooltip="Wishlist" icon={HeartIcon} className={buttonClassName} onClick={addToWishlist_Handler}>
        Wishlist
      </Button>
      <Button size="icon" variant="outline" tooltip="Compare" icon={GitCompareArrowsIcon} className={buttonClassName} onClick={addToCompare_Handler}>
        Compare
      </Button>
      <Button size="icon" variant="outline" tooltip="Details" icon={EyeIcon} className={buttonClassName}>
        Details
      </Button>
    </div>
  );
}
