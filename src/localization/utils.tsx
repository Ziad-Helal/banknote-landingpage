import { useEffect } from "react";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import type { Language } from "./i18next";

export function changeLanguageTo(code: Language) {
  changeLanguage(code).then(() => {
    localStorage.setItem("locale", code);
    scrollTo({ top: 0, behavior: "smooth" });
  });
}

export function useLocaleListener() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", i18n.language);
    root.dir = i18n.dir();
  }, [i18n.language]);
}

export function handleDirectionChange<LTR, RTL>(dir: "ltr" | "rtl", ltr: LTR, rtl: RTL) {
  return dir === "ltr" ? ltr : rtl;
}
