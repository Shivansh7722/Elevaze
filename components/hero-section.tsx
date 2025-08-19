import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Transform Your Business with <span className="text-primary">AI Automation</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            AI receptionists and assistants that handle calls, qualify leads, and book appointments automatically. Never
            miss another opportunity while you focus on growing your business.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Book Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-8 text-sm text-muted">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-6 w-6 rounded-full bg-primary/20 border-2 border-background" />
                ))}
              </div>
              <span>★★★★★ 4.9 rating</span>
            </div>

            <div className="flex items-center space-x-2">
              <span>🚀 500+ businesses served</span>
            </div>

            <div className="flex items-center space-x-2">
              <span>⚡ 24/7 AI receptionists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
