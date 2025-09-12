import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
          >
            <CheckCircle className="mr-2 h-4 w-4 text-white" />
            <span className="text-white">Trusted by 100+ Businesses</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Never Miss Another{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Customer Call
            </span>{" "}
            Again
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            Our AI receptionists handle calls 24/7, book appointments automatically, and ensure every customer gets the
            attention they deserve - even when you're busy or after hours.
          </p>

          <div className="mt-10 flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 rounded-xl"
              asChild
            >
              <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
                Claim Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 border-2 border-white transition-all duration-300 hover:scale-110"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">★★★★★ 4.9/5 (127 reviews)</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🚀</span>
                </div>
                <span className="text-gray-700 font-semibold">98% appointment booking rate</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⚡</span>
                </div>
                <span className="text-gray-700 font-semibold">24/7 instant response time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
