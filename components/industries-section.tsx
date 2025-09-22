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
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Built For{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dental & Service
            </span>{" "}
            Businesses
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Specialized AI that understands appointment-based businesses and speaks your patients' language with
            precision and care
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/50 hover:bg-white/80 hover:border-blue-200/60 transition-all duration-500 hover:shadow-lg hover:shadow-blue-100/50"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="flex-1 pt-0.5">
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl text-center mt-10 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
          <p className="text-sm text-slate-700 leading-relaxed">
            No matter your industry, our AI adapts to your specific needs, terminology, and customer expectations to
            deliver a seamless experience that feels authentically <em>yours</em>.
          </p>
        </div>
      </div>
    </section>
  )
}
