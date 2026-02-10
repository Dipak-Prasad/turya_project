"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CheckCircle, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "@emailjs/browser"

export default function GetStartedPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issueType: "",
    therapyBefore: "",
    preferredDate: "",
    preferredTime: "",
    agreeTerms: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Initialize emailjs with your public key
    emailjs.init("FUiP8B7B-s93Inwry")
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    
    try {
      // Send email using emailjs
      const templateParams = {
        to_email: "prasaddipak086@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        issue_type: formData.issueType,
        therapy_before: formData.therapyBefore,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
      }

      await emailjs.send(
        "service_abyji3h",
        "template_lttpd2e",
        templateParams
      )

      setSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("Failed to send booking request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.phone
      case 2:
        return formData.issueType
      case 3:
        return formData.preferredDate && formData.preferredTime
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mb-48 blur-3xl" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
              <span className="text-primary font-semibold text-sm">Your Wellness Awaits</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-balance">
              Start Your Wellness Journey
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book your consultation with our experienced therapists. Let's work together to achieve your mental health goals.
            </p>
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
                  <span>After payment send screenshort to this email address: turya.emotions@gmail.com</span>
                </li>
              </ul>
            </div>
       

        {/* Main Content */}
        <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {!submitted ? (
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Step Progress */}
                <div className="sm:col-span-1">
                  <div className="space-y-4">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          s === step
                            ? "border-primary bg-primary/5"
                            : s < step
                              ? "border-primary bg-primary/10"
                              : "border-border bg-card"
                        }`}
                        onClick={() => s < step && setStep(s)}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                              s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {s < step ? "✓" : s}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">
                              {s === 1 && "Personal Info"}
                              {s === 2 && "Your Concerns"}
                              {s === 3 && "Schedule"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="mt-8 sm:mt-12 space-y-4 p-6 sm:p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                    <h3 className="font-display font-bold text-foreground mb-4">Why Choose Us?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="text-primary" size={16} />
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">Licensed & Experienced Therapists</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Shield className="text-primary" size={16} />
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">100% Confidential & Secure</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Clock className="text-primary" size={16} />
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">Flexible Scheduling</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="text-primary" size={16} />
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">Affordable Sessions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="md:col-span-2">
                  <div className="p-6 sm:p-8 bg-card border border-border rounded-xl shadow-lg">
                    {error && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
                        <p className="text-red-600 font-medium">{error}</p>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      {/* Step 1: Personal Information */}
                      {step === 1 && (
                        <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                          <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">Personal Information</h2>

                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 2: Concerns */}
                      {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                          <h2 className="text-2xl font-display font-bold text-foreground">What brings you here?</h2>

                          <div>
                            <label htmlFor="issueType" className="block text-sm font-medium text-foreground mb-2">
                              Primary Concern *
                            </label>
                            <select
                              id="issueType"
                              name="issueType"
                              value={formData.issueType}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                            >
                              <option value="">Select your primary concern</option>
                              <option value="anxiety">Anxiety</option>
                              <option value="depression">Depression</option>
                              <option value="stress">Stress Management</option>
                              <option value="relationships">Relationship Issues</option>
                              <option value="trauma">Trauma & PTSD</option>
                              <option value="family">Family Counseling</option>
                              <option value="teens">Teen Support</option>
                              <option value="career">Career Counseling</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-3">
                              Have you been to therapy before?
                            </label>
                            <div className="space-y-2">
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input 
                                  type="radio" 
                                  name="therapyBefore" 
                                  value="yes" 
                                  checked={formData.therapyBefore === "yes"}
                                  onChange={handleChange}
                                  className="w-4 h-4" 
                                />
                                <span className="text-muted-foreground">Yes</span>
                              </label>
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input 
                                  type="radio" 
                                  name="therapyBefore" 
                                  value="no" 
                                  checked={formData.therapyBefore === "no"}
                                  onChange={handleChange}
                                  className="w-4 h-4" 
                                />
                                <span className="text-muted-foreground">No, first time</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Schedule */}
                      {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                          <h2 className="text-2xl font-display font-bold text-foreground">Schedule Your Session</h2>

                          <div>
                            <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-2">
                              Preferred Date *
                            </label>
                            <input
                              type="date"
                              id="preferredDate"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                            />
                          </div>

                          <div>
                            <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                              Preferred Time *
                            </label>
                            <select
                              id="preferredTime"
                              name="preferredTime"
                              value={formData.preferredTime}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                            >
                              <option value="">Select a time slot</option>
                              <option value="09:00">9:00 AM</option>
                              <option value="10:00">10:00 AM</option>
                              <option value="11:00">11:00 AM</option>
                              <option value="14:00">2:00 PM</option>
                              <option value="15:00">3:00 PM</option>
                              <option value="16:00">4:00 PM</option>
                              <option value="17:00">5:00 PM</option>
                              <option value="18:00">6:00 PM</option>
                            </select>
                          </div>

                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              name="agreeTerms"
                              checked={formData.agreeTerms}
                              onChange={handleChange}
                              required
                              className="w-4 h-4 mt-1"
                            />
                            <span className="text-sm text-muted-foreground">
                              I agree to the terms and conditions and understand that this is a confidential service.
                            </span>
                          </label>
                        </div>
                      )}

                      {/* Buttons */}
                      <div className="flex gap-4 pt-6">
                        {step > 1 && (
                          <button
                            type="button"
                            onClick={() => setStep(step - 1)}
                            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
                          >
                            Back
                          </button>
                        )}
                        {step < 3 ? (
                          <button
                            type="button"
                            onClick={() => isStepComplete() && setStep(step + 1)}
                            disabled={!isStepComplete()}
                            className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                              isStepComplete()
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "bg-muted text-muted-foreground cursor-not-allowed"
                            }`}
                          >
                            Continue
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={!formData.agreeTerms || loading}
                            className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                              formData.agreeTerms && !loading
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "bg-muted text-muted-foreground cursor-not-allowed"
                            }`}
                          >
                            {loading ? (
                              <>
                                <span className="inline-block animate-spin mr-2">⏳</span>
                                Booking...
                              </>
                            ) : (
                              "Book Session"
                            )}
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              /* Success Message */
              <div className="max-w-2xl mx-auto p-10 bg-primary/10 border border-primary/30 rounded-lg text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">Booking Confirmed!</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for booking your free consultation with Turya Wellness. Your booking details have been sent to prasaddipak086@gmail.com.
                </p>
                <div className="bg-white dark:bg-card p-6 rounded-lg mb-8 text-left border border-border">
                  <h3 className="font-bold text-foreground mb-4">Session Details:</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">Name:</span> {formData.name}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Date:</span> {formData.preferredDate}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Time:</span> {formData.preferredTime}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Look for our confirmation email at <span className="font-medium">{formData.email}</span>
                </p>
                <Link
                  href="/"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

             {/* Payment Section */}
        <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-accent/2 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">Payment Methods</h2>
              <p className="text-base sm:text-lg text-muted-foreground">Choose your preferred way to pay</p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 sm:mb-12">
              {/* QR Code and Direct Methods */}
              <div className="p-6 sm:p-8 md:p-10 bg-card border-2 border-primary/30 rounded-xl sm:rounded-2xl hover:border-primary hover:shadow-2xl transition-all">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  QR Code & UPI
                </h3>
                
                <div className="space-y-6">
                  {/* QR Code */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 sm:p-6 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 font-medium">Scan with any app:</p>
                      <p className="text-xs text-muted-foreground mb-2 sm:mb-3">Google Pay • PhonePe • PayTm</p>
                      <Image
                        src="/qr_code.jpeg"
                        alt="Payment QR Code"
                        width={180}
                        height={180}
                        className="mx-auto rounded-lg border-2 border-primary/20 w-44 sm:w-56"
                      />
                    </div>
                  </div>
                </div>

                {/* UPI Details */}
                <div className="space-y-3">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                    <p className="text-xs text-muted-foreground mb-2 font-medium">UPI ID</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <code className="text-xs sm:text-sm font-bold text-primary break-all">6291206580@okbizaxis</code>
                      <button
                        onClick={() => navigator.clipboard.writeText("6291206580@okbizaxis")}
                        className="px-3 py-1.5 bg-primary text-white rounded text-xs font-medium hover:bg-primary/90 transition-all whitespace-nowrap"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Business Phone (Google Pay)</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <code className="text-xs sm:text-sm font-bold text-accent">6291206580</code>
                      <button
                        onClick={() => navigator.clipboard.writeText("+916291206580")}
                        className="px-3 py-1.5 bg-accent text-white rounded text-xs font-medium hover:bg-accent/90 transition-all whitespace-nowrap"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Razorpay and Bank Transfer */}
            <div className="space-y-6 sm:space-y-8">
              {/* Razorpay */}
              <div className="p-6 sm:p-8 md:p-10 bg-card border-2 border-blue-500/30 rounded-xl sm:rounded-2xl hover:border-blue-500 hover:shadow-2xl transition-all">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Cards & Wallets</span>
                </h3>
                <p className="text-muted-foreground mb-5 sm:mb-6 text-xs sm:text-sm">Credit Card, Debit Card, Net Banking, or Wallet</p>
                <a
                  href="https://rzp.io/l/turyawellness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg transition-all"
                >
                  Pay via Razorpay
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Bank Transfer */}
              <div className="p-6 sm:p-8 md:p-10 bg-card border-2 border-green-500/30 rounded-xl sm:rounded-2xl hover:border-green-500 hover:shadow-2xl transition-all">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Bank Transfer
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                    <p className="text-xs font-semibold text-foreground mb-1">ACCOUNT HOLDER</p>
                    <p className="text-sm text-foreground font-medium">Turya Wellness</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                    <p className="text-xs font-semibold text-foreground mb-2">ACCOUNT NUMBER</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <p className="text-xs sm:text-sm text-foreground font-medium break-all">10210006446909</p>
                      <button
                        onClick={() => navigator.clipboard.writeText("10210006446909")}
                        className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-all whitespace-nowrap"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                    <p className="text-xs font-semibold text-foreground mb-2">IFSC CODE</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <p className="text-xs sm:text-sm text-foreground font-medium">BDBL0001532</p>
                      <button
                        onClick={() => navigator.clipboard.writeText("BDBL0001532")}
                        className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-all whitespace-nowrap"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                    <p className="text-xs font-semibold text-foreground mb-1">BANK NAME</p>
                    <p className="text-sm text-foreground font-medium">Bandhan Bank</p>
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
