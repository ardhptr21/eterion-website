"use client"; // tells Next.js that this is an interactive component

import { useState } from "react";
import Image from "next/image";
import styles from "./LogoDisplay.module.css";

const logos = [
    {
        id: "primary-logo",
        name: "Primary Logo",
        src: "/images/Logo Primer.png",
    },
    {
        id: "secondary-logo",
        name: "Secondary Logo",
        src: "/images/Logo Secondary.png",
    },
    {
        id: "tertiary-logo",
        name: "Tertiary Logo",
        src: "/images/Logo Tersier.png",
    },
];

export default function LogoDisplay() {
    const [highlightedLogo, setHighlightedLogo] = useState("secondary-logo"); // using the secondary logo as default

    return (
        <>
            <h1 className="text-4xl font-nexa font-bold text-center mb-3">
                Logo
            </h1>
            <div className={styles.container}>
                {logos.map((logo) => (
                    <div
                        key={logo.id}
                        className={styles.logoWrapper}
                        onClick={() => setHighlightedLogo(logo.id)} // click to highlight
                    >
                        <Image
                            src={logo.src}
                            alt={`${logo.name}`}
                            width={100}
                            height={100}
                            // the 'highlighted' style conditionally
                            className={`${styles.logoImage} ${
                                highlightedLogo === logo.id
                                    ? styles.highlighted
                                    : ""
                            }`}
                        />
                        {highlightedLogo === logo.id && (
                            <p
                                className={`${styles.logoName} font-nexa text-xl font-bold`}
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
