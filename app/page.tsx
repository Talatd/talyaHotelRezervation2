// app/page.tsx

import { hotelData } from "@/../hotel-data.json";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
 
  const generalInfo = hotelData.general;
  const hotelInfo = hotelData["hotel-info"];
  const images = hotelData.images;

  
  const galleryImages = images
    .filter(img => !img["image-default-image"])
    .slice(0, 5);

  return (
    
    <div className="flex flex-col items-center">
      {}
      <Hero
        hotelName={generalInfo.name}
        
        heroImage={images.find(img => img["image-default-image"])?.["image-url"] || images[0]?.["image-url"]}
      />

      {}
      <AboutSection
        
        description={hotelInfo.descriptions.TR}
        
        image={hotelInfo["default-image"]}
      />

      {}
      <AmenitiesSection 
        amenitiesString={hotelInfo.amenities}
      />

      {}
      <GallerySection images={galleryImages} />

    </div>
  );
}