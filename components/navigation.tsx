"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 md:gap-3">
            <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/turya-logo.png"
                alt="Turya Wellness Logo"
                width={48}
                height={48}
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
              <div className="hidden sm:block">
                <p className="text-sm md:text-xl font-display font-bold text-primary">Turya Wellness</p>
                <p className="text-xs text-accent font-semibold">attuned emotions</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="/blog" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Contact
            </Link>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-lg hover:bg-accent/20 transition-all duration-300 text-foreground hover:text-accent"
                aria-label="Toggle theme"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            <Link
              href="/get-started"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/85 transition-all font-medium text-sm hover:shadow-lg hover:shadow-primary/30"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-1">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-accent/20 transition-all duration-300 text-foreground hover:text-accent"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border/30 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              className="block text-foreground hover:text-accent hover:bg-primary/10 text-sm py-3 px-3 rounded-lg font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-foreground hover:text-accent hover:bg-primary/10 text-sm py-3 px-3 rounded-lg font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="block text-foreground hover:text-accent hover:bg-primary/10 text-sm py-3 px-3 rounded-lg font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-accent hover:bg-primary/10 text-sm py-3 px-3 rounded-lg font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/get-started"
              className="block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/85 transition-all text-sm font-medium text-center w-full"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
