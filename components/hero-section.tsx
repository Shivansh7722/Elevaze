import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <CheckCircle className="mr-2 h-4 w-4" />
            Trusted by 100+ Businesses
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Never Miss Another <span className="text-primary">Customer Call</span> Again
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Our AI receptionists handle calls 24/7, book appointments automatically, and ensure every customer gets the
            attention they deserve - even when you're busy or after hours.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
                Claim Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-8 text-sm text-muted">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-6 w-6 rounded-full bg-primary/20 border-2 border-background" />
                ))}
              </div>
              <span>★★★★★ 4.9/5 (127 reviews)</span>
            </div>

            <div className="flex items-center space-x-2">
              <span>🚀 98% appointment booking rate</span>
            </div>

            <div className="flex items-center space-x-2">
              <span>⚡ 24/7 instant response time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
