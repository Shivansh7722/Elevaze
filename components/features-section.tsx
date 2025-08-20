import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Users, Calendar, MessageSquare, Clock, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "24/7 Professional Call Handling",
    description:
      "Our AI receptionists answer every call with perfect professionalism, ensuring your customers always reach a helpful voice, day or night.",
  },
  {
    icon: Calendar,
    title: "Automatic Appointment Booking",
    description:
      "Seamlessly integrate with your calendar to book appointments instantly, handle rescheduling, and send confirmations without any manual work.",
  },
  {
    icon: Users,
    title: "Intelligent Lead Qualification",
    description:
      "Smart conversation flows that ask the right questions, qualify prospects effectively, and route high-value leads directly to you.",
  },
  {
    icon: MessageSquare,
    title: "Instant Customer Support",
    description:
      "Handle common questions, provide information about your services, and resolve simple issues immediately - keeping customers satisfied.",
  },
  {
    icon: TrendingUp,
    title: "Improved Conversion Rates",
    description:
      "Professional follow-up sequences, appointment reminders, and consistent communication that turns more prospects into customers.",
  },
  {
    icon: Clock,
    title: "Always Available Service",
    description:
      "Your AI receptionist works around the clock, never takes breaks, and ensures consistent service quality for every caller.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Complete AI Receptionist Solution
          </h2>
          <p className="mt-4 text-lg text-muted">
            Transform your customer service with AI receptionists that handle calls, book appointments, and manage
            customer interactions with the same care and professionalism as your best human staff.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-background hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
