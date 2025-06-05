import { inter, nexa } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eterion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${nexa.variable} ${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
