import About from "./(container)/About";
import Faces from "./(container)/Faces";
import Hero from "./(container)/Hero";
import Story from "./(container)/Story";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Faces />
      <Story />
    </main>
  );
}
