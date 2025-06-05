import localFont from "next/font/local";
import { Inter } from "next/font/google";

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
