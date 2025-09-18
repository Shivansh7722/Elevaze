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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-blue-700 mb-6 sm:mb-8 shadow-sm hover:shadow-md transition-all duration-300">
              <Sparkles className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Free Strategy Session Available
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent px-4 sm:px-0">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Book your free strategy call to discover how AI receptionists can improve your customer experience and
              streamline your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <Card className="border-0 bg-white shadow-2xl animate-in fade-in slide-in-from-left-6 duration-1000 delay-300 hover:shadow-3xl transition-all duration-700 rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardHeader
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6"
                style={{ backgroundColor: "#2563eb" }}
              >
                <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                  Claim Your Free Strategy Call
                </CardTitle>
                <CardDescription
                  className="text-blue-100 text-sm sm:text-base mt-2 sm:mt-3"
                  style={{ color: "#dbeafe" }}
                >
                  In 30 minutes, we'll analyze your current phone system and show you exactly how much revenue you're
                  losing. Plus, get a custom AI receptionist strategy for your business.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-semibold text-sm">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 border-2 border-gray-200 rounded-xl h-11 sm:h-12 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300 text-base"
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
                        className="mt-2 border-2 border-gray-200 rounded-xl h-11 sm:h-12 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300 text-base"
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
                      className="mt-2 border-2 border-gray-200 rounded-xl h-11 sm:h-12 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300 text-base"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="businessType" className="text-gray-700 font-semibold text-sm">
                        Business Type
                      </Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                        <SelectTrigger className="mt-2 border-2 border-gray-200 rounded-xl h-11 sm:h-12 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300">
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
                        className="mt-2 border-2 border-gray-200 rounded-xl h-11 sm:h-12 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300 text-base"
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 sm:py-6 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 rounded-xl"
                    asChild
                  >
                    <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
                      <span className="sm:hidden">Book Strategy Call</span>
                      <span className="hidden sm:inline">Secure My Strategy Call Now</span>
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>

                  <div className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 flex items-center justify-center">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Call typically scheduled within 24 hours
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-right-6 duration-1000 delay-500">
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete AI Receptionist System</h3>

                <div className="grid gap-4 mb-8">
                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-base">AI Setup & Training</span>
                    </div>
                    <span className="font-bold text-gray-600 text-lg">$2,500</span>
                  </div>

                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-base">Calendar & Booking Integration</span>
                    </div>
                    <span className="font-bold text-gray-600 text-lg">$1,500</span>
                  </div>

                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-base">Custom Voice & Personality Training</span>
                    </div>
                    <span className="font-bold text-gray-600 text-lg">$1,200</span>
                  </div>

                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-base">CRM & Database Integration</span>
                    </div>
                    <span className="font-bold text-gray-600 text-lg">$2,000</span>
                  </div>

                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-base">24/7 Priority Support</span>
                    </div>
                    <span className="font-bold text-gray-600 text-lg">$1,800</span>
                  </div>

                  <div className="group flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-base">Advanced Analytics Dashboard</span>
                    </div>
                    <span className="font-bold text-gray-600 text-lg">$1,000</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border-2 border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl">
                  <div className="text-sm sm:text-base font-semibold text-blue-700 mb-2">Total Value:</div>

                  <div className="text-2xl sm:text-3xl font-black text-gray-400 line-through mb-2">$12,000</div>

                  <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Your Investment: $4,997
                    </span>
                  </div>

                  <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-blue-500">
                    <div className="text-sm font-bold text-gray-900 mb-2">💰 Save $7,003 Today</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>✓ Complete AI receptionist system</div>
                      <div>✓ Full setup and training included</div>
                      <div>✓ 24/7 support and maintenance</div>
                      <div>✓ Custom business integration</div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 font-medium">
                    Final pricing may vary based on business requirements
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 -translate-x-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 translate-x-16"></div>

                <div className="text-center relative z-10">
                  <div className="text-xl font-bold mb-2">🚀 Ready to Get Started?</div>
                  <div className="text-lg font-semibold mb-3">Professional AI Receptionist Setup</div>
                  <div className="text-blue-100 mb-4 text-base leading-relaxed">
                    We provide comprehensive setup and training tailored to your specific business requirements. Every
                    solution is customized based on your scale, industry, and unique needs.
                  </div>
                  <div className="text-sm text-blue-200 font-medium">
                    Book your strategy call to get your personalized quote
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
