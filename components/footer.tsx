export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <img src="/elevaze-logo.png" alt="Elevaze" className="h-8 w-auto" />
            <span className="text-xl font-bold text-foreground">Elevaze</span>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
            Transforming businesses with intelligent AI automation solutions.
          </p>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Elevaze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
