import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { fetchBlogBySlug, type BlogDetail as BlogDetailType } from '../lib/strapi'

const formatDate = (value: string | null): string => {
  if (!value) return ''
  const iso = String(value)
  const datePart = iso.includes('T') ? iso.split('T')[0] : iso.slice(0, 10)
  return datePart
}

const BlogDetail: React.FC = () => {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogDetailType | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    let mounted = true
    if (!slug) {
      setError('Missing slug')
      setLoading(false)
      return
    }
    fetchBlogBySlug(slug)
      .then((data) => {
        if (mounted) setPost(data)
      })
      .catch((e: any) => {
        if (mounted) setError(e?.message || 'Error loading blog')
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [slug])

  if (loading) return <p className="p-4">Loading...</p>
  if (error) return <p className="p-4 text-red-400">{error}</p>
  if (!post) return <p className="p-4">Not found</p>

  return (
    <article className="container mx-auto px-4 py-10 prose prose-invert max-w-3xl">
      <h1 className="text-3xl font-bold mb-2 not-prose">{post.title}</h1>
      <small className="text-gray-400 not-prose">{formatDate(post.createdAt)}</small>
      <div className="mt-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.contentMarkdown}</ReactMarkdown>
      </div>
    </article>
  )
}

export default BlogDetail