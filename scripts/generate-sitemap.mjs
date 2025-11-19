// Generate sitemap.xml and robots.txt into ./dist
// Inputs (env):
// - SITE_URL (required)
// - cmsBaseUrl, cmsSiteId (optional; fallback to remote/local config.json)
// - STRAPI_API_TOKEN (optional)

import fs from 'node:fs/promises'
import path from 'node:path'

function log(...args) {
  console.log('[sitemap]', ...args)
}

function trimSlash(url) {
  return String(url || '').replace(/\/$/, '')
}

function ensureProtocol(url) {
  if (!url) return ''
  return /^https?:\/\//.test(url) ? url : `https://${url}`
}

async function readLocalConfig() {
  try {
    const txt = await fs.readFile(path.resolve('public/config.json'), 'utf8')
    return JSON.parse(txt)
  } catch (e) {
    return null
  }
}

async function readRemoteConfig(siteUrl) {
  try {
    const res = await fetch(`${trimSlash(siteUrl)}/config.json`, {
      headers: { accept: 'application/json' },
    })
    if (res.ok) return await res.json()
  } catch (e) {
    // ignore
  }
  return null
}

async function fetchAllBlogPosts(baseUrl, siteSlug, token) {
  const entries = []
  const pageSize = 100
  let page = 1
  const base = trimSlash(baseUrl)
  while (true) {
    const url = new URL('/api/blog-posts', ensureProtocol(base))
    const params = new URLSearchParams()
    params.set('filters[site][slug][$eq]', siteSlug)
    params.set('pagination[page]', String(page))
    params.set('pagination[pageSize]', String(pageSize))
    params.set('sort', 'updatedAt:desc')
    params.append('fields[0]', 'slug')
    params.append('fields[1]', 'updatedAt')
    params.append('fields[2]', 'publishedAt')
    url.search = params.toString()
    const res = await fetch(url, {
      headers: {
        accept: 'application/json',
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
    })
    if (!res.ok) {
      const body = await res.text()
      throw new Error(`Strapi request failed: ${res.status} ${body}`)
    }
    const json = await res.json()
    const arr = Array.isArray(json.data) ? json.data : []
    for (const item of arr) {
      const attrs = item.attributes || {}
      const slug = attrs.slug || item.slug
      if (!slug) continue
      const updatedAt = attrs.updatedAt || attrs.publishedAt || item.updatedAt || new Date().toISOString()
      entries.push({ slug, updatedAt })
    }
    const meta = json.meta?.pagination || {}
    const pageCount = meta.pageCount ?? (arr.length < pageSize ? page : page + 1)
    const curr = meta.page ?? page
    if (curr >= pageCount || arr.length < pageSize) break
    page++
    if (page > 1000) break // safety
  }
  return entries
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function buildSitemapXml(urls) {
  const lines = []
  lines.push('<?xml version="1.0" encoding="UTF-8"?>')
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
  for (const u of urls) {
    lines.push('  <url>')
    lines.push(`    <loc>${escapeXml(u.loc)}</loc>`)
    if (u.lastmod) lines.push(`    <lastmod>${escapeXml(u.lastmod)}</lastmod>`)
    if (u.changefreq) lines.push(`    <changefreq>${escapeXml(u.changefreq)}</changefreq>`)
    if (u.priority) lines.push(`    <priority>${escapeXml(u.priority)}</priority>`)
    lines.push('  </url>')
  }
  lines.push('</urlset>')
  return lines.join('\n')
}

async function main() {
  const siteUrlRaw = process.env.SITE_URL
  if (!siteUrlRaw || !String(siteUrlRaw).trim()) {
    console.error('SITE_URL 环境变量缺失。请设置站点的完整域名，例如 https://example.com')
    process.exit(1)
  }
  const siteUrl = ensureProtocol(trimSlash(String(siteUrlRaw).trim()))
  const token = process.env.STRAPI_API_TOKEN || ''

  const envCmsBaseUrl = process.env.cmsBaseUrl || ''
  const envCmsSiteId = process.env.cmsSiteId || ''

  const remoteCfg = await readRemoteConfig(siteUrl)
  const localCfg = await readLocalConfig()

  // Resolve CMS params: env -> remote -> local
  let cmsBaseUrl = (envCmsBaseUrl || remoteCfg?.apiEndpoints?.cmsBaseUrl || localCfg?.apiEndpoints?.cmsBaseUrl || '').trim()
  let cmsSiteId = (envCmsSiteId || remoteCfg?.apiEndpoints?.cmsSiteId || localCfg?.apiEndpoints?.cmsSiteId || '').trim()

  if (!cmsBaseUrl || !cmsSiteId) {
    log('警告：cmsBaseUrl 或 cmsSiteId 未提供，站点地图将仅包含静态页面。')
  }

  let posts = []
  if (cmsBaseUrl && cmsSiteId) {
    try {
      posts = await fetchAllBlogPosts(cmsBaseUrl, cmsSiteId, token)
      log(`从 Strapi 拉取到 ${posts.length} 篇博客（站点：${cmsSiteId}）`)
    } catch (e) {
      console.warn('拉取博客失败：', e.message || e)
    }
  }

  const nowIso = new Date().toISOString()
  const urls = []
  // Static pages
  urls.push({ loc: `${siteUrl}/`, lastmod: nowIso, changefreq: 'daily', priority: '1.0' })
  urls.push({ loc: `${siteUrl}/#/blog`, lastmod: nowIso, changefreq: 'daily', priority: '0.8' })
  // Dynamic blog details
  for (const p of posts) {
    urls.push({ loc: `${siteUrl}/#/blog/${p.slug}`, lastmod: p.updatedAt || nowIso, changefreq: 'weekly', priority: '0.7' })
  }

  await fs.mkdir('dist', { recursive: true })
  await fs.writeFile(path.join('dist', 'sitemap.xml'), buildSitemapXml(urls), 'utf8')
  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${trimSlash(siteUrl)}/sitemap.xml`,
    `Host: ${trimSlash(siteUrl).replace(/^https?:\/\//, '')}`,
  ].join('\n')
  await fs.writeFile(path.join('dist', 'robots.txt'), robotsTxt, 'utf8')

  log(`生成完成：${urls.length} 条 URL -> dist/sitemap.xml；已写入 robots.txt`)
}

main().catch((err) => {
  console.error('生成站点地图失败：', err)
  process.exit(1)
})