import { Button } from "@/components/misc";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
import { changeLanguageTo, languages } from "@/localization";
import { useTranslation } from "react-i18next";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

export default function Change_Locale() {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" trailingIcon={ChevronDownIcon}>
          {languages.find(({ code }) => code == i18n.language)?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {languages.map(({ name, code }) => (
          <DropdownMenuItem key={code} className="justify-between" onClick={() => changeLanguageTo(code)}>
            {name}
            {code == i18n.language && <CheckIcon className="text-inherit" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
