import React, { createContext, useContext, useEffect } from 'react'

export interface AppConfig {
  siteIdentity?: {
    name?: string
    logoUrl?: string
  }
  theming?: {
    primaryColor?: string
  }
  slogan?: string
  hero?: { description?: string }
  seo?: { title?: string; description?: string }
  seoKeywords?: string
  gtmId?: string
  cta?: {
    title?: string
    description?: string
    primaryLabel?: string
    primaryHref?: string
    secondaryLabel?: string
    secondaryHref?: string
    emailPlaceholder?: string
  }
  footer?: {
    tagline?: string
    copyright?: string
    links?: { github?: string; twitter?: string; youtube?: string }
  }
  apiEndpoints?: {
    cmsBaseUrl?: string
    cmsSiteId?: string
  }
}

declare global {
  interface Window {
    APP_CONFIG: AppConfig
  }
}

const ConfigContext = createContext<AppConfig | null>(null)

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const config = window.APP_CONFIG || {}

  useEffect(() => {
    const name = config.siteIdentity?.name || config.seo?.title || 'App'
    if (name) {
      document.title = name
    }
    // Inject theme accent color as CSS variable
    const accent = config.theming?.primaryColor
    if (accent) {
      document.documentElement.style.setProperty('--accent-color', accent)
    }
    // Inject meta description
    const descContent = config.seo?.description || ''
    if (descContent) {
      let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', descContent)
    }
    // Inject meta keywords
    const keywordsContent = config.seoKeywords || ''
    if (keywordsContent) {
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', keywordsContent)
    }
  }, [config])

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
}

export const useConfig = (): AppConfig => {
  const context = useContext(ConfigContext)
  if (context === null) {
    throw new Error('useConfig 必须在 ConfigProvider 内部使用')
  }
  return context
}