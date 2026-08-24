import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import MetaAdsService from './pages/MetaAdsService.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import CrmCaseStudy from './pages/CrmCaseStudy.jsx'
import MetaTrackingCaseStudy from './pages/MetaTrackingCaseStudy.jsx'
import MetaAdsAlgorithmBlog from './pages/MetaAdsAlgorithmBlog.jsx'
import HormoziMetaAdsStrategy from './pages/HormoziMetaAdsStrategy.jsx'
import LeadQualityBenchmarksBlog from './pages/LeadQualityBenchmarksBlog.jsx'
import SeoAiSearchBlog from './pages/SeoAiSearchBlog.jsx'
import Resources from './pages/Resources.jsx'
import CampaignBudgetCalculator from './pages/CampaignBudgetCalculator.jsx'
import UTMBuilder from './pages/UTMBuilder.jsx'
import MetaAdsChecklist from './pages/MetaAdsChecklist.jsx'
import LeadQualityFramework from './pages/LeadQualityFramework.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

export default function App() {
  return <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/meta-ads" element={<MetaAdsService />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/crm-sales-qualified-lead" element={<CrmCaseStudy />} />
      <Route path="/case-studies/meta-pixel-capi-signal-loss" element={<MetaTrackingCaseStudy />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/campaign-budget-calculator" element={<CampaignBudgetCalculator />} />
      <Route path="/resources/utm-builder" element={<UTMBuilder />} />
      <Route path="/resources/meta-ads-launch-checklist" element={<MetaAdsChecklist />} />
      <Route path="/resources/lead-quality-framework" element={<LeadQualityFramework />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/how-meta-ads-algorithm-works" element={<MetaAdsAlgorithmBlog />} />
      <Route path="/blog/hormozi-meta-ads-strategy" element={<HormoziMetaAdsStrategy />} />
      <Route path="/blog/more-leads-revenue-didnt-move" element={<LeadQualityBenchmarksBlog />} />
      <Route path="/blog/seo-ai-search-entity-authority-2026" element={<SeoAiSearchBlog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PlaceholderPage />} />
    </Route>
  </Routes>
}
