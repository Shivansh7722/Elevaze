import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left fade-in">
              <div className="inline-flex items-center rounded-full bg-card border px-6 py-2 text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 pulse-glow" />
                <span className="text-foreground">Super trained AI receptionist</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Super trained AI
                </span>{" "}
                that{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  handles your calls
                </span>{" "}
                like a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  super human
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                While your receptionists are busy, customers call competitors who answer immediately.
              </p>

              <div className="mt-8 flex items-center justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium rounded-lg"
                  asChild
                >
                  <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
                    See It In Action
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative fade-in">
              <div className="phone-mockup p-8 max-w-sm mx-auto">
                {/* Phone header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Incoming Call</div>
                      <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full pulse-glow" />
                </div>

                {/* Call interface */}
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">Appointment Booked</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Dr. Smith - Dental Cleaning</div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Thursday, 2:00 PM</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm text-primary font-medium">Call Duration: 1:23</div>
                    <div className="text-xs text-muted-foreground mt-1">Customer satisfied • Appointment confirmed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
