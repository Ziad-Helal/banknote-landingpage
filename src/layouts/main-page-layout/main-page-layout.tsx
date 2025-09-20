import { Suspense } from "react";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import { Toaster } from "@/components/ui";
import { Main_PageLayout_Footer, Main_PageLayout_Header } from "./components";
import { handleDirectionChange } from "@/localization";

export default function Main_PageLayout() {
  const { t, i18n } = useTranslation("pages");
  const { t: tKeyWords } = useTranslation("keyWords");

  return (
    <>
      <Main_PageLayout_Header />
      <main className="flex-1" aria-label={t("label")}>
        <Suspense fallback={tKeyWords("loading")}>
          <Outlet />
        </Suspense>
      </main>
      <Main_PageLayout_Footer />
      <Toaster position={`bottom-${handleDirectionChange(i18n.dir(), "right", "left")}`} duration={5000} />
    </>
  );
}
