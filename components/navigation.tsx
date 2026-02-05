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

  // Prevent background scroll when mobile menu is open
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
    <nav
      className="
        fixed top-0 w-full z-50
        bg-background/90 backdrop-blur-md
        border-b border-border/50
        animate-in fade-in slide-in-from-top-2 duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/turya-logo.png"
              alt="Turya Wellness Logo"
              width={48}
              height={48}
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
            />
            <div className="hidden sm:block leading-tight">
              <p className="text-sm md:text-xl font-display font-bold text-primary">
                Turya Wellness
              </p>
              <p className="text-xs text-accent font-semibold">
                attuned emotions
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative text-sm font-medium text-foreground
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
                className="p-2.5 rounded-lg hover:bg-accent/20 transition-all hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            <Link
              href="/get-started"
              className="
                px-6 py-2.5 bg-primary text-primary-foreground
                rounded-lg text-sm font-medium
                hover:bg-primary/85 hover:shadow-lg hover:scale-105
                transition-all
              "
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-1">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-accent/20 transition-all active:scale-95"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Animated Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-lg transition-all active:scale-90"
              aria-label="Toggle menu"
            >
              <Menu
                size={22}
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "opacity-0 rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={22}
                className={`transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden
            transition-all duration-500 ease-out
            ${isOpen
              ? "max-h-[520px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"}
          `}
        >
          <div className="pt-4 pb-6 space-y-2 border-t border-border/30">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block w-full px-4 py-3 rounded-lg text-sm font-medium
                  transition-all duration-300
                  hover:bg-primary/10 hover:text-accent
                  active:scale-[0.97]
                  ${isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"}
                `}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className={`
                block w-full mt-3 px-6 py-3
                bg-primary text-primary-foreground
                rounded-lg text-sm font-medium text-center
                transition-all duration-300
                hover:bg-primary/85 active:scale-[0.97]
                ${isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"}
              `}
              style={{ transitionDelay: "360ms" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
