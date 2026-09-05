import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'

const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const MetaAdsService = lazy(() => import('./pages/MetaAdsService.jsx'))
const PerformanceMarketingService = lazy(() => import('./pages/PerformanceMarketingService.jsx'))
const CaseStudies = lazy(() => import('./pages/CaseStudies.jsx'))
const CrmCaseStudy = lazy(() => import('./pages/CrmCaseStudy.jsx'))
const MetaTrackingCaseStudy = lazy(() => import('./pages/MetaTrackingCaseStudy.jsx'))
const MetaAdsAlgorithmBlog = lazy(() => import('./pages/MetaAdsAlgorithmBlog.jsx'))
const HormoziMetaAdsStrategy = lazy(() => import('./pages/HormoziMetaAdsStrategy.jsx'))
const LeadQualityBenchmarksBlog = lazy(() => import('./pages/LeadQualityBenchmarksBlog.jsx'))
const SeoAiSearchBlog = lazy(() => import('./pages/SeoAiSearchBlog.jsx'))
const MarketingConceptsBlog = lazy(() => import('./pages/MarketingConceptsBlog.jsx'))
const IncreaseAverageOrderValueBlog = lazy(() => import('./pages/IncreaseAverageOrderValueBlog.jsx'))
const ContentAnglesStrategyBlog = lazy(() => import('./pages/ContentAnglesStrategyBlog.jsx'))
const CTRExplainedBlog = lazy(() => import('./pages/CTRExplainedBlog.jsx'))
const CPMExplainedBlog = lazy(() => import('./pages/CPMExplainedBlog.jsx'))
const LeadGenerationRightLeadsBlog = lazy(() => import('./pages/LeadGenerationRightLeadsBlog.jsx'))
const CreativeIsTheNewTargetingBlog = lazy(() => import('./pages/CreativeIsTheNewTargetingBlog.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const CampaignBudgetCalculator = lazy(() => import('./pages/CampaignBudgetCalculator.jsx'))
const UTMBuilder = lazy(() => import('./pages/UTMBuilder.jsx'))
const MetaAdsChecklist = lazy(() => import('./pages/MetaAdsChecklist.jsx'))
const LeadQualityFramework = lazy(() => import('./pages/LeadQualityFramework.jsx'))
const BlogPromptArchitect = lazy(() => import('./pages/BlogPromptArchitect.jsx'))
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
