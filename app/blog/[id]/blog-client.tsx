"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
  content: string
}

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Image */}
        <div className="relative h-80 sm:h-96 md:h-[500px] w-full overflow-hidden bg-muted">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
          {/* Overlay Title for Mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden bg-gradient-to-t from-black/80 to-transparent">
            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold mb-3">{post.category}</span>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium">
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
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <style>{`
                .prose h2 { font-size: 1.875rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1.5rem; color: var(--color-foreground); }
                .prose h3 { font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: var(--color-foreground); }
                .prose p { color: rgba(var(--color-foreground-rgb), 0.95); line-height: 2rem; margin-bottom: 1.5rem; }
                .prose ul, .prose ol { color: rgba(var(--color-foreground-rgb), 0.95); margin-bottom: 1.5rem; }
                .prose li { margin-bottom: 0.75rem; }
                .prose strong { font-weight: 600; color: var(--color-foreground); }
              `}</style>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-foreground font-semibold text-lg">Share this article:</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`
                      window.open(url, "_blank")
                    }}
                    className="p-3 hover:bg-primary/10 rounded-lg transition-all hover:text-primary"
                    title="Share on Twitter"
                  >
                    <Share2 size={20} className="text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Author Card */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">{post.author}</h4>
                  <p className="text-muted-foreground text-sm">Mental Health Professional</p>
                </div>
              </div>
            </div>

            {/* Related Articles CTA */}
            <div className="mt-12 p-8 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Continue Your Journey</h3>
              <p className="text-muted-foreground mb-6">
                Explore more articles and insights to support your mental health and wellness.
              </p>
              <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium">
                Explore More Articles <ArrowLeft size={18} className="rotate-180" />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
