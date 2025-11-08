export const API_URL = 'https://2amcreations.com'
export const SITE_SLUG = 'xmyxyswkj'

export function buildUrl(path: string): string {
  return `${API_URL}${path}`
}

function normalizeImage(media: any): string | null {
  if (!media) return null
  // Strapi v5 flattened media
  if (media.url) return buildUrl(media.url)
  // Strapi v4 nested media
  const url = media?.data?.attributes?.url
  return url ? buildUrl(url) : null
}

function normalizeField<T = any>(item: any, key: string): T | null {
  // Prefer flattened (v5), fallback to attributes (v4)
  return (item?.[key] as T) ?? (item?.attributes?.[key] as T) ?? null
}

export type BlogPostListItem = {
  id: number
  slug: string | null
  title: string | null
  createdAt: string | null
  coverImageUrl: string | null
  excerpt: string | null
}

export async function fetchBlogPosts(): Promise<BlogPostListItem[]> {
  const query = `/api/blog-posts?populate=coverImage&filters[site][slug][$eq]=${SITE_SLUG}&sort=createdAt:desc`
  const res = await fetch(buildUrl(query))
  if (!res.ok) throw new Error('Failed to fetch blog posts')
  const json = await res.json()
  const data = Array.isArray(json?.data) ? json.data : []
  return data.map((item: any) => ({
    id: item.id,
    slug: normalizeField<string>(item, 'slug'),
    title: normalizeField<string>(item, 'title'),
    createdAt: normalizeField<string>(item, 'createdAt'),
    coverImageUrl: normalizeImage(normalizeField(item, 'coverImage')),
    excerpt: normalizeField<string>(item, 'excerpt'),
  }))
}

export type BlogDetail = {
  id: number
  slug: string | null
  title: string | null
  createdAt: string | null
  contentMarkdown: string
  coverImageUrl: string | null
}

export async function fetchBlogBySlug(slug: string): Promise<BlogDetail | null> {
  const query = `/api/blog-posts?populate=*&filters[slug][$eq]=${slug}&filters[site][slug][$eq]=${SITE_SLUG}`
  const res = await fetch(buildUrl(query))
  if (!res.ok) throw new Error('Failed to fetch blog detail')
  const json = await res.json()
  const item = json?.data?.[0]
  if (!item) return null
  return {
    id: item.id,
    slug: normalizeField<string>(item, 'slug'),
    title: normalizeField<string>(item, 'title'),
    createdAt: normalizeField<string>(item, 'publishedAt') || normalizeField<string>(item, 'createdAt'),
    contentMarkdown: normalizeField<string>(item, 'contentMarkdown') || '',
    coverImageUrl: normalizeImage(normalizeField(item, 'coverImage')),
  }
}