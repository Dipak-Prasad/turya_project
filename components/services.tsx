"use client"

const services = [
  {
    title: "Individual Therapy",
    description: "One-on-one counseling sessions tailored to your specific needs and goals.",
    icon: "👤",
    image: "/individual-therapy-counseling.jpg",
  },
  {
    title: "Couple Therapy",
    description: "Strengthen relationships with professional guidance and communication techniques.",
    icon: "💑",
    image: "/couple-therapy-counseling.jpg",
  },
  {
    title: "Teen Counseling",
    description: "Specialized support for adolescents dealing with stress, anxiety, and life challenges.",
    icon: "🧑",
    image: "/teen-counseling-support.jpg",
  },
  {
    title: "Stress Management",
    description: "Learn effective coping strategies to manage daily stress and anxiety.",
    icon: "🧘",
    image: "/stress-management-wellness.jpg",
  },
  {
    title: "Psychological Services",
    description: "Professional psychological evaluation and treatment with licensed psychologist.",
    icon: "⚕️",
    image: "/psychiatric-services-consultation.jpg",
  },
  {
    title: "Group Sessions",
    description: "Join supportive communities and share experiences with others.",
    icon: "👥",
    image: "/group-therapy-sessions.jpg",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-12 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-28">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/40 hover:border-accent/80 transition-all duration-300 transform hover:scale-105 w-full max-w-sm">
                <img
                  src="https://static.wixstatic.com/media/158131_5121ab3b0e2340ecbf7a81a7a604ff91~mv2.jpg/v1/fill/w_365,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG20231214123246.jpg"
                  alt="Professional Counselling"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-accent/15 rounded-full mb-4">
                <span className="text-accent font-semibold text-xs md:text-sm">Expert Care</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-accent mb-4 md:mb-6 text-balance">
                Professional Counselling
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed mb-6">
                Our experienced counselors provide compassionate, evidence-based therapy tailored to your unique needs.
                With years of expertise in mental health, we create a safe and supportive environment where you can
                explore your feelings and work towards meaningful personal growth.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg md:text-xl mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-foreground text-sm md:text-base">Licensed and experienced counselors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg md:text-xl mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-foreground text-sm md:text-base">Confidential and supportive environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg md:text-xl mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-foreground text-sm md:text-base">Personalized treatment plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-primary mb-3 md:mb-4 text-balance">
            Mental Health Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground max-w-2xl mx-auto px-2">
            From anxiety and depression to relationships and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-card border border-accent/20 rounded-xl overflow-hidden hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300" />

                <div className="text-4xl md:text-5xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-primary mb-3 relative z-10 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground leading-relaxed relative z-10 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
