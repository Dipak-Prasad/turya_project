"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const heroSlides = [
  {
    title: "Your Mental Health Journey Matters",
    description:
      "Professional, compassionate counselling from certified therapists. Start your healing journey with personalized care from the comfort of your home.",
    image: "/peaceful-meditation-therapy-wellness.jpg",
  },
  {
    title: "Expert Therapists, Just for You",
    description:
      "Connect with experienced psychologists and counsellors who specialize in anxiety, depression, relationships, and personal growth.",
    image: "/professional-therapist-consultation-meeting.jpg",
  },
  {
    title: "Healing Starts with a Single Step",
    description:
      "Affordable, accessible therapy sessions tailored to your needs. Confidential, supportive, and proven to help you thrive.",
    image: "/wellness-journey-personal-growth-meditation.jpg",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoplay])

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative pt-16 sm:pt-24 md:pt-40 pb-8 sm:pb-16 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.45,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-background/50 to-background" />
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/8 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-accent mb-4 md:mb-6 text-balance min-h-auto md:min-h-20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 leading-tight">
          {slide.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-foreground mb-6 md:mb-12 max-w-2xl mx-auto text-balance leading-relaxed transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
          {slide.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
          <Link
            href="/get-started"
            className="px-6 sm:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium flex items-center justify-center gap-2 text-sm sm:text-base hover:shadow-xl hover:scale-105 transform duration-200"
          >
            Book Consultation <ArrowRight size={18} className="hidden sm:block" />
          </Link>
          <Link
            href="#how-it-works"
            className="px-6 sm:px-8 py-3 md:py-4 border-2 border-accent text-accent hover:bg-accent/10 rounded-lg transition-all font-medium text-sm sm:text-base hover:scale-105 transform duration-200"
          >
            How It Works
          </Link>
        </div>

        <div className="flex justify-center items-center gap-2 md:gap-4 mb-8 md:mb-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsAutoplay(false)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-6 md:w-8 bg-accent" : "w-2 bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-8 pt-8 md:pt-12 border-t border-border/30 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="transform hover:scale-110 transition-transform duration-300">
            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-accent">25+</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Therapists</p>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-accent">10K+</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Clients</p>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-accent">24/7</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
