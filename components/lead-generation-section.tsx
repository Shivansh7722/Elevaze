"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, CheckCircle } from "lucide-react"

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
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <CheckCircle className="mr-2 h-4 w-4" />
              Free Strategy Session Available
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Book your free strategy call to discover how AI receptionists can improve your customer experience and
              streamline your operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="border-border bg-background shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Claim Your Free Strategy Call</CardTitle>
                <CardDescription className="text-muted">
                  In 30 minutes, we'll analyze your current phone system and show you exactly how much revenue you're
                  losing. Plus, get a custom AI receptionist strategy for your business.
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
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    Secure My Strategy Call Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="text-center text-sm text-muted mt-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Call typically scheduled within 24 hours
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-primary/20 shadow-2xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Complete AI Receptionist System</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-foreground font-medium">Custom AI Training & Voice Setup</span>
                    </div>
                    <span className="font-bold text-gray-600">$3,500</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-foreground font-medium">Calendar Integration & Booking System</span>
                    </div>
                    <span className="font-bold text-gray-600">$2,000</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-foreground font-medium">CRM Integration & Lead Management</span>
                    </div>
                    <span className="font-bold text-gray-600">$1,500</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-foreground font-medium">24/7 Monitoring & Support (3 months)</span>
                    </div>
                    <span className="font-bold text-gray-600">$1,000</span>
                  </div>

                  <div className="border-t-2 border-primary/30 pt-4 mt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-foreground">Total Value:</span>
                      <span className="text-xl font-bold text-gray-500 line-through">$8,000</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 text-center border-2 border-primary/30">
                    <div className="text-lg font-bold text-primary mb-2">Your Investment Today:</div>
                    <div className="text-5xl font-black text-foreground mb-2">$2,997</div>
                    <div className="text-lg font-bold text-green-600 mb-2">Save $5,003 This Month</div>
                    <div className="text-sm text-muted font-medium">August Special Pricing</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-700 mb-2">🚀 Ready to Get Started?</div>
                  <div className="text-blue-800 font-bold mb-3">Professional AI Receptionist Setup</div>
                  <div className="text-blue-700 mb-4">
                    We provide comprehensive setup and training to ensure your AI receptionist delivers exceptional
                    service from day one.
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    Book your strategy call to learn more about our process
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
