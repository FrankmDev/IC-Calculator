import Header from "@/app/components/header/Header";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Calculadora de Interés Compuesto",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`relative text-_white ${leagueSpartan.className}`}>
        <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-_black"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
