import { CheckIcon, Moon, Sun } from "lucide-react";
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
import { useTheme } from "@/store";
import { useTranslation } from "react-i18next";

export default function ColorTheme_Toggler() {
  const { t } = useTranslation("types");
  const { t: tooltip } = useTranslation("layout");
  const { setTheme, themes, theme: currentTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" tooltip={tooltip("header.actions.coloTheme")}>
          <Sun className="z-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute z-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">{tooltip("header.actions.coloTheme")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
            {t(`colorTheme.${theme}`)}
            {theme == currentTheme && <CheckIcon />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
