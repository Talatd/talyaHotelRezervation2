// types/hotel.ts

export interface HotelData {
  general: {
    name: string;
    defaultLanguage: string; // Değişti
  };
  hotelInfo: { // Değişti
    descriptions: {
      TR: string;
    };
    defaultImage: string; // Değişti
    amenities: string;
  };
  images: {
    imageUrl: string; // Değişti
    imageAlt: string; // Değişti
    isDefaultImage?: boolean; // Değişti
  }[];
  seoSocialMedia: { // Değişti
    seoTitle: string; // Değişti
    seoDescription: string; // Değişti
    phone: string;
    email: string;
  };
  hotelAddress: { // Değişti
    address: string;
  };
  footer: {
    logoUrl: string; // Değişti
  };
}