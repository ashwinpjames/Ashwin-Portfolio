import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'

const lazyWithStyles = (loadPage, loadStyles = []) => lazy(async () => {
  await Promise.all(loadStyles.map((loadStyle) => loadStyle()))
  return loadPage()
})

const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const MetaAdsService = lazy(() => import('./pages/MetaAdsService.jsx'))
const PerformanceMarketingService = lazy(() => import('./pages/PerformanceMarketingService.jsx'))
const CaseStudies = lazy(() => import('./pages/CaseStudies.jsx'))
const CrmCaseStudy = lazy(() => import('./pages/CrmCaseStudy.jsx'))
const MetaTrackingCaseStudy = lazy(() => import('./pages/MetaTrackingCaseStudy.jsx'))
const MetaAdsAlgorithmBlog = lazyWithStyles(() => import('./pages/MetaAdsAlgorithmBlog.jsx'), [
  () => import('./styles/algorithm-blog.css'),
])
const HormoziMetaAdsStrategy = lazyWithStyles(() => import('./pages/HormoziMetaAdsStrategy.jsx'), [
  () => import('./styles/hormozi-blog.css'),
])
const LeadQualityBenchmarksBlog = lazyWithStyles(() => import('./pages/LeadQualityBenchmarksBlog.jsx'), [
  () => import('./styles/lead-quality-blog.css'),
])
const SeoAiSearchBlog = lazyWithStyles(() => import('./pages/SeoAiSearchBlog.jsx'), [
  () => import('./styles/seo-ai-blog.css'),
])
const MarketingConceptsBlog = lazyWithStyles(() => import('./pages/MarketingConceptsBlog.jsx'), [
  () => import('./styles/marketing-concepts-blog.css'),
])
const IncreaseAverageOrderValueBlog = lazyWithStyles(() => import('./pages/IncreaseAverageOrderValueBlog.jsx'), [
  () => import('./styles/increase-aov-blog.css'),
])
const ContentAnglesStrategyBlog = lazyWithStyles(() => import('./pages/ContentAnglesStrategyBlog.jsx'), [
  () => import('./styles/content-angles-blog.css'),
])
const CTRExplainedBlog = lazyWithStyles(() => import('./pages/CTRExplainedBlog.jsx'), [
  () => import('./styles/ctr-blog.css'),
])
const CPMExplainedBlog = lazyWithStyles(() => import('./pages/CPMExplainedBlog.jsx'), [
  () => import('./styles/cpm-blog.css'),
])
const LeadGenerationRightLeadsBlog = lazyWithStyles(() => import('./pages/LeadGenerationRightLeadsBlog.jsx'), [
  () => import('./styles/lead-generation-right-leads-blog.css'),
])
const CreativeIsTheNewTargetingBlog = lazyWithStyles(() => import('./pages/CreativeIsTheNewTargetingBlog.jsx'), [
  () => import('./styles/creative-targeting-blog.css'),
])
const Resources = lazy(() => import('./pages/Resources.jsx'))
const CampaignBudgetCalculator = lazy(() => import('./pages/CampaignBudgetCalculator.jsx'))
const UTMBuilder = lazy(() => import('./pages/UTMBuilder.jsx'))
const MetaAdsChecklist = lazy(() => import('./pages/MetaAdsChecklist.jsx'))
const LeadQualityFramework = lazy(() => import('./pages/LeadQualityFramework.jsx'))
const BlogPromptArchitect = lazyWithStyles(() => import('./pages/BlogPromptArchitect.jsx'), [
  () => import('./styles/blog-prompt-architect.css'),
])
const Blog = lazy(() => import('./pages/Blog.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const PlaceholderPage = lazy(() => import('./pages/PlaceholderPage.jsx'))

export default function App() {
  return <Suspense fallback={null}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/meta-ads" element={<MetaAdsService />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketingService />} />
        <Route path="/services/performance-growth-marketing" element={<Navigate to="/services/performance-marketing" replace />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/crm-sales-qualified-lead" element={<CrmCaseStudy />} />
        <Route path="/case-studies/meta-pixel-capi-signal-loss" element={<MetaTrackingCaseStudy />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/campaign-budget-calculator" element={<CampaignBudgetCalculator />} />
        <Route path="/resources/utm-builder" element={<UTMBuilder />} />
        <Route path="/resources/meta-ads-launch-checklist" element={<MetaAdsChecklist />} />
        <Route path="/resources/lead-quality-framework" element={<LeadQualityFramework />} />
        <Route path="/resources/blog-prompt-architect" element={<BlogPromptArchitect />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/creative-is-the-new-targeting" element={<CreativeIsTheNewTargetingBlog />} />
        <Route path="/blog/ctr-explained" element={<CTRExplainedBlog />} />
        <Route path="/blog/cpm-explained" element={<CPMExplainedBlog />} />
        <Route path="/blog/lead-generation-right-leads" element={<LeadGenerationRightLeadsBlog />} />
        <Route path="/blog/increase-average-order-value" element={<IncreaseAverageOrderValueBlog />} />
        <Route path="/blog/content-angles-strategy" element={<ContentAnglesStrategyBlog />} />
        <Route path="/blog/how-meta-ads-algorithm-works" element={<MetaAdsAlgorithmBlog />} />
        <Route path="/blog/hormozi-meta-ads-strategy" element={<HormoziMetaAdsStrategy />} />
        <Route path="/blog/more-leads-revenue-didnt-move" element={<LeadQualityBenchmarksBlog />} />
        <Route path="/blog/seo-ai-search-entity-authority-2026" element={<SeoAiSearchBlog />} />
        <Route path="/blog/marketing-concepts-modern-marketers-should-know" element={<MarketingConceptsBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PlaceholderPage />} />
      </Route>
    </Routes>
  </Suspense>
}
