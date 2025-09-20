import { Button } from "@/components/misc";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
import { countries } from "@/lib/constants";
import { CheckIcon, ChevronDownIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Change_Country() {
  const { t } = useTranslation("layout");
  const { t: country } = useTranslation("countries");
  const [currentCountry, steCurrentCountry] = useState((localStorage.getItem("country") || "eg") as (typeof countries)[number]);

  function countryChange_Handler(code: (typeof countries)[number]) {
    localStorage.setItem("country", code);
    steCurrentCountry(code);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" leadingIcon={MapPinIcon} iconClassName="size-7" className="h-auto">
          <span className="flex flex-col items-start">
            <span className="text-sm leading-tight">{t("header.actions.changeCountry")}</span>
            <span className="flex items-center gap-2 leading-tight">
              {country(currentCountry)}
              <ChevronDownIcon className="size-5" />
            </span>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {countries.map((code) => (
          <DropdownMenuItem key={code} className="justify-between" onClick={() => countryChange_Handler(code)}>
            {country(code)}
            {code == currentCountry && <CheckIcon className="text-inherit" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
