import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import MobileActionBar from '../components/layout/MobileActionBar.jsx'
import RouteMeta from '../components/layout/RouteMeta.jsx'
import CursorGlow from '../components/layout/CursorGlow.jsx'
import ScrollToTop from '../components/layout/ScrollToTop.jsx'

export default function MainLayout() {
  return <><RouteMeta /><ScrollToTop /><CursorGlow /><a className="skip-link" href="#page-content">Skip to content</a><Header /><div id="page-content"><Outlet /></div><MobileActionBar /><Footer /></>
}
