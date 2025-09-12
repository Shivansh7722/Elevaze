import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Users, Calendar, MessageSquare, Clock, TrendingUp, Sparkles } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "24/7 Professional Answering",
    description: "Never miss a call again. Your AI receptionist answers every call professionally, day or night.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Calendar,
    title: "Instant Appointment Booking",
    description:
      "Automatically books appointments, handles rescheduling, and sends confirmations - no manual work required.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Smart Lead Qualification",
    description: "Asks the right questions and routes qualified prospects directly to you for maximum conversion.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Instant Customer Support",
    description: "Handles common questions and provides information about your services immediately.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "Higher Conversion Rates",
    description: "Professional follow-ups and consistent communication that turns more prospects into customers.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Works 24/7 without breaks, ensuring consistent service quality for every caller.",
    gradient: "from-indigo-500 to-purple-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Sparkles className="mr-2 h-4 w-4" />
            Complete AI Solution
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Complete AI{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Receptionist Solution
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Transform your customer service with AI that handles calls, books appointments, and converts prospects -
            just like your best human staff.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-3xl overflow-hidden group"
            >
              <CardHeader className="p-8">
                <div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
