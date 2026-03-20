import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react"

export default function Blog6Page() {
  const blog = {
    title: "Overcoming Depression: A Step-by-Step Recovery Guide",
    author: "Prity D Sarkar",
    date: "Dec 28, 2025",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2",
    readTime: "8 min read",
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
              {/* Understanding Depression Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Depression</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <p className="text-muted-foreground leading-relaxed">
                      Depression is more than just feeling sad or going through a difficult period. It is a serious mental health condition that affects how people think, feel, and behave. It can interfere with daily activities, relationships, and overall quality of life.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6 py-2 bg-green-50/50">
                    <p className="text-muted-foreground leading-relaxed font-semibold">
                      The good news is that depression is treatable. With the right combination of support, therapy, lifestyle changes, and sometimes medication, many people successfully recover and lead fulfilling lives.
                    </p>
                  </div>
                </div>
              </section>

              {/* Common Symptoms Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Common Symptoms of Depression</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Depression affects individuals differently, but some common symptoms include:
                </p>

                <div className="grid gap-3">
                  {[
                    "Persistent sadness or emptiness",
                    "Loss of interest in activities once enjoyed",
                    "Fatigue or low energy throughout the day",
                    "Difficulty concentrating or making decisions",
                    "Changes in appetite or sleep patterns",
                    "Feelings of hopelessness or worthlessness",
                    "Withdrawal from friends and family",
                    "Physical symptoms like headaches or body aches",
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

              {/* Recovery Steps Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">5 Steps to Recovery from Depression</h2>

                <div className="space-y-5">
                  {/* Step 1 */}
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Acknowledge Your Feelings</h3>
                      <p className="text-muted-foreground">
                        The first step toward recovery is recognizing and accepting your emotions. Many people try to ignore or suppress their feelings, but acknowledging them can be empowering and help you begin the healing process.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Seek Professional Support</h3>
                      <p className="text-muted-foreground">
                        Mental health professionals such as psychologists, therapists, and psychiatrists are trained to help individuals manage depression. Therapy approaches like Cognitive Behavioral Therapy (CBT) have been proven highly effective in treating depression.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Build Healthy Daily Habits</h3>
                      <p className="text-muted-foreground mb-3">
                        Small lifestyle changes can significantly impact mental health. Consider incorporating these into your routine:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex gap-2 items-start text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>Maintain a consistent sleep schedule</span>
                        </li>
                        <li className="flex gap-2 items-start text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>Eat balanced and nutritious meals</span>
                        </li>
                        <li className="flex gap-2 items-start text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>Engage in regular physical activity</span>
                        </li>
                        <li className="flex gap-2 items-start text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>Spend time outdoors and in natural sunlight</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Stay Connected with Others</h3>
                      <p className="text-muted-foreground">
                        Isolation can worsen depressive symptoms. Talking with trusted friends, family members, or support groups can provide emotional relief and remind you that you are not alone in your struggle.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-4 p-5 rounded-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Practice Self-Compassion</h3>
                      <p className="text-muted-foreground">
                        Recovery from depression takes time. Be patient with yourself and celebrate small victories. Treat yourself with the same kindness and understanding you would offer a good friend.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* When to Seek Immediate Help */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">When to Seek Immediate Help</h2>
                <div className="border-l-4 border-red-500 bg-red-50/50 p-6 rounded-r-lg">
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    If you or someone you know is experiencing thoughts of self-harm or suicide, it is important to seek immediate professional help. Do not wait or hesitate to reach out.
                  </p>
                  <p className="text-foreground font-semibold">
                    Reaching out to a mental health professional or helpline can save lives. There is always someone ready to listen and help.
                  </p>
                </div>
              </section>

              {/* Final Thoughts */}
              <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg border-2 border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  Final Thoughts
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depression can feel overwhelming, but recovery is possible. By seeking help, building supportive relationships, and practicing healthy habits, individuals can regain hope and move toward a brighter future.
                </p>
                <p className="text-muted-foreground leading-relaxed font-semibold text-foreground">
                  Remember: asking for help is not a weakness — it is a courageous step toward healing. You deserve support, care, and a life filled with hope and meaning.
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
