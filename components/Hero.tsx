// components/Hero.tsx

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Users } from "lucide-react";

// Bu bileşen, hangi otelin adını ve resmini göstereceğini "props" olarak dışarıdan alır.
interface HeroProps {
  hotelName: string;
  heroImage: string;
}

export default function Hero({ hotelName, heroImage }: HeroProps) {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Yazının okunabilirliği için karartma efekti */}
      <div className="relative z-10 text-center container">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          {hotelName}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Doğanın büyüleyici zarafeti eşliğinde lüks bir deneyim.
        </p>

        {/* Rezervasyon Formu - shadcn/ui bileşenleri ile şık bir görünüm */}
        <div className="mt-8 mx-auto max-w-4xl p-6 bg-background/80 backdrop-blur-sm rounded-lg shadow-2xl">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
             {/* Giriş Tarihi Seçimi */}
             <div className="flex flex-col items-start gap-2">
                <label className="font-semibold text-foreground">Giriş Tarihi</label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"outline"} className="w-full justify-start text-left font-normal text-foreground">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Tarih Seçin</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0"><Calendar mode="single" initialFocus /></PopoverContent>
                </Popover>
             </div>
             {/* Çıkış Tarihi Seçimi */}
             <div className="flex flex-col items-start gap-2">
                <label className="font-semibold text-foreground">Çıkış Tarihi</label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"outline"} className="w-full justify-start text-left font-normal text-foreground">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Tarih Seçin</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0"><Calendar mode="single" initialFocus /></PopoverContent>
                </Popover>
             </div>
             {/* Kişi Sayısı Seçimi */}
             <div className="flex flex-col items-start gap-2">
                <label className="font-semibold text-foreground">Kişi</label>
                <Button variant={"outline"} className="w-full justify-start text-left font-normal text-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    <span>2 Yetişkin</span>
                </Button>
             </div>
             {/* Arama Butonu */}
             <Button size="lg" className="w-full lg:h-[40px]">Oda Ara</Button>
           </div>
        </div>
      </div>
    </section>
  );
}