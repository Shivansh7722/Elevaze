import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Award, TrendingUp } from "lucide-react"

export function TrustBuildingSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Problem Agitation */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            While You're Busy, Your <span className="text-red-600">Customers Call Your Competitors</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            When your receptionists are busy, customers get voicemail. They hang up and call your competitor who answers
            immediately.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">67%</div>
                <div className="text-sm text-red-700">of customers call competitors after one missed call</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">5 Min</div>
                <div className="text-sm text-red-700">before they call your competitor</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">$2,400</div>
                <div className="text-sm text-red-700">average customer lifetime value lost</div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Benefits */}
        <div className="mx-auto max-w-6xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              What If You <span className="text-primary">Never Missed Another Call?</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Our AI receptionist answers every call, books every appointment, captures every opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              "Answer every call instantly, even when you're with customers",
              "Book appointments directly into your calendar during the call",
              "Handle after-hours calls when competitors can't",
              "Never lose customers to busy signals or voicemail",
              "Capture every lead while you focus on service delivery",
              "Work 24/7 without breaks, sick days, or vacations",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mx-auto max-w-5xl mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Never Miss Calls",
                description: "Answers in 2 rings, books appointments instantly",
                color: "text-primary",
              },
              {
                icon: Shield,
                title: "Always Available",
                description: "24/7 coverage including weekends and holidays",
                color: "text-secondary",
              },
              {
                icon: Award,
                title: "Super Trained",
                description: "Handles scheduling, cancellations, and customer questions",
                color: "text-accent",
              },
            ].map((indicator, index) => (
              <Card
                key={index}
                className="border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center`}
                  >
                    <indicator.icon className={`h-8 w-8 ${indicator.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{indicator.title}</h4>
                  <p className="text-muted-foreground">{indicator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Never Miss Another Customer</h3>
              <p className="text-lg text-muted-foreground">Real results from businesses using our AI receptionist</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "100%", label: "Calls Answered", description: "Never miss another call" },
                { number: "2 Rings", label: "Response Time", description: "Instant pickup" },
                { number: "24/7", label: "Availability", description: "Always working" },
                { number: "0%", label: "Missed Bookings", description: "Capture every opportunity" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
