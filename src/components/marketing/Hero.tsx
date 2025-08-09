import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <nav className="flex items-center justify-between py-6">
        <a href="#" className="font-extrabold tracking-tight text-lg">
          GatherHub <span className="text-primary">Smart</span>
        </a>
        <div className="hidden sm:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <a href="#features">Features</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#pricing">Pricing</a>
          </Button>
          <Button variant="hero">Get Started</Button>
        </div>
      </nav>

      <section className="relative pt-8 pb-4 md:pt-16 md:pb-10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/25 via-accent/20 to-transparent blur-3xl animate-float-soft" />
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Event Management System
              </span>
              {" "}
              for Seamless Planning
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground">
              Automate venue booking, conflict‑free scheduling, guest & catering workflows, and secure payments — all in one smart platform.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" variant="hero">Get Started</Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#demo" className="inline-flex items-center gap-2">
                  <Play className="size-4" /> Watch Demo
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-10 md:mt-14">
            <img
              src={heroImage}
              alt="Event Management System dashboard showing scheduling calendar, venue map, guest list, and payments charts"
              loading="lazy"
              className="mx-auto w-full max-w-5xl rounded-xl border border-border shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
