import { Suspense } from "react";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import { Main_PageLayout_Footer, Main_PageLayout_Header } from "./components";

export default function Main_PageLayout() {
  const { t } = useTranslation("keyWords");

  return (
    <>
      <Main_PageLayout_Header />
      <main className="flex-1">
        <Suspense fallback={t("loading")}>
          <Outlet />
        </Suspense>
      </main>
      <Main_PageLayout_Footer />
    </>
  );
}
