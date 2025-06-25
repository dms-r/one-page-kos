import Image from "next/image";
import { data } from "@/lib/data";

export function PhotoGallery() {
  return (
    <section id="gallery" className="bg-secondary py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight">{data.gallery.title}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{data.gallery.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.gallery.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
