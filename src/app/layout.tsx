import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClimaTech07 — Монтаж кондиционеров за 1 день",
  description:
    "Профессиональный монтаж кондиционеров, алмазное бурение и резка в Баксане. Бесплатная консультация. Перезвоним в течении дня.",
  keywords:
    "монтаж кондиционера, установка кондиционера, алмазное бурение, Баксан, КБР, сплит-система",
  openGraph: {
    title: "ClimaTech07 — Монтаж кондиционеров за 1 день",
    description:
      "Профессиональный монтаж кондиционеров и алмазное бурение. Быстро, чисто, с гарантией.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}
