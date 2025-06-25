
"use client";

import * as React from "react";
import { data } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home } from "lucide-react";

export function LandingHeader() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsSheetOpen(false); // Close sheet on mobile after click
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Home className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold font-headline">{data.appName}</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-1">
            {data.navigation.navItems.map((item) => (
              <Button key={item.id} variant="ghost" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </Button>
            ))}
            <Button onClick={() => scrollToSection('contact')} className="bg-accent text-accent-foreground hover:bg-accent/90 ml-2">
              {data.navigation.ctaButton}
            </Button>
          </nav>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 pt-8">
                  {data.navigation.navItems.map((item) => (
                    <Button key={item.id} variant="ghost" onClick={() => scrollToSection(item.id)}>
                      {item.label}
                    </Button>
                  ))}
                  <Button onClick={() => scrollToSection('contact')} className="bg-accent text-accent-foreground hover:bg-accent/90">
                    {data.navigation.ctaButton}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
