"use client";

import { useState } from "react";
import Image from "next/image";

const logos = [
    {
        id: "primary-logo",
        name: "Primary Logo",
        src: "/images/logo-primer.png",
    },
    {
        id: "secondary-logo",
        name: "Secondary Logo",
        src: "/images/logo-secondary.png",
    },
    {
        id: "tertiary-logo",
        name: "Tertiary Logo",
        src: "/images/logo-tersier.png",
    },
];

export default function LogoDisplay() {
    const [highlightedLogo, setHighlightedLogo] = useState("secondary-logo"); // using the secondary logo as default

    return (
        <>
            <h1 className="text-4xl font-nexa font-bold text-center mb-3">
                Logo
            </h1>
            <div className="flex justify-center items-center gap-40 p-8 min-h-[400px] mb-8">
                {logos.map((logo) => (
                    <div
                        key={logo.id}
                        className="flex flex-col items-center cursor-pointer text-center"
                        onClick={() => setHighlightedLogo(logo.id)} // click to highlight
                    >
                        <Image
                            src={logo.src}
                            alt={`${logo.name}`}
                            width={100}
                            height={100}
                            // the 'highlighted' style conditionally
                            className={"scale-175 opacity-60 transition-transform duration-750 ease-in-out " + (highlightedLogo === logo.id ? "scale-[2.5] opacity-100 transition-transform duration-300 ease-in-out" : "")}
                        />
                        {highlightedLogo === logo.id && (
                            <p
                                className="mt-24 text-white animate-fadeIn font-nexa text-xl font-bold"
                            >
                                {logo.name}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
