"use client"

import { CheckCircle, MessageSquare, Lightbulb, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Browse Services",
    description: "Explore our range of counselling and therapy services tailored to your needs.",
    icon: Lightbulb,
  },
  {
    number: "2",
    title: "Connect with Therapist",
    description: "Get matched with a certified therapist suited to your specific requirements and goals.",
    icon: MessageSquare,
  },
  {
    number: "3",
    title: "Start Your Journey",
    description: "Begin your healing journey with flexible scheduling and personalized therapeutic support.",
    icon: CheckCircle,
  },
  {
    number: "4",
    title: "Track Progress & Growth",
    description:
      "Monitor your mental wellness progress and achieve lasting positive change with professional guidance.",
    icon: TrendingUp,
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-primary mb-3 md:mb-4 text-balance">
            Simple Steps to Better Health
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Your path to emotional wellness starts here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative group">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                )}

                {/* Step circle with icon */}
                <div className="relative z-10 bg-gradient-to-br from-primary to-primary/80 rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 mx-auto flex flex-col items-center justify-center mb-6 md:mb-8 shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300 transform group-hover:scale-110">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground mb-1" />
                  <p className="text-xl sm:text-2xl font-bold text-primary-foreground">{step.number}</p>
                </div>

                {/* Step content */}
                <div className="text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-primary mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-sm leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
