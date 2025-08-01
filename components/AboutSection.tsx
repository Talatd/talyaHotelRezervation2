// components/AboutSection.tsx

import Image from "next/image"; // Next.js'in optimize edilmiş resim bileşeni

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
}```

#### 4. AmenitiesSection Bileşeni

**Dosya:** `components/AmenitiesSection.tsx`

**Neden?** Otelin sunduğu hizmetleri (havuz, wifi, spa vb.) ikonlarla birlikte, kolayca anlaşılır bir şekilde listeler.

**Kod:**
```tsx
// components/AmenitiesSection.tsx

import { Wifi, SwimmingPool, ParkingSquare, Utensils, VenetianMask, Dumbbell } from 'lucide-react';

// JSON'daki ikon isimlerini, `lucide-react` kütüphanesindeki gerçek ikon bileşenleriyle eşleştiriyoruz.
const iconMap: { [key: string]: React.ElementType } = {
  'ha-Wi-FiInternetConnection': Wifi,
  'ha-SwimmingPool': SwimmingPool,
  'ha-SpaWellnesscenter': VenetianMask,
  'ha-Restaurant': Utensils,
  'ha-RentalCar': ParkingSquare,
  'ha-FitnessCenter': Dumbbell
};

interface AmenitiesProps {
  amenitiesString: string;
}

export default function AmenitiesSection({ amenitiesString }: AmenitiesProps) {
  // JSON'daki string veriyi JavaScript dizisine dönüştürüyoruz.
  const amenities = JSON.parse(amenitiesString);

  // Ana sayfada çok kalabalık olmaması için sadece ikonunu bildiğimiz ve öne çıkan 6 hizmeti filtreleyelim.
  const featuredAmenities = amenities.filter((amenity: any) => iconMap[amenity['amenity-icon']]).slice(0, 6);

  return (
    <section className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Otel Olanakları</h2>
        <p className="mt-2 text-muted-foreground">Konforunuz için sunduğumuz ayrıcalıklar.</p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {featuredAmenities.map((amenity: any, index: number) => {
            const IconComponent = iconMap[amenity['amenity-icon']];
            return (
              <div key={index} className="flex flex-col items-center gap-4 p-4 rounded-lg transition-all hover:bg-background">
                <IconComponent className="h-10 w-10 text-primary" strokeWidth={1.5} />
                <span className="font-medium text-center text-foreground text-sm">
                  {amenity['amenity-names']['TR']}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}