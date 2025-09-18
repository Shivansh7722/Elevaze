import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-4xl border-0 bg-gradient-to-r from-primary to-secondary shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 sm:text-5xl">Never Miss Another Customer</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get your super trained AI receptionist working for you in 24 hours. Start capturing every lead and booking
              every appointment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl font-semibold bg-transparent"
              >
                See Demo
              </Button>
            </div>

            <p className="text-white/70 text-sm mt-6">No setup fees • 30-day money back guarantee • Cancel anytime</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
