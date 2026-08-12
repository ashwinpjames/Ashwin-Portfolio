import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

const placeholderRoutes = [
  '/resume',
  '/services',
  '/case-studies',
  '/case-studies/crm-sales-qualified-lead',
  '/resources',
  '/resources/campaign-budget-calculator',
  '/blog',
  '/contact',
]

export default function App() {
  return <Routes><Route element={<MainLayout />}><Route path="/" element={<Home />} /><Route path="/about" element={<About />} />{placeholderRoutes.map((path) => <Route key={path} path={path} element={<PlaceholderPage />} />)}<Route path="*" element={<PlaceholderPage />} /></Route></Routes>
}
