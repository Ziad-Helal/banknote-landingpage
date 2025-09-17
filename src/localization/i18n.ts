import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { ar, en } from "./locales";

export const languages: { name: string; code: keyof typeof resources }[] = [
  { name: "English", code: "en" },
  { name: "العربية", code: "ar" },
];

export const resources = { en, ar } as const;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    detection: { lookupLocalStorage: "locale" },
    interpolation: { escapeValue: false },
  });

export default i18n;
