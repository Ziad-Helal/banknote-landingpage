import { Container } from "@/components/sections";
import { Categories, Offers } from "./components";

export default function Hero() {
  return (
    <section className="bg-secondary py-16">
      <Container className="space-y-16">
        <Offers />
        <Categories />
      </Container>
    </section>
  );
}
