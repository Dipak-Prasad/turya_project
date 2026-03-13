import Link from "next/link"
import { blogPosts } from "@/lib/blogData"

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid md:grid-cols-2 gap-8">

        {blogPosts.map((post) => (
          <div key={post.slug} className="border rounded-lg p-4">

            <img
              src={post.image}
              className="w-full h-48 object-cover rounded"
            />

            <h2 className="text-xl font-bold mt-4">
              {post.title}
            </h2>

            <p className="text-gray-500 text-sm">
              {post.date} • {post.readTime}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 mt-2 block"
            >
              Read More →
            </Link>

          </div>
        ))}

      </div>

    </div>
  )
}