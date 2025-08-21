import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <span className="text-xl font-bold text-foreground">Elevaze</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-muted hover:text-foreground transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-muted hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
          <a href="https://calendly.com/elevaze77" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </Button>
      </div>
    </header>
  )
}
