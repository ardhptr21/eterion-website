import ComingSoon from "@/components/commons/ComingSoon";
import Container from "@/components/commons/Container";
import Hero from "./(container)/Hero";
import Story from "./(container)/Story";
import About from "./(container)/About";

export default function Home() {
  return (
    <Container as="main">
      {/* NOTE: Hapus coming soon kalau udah ngerjain salah satu section page */}
      {/* <ComingSoon /> */}

      {/* SECTION PAGE */}
      <Hero />
      <About />
      <Story />
    </Container>
  );
}
