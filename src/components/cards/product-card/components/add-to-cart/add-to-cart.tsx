import { cn } from "@/lib/utils";
import { Button } from "@/components/misc";
import { Quantity_Input } from "@/components/inputs";
import { ShoppingCartIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import type { MouseEvent } from "react";

interface AddToCart_Props {
  initialCount?: number;
}

export default function AddToCart({ initialCount = 0 }: AddToCart_Props) {
  const { t } = useTranslation("keyWords");
  const [count, setCount] = useState(initialCount);

  function addToCart_Handler(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    event.preventDefault();
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="flex gap-2 sm:gap-4 max-sm:flex-col items-center justify-between">
      <Quantity_Input value={count} setValue={setCount} addToCart_Handler={addToCart_Handler} />
      <Button
        size="sm"
        variant="outline"
        trailingIcon={ShoppingCartIcon}
        className={cn(
          "text-sm font-[Cairo] font-bold h-7.5 border-accent max-sm:w-full hover:!text-accent-foreground",
          count ? "bg-accent text-accent-foreground" : "!text-accent bg-transparent"
        )}
        onClick={addToCart_Handler}
      >
        {t("add")}
      </Button>
    </div>
  );
}
