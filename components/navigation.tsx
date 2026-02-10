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

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="
      fixed top-0 w-full z-50
      bg-background/95 backdrop-blur-md
      border-b border-border/50
      animate-in fade-in slide-in-from-top-2 duration-500
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-[72px] lg:h-[84px]">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/turya-logo.png"
              alt="Turya Wellness Logo"
              width={56}
              height={56}
              className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain"
            />
            <div className="hidden sm:block leading-tight">
              <p className="text-lg lg:text-2xl font-display font-bold text-primary">
                Turya Wellness
              </p>
              <p className="text-xs lg:text-sm text-accent font-semibold tracking-wide">
                attuned emotions
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative text-base font-medium text-foreground
                  hover:text-accent transition-colors
                  after:absolute after:-bottom-1 after:left-0
                  after:h-[2px] after:w-0 after:bg-accent
                  after:transition-all hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-3 rounded-xl hover:bg-accent/20 transition-all hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
              </button>
            )}

            <Link
              href="/get-started"
              className="
                px-7 py-3 bg-primary text-primary-foreground
                rounded-xl text-base font-semibold
                hover:bg-primary/90 hover:shadow-lg hover:scale-105
                transition-all
              "
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-xl hover:bg-accent/20 transition-all"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2.5 rounded-xl transition-all"
              aria-label="Toggle menu"
            >
              <Menu
                size={24}
                className={`absolute transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100"
                }`}
              />
              <X
                size={24}
                className={`transition-all duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden overflow-hidden
          transition-all duration-500 ease-out
          ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}>
          <div className="pt-4 pb-6 space-y-2 border-t border-border/30">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  block w-full px-5 py-4 rounded-xl
                  text-base font-medium
                  hover:bg-primary/10 hover:text-accent
                  transition-all
                "
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="
                block w-full mt-3 px-6 py-4
                bg-primary text-primary-foreground
                rounded-xl text-base font-semibold text-center
                hover:bg-primary/90 transition-all
              "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
