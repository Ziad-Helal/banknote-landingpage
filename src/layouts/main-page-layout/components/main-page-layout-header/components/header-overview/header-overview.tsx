import { Logo } from "@/components/misc";
import { Container } from "@/components/sections";
import { Categories, GlobalSearch, QuickNavigation } from "./components";

export default function Header_Overview() {
  return (
    <Container as="section" className="flex flex-wrap gap-x-7 items-center max-sm:pb-3.5 max-lg:pb-4">
      <h1>
        <Logo />
      </h1>
      <div className="flex-1 flex gap-2">
        <Categories />
        <GlobalSearch className="flex-1" />
      </div>
      <QuickNavigation className="max-lg:w-full max-lg:[&>ul]:justify-center" />
    </Container>
  );
}
