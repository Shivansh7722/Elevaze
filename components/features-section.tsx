import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Users, Calendar, MessageSquare, Clock, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "24/7 Professional Answering",
    description: "Never miss a call again. Your AI receptionist answers every call professionally, day or night.",
  },
  {
    icon: Calendar,
    title: "Instant Appointment Booking",
    description:
      "Automatically books appointments, handles rescheduling, and sends confirmations - no manual work required.",
  },
  {
    icon: Users,
    title: "Smart Lead Qualification",
    description: "Asks the right questions and routes qualified prospects directly to you for maximum conversion.",
  },
  {
    icon: MessageSquare,
    title: "Instant Customer Support",
    description: "Handles common questions and provides information about your services immediately.",
  },
  {
    icon: TrendingUp,
    title: "Higher Conversion Rates",
    description: "Professional follow-ups and consistent communication that turns more prospects into customers.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Works 24/7 without breaks, ensuring consistent service quality for every caller.",
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
            Transform your customer service with AI that handles calls, books appointments, and converts prospects -
            just like your best human staff.
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
