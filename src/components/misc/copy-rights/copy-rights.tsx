import { routes } from "@/routes";
import { Trans } from "react-i18next";
import { Link } from "react-router";

export default function CopyRights() {
  return (
    <p className="text-muted-foreground text-center">
      <Trans i18nKey="layout:footer.copyrights" components={[<Link to={routes.home} className="text-accent hover:underline" />]} />
    </p>
  );
}
