import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Brain, Zap, Database, Lock, Sparkles, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Speaks Like Your Best Employee",
    description:
      "Trained on your business, handles complex questions naturally, and never sounds robotic. Customers can't tell it's AI.",
    gradient: "from-primary to-secondary",
    metrics: "Human-Like",
  },
  {
    icon: Target,
    title: "Books Appointments Live On Call",
    description:
      "Checks your calendar, finds the perfect slot, books the appointment, and sends confirmation—all while the customer is still talking.",
    gradient: "from-secondary to-accent",
    metrics: "Live Booking",
  },
  {
    icon: TrendingUp,
    title: "Updates Your CRM Instantly",
    description:
      "Captures every detail, creates customer profiles, logs call notes, and updates your system before the call even ends.",
    gradient: "from-accent to-primary",
    metrics: "Auto-Updated",
  },
  {
    icon: Zap,
    title: "Answers 24/7, Never Sleeps",
    description:
      "Picks up every call in 2 rings, handles multiple calls simultaneously, and never takes a sick day or vacation.",
    gradient: "from-primary to-accent",
    metrics: "Always On",
  },
  {
    icon: Database,
    title: "Handles Complex Requests",
    description:
      "Reschedules appointments, processes cancellations, takes payments, and handles insurance questions—all seamlessly.",
    gradient: "from-secondary to-primary",
    metrics: "Full Service",
  },
  {
    icon: Lock,
    title: "Sends Confirmations Automatically",
    description:
      "Emails appointment details, sends reminders, and follows up with customers—all without you lifting a finger.",
    gradient: "from-accent to-secondary",
    metrics: "Auto-Follow Up",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-green-50 via-background to-green-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center rounded-full glass-effect px-6 py-3 text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/20">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="text-foreground">What It Actually Does</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
            Super Trained AI Receptionist{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Never Gets Tired
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Get a super trained AI receptionist that handles calls with expert-level capabilities, works 24/7 without
            breaks, and serves your customers around the clock:
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 bg-card shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 rounded-3xl overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="p-8 relative">
                <div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <div className="absolute top-6 right-6 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                  {feature.metrics}
                </div>

                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-8 pb-8 relative">
                <CardDescription className="text-muted-foreground leading-relaxed text-base mb-4">
                  {feature.description}
                </CardDescription>

                <div className="flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
