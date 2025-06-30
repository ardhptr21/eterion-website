import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Cormorant, Cormorant_Unicase, Montserrat } from "next/font/google";

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  style: ["normal", "italic"]
});
export const cormorantUnicase = Cormorant_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-unicase",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  style: ["normal", "italic"]
});

export const nexa = localFont({
  src: [
    {
      path: "../fonts/nexa/nexa-heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/nexa/nexa-extralight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-nexa",
});


export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
