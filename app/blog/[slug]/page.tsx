import { blogPosts } from "@/lib/blogData"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {

  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto p-6">

      <img
        src={post.image}
        className="w-full h-96 object-cover rounded"
      />

      <h1 className="text-4xl font-bold mt-6">
        {post.title}
      </h1>

      <p className="text-gray-500">
        {post.author} • {post.date}
      </p>

      <div
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

    </div>
  )
}