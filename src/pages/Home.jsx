import { siteUrl } from '../seo.js'
import Hero from '../components/home/Hero.jsx'
import ProblemSection from '../components/home/ProblemSection.jsx'
import BestFit from '../components/home/BestFit.jsx'
import Results from '../components/home/Results.jsx'
import AboutPreview from '../components/home/AboutPreview.jsx'
import Approach from '../components/home/Approach.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import Process from '../components/home/Process.jsx'
import CaseStudiesPreview from '../components/home/CaseStudiesPreview.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import FAQ from '../components/home/FAQ.jsx'
import Insights from '../components/home/Insights.jsx'
import ResourceLead from '../components/home/ResourceLead.jsx'
import HomeCTA from '../components/home/HomeCTA.jsx'
import ExpertiseTags from '../components/home/ExpertiseTags.jsx'

export default function Home() {
  return <main><script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Ashwin James', url: `${siteUrl}/`, inLanguage: 'en', publisher: { '@id': `${siteUrl}/#person` } })}</script><Hero /><ProblemSection /><BestFit /><Results /><AboutPreview /><Approach /><ServicesPreview /><Process /><CaseStudiesPreview /><Testimonials /><FAQ /><Insights /><ResourceLead /><ExpertiseTags /><HomeCTA /></main>
}
