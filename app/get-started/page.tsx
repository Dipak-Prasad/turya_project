"use client"

import type React from "react"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CheckCircle, Clock, Shield, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GetStartedPage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
  }, [])



  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Premium Hero Section */}
        <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/15 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute top-1/3 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl mix-blend-multiply" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-semibold text-sm">Start Your Transformation Today</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight text-pretty">
              Your Path to <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Wellness</span> Starts Here
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect with experienced therapists and counselors. Book your personalized consultation in just a few clicks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Licensed Professionals</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-5 h-5 text-accent" />
                <span>Flexible Hours</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-accent" />
                <span>Completely Private</span>
              </div>
            </div>
          </div>
        </section>

            {/* Info Box */}
            <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-900 rounded-lg sm:rounded-xl">
              <h4 className="font-semibold text-sm sm:text-base text-foreground mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Payment Instructions
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Choose any payment method above that is convenient for you</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Complete your session booking details first, then proceed to payment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>After successful payment, your session will be confirmed via whatsapp</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>After payment send screenshort to this whatsapp number : +91-62912 06580</span>
                </li>
              </ul>
            </div>

        {/* Main Booking Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/5 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Benefits Sidebar - Premium Design */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  {/* Main Benefits Card */}
                  <div className="p-6 bg-gradient-to-br from-primary/8 via-card to-accent/5 rounded-2xl border border-primary/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">Why Choose Turya?</h3>
                    
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="text-primary w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">Expert Therapists</h4>
                          <p className="text-xs text-muted-foreground">Qualified & experienced</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="text-accent w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">Confidential</h4>
                          <p className="text-xs text-muted-foreground">100% private & secure</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="text-primary w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">Flexible Hours</h4>
                          <p className="text-xs text-muted-foreground">Book anytime</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="text-accent w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">Instant Booking</h4>
                          <p className="text-xs text-muted-foreground">Immediate confirmation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Widget - Premium Container */}
              <div className="lg:col-span-8">
                <div className="p-1 bg-gradient-to-br from-primary/30 via-accent/10 to-primary/20 rounded-2xl shadow-2xl">
                  <div className="p-6 bg-card rounded-2xl overflow-hidden">
                    <div className="mb-5">
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                        Schedule Your Session
                      </h2>
                      <p className="text-base text-muted-foreground">
                        Choose your preferred time slot
                      </p>
                    </div>
                    
                    {/* Calendly Embed */}
                    <div className="calendly-inline-widget overflow-hidden" data-url="https://calendly.com/turya/schedule" style={{ height: "500px", overflow: "hidden" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

        {/* Premium Payment Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/3 to-background relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Secure Payment Options</h2>
              <p className="text-lg text-muted-foreground">Choose the payment method that works best for you</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* QR Code Payment - Premium Card */}
              <div className="group p-1 bg-gradient-to-br from-primary/25 to-accent/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="p-8 bg-card rounded-2xl space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
                        <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                        <span className="font-semibold text-primary">Quick & Easy</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">QR Code & UPI</h3>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-4 text-center font-medium">Scan with any payment app:</p>
                    <div className="bg-white dark:bg-foreground/10 p-4 rounded-lg inline-block mx-auto">
                      <Image
                        src="/qr_code.jpeg"
                        alt="Payment QR Code"
                        width={140}
                        height={140}
                        className="rounded border border-primary/20"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-3">Google Pay • PhonePe • PayTm </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">UPI ID</p>
                      <div className="flex items-center justify-between gap-3">
                        <code className="text-sm font-bold text-primary">6291206580@okbizaxis</code>
                        <button
                          onClick={() => navigator.clipboard.writeText("6291206580@okbizaxis")}
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-medium hover:bg-primary hover:text-white transition-all"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="p-4 bg-accent/5 rounded-xl border border-accent/20 hover:border-accent/40 transition-all">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Business Phone (Google Pay)</p>
                      <div className="flex items-center justify-between gap-3">
                        <code className="text-sm font-bold text-accent">6291206580</code>
                        <button
                          onClick={() => navigator.clipboard.writeText("+916291206580")}
                          className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-xs font-medium hover:bg-accent hover:text-white transition-all"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards & Digital Wallets */}
              <div className="group p-1 bg-gradient-to-br from-blue-500/25 to-blue-400/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="p-8 bg-card rounded-2xl space-y-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 rounded-full">
                          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">Secure</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Cards & Wallets</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">Credit • Debit • Net Banking • Digital Wallets</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>256-bit SSL encryption</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>PCI DSS compliant</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Instant confirmation</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://rzp.io/l/turyawellness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <span>Pay with Razorpay</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bank Transfer - Full Width */}
            <div className="group p-1 bg-gradient-to-br from-green-500/25 to-green-400/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="p-8 bg-card rounded-2xl">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-500/10 rounded-full">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">Direct Transfer</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Bank Transfer</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-900/50">
                    <p className="text-xs font-semibold text-foreground mb-2">ACCOUNT HOLDER</p>
                    <p className="text-lg font-bold text-foreground">Turya Wellness</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-900/50">
                    <p className="text-xs font-semibold text-foreground mb-2">BANK NAME</p>
                    <p className="text-lg font-bold text-foreground">Bandhan Bank</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-900/50">
                    <p className="text-xs font-semibold text-foreground mb-2">ACCOUNT NUMBER</p>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-base font-bold text-foreground">10210006446909</p>
                      <button
                        onClick={() => navigator.clipboard.writeText("10210006446909")}
                        className="px-2.5 py-1 bg-green-500 text-white rounded text-xs font-medium hover:bg-green-600 transition-all"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-900/50">
                    <p className="text-xs font-semibold text-foreground mb-2">IFSC CODE</p>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-base font-bold text-foreground">BDBL0001532</p>
                      <button
                        onClick={() => navigator.clipboard.writeText("BDBL0001532")}
                        className="px-2.5 py-1 bg-green-500 text-white rounded text-xs font-medium hover:bg-green-600 transition-all"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  )
}  
