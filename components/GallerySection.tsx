// components/GallerySection.tsx

import Image from "next/image";

interface ImageProps {
    "image-url": string;
    "image-alt": string;
}

interface GalleryProps {
    images: ImageProps[];
}

export default function GallerySection({ images }: GalleryProps) {
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <section className="w-full py-16 md:py-24">
            <div className="container text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary">
                    Otel Galerisi
                </h2>
                <p className="mt-2 text-muted-foreground">
                    Otelimizden göz alıcı kareler.
                </p>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative aspect-[4/3] rounded-lg overflow-hidden group"
                        >
                            <Image
                                src={img["image-url"]}
                                alt={img["image-alt"]}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}