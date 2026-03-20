import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, AlertCircle } from "lucide-react"

export default function Blog4Page() {
  const blog = {
    title: "Teen Mental Health: Supporting Your Adolescent",
    author: "Prity D Sarkar",
    date: "Dec 15, 2025",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
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
              {/* Understanding Teen Mental Health Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Teen Mental Health</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <p className="text-muted-foreground leading-relaxed">
                      Adolescence is a critical stage of emotional, psychological, and social development. Teenagers face many challenges, including academic pressure, social expectations, identity formation, and increasing exposure to digital environments.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <p className="text-muted-foreground leading-relaxed">
                      Because of these pressures, many adolescents experience stress, anxiety, mood swings, or emotional difficulties. Supporting teen mental health requires patience, understanding, and open communication from parents and caregivers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Common Challenges Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Common Mental Health Challenges for Teens</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Teenagers today face a unique set of challenges that can impact their mental wellbeing:
                </p>

                <div className="grid gap-3">
                  {[
                    "Academic pressure and performance expectations",
                    "Social media influence and comparison with peers",
                    "Peer pressure and bullying (in-person or online)",
                    "Low self-esteem or body image concerns",
                    "Anxiety and stress about the future",
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-semibold">•</span>
                      </div>
                      <p className="text-muted-foreground pt-0.5">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Warning Signs Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Warning Signs Parents Should Watch For</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Recognizing early signs of mental health struggles can help parents provide support before issues become more serious:
                </p>

                <div className="space-y-3">
                  {[
                    "Sudden mood changes or persistent irritability",
                    "Withdrawal from friends, family, or social activities",
                    "Loss of interest in activities they once enjoyed",
                    "Changes in sleep patterns (sleeping too much or too little)",
                    "Changes in eating habits or appetite",
                    "Declining school performance or attendance",
                    "Increased secrecy or isolation",
                    "Expressions of hopelessness or worthlessness",
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-lg bg-red-50/50 border border-red-200/50">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How Parents Can Support Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">How Parents Can Support Their Teen</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Parents play an essential role in helping teenagers navigate emotional challenges and develop resilience:
                </p>

                <div className="space-y-5">
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Encourage Open Communication</h3>
                      <p className="text-muted-foreground">
                        Let your teen know they can talk to you without fear of judgment, punishment, or dismissal. Create a safe space for honest conversations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Listen Actively</h3>
                      <p className="text-muted-foreground">
                        Focus on understanding their feelings instead of immediately offering solutions. Sometimes teens need to be heard, not fixed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Promote Healthy Habits</h3>
                      <p className="text-muted-foreground">
                        Encourage regular exercise, balanced nutrition, adequate sleep, and time in nature. Physical health directly impacts mental wellbeing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Limit Screen Time</h3>
                      <p className="text-muted-foreground">
                        Help teens maintain a healthy relationship with social media and technology. Excessive screen time can increase anxiety and depression.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Be Supportive and Patient</h3>
                      <p className="text-muted-foreground">
                        Adolescence is a period of growth and emotional change. Show unconditional support and remember that setbacks are part of development.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* When to Seek Help Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">When to Seek Professional Help</h2>
                <div className="border-l-4 border-yellow-500 pl-6 py-2 bg-yellow-50/50 p-6 rounded-r-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    If your teenager shows persistent signs of anxiety, depression, or emotional distress, it may be helpful to consult a mental health professional. Therapists and counselors can provide guidance and coping strategies tailored to adolescents' unique needs.
                  </p>
                </div>
              </section>

              {/* Building Positive Environment */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Building a Positive Environment</h2>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Creating a supportive home environment can significantly improve a teenager's emotional wellbeing. Encourage open discussions, celebrate achievements, and remind your teen that mistakes are part of learning and growth.
                  </p>
                </div>
              </section>

              {/* Final Thoughts */}
              <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg border-2 border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4">Final Thoughts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Supporting adolescent mental health is one of the most important roles parents can play. By fostering communication, providing emotional support, and encouraging healthy habits, parents can help their teens build resilience and confidence.
                </p>
                <p className="text-muted-foreground leading-relaxed font-semibold text-foreground">
                  Remember: every teenager needs reassurance that they are valued, understood, and supported during this important stage of life.
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
