import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import CrmCaseStudy from './pages/CrmCaseStudy.jsx'
import Resources from './pages/Resources.jsx'
import CampaignBudgetCalculator from './pages/CampaignBudgetCalculator.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

export default function App() {
  return <Routes><Route element={<MainLayout />}><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/resume" element={<Resume />} /><Route path="/services" element={<Services />} /><Route path="/services/:slug" element={<ServiceDetail />} /><Route path="/case-studies" element={<CaseStudies />} /><Route path="/case-studies/crm-sales-qualified-lead" element={<CrmCaseStudy />} /><Route path="/resources" element={<Resources />} /><Route path="/resources/campaign-budget-calculator" element={<CampaignBudgetCalculator />} /><Route path="/blog" element={<Blog />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<PlaceholderPage />} /></Route></Routes>
}
