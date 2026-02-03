const testimonials = [
  {
    name: "Priya",
    location: "Kolkata",
    quote:
      "The therapy sessions transformed my life. I found the support I needed to overcome my anxiety. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anjali & Amit",
    location: "Asansol",
    quote:
      "Couple counseling saved our relationship. Our therapist was compassionate, understanding, and truly helped us communicate better.",
    rating: 5,
  },
  {
    name: "Neha",
    location: "Kharagpur",
    quote:
      "I felt truly heard and supported by my therapist. The online sessions made it convenient to work on my mental health.",
    rating: 5,
  },
  {
    name: "Raj",
    location: "Asansol",
    quote:
      "The stress management techniques I learned have made a real difference in my daily life. Great experience overall!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 text-balance">
            Stories of Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from people who\'ve found healing and growth with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-8 bg-background border border-border rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}, India</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
