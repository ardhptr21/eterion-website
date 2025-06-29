import ComingSoon from "@/components/commons/ComingSoon";
import Container from "@/components/commons/Container";
import Hero from "./(container)/Hero";
import Story from "./(container)/Story";
import About from "./(container)/About";
import Faces from "./(container)/Faces";

export default function Home() {
  return (
    <Container as="main">
      <Hero />
      <About />
      <Faces />
      <Story />
    </Container>
  );
}
