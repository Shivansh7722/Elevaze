"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

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
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden md:flex items-center space-x-8"></nav>

        <Button
          className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
          asChild
        >
          <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
            <Phone className="mr-2 h-4 w-4" />
            Free Call
          </a>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground mt-4 w-full py-3 text-lg"
              asChild
            >
              <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Free Call
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
