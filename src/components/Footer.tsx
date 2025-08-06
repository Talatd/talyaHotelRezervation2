// components/Footer.tsx

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { HotelData } from "@/types/hotel"; // Tipi import edin

interface FooterProps {
  hotelData: HotelData;
}

export default function Footer({ hotelData }: FooterProps) {
  const contact = hotelData.seoSocialMedia;
  const address = hotelData.hotelAddress;
  const general = hotelData.general;

  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      {/*... Footer içeriği ...*/}
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg">{general.name}</h3>
          <p className="mt-2 text-sm text-secondary-foreground/80">
            En lüks deneyim ve kaliteli hizmetin markası.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Hızlı Erişim</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/odalar" className="text-sm hover:underline">Odalar</Link></li>
            <li><Link href="/galeri" className="text-sm hover:underline">Galeri</Link></li>
            <li><Link href="/iletisim" className="text-sm hover:underline">İletişim</Link></li>
            <li><Link href="/hakkimizda" className="text-sm hover:underline">Hakkımızda</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Bize Ulaşın</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{address.address}</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
            </li>
          </ul>
        </div>
        <div>
           {/* JSON'daki sosyal medya verilerine göre doldurulabilir. */}
        </div>
      </div>
      <div className="w-full bg-background/10 py-4">
        <div className="container text-center text-sm text-secondary-foreground/60">
          © {new Date().getFullYear()} {general.name}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}