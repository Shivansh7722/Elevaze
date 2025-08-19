"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export function LeadGenerationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    businessType: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to never miss another call?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Book a free discovery call to see how our AI receptionists can keep your calendar full and customers
              happy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="border-border bg-background">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Book Your Free Discovery Call</CardTitle>
                <CardDescription className="text-muted">
                  Let's discuss how our AI receptionists can handle your calls 24/7, book appointments, and follow up
                  with customers automatically.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-foreground">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessType" className="text-foreground">
                        Business Type
                      </Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="legal">Legal Services</SelectItem>
                          <SelectItem value="realestate">Real Estate</SelectItem>
                          <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg"
                  >
                    Schedule Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-foreground mb-4">What you'll get in your consultation:</h3>
              </div>

              <div className="space-y-4">
                {[
                  "Custom AI receptionist strategy for your business",
                  "See how we handle calls, bookings, and follow-ups",
                  "Live demo of our AI in action with your scenarios",
                  "Implementation plan tailored to your needs",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary mb-2">August Special Offer</div>
                  <div className="text-foreground font-semibold mb-3">Complete AI Receptionist Setup</div>

                  <div className="space-y-2 text-sm text-muted mb-4">
                    <div className="flex justify-between">
                      <span>Custom AI Voice Training:</span>
                      <span className="font-medium">$3,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Appointment Booking Integration:</span>
                      <span className="font-medium">$2,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>24/7 Call Handling Setup:</span>
                      <span className="font-medium">$1,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Follow-up Automation:</span>
                      <span className="font-medium">$1,000</span>
                    </div>
                    <div className="border-t pt-2 mt-3">
                      <div className="flex justify-between font-semibold">
                        <span>Total Value:</span>
                        <span className="line-through text-muted">$8,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-primary">Your Investment: $2,997</div>
                  <div className="text-sm text-muted mt-1">Only for businesses that book by August 31st</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
