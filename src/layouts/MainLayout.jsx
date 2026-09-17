import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import MobileActionBar from '../components/layout/MobileActionBar.jsx'
import RouteMeta from '../components/layout/RouteMeta.jsx'
import CursorGlow from '../components/layout/CursorGlow.jsx'
import ScrollToTop from '../components/layout/ScrollToTop.jsx'
import TrustpilotBadge from '../components/layout/TrustpilotBadge.jsx'
import '../styles/trustpilot-badge.css'

export default function MainLayout() {
  const location = useLocation()
  const isBlogArticle = location.pathname.startsWith('/blog/')

  return <>
    <RouteMeta />
    <ScrollToTop />
    <CursorGlow />
    <a className="skip-link" href="#page-content">Skip to content</a>
    <Header />
    <div id="page-content"><Outlet /></div>
    {isBlogArticle && <div className="blog-home-link-note">
      Looking for a <a href="https://www.ashwinjames.com/">Performance Marketing Specialist</a> in the UAE? Explore my approach and services.
    </div>}
    <TrustpilotBadge />
    <MobileActionBar />
    <Footer />
  </>
}
