import { Outlet, useLocation } from 'react-router-dom'
import ContentNavigation from '../components/layout/ContentNavigation.jsx'
import ContactTracking from '../components/layout/ContactTracking.jsx'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import MobileActionBar from '../components/layout/MobileActionBar.jsx'
import RouteMeta from '../components/layout/RouteMeta.jsx'
import CursorGlow from '../components/layout/CursorGlow.jsx'
import ScrollToTop from '../components/layout/ScrollToTop.jsx'
import AILeadChat from '../components/AILeadChat.jsx'

export default function MainLayout() {
  const location = useLocation()
  const isBlogArticle = location.pathname.startsWith('/blog/')

  return <>
    <RouteMeta />
    <ContactTracking />
    <ScrollToTop />
    <CursorGlow />
    <a className="skip-link" href="#page-content">Skip to content</a>
    <Header />
    <div id="page-content"><Outlet /></div>
    {isBlogArticle && <div className="blog-home-link-note">
      Looking for a <a href="https://www.ashwinjames.com/">Performance Marketing Specialist</a> in the UAE? Explore my approach, review the <a href="/services/performance-marketing-services">performance marketing services</a>, or <a href="/contact">discuss your business goals</a>.
    </div>}
    <ContentNavigation />
    <MobileActionBar />
    <Footer />
    <AILeadChat />
  </>
}
