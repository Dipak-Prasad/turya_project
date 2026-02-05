export const dynamic = "force-static"
export const dynamicParams = false

import { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogDetailClient from "./blog-client"

/* ------------------------------------------------------------------ */
/* BLOG DATA */
/* ------------------------------------------------------------------ */

const blogPosts = [
  {
    id: 1,
    slug: "understanding-anxiety",
    title: "Understanding Anxiety: Causes, Symptoms, and Coping Strategies",
    author: "Dr. Sarah Johnson",
    date: "2026-01-15",
    category: "Mental Health",
    image: "/anxiety-counselling-therapy.jpg",
    readTime: "5 min read",
    content: `...`,
  },
  {
    id: 2,
    slug: "power-of-mindfulness",
    title: "The Power of Mindfulness: Transform Your Daily Life",
    author: "Dr. Amelia Rodriguez",
    date: "2026-01-10",
    category: "Wellness",
    image: "/mindfulness-meditation-wellness.jpg",
    readTime: "6 min read",
    content: `...`,
  },
  {
    id: 3,
    slug: "building-stronger-relationships",
    title: "Building Stronger Relationships: Communication Tips for Couples",
    author: "Dr. Michael Chen",
    date: "2026-01-05",
    category: "Relationships",
    image: "/couples-relationship-communication.jpg",
    readTime: "7 min read",
    content: `...`,
  },
]

/* ------------------------------------------------------------------ */
/* STATIC PARAMS */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

/* ------------------------------------------------------------------ */
/* METADATA */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The blog post you are looking for does not exist.",
    }
  }

  const description = post.content.replace(/<[^>]*>/g, "").slice(0, 160)

  return {
    title: `${post.title} | Turya Wellness`,
    description,
    keywords: [
      post.category,
      "mental health",
      "therapy",
      "wellness",
      "counseling",
      "therapy blog",
    ],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [post.image],
    },
  }
}

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) notFound()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    description: post.content.replace(/<[^>]*>/g, "").slice(0, 160),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BlogDetailClient post={post} />
    </>
  )
}
