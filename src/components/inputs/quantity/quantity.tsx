import { Button } from "@/components/misc";
import { Input, Separator } from "@/components/ui";
import { cn } from "@/lib/utils";
import { handleDirectionChange } from "@/localization";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

interface Quantity_Input_Props {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  addToCart_Handler: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

export default function Quantity_Input({ value, setValue, addToCart_Handler }: Quantity_Input_Props) {
  const { i18n } = useTranslation();

  function countChange_Handler(event: ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value;
    if (value >= 0) setValue(value);
  }

  function reduceFromCart_Handler(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    event.preventDefault();
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  }

  return (
    <div className="relative">
      <Input
        type="number"
        value={value}
        className={cn("font-[Cairo] font-semibold text-base h-7.5 ps-2 pe-12.5 border-none shadow-none !bg-white", value ? "!bg-primary" : "text-muted-foreground")}
        onChange={countChange_Handler}
        onClick={(e) => e.preventDefault()}
      />
      <div
        className={cn(
          "absolute top-1 flex border rounded overflow-hidden *:size-5 *:border-none *:rounded-none *:bg-transparent",
          handleDirectionChange(i18n.dir(), "right-1", "left-1"),
          value ? "border-white text-white" : "*:!text-border"
        )}
      >
        <Button size="icon" variant="outline" icon={ChevronDownIcon} onClick={reduceFromCart_Handler}>
          -
        </Button>
        <Separator className={cn("!h-5", value ? "!bg-white" : "!bg-border")} orientation="vertical" />
        <Button size="icon" variant="outline" icon={ChevronUpIcon} onClick={addToCart_Handler}>
          +
        </Button>
      </div>
    </div>
  );
}
