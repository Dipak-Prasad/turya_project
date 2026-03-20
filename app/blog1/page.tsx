import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Understanding Anxiety: Causes, Symptoms, and Coping Strategies",
  description: "A comprehensive guide to understanding anxiety, its causes, symptoms, and effective coping strategies.",
}

export default function Blog1Page() {
  const blog = {
    title: "Understanding Anxiety: Causes, Symptoms, and Coping Strategies",
    author: "Prity D Sarkar",
    date: "2026-01-15",
    category: "Mental Health",
    image: "/anxiety-counselling-therapy.jpg",
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
              {/* What is Anxiety Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">What is Anxiety?</h2>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Anxiety is a natural human response to stress or perceived danger. It is your body's way of preparing you to handle challenging situations. Everyone experiences anxiety occasionally — before an exam, a job interview, or an important life decision.
                  </p>
                </div>
              </section>

              {/* Why Do We Experience Anxiety */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Do We Experience Anxiety?</h2>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Anxiety is actually part of the body's survival mechanism known as the <span className="font-semibold text-foreground">"fight or flight" response</span>. When your brain senses a potential threat, it releases stress hormones such as adrenaline and cortisol. However, when anxiety becomes persistent, overwhelming, and begins to interfere with daily life, it may indicate an anxiety disorder. Millions of people around the world experience anxiety disorders, making them one of the most common mental health conditions.
                  </p>
                </div>
              </section>

              {/* Common Causes Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Common Causes of Anxiety</h2>
                <div className="grid gap-4">
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Work Pressure and Professional Stress</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Demanding work environments and career uncertainties can trigger significant anxiety.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Relationship Challenges</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Conflicts and uncertainties in personal relationships can be sources of anxiety.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Financial Uncertainty</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Money worries and financial instability are common anxiety triggers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Health Problems</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Illness, pain, or health concerns can generate substantial anxiety.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Major Life Transitions</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Changes like moving, job changes, or relationship shifts trigger anxiety.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Traumatic Experiences</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Past or current trauma can manifest as persistent anxiety symptoms.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Anxiety Symptoms Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Recognizing Anxiety Symptoms</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Emotional Symptoms</h3>
                    <div className="space-y-3">
                      {[
                        "Persistent worry or fear about everyday situations",
                        "Feeling overwhelmed and unable to cope",
                        "Irritability and mood swings",
                        "Difficulty concentrating on tasks"
                      ].map((symptom, idx) => (
                        <div key={idx} className="flex items-start gap-3 pl-4">
                          <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <span className="text-base text-muted-foreground">{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Physical Symptoms</h3>
                    <div className="space-y-3">
                      {[
                        "Rapid heartbeat and chest discomfort",
                        "Shortness of breath or hyperventilation",
                        "Muscle tension and body aches",
                        "Sleep disturbances and insomnia"
                      ].map((symptom, idx) => (
                        <div key={idx} className="flex items-start gap-3 pl-4">
                          <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <span className="text-base text-muted-foreground">{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Coping Strategies Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Effective Coping Strategies</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  There are many evidence-based strategies to manage anxiety effectively:
                </p>
                
                <div className="space-y-5">
                  {[
                    { title: "Deep Breathing Exercises", description: "Practice slow, intentional breathing to calm your nervous system and reduce physical tension." },
                    { title: "Mindfulness Meditation", description: "Develop present-moment awareness to reduce overthinking and anxiety spirals." },
                    { title: "Regular Exercise", description: "Physical activity releases mood-boosting endorphins and reduces stress hormones." },
                    { title: "Healthy Lifestyle Habits", description: "Maintain balanced nutrition and quality sleep for optimal mental health." },
                    { title: "Limit Caffeine and Alcohol", description: "Both substances can intensify anxiety symptoms and affect sleep quality." }
                  ].map((strategy, idx) => (
                    <div key={idx} className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{strategy.title}</h3>
                        <p className="text-muted-foreground">
                          {strategy.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Final Thoughts */}
              <div className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Remember:</span> Anxiety is treatable. With the right strategies and professional support, it is possible to live a balanced and fulfilling life. Seeking help is a sign of strength, and there are qualified mental health professionals ready to support you on your journey toward better mental health.
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
