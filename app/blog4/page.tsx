import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"

export default function Blog4Page() {

  const blog = {
    title: "Overcoming Depression: A Step-by-Step Recovery Guide",
    author: "Dr. Michael Chen",
    date: "Dec 28, 2025",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2",
    readTime: "8 min read",
    content: `
      <h2>Understanding Depression</h2>

      <p>
      Depression is more than just feeling sad or going through a difficult period. It is a serious mental health condition that affects how people think, feel, and behave. It can interfere with daily activities, relationships, and overall quality of life.
      </p>

      <p>
      The good news is that depression is treatable. With the right combination of support, therapy, lifestyle changes, and sometimes medication, many people successfully recover and lead fulfilling lives.
      </p>

      <h2>Common Symptoms of Depression</h2>

      <p>
      Depression affects individuals differently, but some common symptoms include:
      </p>

      <ul>
        <li>Persistent sadness or emptiness</li>
        <li>Loss of interest in activities once enjoyed</li>
        <li>Fatigue or low energy</li>
        <li>Difficulty concentrating</li>
        <li>Changes in appetite or sleep patterns</li>
        <li>Feelings of hopelessness or worthlessness</li>
      </ul>

      <h2>Step 1: Acknowledge Your Feelings</h2>

      <p>
      The first step toward recovery is recognizing and accepting your emotions. Many people try to ignore or suppress their feelings, but acknowledging them can be empowering and help you begin the healing process.
      </p>

      <h2>Step 2: Seek Professional Support</h2>

      <p>
      Mental health professionals such as psychologists, therapists, and psychiatrists are trained to help individuals manage depression. Therapy approaches like Cognitive Behavioral Therapy (CBT) have been proven highly effective.
      </p>

      <h2>Step 3: Build Healthy Daily Habits</h2>

      <p>
      Small lifestyle changes can significantly impact mental health. Consider incorporating these habits into your daily routine:
      </p>

      <ul>
        <li>Maintain a consistent sleep schedule</li>
        <li>Eat balanced and nutritious meals</li>
        <li>Engage in regular physical activity</li>
        <li>Spend time outdoors and in natural sunlight</li>
      </ul>

      <h2>Step 4: Stay Connected with Others</h2>

      <p>
      Isolation can worsen depressive symptoms. Talking with trusted friends, family members, or support groups can provide emotional relief and remind you that you are not alone.
      </p>

      <h2>Step 5: Practice Self-Compassion</h2>

      <p>
      Recovery from depression takes time. Be patient with yourself and celebrate small victories. Treat yourself with the same kindness and understanding you would offer a friend.
      </p>

      <h2>When to Seek Immediate Help</h2>

      <p>
      If you or someone you know is experiencing thoughts of self-harm or suicide, it is important to seek immediate professional help. Reaching out to a mental health professional or helpline can save lives.
      </p>

      <h2>Final Thoughts</h2>

      <p>
      Depression can feel overwhelming, but recovery is possible. By seeking help, building supportive relationships, and practicing healthy habits, individuals can regain hope and move toward a brighter future.
      </p>

      <p>
      Remember: asking for help is not a weakness — it is a courageous step toward healing.
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