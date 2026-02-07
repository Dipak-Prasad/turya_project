import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    slug: "understanding-anxiety",
    title: "Understanding Anxiety: Causes, Symptoms, and Coping Strategies",
    excerpt:
      "Anxiety is a common mental health condition that affects millions. Learn what causes it, how to recognize symptoms, and effective strategies to manage anxiety.",
    author: "Dr. Sarah Johnson",
    date: "2026-01-15",
    category: "Mental Health",
    image: "/anxiety-counselling-therapy.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "power-of-mindfulness",
    title: "The Power of Mindfulness: Transform Your Daily Life",
    excerpt:
      "Discover how mindfulness meditation can reduce stress, improve focus, and enhance overall well-being. Start your mindfulness journey today.",
    author: "Dr. Amelia Rodriguez",
    date: "2026-01-10",
    category: "Wellness",
    image: "/mindfulness-meditation.png",
    readTime: "6 min read",
  },
  {
    id: 3,
    slug: "building-stronger-relationships",
    title: "Building Stronger Relationships: Communication Tips for Couples",
    excerpt:
      "Healthy communication is the foundation of strong relationships. Learn practical techniques to improve dialogue and strengthen your bond.",
    author: "Dr. Michael Chen",
    date: "2026-01-05",
    category: "Relationships",
    image: "/couples-relationship-counselling.jpg",
    readTime: "7 min read",
  },
  {
    id: 4,
    slug: "overcoming-depression-recovery-guide",
    title: "Overcoming Depression: A Step-by-Step Recovery Guide",
    excerpt:
      "Depression is treatable. Explore evidence-based strategies, professional help options, and real recovery stories to inspire your journey.",
    author: "Dr. Emily Watson",
    date: "2025-12-28",
    category: "Mental Health",
    image: "/depression-recovery-therapy.jpg",
    readTime: "8 min read",
  },
  {
    id: 5,
    slug: "work-life-balance-wellness",
    title: "Work-Life Balance: Achieving Wellness in a Busy World",
    excerpt:
      "Struggling with balance? Discover practical strategies to manage work stress, set boundaries, and prioritize self-care.",
    author: "Dr. James Wilson",
    date: "2025-12-20",
    category: "Wellness",
    image: "/work-life-balance-wellness.jpg",
    readTime: "6 min read",
  },
  {
    id: 6,
    slug: "teen-mental-health-support",
    title: "Teen Mental Health: Supporting Your Adolescent",
    excerpt:
      "Navigate teenage mental health challenges with practical advice for parents and guardians. Learn signs to watch for and how to help.",
    author: "Dr. Lisa Anderson",
    date: "2025-12-15",
    category: "Parenting",
    image: "/teen-adolescent-mental-health.jpg",
    readTime: "7 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">
                Wellness Insights
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 text-balance">
              Mental Health Insights & Tips
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Expert advice, wellness tips, and stories to support your mental
              health journey.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3">
                      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-col gap-3 pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <User size={14} />
                          {post.author}
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 font-semibold"
                        >
                          Read <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-5 text-white">
              Ready to Transform Your Mental Health?
            </h2>
            <p className="text-lg text-white/95 mb-12 max-w-2xl mx-auto">
              Book your consultation with our experienced therapists and
              take the first step towards a healthier, happier you.
            </p>
            <Link
              href="/get-started"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Book Consultation 
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
