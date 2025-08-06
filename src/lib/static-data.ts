import { promises as fs } from "fs";
import path from "path";
import { HotelData } from "@/types/hotel";

interface Service {
    icon: string;
    title: string;
    description: string;
}

interface GalleryImage {
    "image-url": string;
    "image-alt": string;
}

export async function getStaticHotelData(): Promise<HotelData> {
    const filePath = path.join(process.cwd(), "hotel-data.json");
    const fileContents = await fs.readFile(filePath, "utf-8");
    const data: HotelData = JSON.parse(fileContents);
    return data;
}