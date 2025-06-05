import Container from "@/components/commons/Container";
import Starfield from "@/components/effects/Starship";
import Image from "next/image";

export default function Home() {
  return (
    <Container
      as="main"
      className="bg-gradient-to-b from-dark from-40% to-primary h-screen flex items-center justify-center"
    >
      <Starfield
        starCount={2000}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />
      <div className="flex flex-col text-center md:text-left md:flex-row justify-center items-center gap-10 z-50">
        <Image
          src="/images/logo-eterion.png"
          alt="Eterion Logo"
          width={478}
          height={443}
          className="w-52"
        />
        <div className="space-y-2">
          <h1 className="text-6xl font-nexa font-bold uppercase tracking-wider -ml-1 bg-gradient-to-r from-secondary to-accent inline-block text-transparent bg-clip-text text-shadow-lg/10">
            Eterion
          </h1>
          <p className="max-w-xl text-white/75 tracking-wide text-xl">
            Lasting forever, and beyond to the future.
          </p>
        </div>
      </div>
    </Container>
  );
}
