import Hero from '../components/home/Hero.jsx'
import PlatformMarquee from '../components/home/PlatformMarquee.jsx'
import Results from '../components/home/Results.jsx'
import AboutPreview from '../components/home/AboutPreview.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import Process from '../components/home/Process.jsx'
import CaseStudiesPreview from '../components/home/CaseStudiesPreview.jsx'
import HomeCTA from '../components/home/HomeCTA.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <PlatformMarquee />
      <Results />
      <AboutPreview />
      <ServicesPreview />
      <Process />
      <CaseStudiesPreview />
      <HomeCTA />
    </main>
  )
}
