import { Button } from "@/components/misc";
import { ChevronUpIcon } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function ScrollToTop_Button() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation("layout");

  return (
    <Button
      ref={buttonRef}
      size="icon"
      icon={ChevronUpIcon}
      tooltip={t("footer.scrollToTop")}
      className="rounded-full bg-accent size-11.5"
      iconClassName="size-7"
      onClick={() => scrollTo({ top: 0 })}
    >
      {t("footer.scrollToTop")}
    </Button>
  );
}
