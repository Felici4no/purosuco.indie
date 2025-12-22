import type { Metadata } from "next";
import { Geist, Patrick_Hand } from "next/font/google"; // Geist is standard sans, Patrick Hand for the "sketch" look
import "./globals.css";
import { Header } from "@/components/layout/Header";

import { LoadingScreen } from "@/components/ui/LoadingScreen";

import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-patrick-hand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PuroSuco.Indie",
  description: "Games + Moda — feito no Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${patrickHand.variable} antialiased bg-white text-black font-sans`}
      >
        <LoadingScreen />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
