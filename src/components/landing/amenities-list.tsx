import { data } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function AmenitiesList() {
  return (
    <section id="amenities" className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">{data.amenities.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{data.amenities.description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {data.amenities.items.map((item) => (
          <Badge key={item.text} variant="outline" className="text-lg py-2 px-4 border-primary/50 bg-primary/5">
            <item.icon className="h-5 w-5 mr-2 text-primary" />
            {item.text}
          </Badge>
        ))}
      </div>
    </section>
  );
}
