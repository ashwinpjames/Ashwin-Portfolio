import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import MobileActionBar from '../components/layout/MobileActionBar.jsx'
import RouteMeta from '../components/layout/RouteMeta.jsx'
import CursorGlow from '../components/layout/CursorGlow.jsx'
import ScrollToTop from '../components/layout/ScrollToTop.jsx'

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
    {isBlogArticle && <div style={{ maxWidth: '780px', margin: '0 auto', padding: '1.5rem 24px 2.5rem', textAlign: 'center', color: '#8f96ab', fontSize: '0.88rem', lineHeight: 1.7 }}>
      Looking for a <a href="https://www.ashwinjames.com/" style={{ color: '#7c86ff', fontWeight: 700 }}>performance marketing specialist</a> in the UAE? Explore my approach and services.
    </div>}
    <MobileActionBar />
    <Footer />
  </>
}
