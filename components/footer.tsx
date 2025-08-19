export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold">Elevaze</span>
          </div>
          <p className="text-background/80 leading-relaxed max-w-md mx-auto">
            Transforming businesses with intelligent AI automation solutions.
          </p>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2025 Elevaze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
