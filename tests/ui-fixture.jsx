import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link } from 'react-router-dom'
import RouteMeta from '../src/components/layout/RouteMeta.jsx'
import ContactTracking from '../src/components/layout/ContactTracking.jsx'
import AILeadChat from '../src/components/AILeadChat.jsx'
import ContactForm from '../src/components/contact/ContactForm.jsx'
import CaseStudyLeadForm from '../src/components/case-studies/CaseStudyLeadForm.jsx'
import ResourceLead from '../src/components/home/ResourceLead.jsx'
export { delivery } from './emailjs-mock.js'

export function mount(container) {
  const root = createRoot(container)
  root.render(<BrowserRouter><RouteMeta /><ContactTracking />
    <Link to="/blog/roas-vs-roi">ROAS article</Link>
    <Link to="/blog/why-attribution-matters-performance-marketing">Attribution article</Link>
    <Link to="/about/">About with slash</Link>
    <Link to="/not-a-page">Unknown page</Link>
    <a href="https://wa.me/123?text=private">Test WhatsApp</a>
    <ContactForm /><CaseStudyLeadForm /><ResourceLead /><AILeadChat />
  </BrowserRouter>)
  return root
}
