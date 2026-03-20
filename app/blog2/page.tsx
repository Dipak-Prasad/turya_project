import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, CheckCircle2 } from "lucide-react"

export default function Blog2Page() {
  const blog = {
    title: "The Power of Mindfulness: Transform Your Daily Life",
    author: "Prity D Sarkar",
    date: "2026-01-10",
    category: "Wellness",
    image: "/mindfulness-meditation-wellness.jpg",
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
              {/* What is Mindfulness Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">What is Mindfulness?</h2>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Mindfulness is the practice of bringing conscious awareness to the present moment without judgment. It's about observing your thoughts, feelings, and sensations as they arise, rather than reacting to them automatically.
                  </p>
                </div>
              </section>

              {/* Benefits Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Benefits of Mindfulness</h2>
                <div className="grid gap-4">
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Reduces Stress and Anxiety</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Regular mindfulness practice helps calm your nervous system and lower cortisol levels.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Improves Focus and Concentration</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Training your mind to stay present enhances cognitive function and productivity.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Enhances Emotional Regulation</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Develop better control over emotional responses and reactions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Promotes Better Sleep</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Quieting the mind before bed improves sleep quality and reduces insomnia.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Increases Self-Awareness</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Understand your patterns, triggers, and behaviors more deeply.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Improves Relationships</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Greater emotional awareness leads to better communication and empathy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Getting Started Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Getting Started with Mindfulness</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  You don't need any special equipment or prior experience to start mindfulness. Here are some practical ways to begin:
                </p>
                
                <div className="space-y-5">
                  {/* Step 1 */}
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Mindful Breathing</h3>
                      <p className="text-muted-foreground">
                        Spend 5 minutes focusing on your breath. Notice the rhythm, depth, and sensations as you inhale and exhale. This simple practice anchors you to the present moment.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Body Scan Meditation</h3>
                      <p className="text-muted-foreground">
                        Slowly scan your body from head to toe, noticing any sensations, tension, or areas of comfort. This practice builds awareness of physical sensations.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Mindful Walking</h3>
                      <p className="text-muted-foreground">
                        Pay full attention to the sensations of walking. Feel each step, the ground beneath you, and your surroundings. Transform a simple walk into a meditation practice.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Mindful Eating</h3>
                      <p className="text-muted-foreground">
                        Eat slowly and notice the flavors, textures, aromas, and sensations. This practice helps you develop a healthier relationship with food and eating.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Takeaway */}
              <div className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Consistency is key.</span> Start with just 5-10 minutes daily and gradually increase your practice duration. Like any skill, mindfulness improves with regular practice and patience.
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
