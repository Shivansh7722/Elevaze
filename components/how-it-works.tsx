import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageSquare, Calendar, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "Customer Calls",
    description: "Your AI receptionist picks up in 2 rings, every time",
    step: "01",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversation",
    description: "Speaks like your best employee, handles complex questions",
    step: "02",
  },
  {
    icon: Calendar,
    title: "Books Appointment",
    description: "Checks calendar, finds perfect slot, books instantly",
    step: "03",
  },
  {
    icon: CheckCircle,
    title: "Updates Everything",
    description: "Sends confirmations, updates CRM, logs call notes",
    step: "04",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your AI receptionist handles everything automatically
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">{step.step}</div>

              <CardHeader className="p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">{step.title}</CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <CardDescription className="text-muted-foreground leading-relaxed">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
