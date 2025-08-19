import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Users, Calendar, MessageSquare, Clock, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "24/7 AI Receptionists",
    description:
      "Our AI handles every call with natural conversation, answers customer questions, and never misses an opportunity.",
  },
  {
    icon: Calendar,
    title: "Automatic Appointment Booking",
    description:
      "AI schedules appointments directly into your calendar, handles rescheduling, and sends confirmations automatically.",
  },
  {
    icon: Users,
    title: "Lead Qualification & Follow-up",
    description: "Qualify prospects instantly and follow up with personalized messages to keep your pipeline full.",
  },
  {
    icon: MessageSquare,
    title: "Customer Support & Requests",
    description: "Handle customer inquiries, support requests, and provide instant responses to keep customers happy.",
  },
  {
    icon: TrendingUp,
    title: "Keep Your Calendar Full",
    description: "Our AI proactively books appointments, follows up with leads, and maximizes your booking rate.",
  },
  {
    icon: Clock,
    title: "Never Miss Another Call",
    description:
      "Round-the-clock availability means every call is answered, every lead is captured, and every opportunity is seized.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            AI Receptionists That Work Around The Clock
          </h2>
          <p className="mt-4 text-lg text-muted">
            Our AI receptionists handle calls, book appointments, and follow up with customers so you can focus on
            growing your business.
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
