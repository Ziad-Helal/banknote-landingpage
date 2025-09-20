import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar, en } from "./locales";

export const languages: { name: string; code: keyof typeof resources }[] = [
  { name: "English", code: "en" },
  { name: "العربية", code: "ar" },
];

export const resources = { en, ar } as const;

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: localStorage.getItem("locale") || "en",
  interpolation: { escapeValue: false },
});

export default i18n;
