// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-day-picker/style.css";
import { getStaticHotelData } from "@/lib/static-data"; // Yeni fonksiyonu import edin
import 

Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const hotelData = await getStaticHotelData();

  return {
    title: hotelData["seoSocialMedia"]["seoTitle"],
    description: hotelData["seoSocialMedia"]["seoDescription"],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hotelData = await getStaticHotelData();

  return (
    <html lang={hotelData.general.defaultLanguage.toLowerCase()}>
      <body className={inter.className}>
        <Navbar hotelName={hotelData.general.name} logoUrl={hotelData.footer.logoUrl} />
        {/* <main> etiketinde height veya overflow gibi kısıtlayıcı class'lar OLMAMALI */}
        <main className="bg-background text-foreground">
          {children}
        </main>
        <Footer hotelData={hotelData} />
      </body>
    </html>
  );
}