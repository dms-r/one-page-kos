import { data } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>{data.footer.copyright}</p>
      </div>
    </footer>
  );
}
