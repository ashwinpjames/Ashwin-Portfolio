import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import MobileActionBar from '../components/layout/MobileActionBar.jsx'
import RouteMeta from '../components/layout/RouteMeta.jsx'

export default function MainLayout() {
  return <><RouteMeta /><a className="skip-link" href="#main">Skip to content</a><Header /><Outlet /><MobileActionBar /><Footer /></>
}
