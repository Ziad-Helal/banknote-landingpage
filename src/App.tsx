import { Outlet } from "react-router";
import { useLocaleListener } from "@/localization";

export default function App() {
  useLocaleListener();

  // For multiple layouts support
  return <Outlet />;
}
