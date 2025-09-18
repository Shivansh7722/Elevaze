import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="inline-flex items-center rounded-full bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
          >
            <Zap className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" />
            <span className="text-white">AI-Powered Solution</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 leading-tight">
            Never Miss Another{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Customer Call
            </span>{" "}
            Again
          </h1>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 px-4 sm:px-0">
            Our AI receptionists handle calls 24/7, book appointments automatically, and ensure every customer gets the
            attention they deserve - even when you're busy or after hours.
          </p>

          <div className="mt-8 sm:mt-10 flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 rounded-xl w-full sm:w-auto"
              asChild
            >
              <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
                <span className="sm:hidden">Get Free Strategy Call</span>
                <span className="hidden sm:inline">Claim Your Free Strategy Call</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 px-4 sm:px-0">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-semibold">24/7 Availability</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-semibold">Instant Response</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-semibold">Secure & Reliable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
