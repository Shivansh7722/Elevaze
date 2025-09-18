import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Briefcase, Wrench, Scissors, Car, Home } from "lucide-react"

const industries = [
  {
    icon: Stethoscope,
    title: "Medical & Dental",
    description: "Handle appointment scheduling, insurance questions, and patient inquiries",
  },
  {
    icon: Briefcase,
    title: "Legal Services",
    description: "Schedule consultations, screen potential clients, manage case inquiries",
  },
  {
    icon: Wrench,
    title: "Home Services",
    description: "Book service calls, provide quotes, schedule maintenance appointments",
  },
  {
    icon: Scissors,
    title: "Beauty & Wellness",
    description: "Manage salon bookings, handle cancellations, upsell services",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Schedule repairs, book test drives, handle service appointments",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Schedule showings, qualify leads, manage property inquiries",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Perfect For Any Service Business
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our AI receptionist adapts to your industry and speaks your language
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl hover:scale-[1.02]"
            >
              <CardHeader className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">{industry.title}</CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
