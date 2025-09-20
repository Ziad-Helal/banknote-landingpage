import { Container } from "@/components/sections";
import { CopyRights, ScrollToTop_Button } from "@/components/misc";
import { DownloadApp } from "./components";

export default function Footer_Bottom() {
  return (
    <Container className="max-w-329.5 py-6.5 font-semibold flex gap-4 max-lg:flex-col items-center justify-between" as="section">
      <CopyRights />
      <div className="flex gap-8 items-center">
        <DownloadApp />
        <ScrollToTop_Button />
      </div>
    </Container>
  );
}
