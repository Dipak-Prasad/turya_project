import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Anxiety: Causes, Symptoms, and Coping Strategies",
    author: "Dr. Sarah Johnson",
    date: "2026-01-15",
    category: "Mental Health",
    image: "/anxiety-counselling-therapy.jpg",
    readTime: "5 min read",
    content: `
      <h2>What is Anxiety?</h2>
      <p>Anxiety is a natural human emotion characterized by feelings of worry, fear, and unease. While occasional anxiety is normal, persistent anxiety that interferes with daily activities may indicate an anxiety disorder.</p>

      <h2>Common Causes of Anxiety</h2>
      <ul>
        <li>Work stress and professional pressures</li>
        <li>Relationship difficulties</li>
        <li>Health concerns</li>
        <li>Financial worries</li>
        <li>Major life changes</li>
        <li>Trauma or past experiences</li>
      </ul>

      <h2>Recognizing Anxiety Symptoms</h2>
      <p>Anxiety manifests differently in different people, but common symptoms include:</p>
      <ul>
        <li>Racing heart and shortness of breath</li>
        <li>Restlessness and irritability</li>
        <li>Difficulty concentrating</li>
        <li>Sleep disturbances</li>
        <li>Muscle tension</li>
        <li>Persistent worry</li>
      </ul>

      <h2>Effective Coping Strategies</h2>
      <p>Here are evidence-based techniques to manage anxiety:</p>
      <ol>
        <li><strong>Deep Breathing:</strong> Practice slow, deep breathing exercises to activate your body's relaxation response.</li>
        <li><strong>Mindfulness Meditation:</strong> Regular meditation can reduce anxiety and improve emotional regulation.</li>
        <li><strong>Physical Exercise:</strong> Regular physical activity releases endorphins and reduces stress.</li>
        <li><strong>Cognitive Behavioral Therapy (CBT):</strong> This therapy helps identify and change negative thought patterns.</li>
        <li><strong>Professional Help:</strong> Consider talking to a therapist or counselor for personalized strategies.</li>
      </ol>

      <h2>When to Seek Professional Help</h2>
      <p>If your anxiety is persistent, severe, or affecting your quality of life, it's important to seek professional help. A mental health professional can provide diagnosis and treatment options tailored to your needs.</p>

      <p>Remember, anxiety is treatable, and seeking help is a sign of strength, not weakness. At Turya Wellness, our experienced counselors are here to support you on your journey to better mental health.</p>
    `,
  },
  {
    id: 2,
    title: "The Power of Mindfulness: Transform Your Daily Life",
    author: "Dr. Amelia Rodriguez",
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
    `,
  },
  {
    id: 3,
    title: "Building Stronger Relationships: Communication Tips for Couples",
    author: "Dr. Michael Chen",
    date: "2026-01-05",
    category: "Relationships",
    image: "/couples-relationship-communication.jpg",
    readTime: "7 min read",
    content: `
      <h2>Why Communication Matters</h2>
      <p>Strong communication is the foundation of healthy relationships. It allows partners to express their needs, understand each other, and navigate conflicts constructively.</p>

      <h2>Key Communication Principles</h2>
      <ul>
        <li>Active Listening: Fully focus on understanding your partner</li>
        <li>Use "I" Statements: Express feelings without blame</li>
        <li>Avoid Defensiveness: Be open to feedback</li>
        <li>Validate Emotions: Acknowledge your partner's feelings</li>
        <li>Be Respectful: Even in disagreement, maintain respect</li>
      </ul>

      <h2>Practical Tips for Better Communication</h2>
      <p>Implement these strategies to strengthen your relationship:</p>
      <ol>
        <li>Schedule regular check-ins to discuss important matters</li>
        <li>Practice active listening without interrupting</li>
        <li>Share appreciations and gratitude regularly</li>
        <li>Address conflicts promptly and respectfully</li>
        <li>Spend quality time together</li>
      </ol>

      <p>If communication remains challenging, couples therapy can provide professional guidance and strategies.</p>
    `,
  },
]

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-primary hover:text-primary/80">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] w-full overflow-hidden bg-muted">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Article Content */}
        <article className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 text-balance">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={16} />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
              <span>{post.readTime}</span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-foreground font-medium">Share this article:</span>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Share2 size={20} className="text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Related Articles CTA */}
            <div className="mt-12 p-8 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">Need Professional Support?</h3>
              <p className="text-muted-foreground mb-6">
                If you're struggling with mental health concerns, our experienced therapists are here to help.
              </p>
              <Link
                href="/get-started"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
