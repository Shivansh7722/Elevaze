"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2 group">
          <img
            src="/elevaze-logo.png"
            alt="Elevaze"
            className="h-6 w-auto sm:h-8 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg sm:text-xl font-bold text-foreground">Elevaze</span>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted hover:text-foreground transition-all duration-300 hover:scale-105">
            Features
          </a>
          <a
            href="#testimonials"
            className="text-muted hover:text-foreground transition-all duration-300 hover:scale-105"
          >
            Testimonials
          </a>
          <a href="#contact" className="text-muted hover:text-foreground transition-all duration-300 hover:scale-105">
            Contact
          </a>
        </nav>

        <Button
          className="hidden md:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          asChild
        >
          <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white mt-4 w-full py-3 text-lg"
              asChild
            >
              <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
