import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"

export default function Blog4Page() {

  const blog = {

  title: "Teen Mental Health: Supporting Your Adolescent",
  author: "Prity D Sarkar",
  date: "Dec 15, 2025",
  category: "Mental Health",
  image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
  readTime: "7 min read",
  content: `
    <h2>Understanding Teen Mental Health</h2>

    <p>
    Adolescence is a critical stage of emotional, psychological, and social development. Teenagers face many challenges, including academic pressure, social expectations, identity formation, and increasing exposure to digital environments.
    </p>

    <p>
    Because of these pressures, many adolescents experience stress, anxiety, mood swings, or emotional difficulties. Supporting teen mental health requires patience, understanding, and open communication from parents and caregivers.
    </p>

    <h2>Common Mental Health Challenges for Teens</h2>

    <p>
    Teenagers today face a unique set of challenges that can impact their mental wellbeing.
    </p>

    <ul>
      <li>Academic pressure and performance expectations</li>
      <li>Social media influence and comparison</li>
      <li>Peer pressure and bullying</li>
      <li>Low self-esteem or body image concerns</li>
      <li>Anxiety and stress about the future</li>
    </ul>

    <h2>Warning Signs Parents Should Watch For</h2>

    <p>
    Recognizing early signs of mental health struggles can help parents provide support before issues become more serious.
    </p>

    <ul>
      <li>Sudden mood changes or irritability</li>
      <li>Withdrawal from friends or family</li>
      <li>Loss of interest in favorite activities</li>
      <li>Changes in sleep or eating patterns</li>
      <li>Declining school performance</li>
    </ul>

    <h2>How Parents Can Support Their Teen</h2>

    <p>
    Parents play an essential role in helping teenagers navigate emotional challenges and develop resilience.
    </p>

    <ol>
      <li><strong>Encourage Open Communication:</strong> Let your teen know they can talk to you without fear of judgment.</li>
      <li><strong>Listen Actively:</strong> Focus on understanding their feelings instead of immediately offering solutions.</li>
      <li><strong>Promote Healthy Habits:</strong> Encourage regular exercise, balanced nutrition, and good sleep routines.</li>
      <li><strong>Limit Screen Time:</strong> Help teens maintain a healthy relationship with social media and technology.</li>
      <li><strong>Be Supportive and Patient:</strong> Adolescence is a period of growth and emotional change.</li>
    </ol>

    <h2>When to Seek Professional Help</h2>

    <p>
    If your teenager shows persistent signs of anxiety, depression, or emotional distress, it may be helpful to consult a mental health professional. Therapists and counselors can provide guidance and coping strategies tailored to adolescents.
    </p>

    <h2>Building a Positive Environment</h2>

    <p>
    Creating a supportive home environment can significantly improve a teenager's emotional wellbeing. Encourage open discussions, celebrate achievements, and remind your teen that mistakes are part of learning and growth.
    </p>

    <h2>Final Thoughts</h2>

    <p>
    Supporting adolescent mental health is one of the most important roles parents can play. By fostering communication, providing emotional support, and encouraging healthy habits, parents can help their teens build resilience and confidence.
    </p>

    <p>
    Remember, every teenager needs reassurance that they are valued, understood, and supported during this important stage of life.
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