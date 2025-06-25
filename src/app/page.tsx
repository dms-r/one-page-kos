import { LandingHeader } from "@/components/landing/landing-header";
import { KeyFeatures } from "@/components/landing/key-features";
import { PhotoGallery } from "@/components/landing/photo-gallery";
import { AmenitiesList } from "@/components/landing/amenities-list";
import { MapSection } from "@/components/landing/map-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";
import { data } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main className="flex-1">
        <section id="home" className="relative h-[60vh] md:h-[80vh] w-full text-white fade-in-load">
          <Image
            src={data.hero.imageUrl}
            alt={data.hero.imageAlt}
            fill
            className="object-cover"
            priority
            data-ai-hint="cozy living room"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">{data.hero.title}</h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-stone-200">{data.hero.subtitle}</p>
          </div>
        </section>

        <div className="fade-in-load" style={{ animationDelay: '0.2s' }}>
          <KeyFeatures />
          <PhotoGallery />
          <AmenitiesList />
          <MapSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
