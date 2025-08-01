// components/Footer.tsx

import { hotelData } from "@/../hotel-data.json";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const contact = hotelData["seo-social-media"];
  const address = hotelData["hotel-address"];
  const general = hotelData.general;

  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sütun 1: Otel Hakkında */}
        <div>
          <h3 className="font-bold text-lg">{general.name}</h3>
          <p className="mt-2 text-sm text-secondary-foreground/80">
            En lüks deneyim ve kaliteli hizmetin markası.
          </p>
        </div>
        {/* Sütun 2: Sayfalar */}
        <div>
          <h3 className="font-bold text-lg">Hızlı Erişim</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/odalar" className="text-sm hover:underline">Odalar</Link></li>
            <li><Link href="/galeri" className="text-sm hover:underline">Galeri</Link></li>
            <li><Link href="/iletisim" className="text-sm hover:underline">İletişim</Link></li>
            <li><Link href="/hakkimizda" className="text-sm hover:underline">Hakkımızda</Link></li>
          </ul>
        </div>
        {/* Sütun 3: İletişim */}
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
        {/* Sütun 4: Sosyal Medya (Eğer varsa) */}
        {/* Bu bölümü JSON'daki verilere göre doldurabilirsiniz */}
      </div>
      <div className="w-full bg-background/10 py-4">
        <div className="container text-center text-sm text-secondary-foreground/60">
          © {new Date().getFullYear()} {general.name}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}