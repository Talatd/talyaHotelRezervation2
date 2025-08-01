// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { hotelData } from "@/../hotel-data.json"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: hotelData["seo-social-media"]["seo-title"],
  description: hotelData["seo-social-media"]["seo-description"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={hotelData.general["default-language"].toLowerCase()}>
      <body className={inter.className}>
        {}
        <Navbar />

        {}
        <main className="bg-background text-foreground">
          {children}
        </main>

        {}
        <Footer />
      </body>
    </html>
  );
}