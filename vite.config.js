import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import vitePrerender from 'vite-plugin-prerender'

const prerenderRoutes = [
  '/',
  '/about',
  '/services',
  '/services/meta-ads',
  '/services/performance-marketing',
  '/services/lead-generation',
  '/services/cro',
  '/services/whatsapp-marketing',
  '/services/hubspot',
  '/services/wordpress',
  '/services/website-development',
  '/case-studies',
  '/case-studies/crm-sales-qualified-lead',
  '/case-studies/meta-pixel-capi-signal-loss',
  '/resources',
  '/resources/campaign-budget-calculator',
  '/resources/utm-builder',
  '/resources/meta-ads-launch-checklist',
  '/resources/lead-quality-framework',
  '/resources/blog-prompt-architect',
  '/blog',
  '/blog/creative-is-the-new-targeting',
  '/blog/ctr-explained',
  '/blog/cpm-explained',
  '/blog/lead-generation-right-leads',
  '/blog/increase-average-order-value',
  '/blog/content-angles-strategy',
  '/blog/how-meta-ads-algorithm-works',
  '/blog/hormozi-meta-ads-strategy',
  '/blog/more-leads-revenue-didnt-move',
  '/blog/seo-ai-search-entity-authority-2026',
  '/blog/marketing-concepts-modern-marketers-should-know',
  '/blog/meta-ads-generating-leads-but-not-sales',
  '/blog/freelance-marketing-consultant-uae',
  '/blog/paid-ads-specialist-uae',
  '/blog/performance-marketing-specialist',
  '/contact',
]

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.resolve(process.cwd(), 'dist'),
      indexPath: path.resolve(process.cwd(), 'dist', 'index.html'),
      routes: prerenderRoutes,
      renderer: new vitePrerender.PuppeteerRenderer({
        headless: true,
        maxConcurrentRoutes: 2,
        renderAfterElementExists: '#root > main',
      }),
    }),
  ],
})
