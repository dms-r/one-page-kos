import { data } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function KeyFeatures() {
  return (
    <section id="features" className="container py-12 md:py-24">
      <div className="grid gap-8 md:grid-cols-3">
        {data.keyFeatures.map((feature) => (
          <Card key={feature.title} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-headline">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">{feature.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
