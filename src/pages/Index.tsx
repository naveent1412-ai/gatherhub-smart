import Hero from "@/components/marketing/Hero";
import Features from "@/components/marketing/Features";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main>
        <Features />
        <section id="cta" className="py-10 pb-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-lg md:text-xl text-muted-foreground">Ready to reduce planning time and prevent scheduling conflicts?</p>
            <div className="mt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#get-started">Start for Free</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GatherHub Smart. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
