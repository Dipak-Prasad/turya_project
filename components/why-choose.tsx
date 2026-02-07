const reasons = [
  {
    title: "Certified Professionals",
    description: "All therapists are licensed, vetted, and experienced in their specialties.",
    icon: "✓",
  },
  {
    title: "Affordable Pricing",
    description: "Quality mental health care that doesn't break the bank.",
    icon: "💰",
  },
  {
    title: "Flexible Sessions",
    description: "Chat, video, or call sessions at times that work for you.",
    icon: "⏰",
  },
  {
    title: "Complete Privacy",
    description: "Your conversations are confidential, secure, and protected.",
    icon: "🔒",
  },
  {
    title: "Personalized Care",
    description: "Treatment plans customized to your unique needs and goals.",
    icon: "🎯",
  },
  {
    title: "Easy Therapist Switch",
    description: "Change therapists anytime at no additional cost.",
    icon: "🔄",
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 text-balance">
            Why Choose TuryaWellness
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stand out because we genuinely care about your well-being
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary font-bold text-lg">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
