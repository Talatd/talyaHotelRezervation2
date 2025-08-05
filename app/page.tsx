// app/page.tsx

import { getStaticHotelData } from "@/lib/static-data";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import { HotelData } from "@/types/hotel"; // Tipi import edin

export default async function Home() {
    const hotelData: HotelData = await getStaticHotelData();

    const generalInfo = hotelData.general;
    const hotelInfo = hotelData["hotel-info"];
    const images = hotelData.images;
    
    const galleryImages = images
      .filter(img => !img["image-default-image"])
      .slice(0, 5);

    const heroImage =
        images.find(img => img["image-default-image"])?.["image-url"] || images[0]?.["image-url"];

    return (
        <div className="flex flex-col items-center">
            <Hero hotelName={generalInfo.name} heroImage={heroImage} />
            <AboutSection
                description={hotelInfo.descriptions.TR}
                image={hotelInfo["default-image"]}
            />
            <AmenitiesSection
                amenitiesString={hotelInfo.amenities}
            />
            <GallerySection images={galleryImages} />
        </div>
    );
}