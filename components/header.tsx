import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2 group">
          <img
            src="/elevaze-logo.png"
            alt="Elevaze"
            className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-bold text-foreground">Elevaze</span>
        </div>

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
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          asChild
        >
          <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </Button>
      </div>
    </header>
  )
}
