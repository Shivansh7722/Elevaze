import { TrendingUp, Clock, DollarSign, Phone } from "lucide-react"

export default function RevenueImpactSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            While Your Competitors Sleep,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              You're Making Money
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every missed call is lost revenue. Our AI works 24/7 so you never miss another opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Stat 1 */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">$20k</div>
            <p className="text-gray-600">Average monthly revenue increase from 24/7 availability</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">67%</div>
            <p className="text-gray-600">Of calls happen outside business hours</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">Hours your AI receptionist works while competitors are closed</p>
          </div>

          {/* Stat 4 */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
            <p className="text-gray-600">More appointments booked vs businesses without 24/7 coverage</p>
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
          <h3 className="text-xl font-bold text-center mb-6">Your Revenue Timeline vs Competitors</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 9 PM - Midnight */}
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800 mb-4">9 PM - 12 AM</div>
              <div className="space-y-3">
                <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                  <div className="text-red-600 font-medium">Competitors</div>
                  <div className="text-sm text-red-500">Closed • Calls go to voicemail</div>
                </div>
                <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                  <div className="text-green-600 font-medium">You</div>
                  <div className="text-sm text-green-600">Booking appointments • Handling emergencies</div>
                </div>
              </div>
            </div>

            {/* Midnight - 8 AM */}
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800 mb-4">12 AM - 8 AM</div>
              <div className="space-y-3">
                <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                  <div className="text-red-600 font-medium">Competitors</div>
                  <div className="text-sm text-red-500">Sleeping • Missing urgent calls</div>
                </div>
                <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                  <div className="text-green-600 font-medium">You</div>
                  <div className="text-sm text-green-600">Capturing night shift workers • Emergency bookings</div>
                </div>
              </div>
            </div>

            {/* Weekends */}
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800 mb-4">Weekends</div>
              <div className="space-y-3">
                <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                  <div className="text-red-600 font-medium">Competitors</div>
                  <div className="text-sm text-red-500">Closed • Losing weekend bookings</div>
                </div>
                <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                  <div className="text-green-600 font-medium">You</div>
                  <div className="text-sm text-green-600">Full weekend coverage • Maximum bookings</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold">
              <TrendingUp className="w-5 h-5" />
              Result: 3x more revenue than competitors
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
