import { Link } from 'react-router-dom'
import { emailAddress, whatsappUrl } from '../../utils/contact.js'

const linkedinUrl = 'https://www.linkedin.com/in/ashwin-james'
const githubUrl = 'https://github.com/ashwinpjames'
const instagramUrl = 'https://www.instagram.com/'
const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJn3EsesSYBK4RKmOOSOVoEI8'
const googleBusinessUrl = 'https://share.google/OIRIEsstXUcjmDEgr'

export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand-column">
        <Link to="/" className="footer-brand">ASHWIN<span>.</span></Link>
        <p>Performance marketing and growth systems for businesses ready to create a more predictable pipeline.</p>
        <Link to="/contact" className="footer-primary-cta">Book a consultation <span>↗</span></Link>
      </div>

      <div>
        <h3>What I do</h3>
        <Link to="/services">Performance marketing</Link>
        <Link to="/services">Lead generation</Link>
        <Link to="/services">Landing pages & CRO</Link>
        <Link to="/services">Analytics</Link>
        <Link to="/services">CRM automation</Link>
      </div>

      <div>
        <h3>Who I am</h3>
        <Link to="/about">About</Link>
        <Link to="/case-studies">Case studies</Link>
        <Link to="/blog">Insights</Link>
        <Link to="/#testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <h3>Resources</h3>
        <Link to="/blog">Marketing insights</Link>
        <Link to="/blog">Articles</Link>
        <a href={googleBusinessUrl} target="_blank" rel="noreferrer">Google Business</a>
        <a href={googleReviewUrl} target="_blank" rel="noreferrer">Leave a Google review ↗</a>
      </div>

      <div className="footer-contact">
        <h3>Need help?</h3>
        <p>Dubai, United Arab Emirates</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href={`mailto:${emailAddress}`}>Email</a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>

    <div className="container footer-bottom">
      <span>© {new Date().getFullYear()} Ashwin James. All rights reserved.</span>
      <div className="footer-bottom-links">
        <Link to="/privacy">Privacy policy</Link>
        <Link to="/terms">Terms & conditions</Link>
        <Link to="/sitemap.xml">Sitemap</Link>
      </div>
      <div className="footer-social-icons" aria-label="Social links">
        <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
        <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>
      </div>
    </div>
  </footer>
}
