import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/misc";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
import { useTheme } from "@/store";
import { useTranslation } from "react-i18next";

export default function Change_ColorTheme() {
  const { t } = useTranslation("types");
  const { setTheme, themes, theme: currentTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" trailingIcon={ChevronDownIcon}>
          {t(`colorTheme.${currentTheme}`)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme} className="justify-between" onClick={() => setTheme(theme)}>
            {t(`colorTheme.${theme}`)}
            {theme == currentTheme && <CheckIcon className="text-inherit" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
