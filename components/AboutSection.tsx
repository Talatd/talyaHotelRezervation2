// components/AboutSection.tsx

import Image from "next/image"; // Next.js'in optimize edilmiş resim bileşeni
import { Button } from "./ui/button"; // shadcn/ui'dan Button bileşeni

interface AboutProps {
  description: string;
  image: string;
}

export default function AboutSection({ description, image }: AboutProps) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Sol Taraf: Resim */}
        <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden">
          <Image
            src={image}
            alt="Otel Hakkında"
            layout="fill"
            objectFit="cover" // Resmi kırparak alanı doldurur
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
        {/* Sağ Taraf: Yazı */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Hakkımızda
          </h2>
          {/*
            JSON'daki veri HTML içerdiği için bu şekilde kullanıyoruz.
            UYARI: Bu yöntemi sadece güvendiğiniz bir kaynaktan gelen veri için kullanın.
            Bizim durumumuzda kendi JSON dosyamız olduğu için güvenlidir.
          */}
          <div
            className="mt-4 text-muted-foreground space-y-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Button className="mt-6 w-fit">Daha Fazla Bilgi</Button>
        </div>
      </div>
    </section>
  );
}