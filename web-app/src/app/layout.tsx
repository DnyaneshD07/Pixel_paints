import type { Metadata } from "next";
import { Newsreader, Manrope } from 'next/font/google';
import "./globals.css";
import GlobalNav from '@/components/GlobalNav';
import Footer from '@/components/Footer';

const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-newsreader" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Atelier Pigments",
  description: "Premium Architectural Paint Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-[#fafaf5] text-[#1a1c19] ${newsreader.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <GlobalNav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
