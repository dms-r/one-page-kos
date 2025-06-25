import { data } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section id="location" className="bg-secondary py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight">{data.map.title}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{data.map.description}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 h-96 md:h-[500px] overflow-hidden rounded-xl shadow-lg">
            <iframe
              src={data.map.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="font-headline">{data.map.address}</CardTitle>
              <CardDescription>Proximity to key locations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.map.locations.map(location => (
                <div key={location.name} className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-accent"/>
                  <div>
                    <p className="font-semibold">{location.name}</p>
                    <p className="text-sm text-muted-foreground">{location.distance}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
