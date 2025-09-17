import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { routes } from "@/routes";
import App from "@/App";

// Layouts
const Main_PageLayout = lazy(() => import("@/layouts/main-page-layout"));

// Home Page
const Home_Page = lazy(() => import("@/pages/home-page"));

// Not Found Page
const NotFound_Page = lazy(() => import("@/pages/not-found-page"));

// Routes
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      // Main Layout
      {
        path: routes.home,
        Component: Main_PageLayout,
        children: [
          // Home Page
          {
            index: true,
            Component: Home_Page,
          },
          // Not Found Page
          {
            path: "*",
            Component: NotFound_Page,
          },
        ],
      },
    ],
  },
]);
