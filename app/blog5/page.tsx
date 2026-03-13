import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"

export default function Blog4Page() {

  const blog = {
     title: "Work-Life Balance: Achieving Wellness in a Busy World",
  author: "Dr. James Wilson",
  date: "Dec 20, 2025",
  category: "Wellness",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
  readTime: "6 min read",
  content: `
    <h2>Why Work-Life Balance Matters</h2>

    <p>
    In today's fast-paced world, many people struggle to maintain a healthy balance between work responsibilities and personal life. Long working hours, constant digital connectivity, and increasing professional demands often lead to stress and burnout.
    </p>

    <p>
    Achieving work-life balance is essential for maintaining both mental and physical wellbeing. When individuals create space for relaxation, relationships, and self-care, they are more productive, happier, and healthier.
    </p>

    <h2>Signs Your Work-Life Balance Needs Improvement</h2>

    <p>
    It can sometimes be difficult to recognize when work is taking over your personal life. Here are some common warning signs:
    </p>

    <ul>
      <li>Feeling constantly exhausted or burned out</li>
      <li>Lack of time for hobbies or family</li>
      <li>Difficulty disconnecting from work</li>
      <li>Declining physical or mental health</li>
      <li>Reduced productivity and motivation</li>
    </ul>

    <h2>Practical Strategies for Better Balance</h2>

    <p>
    Creating balance requires conscious effort and consistent habits. Here are practical strategies that can help:
    </p>

    <ol>
      <li><strong>Set Clear Boundaries:</strong> Define work hours and avoid responding to work messages outside those hours.</li>
      <li><strong>Prioritize Important Tasks:</strong> Focus on high-impact activities rather than trying to do everything.</li>
      <li><strong>Schedule Personal Time:</strong> Treat personal time like an important meeting that cannot be canceled.</li>
      <li><strong>Learn to Say No:</strong> Avoid overcommitting to responsibilities that overwhelm your schedule.</li>
    </ol>

    <h2>The Role of Self-Care</h2>

    <p>
    Self-care is not a luxury; it is a necessity for maintaining long-term wellbeing. Activities like exercise, meditation, reading, or simply spending time with loved ones can help restore energy and reduce stress.
    </p>

    <ul>
      <li>Exercise regularly</li>
      <li>Practice mindfulness or meditation</li>
      <li>Take short breaks during work</li>
      <li>Maintain healthy sleep habits</li>
    </ul>

    <h2>Creating a Sustainable Lifestyle</h2>

    <p>
    True work-life balance is not about perfectly dividing time between work and personal life. Instead, it is about creating a lifestyle where both areas support each other rather than compete with each other.
    </p>

    <p>
    When individuals prioritize wellbeing, they often become more focused, creative, and effective in their professional roles as well.
    </p>

    <h2>Final Thoughts</h2>

    <p>
    Achieving work-life balance may require small adjustments in daily habits and mindset. By setting boundaries, prioritizing self-care, and staying mindful of personal needs, it is possible to build a healthier and more fulfilling life.
    </p>

    <p>
    Remember, success is not only measured by professional achievements but also by the quality of life you create for yourself.
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