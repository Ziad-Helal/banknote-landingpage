import { Button } from "@/components/misc";
import { Input } from "@/components/ui";
import { useDebounce, useMediaQuery, useUpdateEffect } from "@/hooks";
import { cn } from "@/lib/utils";
import { handleDirectionChange } from "@/localization";
import { LoaderCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

interface GlobalSearch_Props {
  className?: string;
}

export default function GlobalSearch({ className }: GlobalSearch_Props) {
  const { t, i18n } = useTranslation("layout");
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const isMobile = useMediaQuery("(max-width: 40rem)");

  useUpdateEffect(() => {
    searchHandler();
  }, [debouncedValue]);

  function searchHandler() {
    debouncedValue && toast(t("header.overview.globalSearch.toast", { value: debouncedValue }), { icon: <LoaderCircleIcon className="animate-spin size-5" /> });
  }

  return (
    <div className={cn("font-[Cairo] relative", className)} aria-label={t("header.overview.globalSearch.label")}>
      <Input
        value={value}
        type="search"
        className={cn("border-none shadow-none bg-secondary h-12 py-1.5 ps-2", isMobile ? "pe-12.5" : "pe-30")}
        placeholder={t("header.overview.globalSearch.placeholder")}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        size={isMobile ? "icon" : undefined}
        variant="secondary"
        className={cn("!px-4 font-bold absolute top-1.5", handleDirectionChange(i18n.dir(), "right-1.5", "left-1.5"))}
        icon={isMobile ? SearchIcon : undefined}
        trailingIcon={isMobile ? undefined : SearchIcon}
        onClick={searchHandler}
      >
        {t("header.overview.globalSearch.submit")}
      </Button>
    </div>
  );
}
