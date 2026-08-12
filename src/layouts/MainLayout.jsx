import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import MobileActionBar from '../components/layout/MobileActionBar.jsx'

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <MobileActionBar />
      <Footer />
    </>
  )
}
