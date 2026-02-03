"use client"

import React from "react"

import Link from "next/link"
import { Mail, Phone, Heart } from "lucide-react"
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  useEffect(() => {
    emailjs.init("FUiP8B7B-s93Inwry")
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setMessage("Please enter your email address")
      setMessageType("error")
      return
    }

    setLoading(true)
    setMessage("")

    try {
      await emailjs.send("service_abyji3h", "template_lttpd2e", {
        to_email: "prasaddipak086@gmail.com",
        from_email: email,
        subject: "New Newsletter Subscription",
        message: `New subscriber: ${email}`,
      })

      setMessage("Successfully subscribed to our newsletter!")
      setMessageType("success")
      setEmail("")
      setTimeout(() => setMessage(""), 3000)
    } catch (error) {
      console.error("Error subscribing:", error)
      setMessage("Failed to subscribe. Please try again.")
      setMessageType("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-accent text-accent-foreground py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Newsletter Section - Premium Style */}
        <div className="mb-16 md:mb-20 p-10 md:p-12 bg-gradient-to-r from-accent-foreground/15 to-accent-foreground/10 border border-accent-foreground/40 rounded-2xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-accent-foreground mb-2">Stay Connected</h3>
              <p className="text-accent-foreground/90">Get wellness tips, mental health insights, and support resources delivered to your inbox.</p>
            </div>
            <form onSubmit={handleSubscribe} className="w-full md:w-auto">
              <div className="flex flex-col gap-3">
                <div className="flex w-full gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-accent-foreground placeholder-accent-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/40 flex-1 md:flex-none transition-all disabled:opacity-70"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-white/20 text-accent-foreground font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 border border-white/20 hover:border-white/40 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
                {message && (
                  <p className={`text-sm font-medium ${messageType === "success" ? "text-white" : "text-red-200"}`}>
                    {message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-16 md:mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 pb-6 border-b border-accent-foreground/20">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Turya Wellness</h3>
              <p className="text-accent-foreground font-semibold text-sm uppercase tracking-wide">Attune Your Emotions</p>
            </div>
            <p className="text-accent-foreground/90 text-sm leading-relaxed mb-8 max-w-sm">
              Premium mental health counseling and therapy services dedicated to your well-being and personal growth. Your journey to emotional wellness starts here.
            </p>
            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/10 rounded-lg flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-accent-foreground/70 mb-1 font-semibold uppercase tracking-wide">Email</p>
                  <a href="mailto:turya.emotions@gmail.com" className="text-white hover:text-accent-foreground text-sm transition font-medium">
                    turya.emotions@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/10 rounded-lg flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-accent-foreground/70 mb-1 font-semibold uppercase tracking-wide">Hours</p>
                  <span className="text-white text-sm block">Mon-Sun: Appointment Only </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-sm uppercase tracking-wider font-bold">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="text-accent-foreground/85 hover:text-white transition duration-200 font-medium hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-accent-foreground/85 hover:text-white transition duration-200 font-medium hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-accent-foreground/85 hover:text-white transition duration-200 font-medium hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-accent-foreground/85 hover:text-white transition duration-200 font-medium hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-sm uppercase tracking-wider font-bold">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/get-started" className="text-accent-foreground/85 hover:text-white transition duration-200 font-medium hover:translate-x-1 inline-block">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="#" className="text-accent-foreground/85 hover:text-white transition duration-200 font-medium hover:translate-x-1 inline-block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-accent-foreground/85 hover:text-white transition duration-200 font-medium hover:translate-x-1 inline-block">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-sm uppercase tracking-wider font-bold">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="text-accent-foreground/85 hover:text-white transition duration-200 font-medium hover:translate-x-1 inline-block">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-accent-foreground/85 hover:text-white transition duration-200 font-medium hover:translate-x-1 inline-block">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-accent-foreground/85 hover:text-white transition duration-200 font-medium hover:translate-x-1 inline-block">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Premium Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10 md:mb-12" />

        {/* Footer Bottom - Premium */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
          <div className="flex items-center gap-2 order-2 md:order-1 text-accent-foreground/80">
            <p className="font-medium">&copy; 2026 Turya Wellness. All rights reserved.</p>
            <Heart size={14} className="text-white" fill="currentColor" />
          </div>
          <div className="flex gap-8 order-1 md:order-2">
            <a href="#" className="text-white/80 hover:text-white transition duration-300 font-semibold hover:scale-110" aria-label="Twitter">
              𝕏
            </a>
            <a href="#" className="text-white/80 hover:text-white transition duration-300 font-semibold hover:scale-110" aria-label="Facebook">
              f
            </a>
            <a href="#" className="text-white/80 hover:text-white transition duration-300 font-semibold hover:scale-110" aria-label="Instagram">
              IG
            </a>
            <a href="#" className="text-white/80 hover:text-white transition duration-300 font-semibold hover:scale-110" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
