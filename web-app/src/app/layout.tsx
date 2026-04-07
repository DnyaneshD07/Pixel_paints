import type { Metadata } from "next";
import { Playfair_Display, Outfit } from 'next/font/google';
import "./globals.css";
import GlobalNav from '@/components/GlobalNav';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'], variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], weight: ['300', '400', '500', '700'], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Atelier Pigments | Premium Architectural Paint",
  description: "Discover premium architectural coatings designed to transform light, texture, and atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="font-body min-h-full flex flex-col bg-gradient-to-br from-[#1a0b2e] via-[#3d0b2f] to-[#120524] text-[#fdf0ed] selection:bg-[#df9588] selection:text-[#1a0b2e]">
        <GlobalNav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
