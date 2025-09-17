import { Suspense } from "react";
import { Outlet } from "react-router";
import { Main_PageLayout_Footer, Main_PageLayout_Header } from "./components";

export default function Main_PageLayout() {
  return (
    <>
      <Main_PageLayout_Header />
      <main className="flex-1">
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </main>
      <Main_PageLayout_Footer />
    </>
  );
}
