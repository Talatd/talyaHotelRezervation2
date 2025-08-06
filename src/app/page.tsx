// app/page.tsx

import { getStaticHotelData } from "@/lib/static-data";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import { HotelData } from "@/types/hotel"; // Tipi import edin

export default async function Home() {
    const hotelData: HotelData = await getStaticHotelData();

    // Verileri daha okunabilir değişkenlere atayalım
    const generalInfo = hotelData.general;
    const hotelInfo = hotelData.hotelInfo;
    const images = hotelData.images;
    
    // Galeri için varsayılan olmayan ilk 5 resmi al
    const galleryImages = images
      .filter(img => !img.isDefaultImage)
      .slice(0, 5);

    // Hero için varsayılan resmi veya ilk resmi bul
    const heroImage =
        images.find(img => img.isDefaultImage)?.imageUrl || images[0]?.imageUrl;

    // About bölümü için resmi al
    const aboutImage = hotelInfo.defaultImage;

    // Amenities verisini al
    const amenitiesString = hotelInfo.amenities;

    // TR açıklamasını al
    const descriptionTR = hotelInfo.descriptions.TR;

    return (
        // Burası çok önemli: Tüm bileşenleri dikey olarak sıralayan bir ana div
        <div className="flex flex-col w-full">
            <Hero hotelName={generalInfo.name} heroImage={heroImage} />
            <AboutSection
                description={descriptionTR}
                image={aboutImage}
            />
            <AmenitiesSection
                amenitiesString={amenitiesString}
            />
            <GallerySection images={galleryImages} />
        </div>
    );
}