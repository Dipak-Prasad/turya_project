import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    link: "/blog1",
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
    link: "/blog2",
    title: "The Power of Mindfulness: Transform Your Daily Life",
    excerpt:
      "Discover how mindfulness meditation can reduce stress, improve focus, and enhance overall well-being.",
    author: "Dr. Amelia Rodriguez",
    date: "2026-01-10",
    category: "Wellness",
    image: "/mindfulness-meditation.png",
    readTime: "6 min read",
  },
  {
    link: "/blog3",
    title: "Building Stronger Relationships: Communication Tips for Couples",
    excerpt:
      "Healthy communication is the foundation of strong relationships.",
    author: "Dr. Michael Chen",
    date: "2026-01-05",
    category: "Relationships",
    image: "/couples-relationship-counselling.jpg",
    readTime: "7 min read",
  },
  {
    link: "/blog4",
    title: "Overcoming Depression: A Step-by-Step Recovery Guide",
    excerpt:
      "Depression is treatable. Explore evidence-based strategies and recovery stories.",
    author: "Dr. Emily Watson",
    date: "2025-12-28",
    category: "Mental Health",
    image: "/depression-recovery-therapy.jpg",
    readTime: "8 min read",
  },
  {
    link: "/blog5",
    title: "Work-Life Balance: Achieving Wellness in a Busy World",
    excerpt:
      "Discover practical strategies to manage work stress and prioritize self-care.",
    author: "Dr. James Wilson",
    date: "2025-12-20",
    category: "Wellness",
    image: "/work-life-balance-wellness.jpg",
    readTime: "6 min read",
  },
  {
    link: "/blog6",
    title: "Teen Mental Health: Supporting Your Adolescent",
    excerpt:
      "Practical advice for parents to support teenage mental health.",
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

        {/* Blog Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {blogPosts.map((post, index) => (

                <article
                  key={index}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >

                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-bold mb-3">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
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
                          href={post.link}
                          className="text-accent hover:text-accent/80 flex items-center gap-1 font-semibold"
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

      </main>

      <Footer />
    </div>
  )
}