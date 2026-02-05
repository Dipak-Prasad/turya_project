import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight, Award, Users, Heart } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Individual Therapy",
    description: "One-on-one counseling sessions tailored to your specific needs and goals.",
    details:
      "Our individual therapy sessions provide a safe, confidential space to explore your thoughts, feelings, and experiences. Whether you're dealing with anxiety, depression, trauma, or personal growth, our licensed therapists work with you to develop effective coping strategies and build resilience for lasting change.",
    price: "₹1000-1500",
    image: "/individual-therapy-counseling.jpg",
    icon: Heart,
  },
  {
    id: 2,
    title: "Couple Therapy",
    description: "Strengthen relationships with professional guidance and communication techniques.",
    details:
      "Relationship challenges can be complex and emotionally draining. Our experienced couples therapists help partners improve communication, resolve conflicts constructively, and strengthen emotional bonds through evidence-based therapeutic techniques designed for long-term relationship satisfaction.",
    price: "₹1500-2000",
    image: "/couple-therapy-counseling.jpg",
    icon: Users,
  },
  {
    id: 3,
    title: "Teen Counseling",
    description: "Specialized support for adolescents dealing with stress, anxiety, and life challenges.",
    details:
      "Adolescence brings unique challenges and transitions. We provide specialized, judgment-free support for teens dealing with academic pressure, social anxiety, self-esteem issues, family conflicts, identity questions, and peer relationships with compassion and expertise.",
    price: "₹800-1200",
    image: "/teen-counseling-support.jpg",
    icon: Award,
  },
  {
    id: 4,
    title: "Stress Management",
    description: "Learn effective coping strategies to manage daily stress and anxiety.",
    details:
      "Modern life brings constant pressure and stress that impacts our physical and mental health. Learn scientifically-proven mindfulness techniques, breathing exercises, and stress management strategies to improve resilience, enhance focus, and achieve better work-life balance.",
    price: "₹900-1300",
    image: "/stress-management-wellness.jpg",
    icon: Heart,
  },
  {
    id: 5,
    title: "Psychiatric Services",
    description: "Professional psychological evaluation and treatment with licensed pyschologist.",
    details:
      "Our board-certified psychologist provide comprehensive medical evaluation, accurate diagnosis, and evidence-based treatment including medication management, psychoeducation, and integrated care for various mental health conditions ensuring your safety and wellbeing.",
    price: "₹1200-1800",
    image: "/psychiatric-services-consultation.jpg",
    icon: Award,
  },
  {
    id: 6,
    title: "Group Sessions",
    description: "Join supportive communities and share experiences with others.",
    details:
      "Group therapy provides powerful therapeutic benefits through shared experiences, mutual support, and learning from peers facing similar challenges. Our facilitators create a safe, confidential community where you can build connections, gain perspective, and grow together.",
    price: "₹400-600",
    image: "/group-therapy-sessions.jpg",
    icon: Users,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 text-balance">
              Our Mental Health Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive, professional counselling and therapy solutions designed to support your mental health
              journey.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={service.id}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {/* Image Section */}
                    <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="text-primary" size={20} />
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed text-sm">{service.description}</p>
                      <p className="text-xs text-muted-foreground mb-6 line-clamp-2">{service.details}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-primary font-bold text-sm">{service.price}</span>
                        <Link
                          href="/get-started"
                          className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium"
                        >
                          Book Now <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-5 text-balance leading-tight text-white">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed">
              Book your free consultation today and take the first step towards better mental health.
            </p>
            <Link
              href="/get-started"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Book Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
