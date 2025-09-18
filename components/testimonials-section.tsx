import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Our AI receptionist handles all our appointment bookings flawlessly. We've reduced no-shows by 35% and our front desk staff can focus on customer care.",
    author: "Dr. Amanda Foster",
    title: "Owner, Boston Aesthetic Center",
  },
  {
    quote:
      "The 24/7 availability is a game-changer. Clients book appointments at midnight, and we wake up to a full schedule. It's like having the perfect receptionist who never sleeps.",
    author: "Maria Gonzalez",
    title: "Manager, Manhattan Med Spa",
  },
  {
    quote:
      "Our conversion rate from calls to bookings increased by 60%. The AI handles objections better than most humans and never forgets to follow up.",
    author: "James Mitchell",
    title: "Director, Chicago Wellness Clinic",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by growing businesses
          </h2>
          <p className="mt-4 text-lg text-muted">
            See how companies like yours are transforming their operations with AI automation.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <blockquote className="text-foreground leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="mt-6">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted">{testimonial.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
