// types/hotel.ts

export interface HotelData {
  general: {
    name: string;
    "default-language": string;
  };
  "hotel-info": {
    descriptions: {
      TR: string;
    };
    "default-image": string;
    amenities: string;
  };
  images: {
    "image-url": string;
    "image-alt": string;
    "image-default-image"?: boolean;
  }[];
  "seo-social-media": {
    "seo-title": string;
    "seo-description": string;
    phone: string;
    email: string;
  };
  "hotel-address": {
    address: string;
  };
  footer: {
    "logo-url": string;
  };
}