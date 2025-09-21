import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { Toaster } from "@/components/ui";
import { Main_PageLayout_Footer, Main_PageLayout_Header } from "./components";
import { handleDirectionChange } from "@/localization";
import { Loading } from "@/components/misc";

export default function Main_PageLayout() {
  const { t, i18n } = useTranslation("pages");
  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Main_PageLayout_Header />
      <main className="flex-1 relative" aria-label={t("label")}>
        <Suspense fallback={<Loading isFullPage />}>
          <Outlet />
        </Suspense>
      </main>
      <Main_PageLayout_Footer />
      <Toaster position={`bottom-${handleDirectionChange(i18n.dir(), "right", "left")}`} duration={5000} />
    </>
  );
}
