import Container from "@/components/commons/Container";
import About from "./(container)/About";
import Faces from "./(container)/Faces";
import Hero from "./(container)/Hero";
import Story from "./(container)/Story";

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
