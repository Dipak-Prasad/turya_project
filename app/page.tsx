import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import WhyChoose from "@/components/why-choose"
import MeetTeam from "@/components/meet-team"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <MeetTeam />
      <Testimonials />
      <CTA />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6291206580"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
      </a>
    </main>
  )
}
