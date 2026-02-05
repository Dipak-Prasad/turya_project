"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, Send, Clock } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Initialize emailjs with your public key
    emailjs.init("FUiP8B7B-s93Inwry")
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        subject: formData.subject,
        message: formData.message,
      }

      await emailjs.send(
        "service_abyji3h",
        "template_lttpd2e",
        templateParams
      )

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
              <span className="text-primary font-semibold text-sm">Let's Connect</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 text-balance">
              Get in Touch With Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? We're here to help. Reach out and let's start your wellness journey together.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Contact Info Cards */}
              <div className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                  <Phone className="text-primary" size={26} />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Phone</h3>
                <p className="text-muted-foreground font-medium">+91-62912 06580</p>
                <p className="text-sm text-muted-foreground mt-2">Availablity : Appointment Only</p>
              </div>

              <div className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                  <Mail className="text-primary" size={26} />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Email</h3>
                <p className="text-muted-foreground font-medium">turya.emotions@gmail.com</p>
                <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
              </div>

              <div className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                  <Clock className="text-primary" size={26} />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Hours</h3>
                <p className="text-muted-foreground font-medium">Monday - Sunday: Appointment Only</p>
                <p className="text-sm text-muted-foreground mt-2">IST (India Standard Time)</p>
              </div>
            </div>

            {/* Contact Form with Image */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
              {/* Form */}
              <div className="p-6 sm:p-10 bg-card border border-border rounded-xl shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">Send us a Message</h2>

                {submitted ? (
                  <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully to prasaddipak086@gmail.com. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Extra Action Buttons */}
<div className="grid grid-cols-2 gap-4 pt-4">
  <a
    href="https://shorturl.at/dFRWg" // registration form link
    target="_blank"
    rel="noopener noreferrer"
    className="w-full px-4 py-3 bg-accent text-accent-foreground rounded-lg font-medium text-center hover:bg-accent/90 transition-all text-sm sm:text-base"
  >
     Registration Form
  </a>

  <a
    href="https://pages.razorpay.com/turyawellness" // payment link
    target="_blank"
    rel="noopener noreferrer"
    className="w-full px-4 py-3 bg-green-600 text-white rounded-lg font-medium text-center hover:bg-green-700 transition-all text-sm sm:text-base"
  >
    Pay Online
  </a>
</div>


                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
                        <p className="text-red-600 font-medium">{error}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="therapy">Therapy Services</option>
                        <option value="appointment">Book Appointment</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 ${
                        loading
                          ? "bg-primary/70 text-primary-foreground cursor-not-allowed"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      {loading ? (
                        <>
                          <span className="inline-block animate-spin">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Image Section */}
              <div className="hidden md:block space-y-6">
                <div className="rounded-xl overflow-hidden shadow-xl border border-border">
                  <img
                    src="/professional-therapist-consultation-meeting.jpg"
                    alt="Professional consultation"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl">
                  <p className="text-foreground font-semibold mb-2">Available for Consultations</p>
                  <p className="text-sm text-muted-foreground">
                    Our experienced therapists are ready to provide compassionate care and support for your mental health journey. Book a free consultation today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-xl border border-border">
                <img
                  src="/peaceful-meditation-therapy-wellness.jpg"
                  alt="Peaceful wellness environment"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-accent/15 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">Why Choose Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Compassionate Care Awaits
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Turya Wellness, we believe that mental health is just as important as physical health. Our team of licensed therapists is dedicated to providing you with the support and guidance you need.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-0.5">✓</span>
                    <span className="text-foreground">Confidential and secure environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-0.5">✓</span>
                    <span className="text-foreground">Personalized treatment plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-0.5">✓</span>
                    <span className="text-foreground">Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-0.5">✓</span>
                    <span className="text-foreground">Evidence-based therapeutic techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

{/* Map Section */}
<section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
      Visit Us
    </h2>

    <div className="w-full h-[450px] rounded-lg overflow-hidden border border-border shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.980968068048!2d88.34719630000001!3d22.654498199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d799969aa85%3A0x789a67f8d3946903!2sTURYA%20WELLNESS%20COUNSELLING%20(%20BALLY%20)!5e0!3m2!1sen!2sin!4v1770114214537!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>

        {/* FAQ CTA */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-5 text-balance leading-tight text-white">
              Still Have Questions?
            </h2>
            <p className="text-lg text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed">
              Check out our frequently asked questions or book a free consultation with our experienced team.
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200">
              Book Free Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}