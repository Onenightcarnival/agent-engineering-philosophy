import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import { zhToEn } from './localeMap'
import './styles/cosmic.css'

const enToZh: Record<string, string> = Object.fromEntries(
  Object.entries(zhToEn).map(([zh, en]) => [en, zh]),
)

// 语言切换器只会替换 /en/ 前缀，但两个版本的文件名不同，
// 换出来的路径通常不存在。在 404 之前把它映射到真正的对应页。
function localeCounterpart(href: string, base: string): string | null {
  const url = new URL(href, 'http://localhost')
  let p = decodeURIComponent(url.pathname)
  if (p.startsWith(base)) p = '/' + p.slice(base.length)
  p = p.replace(/\.html$/, '')
  if (p.startsWith('/en/chapters/')) {
    if (p in enToZh) return null
    const mapped = zhToEn[p.slice(3)]
    return mapped ? base.slice(0, -1) + mapped + '.html' : null
  }
  if (p.startsWith('/chapters/')) {
    if (p in zhToEn) return null
    const mapped = enToZh['/en' + p]
    return mapped ? base.slice(0, -1) + mapped + '.html' : null
  }
  return null
}

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ router, siteData }) {
    if (typeof window === 'undefined') return
    const base = siteData.value.base
    router.onBeforeRouteChange = (to) => {
      const fixed = localeCounterpart(to, base)
      if (fixed) {
        router.go(fixed)
        return false
      }
    }
    const fixed = localeCounterpart(location.href, base)
    if (fixed) router.go(fixed)
  },
} satisfies Theme
