import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"

export default function Blog1Page() {

  const blog = {
    title: "Understanding Anxiety: Causes, Symptoms, and Coping Strategies",
    author: "Dr. Sarah Johnson",
    date: "Jan 15, 2026",
    category: "Mental Health",
    image: "/anxiety-counselling-therapy.jpg",
    readTime: "7 min read",
    content: `
      <h2>What is Anxiety?</h2>

      <p>
      Anxiety is a natural human response to stress or perceived danger. It is your body’s way of preparing you to handle challenging situations. Everyone experiences anxiety occasionally — before an exam, a job interview, or an important life decision.
      </p>

      <p>
      However, when anxiety becomes persistent, overwhelming, and begins to interfere with daily life, it may indicate an anxiety disorder. Millions of people around the world experience anxiety disorders, making them one of the most common mental health conditions.
      </p>

      <h2>Why Do We Experience Anxiety?</h2>

      <p>
      Anxiety is actually part of the body’s survival mechanism known as the "fight or flight" response. When your brain senses a potential threat, it releases stress hormones such as adrenaline and cortisol.
      </p>

      <h2>Common Causes of Anxiety</h2>

      <ul>
        <li>Work pressure and professional stress</li>
        <li>Relationship challenges</li>
        <li>Financial uncertainty</li>
        <li>Health problems</li>
        <li>Major life transitions</li>
        <li>Traumatic experiences</li>
      </ul>

      <h2>Recognizing Anxiety Symptoms</h2>

      <h3>Emotional Symptoms</h3>

      <ul>
        <li>Persistent worry or fear</li>
        <li>Feeling overwhelmed</li>
        <li>Irritability</li>
        <li>Difficulty concentrating</li>
      </ul>

      <h3>Physical Symptoms</h3>

      <ul>
        <li>Rapid heartbeat</li>
        <li>Shortness of breath</li>
        <li>Muscle tension</li>
        <li>Sleep problems</li>
      </ul>

      <h2>Effective Coping Strategies</h2>

      <ol>
        <li><strong>Deep Breathing:</strong> Helps calm the nervous system.</li>
        <li><strong>Mindfulness Meditation:</strong> Reduces overthinking.</li>
        <li><strong>Regular Exercise:</strong> Releases mood-boosting endorphins.</li>
        <li><strong>Healthy Lifestyle:</strong> Balanced diet and good sleep.</li>
        <li><strong>Limit Caffeine:</strong> Too much caffeine increases anxiety.</li>
      </ol>

      <h2>Final Thoughts</h2>

      <p>
      Anxiety is common, but it does not have to control your life. With the right strategies and professional support, it is possible to live a balanced and fulfilling life.
      </p>
    `
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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight">
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

            <div
              className="prose prose-lg max-w-none 
              prose-headings:font-bold
              prose-headings:text-foreground
              prose-h2:mt-10
              prose-h2:text-2xl
              prose-h3:text-xl
              prose-p:text-muted-foreground
              prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-ul:my-6
              prose-ol:my-6
              prose-strong:text-foreground
              dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />


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