import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-5 text-balance leading-tight text-white">
          Ready for a Fresh Start?
        </h2>
        <p className="text-lg text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed">
          Begin your mental health journey today with a consultation from our experienced therapists.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold flex items-center justify-center gap-2"
          >
            Start Consultation <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 rounded-lg transition-all font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
