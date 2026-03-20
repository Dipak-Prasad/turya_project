import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from "lucide-react"

export default function Blog3Page() {
  const blog = {
    title: "Building Stronger Relationships: Communication Tips for Couples",
    author: "Prity D Sarkar",
    date: "2026-01-05",
    category: "Relationships",
    image: "/couples-relationship-communication.jpg",
    readTime: "7 min read",
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
              {/* Why Communication Matters Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Communication Matters</h2>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Strong communication is the foundation of healthy relationships. It allows partners to express their needs, understand each other, and navigate conflicts constructively. Without effective communication, misunderstandings can build walls between couples.
                  </p>
                </div>
              </section>

              {/* Key Principles Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Communication Principles</h2>
                <div className="grid gap-4">
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Active Listening</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Fully focus on understanding your partner without planning your response while they're speaking. Listen with empathy and genuine interest.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Use "I" Statements</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Express your feelings and needs without blame. Say "I feel hurt when..." instead of "You always...". This reduces defensiveness.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Avoid Defensiveness</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Be open to feedback and willing to listen to criticism constructively. Defensiveness blocks understanding and resolution.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Validate Emotions</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Acknowledge your partner's feelings as valid, even if you disagree. Validation builds emotional safety and trust.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Be Respectful</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Even in disagreement, maintain respect and kindness. Avoid contempt, criticism, or hostile language that damages trust.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Practical Tips Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Practical Tips for Better Communication</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Implement these concrete strategies to strengthen your relationship communication:
                </p>

                <div className="space-y-5">
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Schedule Regular Check-ins</h3>
                      <p className="text-muted-foreground">
                        Dedicate specific time each week to discuss important matters, feelings, and relationship concerns. This ensures important topics don't get overlooked.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Practice Active Listening</h3>
                      <p className="text-muted-foreground">
                        When your partner speaks, listen without interrupting. Show you're engaged through eye contact, nods, and reflective responses like "I hear you saying...".
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Share Appreciations and Gratitude</h3>
                      <p className="text-muted-foreground">
                        Regularly express what you appreciate about your partner. Gratitude strengthens connection and reminds you of why you're together.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Address Conflicts Promptly</h3>
                      <p className="text-muted-foreground">
                        Don't let resentment build. Address disagreements respectfully and promptly while both partners are calm and receptive.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Spend Quality Time Together</h3>
                      <p className="text-muted-foreground">
                        Create moments of connection free from distractions. Whether it's a date night or a quiet conversation, quality time deepens intimacy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Takeaway */}
              <div className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  If communication remains challenging despite your efforts, consider seeking professional guidance. <span className="font-semibold text-foreground">Couples therapy</span> can provide evidence-based strategies and a safe space to work through issues with an experienced therapist.
                </p>
              </div>
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
