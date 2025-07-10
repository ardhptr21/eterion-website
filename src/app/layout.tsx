import { inter, nexa, cormorant, cormorantUnicase, montserrat } from "@/lib/font";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Layout from "@/components/layouts/Layout";

export const metadata: Metadata = {
  title: "Eterion",
  description: "Lasting forever, and beyond to the future.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  themeColor: "#0e0d1b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${nexa.variable} ${inter.variable} ${cormorant.variable} ${cormorantUnicase.variable} ${montserrat.variable} font-inter antialiased text-foreground bg-dark min-h-screen overflow-x-hidden`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
