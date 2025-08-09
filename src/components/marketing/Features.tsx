import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarRange, Users, Building2, CreditCard } from "lucide-react";

const features = [
  {
    title: "Automated Booking",
    description: "Smart availability checks prevent conflicts and shorten booking time.",
    Icon: CalendarRange,
  },
  {
    title: "Guest Management",
    description: "Invite lists, RSVPs, seating, and check-in — streamlined and synced.",
    Icon: Users,
  },
  {
    title: "Venue & Vendors",
    description: "Manage venues, catering, and partners with real-time coordination.",
    Icon: Building2,
  },
  {
    title: "Secure Payments",
    description: "Integrated, secure payments with clear reporting and refunds.",
    Icon: CreditCard,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Powerful, modular features</h2>
          <p className="mt-3 text-muted-foreground">Everything you need to plan conferences, weddings, concerts, and more.</p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, Icon }) => (
            <Card
              key={title}
              className="transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                  <Icon className="text-primary" />
                </div>
                <CardTitle className="mt-3 text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
