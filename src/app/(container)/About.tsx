import Container from "@/components/commons/Container";
import Noise from "@/components/effects/Noise";
import React from "react";

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0L15.18 8.82L24 12L15.18 15.18L12 24L8.82 15.18L0 12L8.82 8.82L12 0Z" />
  </svg>
);

export default function About() {
  return (
    <section id="about">
      <Container className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="w-full">
        <h2 className="text-5xl font-bold text-white mb-8">About Us</h2>
        <div className="relative">
          <div className="bg-indigo-900/30 backdrop-blur-xl border border-white/10 rounded-3xl p-16 relative">
            <Noise />
            <p className="text-2xl leading-relaxed text-slate-200 mb-10">
              <strong className="font-semibold text-white">ETERION</strong> merupakan nama angkatan{" "}
              <strong className="font-semibold text-white">Teknologi Informasi 2024</strong> yang
              mengusung makna keteguhan abadi sebagai penunjuk arah dalam menghadapi perubahan
              zaman.
            </p>
            <p className="text-2xl leading-relaxed text-slate-200">
              Layaknya rasi bintang Orion yang bersinar abadi di langit malam dan menjadi panduan
              bagi para pelaut dan pengembara,{" "}
              <strong className="font-semibold text-white">Eterion</strong> hadir sebagai generasi
              pembaharu yang teguh, visioner, dan tak gentar menghadapi tantangan.
            </p>
          </div>

          <StarIcon
            className="
            absolute 
            -right-2 md:-right-5
            bottom-10 md:bottom-14
            w-6 h-6
            text-purple-300/80
            animate-twinkle
            hidden md:block
          "
          />
        </div>
        </div>
      </Container>
    </section>
  );
}
