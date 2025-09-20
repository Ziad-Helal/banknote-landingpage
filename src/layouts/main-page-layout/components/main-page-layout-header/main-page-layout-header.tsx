import { useTranslation } from "react-i18next";
import { Header_Actions, Header_Navigation, Header_Overview } from "./components";

export default function Main_PageLayout_Header() {
  const { t } = useTranslation("layout");

  return (
    <header aria-label={t("header.label")}>
      <Header_Actions />
      <Header_Overview />
      <Header_Navigation />
    </header>
  );
}
