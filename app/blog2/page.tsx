import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"

export default function Blog2Page() {

  const blog = {
   title: "The Power of Mindfulness: Transform Your Daily Life",
    author: "Prity D Sarkar",
    date: "2026-01-10",
    category: "Wellness",
    image: "/mindfulness-meditation-wellness.jpg",
    readTime: "6 min read",
    content: `
      <h2>What is Mindfulness?</h2>
      <p>Mindfulness is the practice of bringing conscious awareness to the present moment without judgment. It's about observing your thoughts, feelings, and sensations as they arise, rather than reacting to them automatically.</p>

      <h2>Benefits of Mindfulness</h2>
      <ul>
        <li>Reduces stress and anxiety</li>
        <li>Improves focus and concentration</li>
        <li>Enhances emotional regulation</li>
        <li>Promotes better sleep</li>
        <li>Increases self-awareness</li>
        <li>Improves relationships</li>
      </ul>

      <h2>Getting Started with Mindfulness</h2>
      <p>You don't need any special equipment or prior experience to start mindfulness. Here are some ways to begin:</p>
      <ol>
        <li><strong>Mindful Breathing:</strong> Spend 5 minutes focusing on your breath.</li>
        <li><strong>Body Scan Meditation:</strong> Slowly scan your body from head to toe, noticing sensations.</li>
        <li><strong>Mindful Walking:</strong> Pay full attention to the sensations of walking.</li>
        <li><strong>Mindful Eating:</strong> Eat slowly and notice the flavors, textures, and sensations.</li>
      </ol>

      <p>Consistency is key. Start with just 5-10 minutes daily and gradually increase your practice duration.</p>
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