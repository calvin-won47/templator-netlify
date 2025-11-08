import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchBlogPosts, type BlogPostListItem } from '../lib/strapi'

const formatDate = (value: string | null): string => {
  if (!value) return ''
  const iso = String(value)
  const datePart = iso.includes('T') ? iso.split('T')[0] : iso.slice(0, 10)
  return datePart
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostListItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    let mounted = true
    fetchBlogPosts()
      .then((data) => {
        if (mounted) setPosts(data)
      })
      .catch((e: any) => {
        if (mounted) setError(e?.message || 'Error loading posts')
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [])

  if (loading) return <p className="p-4">Loading...</p>
  if (error) return <p className="p-4 text-red-400">{error}</p>

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/40">
            {post.coverImageUrl && (
              <img
                src={post.coverImageUrl}
                alt={post.title || ''}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">
                <Link to={`/blog/${post.slug || ''}`} className="hover:text-[#31E0C8]">
                  {post.title}
                </Link>
              </h2>
              <small className="text-gray-400">{formatDate(post.createdAt)}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogList