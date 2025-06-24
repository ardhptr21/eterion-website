import { inter, nexa } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layouts/Layout";

export const metadata: Metadata = {
  title: "Eterion",
  description: "Lasting forever, and beyond to the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${nexa.variable} ${inter.variable} font-inter antialiased text-foreground bg-dark`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
