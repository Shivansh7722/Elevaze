"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, CheckCircle, Phone, Calendar, Users, Shield } from "lucide-react"

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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8 shadow-sm hover:shadow-md transition-all duration-300">
              <Phone className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Free Discovery Call Available
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground mb-3 sm:mb-4 px-4 sm:px-0">
              Ready to Stop Losing Customers to <span className="text-red-600">Missed Calls?</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Book a free 15-minute discovery call to see exactly how our AI Receptionist can capture every lead and
              transform your customer booking process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <Card className="border-0 bg-white shadow-2xl animate-in fade-in slide-in-from-left-6 duration-1000 delay-300 hover:shadow-3xl transition-all duration-700 rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                  Book Your Free Discovery Call
                </CardTitle>
                <CardDescription className="text-green-100 text-sm sm:text-base mt-2 sm:mt-3">
                  In just 15 minutes, we'll show you exactly how many customers you're losing to missed calls and
                  demonstrate our AI Receptionist live.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-semibold text-sm">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 border-2 border-border rounded-xl h-11 sm:h-12 transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/20 hover:border-muted text-base"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-semibold text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 border-2 border-border rounded-xl h-11 sm:h-12 transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/20 hover:border-muted text-base"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-foreground font-semibold text-sm">
                      Practice/Business Name
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-2 border-2 border-border rounded-xl h-11 sm:h-12 transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/20 hover:border-muted text-base"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="businessType" className="text-foreground font-semibold text-sm">
                        Business Type
                      </Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                        <SelectTrigger className="mt-2 border-2 border-border rounded-xl h-11 sm:h-12 transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/20 hover:border-muted">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dental">Dental Practice</SelectItem>
                          <SelectItem value="orthodontics">Orthodontics</SelectItem>
                          <SelectItem value="medical">Medical Practice</SelectItem>
                          <SelectItem value="veterinary">Veterinary Clinic</SelectItem>
                          <SelectItem value="legal">Legal Services</SelectItem>
                          <SelectItem value="accounting">Accounting Firm</SelectItem>
                          <SelectItem value="realestate">Real Estate</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other Service Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground font-semibold text-sm">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2 border-2 border-border rounded-xl h-11 sm:h-12 transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/20 hover:border-muted text-base"
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground py-4 sm:py-6 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 rounded-xl"
                    asChild
                  >
                    <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
                      <span className="sm:hidden">Book Free Call</span>
                      <span className="hidden sm:inline">Book Free Discovery Call</span>
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>

                  <div className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 flex items-center justify-center">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Usually scheduled within 2 hours
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-right-6 duration-1000 delay-500">
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  What You'll Get in Your Discovery Call
                </h3>

                <div className="grid gap-4 mb-8">
                  <div className="group flex items-center p-3 rounded-2xl bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground font-semibold text-base">Live AI Receptionist Demo</span>
                  </div>

                  <div className="group flex items-center p-3 rounded-2xl bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground font-semibold text-base">Missed Call Analysis</span>
                  </div>

                  <div className="group flex items-center p-3 rounded-2xl bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                    <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground font-semibold text-base">Custom Implementation Plan</span>
                  </div>

                  <div className="group flex items-center p-3 rounded-2xl bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground font-semibold text-base">ROI Calculation</span>
                  </div>

                  <div className="group flex items-center p-3 rounded-2xl bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground font-semibold text-base">HIPAA Compliance Review</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl sm:rounded-3xl p-6 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 -translate-x-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 translate-x-16"></div>

                <div className="text-center relative z-10">
                  <div className="text-xl font-bold mb-3">Your AI Receptionist Never Sleeps</div>
                  <div className="text-green-100 text-base leading-relaxed">
                    While you focus on your customers, our AI handles every call, books every appointment, and captures
                    every lead. 24/7.
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
