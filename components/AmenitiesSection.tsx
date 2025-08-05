// components/AmenitiesSection.tsx

import { Wifi, SwimmingPool, ParkingSquare, Utensils, VenetianMask, Dumbbell } from 'lucide-react';

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
  const amenities = JSON.parse(amenitiesString);

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