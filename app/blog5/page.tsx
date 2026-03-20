import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, Zap } from "lucide-react"

export default function Blog5Page() {
  const blog = {
    title: "Work-Life Balance: Achieving Wellness in a Busy World",
    author: "Prity D Sarkar",
    date: "Dec 20, 2025",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    readTime: "6 min read",
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* HERO SECTION */}
        <div className="relative h-[500px] w-full overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center text-center px-6">
            <div className="max-w-4xl text-white">
              <span className="bg-primary px-5 py-1.5 rounded-full text-sm font-medium shadow-lg">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight text-balance">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* BLOG SECTION */}
        <article className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary mb-10 font-medium hover:gap-3 transition"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            {/* AUTHOR CARD */}
            <div className="flex flex-wrap items-center justify-between gap-6 mb-12 p-6 rounded-xl border bg-muted/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-semibold text-lg">{blog.author}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {blog.date}
                    </span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOG CONTENT */}
            <div className="space-y-8">
              {/* Why Work-Life Balance Matters Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Work-Life Balance Matters</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <p className="text-muted-foreground leading-relaxed">
                      In today's fast-paced world, many people struggle to maintain a healthy balance between work responsibilities and personal life. Long working hours, constant digital connectivity, and increasing professional demands often lead to stress and burnout.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <p className="text-muted-foreground leading-relaxed">
                      Achieving work-life balance is essential for maintaining both mental and physical wellbeing. When individuals create space for relaxation, relationships, and self-care, they are more productive, happier, and healthier overall.
                    </p>
                  </div>
                </div>
              </section>

              {/* Warning Signs Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Signs Your Work-Life Balance Needs Improvement</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  It can sometimes be difficult to recognize when work is taking over your personal life. Here are some common warning signs:
                </p>

                <div className="grid gap-3">
                  {[
                    "Feeling constantly exhausted or burned out",
                    "Lack of time for hobbies or family",
                    "Difficulty disconnecting from work",
                    "Declining physical or mental health",
                    "Reduced productivity and motivation",
                    "Strained relationships due to work stress",
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-lg bg-orange-50/50 border border-orange-200/50">
                      <Zap className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Practical Strategies Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Practical Strategies for Better Balance</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Creating balance requires conscious effort and consistent habits. Here are practical strategies that can help:
                </p>

                <div className="space-y-5">
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Set Clear Boundaries</h3>
                      <p className="text-muted-foreground">
                        Define work hours and stick to them. Avoid responding to work messages outside those hours. Let colleagues know your availability and respect their personal time too.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Prioritize Important Tasks</h3>
                      <p className="text-muted-foreground">
                        Focus on high-impact activities rather than trying to do everything. Use time management techniques like the Pareto principle (80/20 rule).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Schedule Personal Time</h3>
                      <p className="text-muted-foreground">
                        Treat personal time like an important meeting that cannot be canceled. Block it in your calendar and protect it fiercely.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Learn to Say No</h3>
                      <p className="text-muted-foreground">
                        Avoid overcommitting to responsibilities that overwhelm your schedule. Saying no to some things means saying yes to your wellbeing.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Role of Self-Care Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Role of Self-Care</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Self-care is not a luxury; it is a necessity for maintaining long-term wellbeing. Activities like exercise, meditation, reading, or simply spending time with loved ones can help restore energy and reduce stress:
                </p>

                <div className="grid gap-3">
                  {[
                    "Exercise regularly (even 30 minutes daily)",
                    "Practice mindfulness or meditation",
                    "Take short breaks during work",
                    "Maintain healthy sleep habits (7-9 hours)",
                    "Engage in hobbies you enjoy",
                    "Spend quality time with loved ones",
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-semibold">✓</span>
                      </div>
                      <p className="text-muted-foreground pt-0.5">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Creating Sustainable Lifestyle Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Creating a Sustainable Lifestyle</h2>
                <div className="border-l-4 border-primary pl-6 py-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    True work-life balance is not about perfectly dividing time between work and personal life. Instead, it is about creating a lifestyle where both areas support each other rather than compete with each other.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When individuals prioritize wellbeing, they often become more focused, creative, and effective in their professional roles as well.
                  </p>
                </div>
              </section>

              {/* Final Thoughts */}
              <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg border-2 border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4">Final Thoughts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Achieving work-life balance may require small adjustments in daily habits and mindset. By setting boundaries, prioritizing self-care, and staying mindful of personal needs, it is possible to build a healthier and more fulfilling life.
                </p>
                <p className="text-muted-foreground leading-relaxed font-semibold text-foreground">
                  Remember: success is not only measured by professional achievements but also by the quality of life you create for yourself and those around you.
                </p>
              </section>
            </div>

            {/* SHARE SECTION */}
            <div className="mt-16 border-t pt-8 flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-muted-foreground">
                Found this helpful? Share it with others.
              </p>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
