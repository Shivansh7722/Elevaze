import { Phone, MessageSquare, Calendar, Clock, Users, CheckCircle, Sparkles } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Speaks Like Human",
    description: "Customers can't tell it's AI",
    gradient: "from-blue-500 to-purple-500",
    stat: "100%",
    statLabel: "Human-Like",
  },
  {
    icon: Calendar,
    title: "Books Live On Call",
    description: "Checks calendar & books instantly",
    gradient: "from-green-500 to-teal-500",
    stat: "2 sec",
    statLabel: "Booking Time",
  },
  {
    icon: CheckCircle,
    title: "Updates CRM",
    description: "Captures details automatically",
    gradient: "from-orange-500 to-red-500",
    stat: "Auto",
    statLabel: "Data Entry",
  },
  {
    icon: Clock,
    title: "Never Sleeps",
    description: "Answers 24/7 in 2 rings",
    gradient: "from-yellow-500 to-orange-500",
    stat: "24/7",
    statLabel: "Always On",
  },
  {
    icon: Users,
    title: "Handles Everything",
    description: "Reschedules, payments, insurance",
    gradient: "from-purple-500 to-pink-500",
    stat: "All",
    statLabel: "Requests",
  },
  {
    icon: MessageSquare,
    title: "Auto Follow-Up",
    description: "Sends confirmations & reminders",
    gradient: "from-teal-500 to-blue-500",
    stat: "Auto",
    statLabel: "Follow Up",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium mb-6 shadow-sm border border-slate-200">
            <Sparkles className="mr-2 h-4 w-4 text-blue-500" />
            <span className="text-slate-700">What It Actually Does</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Super Trained AI Receptionist Never Gets Tired
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Handles calls with expert-level capabilities, works 24/7 without breaks
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-slate-100"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>

              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
