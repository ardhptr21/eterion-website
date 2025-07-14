"use client";

import Image from "next/image";
import { useState } from "react";

const logos = [
  {
    id: "secondary-logo",
    name: "Secondary Logo",
    src: "/images/logo-secondary.png",
  },
  {
    id: "primary-logo",
    name: "Primary Logo",
    src: "/images/logo-primer.png",
  },
  {
    id: "tertiary-logo",
    name: "Tertiary Logo",
    src: "/images/logo-tersier.png",
  },
];

export default function LogoDisplay() {
  const [highlightedLogo, setHighlightedLogo] = useState("primary-logo");

  return (
    <section className="px-5 sm:px-10 mb-20">
      <h1 className="text-3xl sm:text-4xl font-nexa font-bold text-center mb-10 md:mb-20">Logo</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-y-12 sm:gap-x-20 p-8 sm:min-h-[400px]">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex flex-col items-center cursor-pointer text-center"
            onClick={() => setHighlightedLogo(logo.id)}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={100}
              className={`transition-transform duration-700 ease-in-out ${
                highlightedLogo === logo.id
                  ? "scale-150 sm:scale-[2.5] opacity-100"
                  : "scale-100 sm:scale-125 opacity-60"
              }`}
            />
            {highlightedLogo === logo.id && (
              <p className="mt-6 sm:mt-24 text-white animate-fadeIn font-nexa text-lg sm:text-xl font-bold">
                {logo.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
