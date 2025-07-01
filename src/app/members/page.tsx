import Container from "@/components/commons/Container";
import Buttton from "@/components/ui/Button";
import Template from "./(container)/lists/Template";

export default function Members() {
  return (
    <main>
      <Container as="section" className="my-32 space-y-12">
        <h1 className="text-6xl font-nexa font-bold">Faces of Eterion</h1>
        <p className="text-3xl font-nexa">Meet the people behind Eterion!</p>
      </Container>
      <Container as="section" className="my-32 relative flex items-start gap-10">
        <div className="w-1/6 space-y-5 sticky top-10">
          <Buttton className="w-full">001 - 030</Buttton>
          <Buttton className="w-full">031 - 060</Buttton>
          <Buttton className="w-full">061 - 090</Buttton>
          <Buttton className="w-full">091 - 120</Buttton>
        </div>
        <div className="w-5/6 grid grid-cols-3 gap-5">
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
        </div>
      </Container>
    </main>
  );
}
