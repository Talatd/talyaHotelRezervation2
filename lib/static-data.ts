// lib/static-data.ts

import fs from 'fs/promises';
import path from 'path';
import { HotelData } from "@/types/hotel"; // Yeni tipi import edin

export async function getStaticHotelData(): Promise<HotelData> {
  const filePath = path.join(process.cwd(), 'hotel-data.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContents);
}