import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Services from './pages/Services.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import CrmCaseStudy from './pages/CrmCaseStudy.jsx'
import Resources from './pages/Resources.jsx'
import CampaignBudgetCalculator from './pages/CampaignBudgetCalculator.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

const placeholderRoutes = ['/blog', '/contact']

export default function App() {
  return <Routes><Route element={<MainLayout />}><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/resume" element={<Resume />} /><Route path="/services" element={<Services />} /><Route path="/case-studies" element={<CaseStudies />} /><Route path="/case-studies/crm-sales-qualified-lead" element={<CrmCaseStudy />} /><Route path="/resources" element={<Resources />} /><Route path="/resources/campaign-budget-calculator" element={<CampaignBudgetCalculator />} />{placeholderRoutes.map((path) => <Route key={path} path={path} element={<PlaceholderPage />} />)}<Route path="*" element={<PlaceholderPage />} /></Route></Routes>
}
