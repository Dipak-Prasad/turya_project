"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Phone, Heart } from "lucide-react"
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

      setMessage("Successfully subscribed!")
      setMessageType("success")
      setEmail("")
      setTimeout(() => setMessage(""), 3000)
    } catch {
      setMessage("Failed to subscribe. Try again.")
      setMessageType("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Newsletter */}
      <div className="border-b border-white/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Connected
              </h3>
              <p className="text-accent-foreground/90 text-sm">
                Wellness tips and mental health insights delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-lg bg-white text-accent font-semibold hover:opacity-90 transition"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {message && (
                <p
                  className={`mt-2 text-sm ${
                    messageType === "success" ? "text-white" : "text-red-300"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Turya Wellness
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wide mb-4">
              Attune Your Emotions
            </p>
            <p className="text-sm text-accent-foreground/90 mb-6">
              Premium mental health counseling and therapy services focused on
              emotional well-being.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:turya.emotions@gmail.com"
                  className="text-sm hover:underline"
                >
                  turya.emotions@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span className="text-sm">Mon–Sun: Appointment Only</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/get-started">Get Started</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">Terms</Link></li>
              <li><Link href="#">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="flex items-center gap-2">
            © 2026 Turya Wellness
            <Heart size={14} fill="currentColor" />
          </p>

          <div className="flex gap-5 font-semibold">
            <a href="#">𝕏</a>
            <a href="#">f</a>
            <a href="#">IG</a>
            <a href="#">in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
