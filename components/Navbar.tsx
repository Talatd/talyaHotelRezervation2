// components/Navbar.tsx

import Link from "next/link";
import { Button } from "./ui/button";

interface NavbarProps {
  hotelName: string;
  logoUrl: string;
}

export default function Navbar({ hotelName, logoUrl }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {logoUrl ? (
              <img src={logoUrl} alt={`${hotelName} Logo`} className="h-8 w-auto" />
            ) : (
              <span className="font-bold">{hotelName}</span>
            )}
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/odalar" className="transition-colors hover:text-foreground/80 text-foreground/60">Odalar</Link>
            <Link href="/galeri" className="transition-colors hover:text-foreground/80 text-foreground/60">Galeri</Link>
            <Link href="/iletisim" className="transition-colors hover:text-foreground/80 text-foreground/60">İletişim</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <Button>Rezervasyon Yap</Button>
        </div>
      </div>
    </header>
  );
}