"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, CheckCircle, Sparkles, Zap, Shield } from "lucide-react"

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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 mb-8 shadow-sm hover:shadow-md transition-all duration-300">
              <Sparkles className="mr-2 h-4 w-4" />
              Free Strategy Session Available
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Book your free strategy call to discover how AI receptionists can improve your customer experience and
              streamline your operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="border-0 bg-white shadow-2xl animate-in fade-in slide-in-from-left-6 duration-1000 delay-300 hover:shadow-3xl transition-all duration-700 rounded-3xl overflow-hidden">
              <CardHeader
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6"
                style={{ backgroundColor: "#2563eb" }}
              >
                <CardTitle className="text-2xl font-bold text-white">Claim Your Free Strategy Call</CardTitle>
                <CardDescription className="text-blue-100 text-base mt-3" style={{ color: "#dbeafe" }}>
                  In 30 minutes, we'll analyze your current phone system and show you exactly how much revenue you're
                  losing. Plus, get a custom AI receptionist strategy for your business.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-semibold text-sm">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 border-2 border-gray-200 rounded-xl h-12 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-semibold text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 border-2 border-gray-200 rounded-xl h-12 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-700 font-semibold text-sm">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-2 border-2 border-gray-200 rounded-xl h-12 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="businessType" className="text-gray-700 font-semibold text-sm">
                        Business Type
                      </Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                        <SelectTrigger className="mt-2 border-2 border-gray-200 rounded-xl h-12 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300">
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
                      <Label htmlFor="phone" className="text-gray-700 font-semibold text-sm">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2 border-2 border-gray-200 rounded-xl h-12 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 rounded-xl"
                    asChild
                  >
                    <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
                      Secure My Strategy Call Now
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>

                  <div className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Call typically scheduled within 24 hours
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-in fade-in slide-in-from-right-6 duration-1000 delay-500">
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 overflow-hidden">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl animate-pulse">
                    MOST POPULAR
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center mt-4">
                  Complete AI Receptionist System
                </h3>

                <div className="grid gap-4 mb-8">
                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-base">AI Setup & Training</span>
                    </div>
                    <span className="font-bold text-gray-600 text-lg">$4,000</span>
                  </div>

                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-base">Calendar & Booking Integration</span>
                    </div>
                    <span className="font-bold text-gray-600 text-lg">$3,500</span>
                  </div>

                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-base">3 Months Support & Monitoring</span>
                    </div>
                    <span className="font-bold text-gray-600 text-lg">$2,500</span>
                  </div>
                </div>

                <div className="border-t-2 border-gray-200 pt-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-gray-900">Total Value:</span>
                    <span className="text-xl font-bold text-gray-400 line-through">$10,000</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 text-center border-2 border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl">
                  <div className="text-base font-semibold text-blue-700 mb-2">Your Investment Today:</div>
                  <div className="text-5xl font-black text-gray-900 mb-3">$4,997</div>
                  <div className="text-lg font-bold text-green-600 mb-2">Save $5,003 This Month</div>
                  <div className="text-sm text-gray-600 font-medium">Limited Time Special Pricing</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 -translate-x-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 translate-x-16"></div>

                <div className="text-center relative z-10">
                  <div className="text-xl font-bold mb-2">🚀 Ready to Get Started?</div>
                  <div className="text-lg font-semibold mb-3">Professional AI Receptionist Setup</div>
                  <div className="text-blue-100 mb-4 text-base leading-relaxed">
                    We provide comprehensive setup and training to ensure your AI receptionist delivers exceptional
                    service from day one.
                  </div>
                  <div className="text-sm text-blue-200 font-medium">
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
