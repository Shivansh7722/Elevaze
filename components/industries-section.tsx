import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Sparkles, Wrench, Scissors, Heart, Users } from "lucide-react"

const industries = [
  {
    icon: Stethoscope,
    title: "Dental Practices",
    description:
      "Handle appointment scheduling, insurance verification, emergency calls, and patient follow-ups with HIPAA compliance",
  },
  {
    icon: Sparkles,
    title: "Med Spas & Aesthetics",
    description:
      "Book consultations, manage treatment schedules, handle pricing inquiries, and follow up on skincare routines",
  },
  {
    icon: Heart,
    title: "Healthcare & Wellness",
    description:
      "Schedule appointments, verify insurance, handle prescription refills, and manage patient communications",
  },
  {
    icon: Scissors,
    title: "Beauty & Salon Services",
    description: "Manage bookings, handle cancellations, upsell treatments, and coordinate with multiple stylists",
  },
  {
    icon: Users,
    title: "Therapy & Counseling",
    description:
      "Schedule sessions, handle sensitive inquiries, manage cancellations, and coordinate with insurance providers",
  },
  {
    icon: Wrench,
    title: "Professional Services",
    description:
      "Book consultations, screen potential clients, manage service appointments, and handle urgent requests",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Built For Dental & Service Businesses
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Specialized AI that understands appointment-based businesses and speaks your patients' language
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
