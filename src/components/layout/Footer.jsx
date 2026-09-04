import { Link } from 'react-router-dom'
import { emailAddress, whatsappUrl } from '../../utils/contact.js'

const linkedinUrl = 'https://www.linkedin.com/in/ashwin-james'
const githubUrl = 'https://github.com/ashwinpjames'
const instagramUrl = 'https://www.instagram.com/'
const xUrl = 'https://x.com/'
const redditUrl = 'https://www.reddit.com/'
const threadsUrl = 'https://www.threads.net/'
const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJn3EsesSYBK4RKmOOSOVoEI8'
const googleBusinessUrl = 'https://share.google/OIRIEsstXUcjmDEgr'

const socialLinks = [
  { label: 'X', url: xUrl, icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/></svg>' },
  { label: 'Instagram', url: instagramUrl, icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/></svg>' },
  { label: 'GitHub', url: githubUrl, icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.94.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.28-5.14 5.56.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75" fill="currentColor"/></svg>' },
  { label: 'Reddit', url: redditUrl, icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.5c0-1.1-.9-2-2-2-.54 0-1.03.22-1.39.57-1.35-.94-3.1-1.55-5.05-1.65l.86-3.98 2.77.6a1.8 1.8 0 1 0 .2-1.03l-3.03-.66a.65.65 0 0 0-.77.49l-.96 4.51c-1.95.09-3.7.7-5.05 1.65A1.99 1.99 0 0 0 5 10.5c-1.1 0-2 .9-2 2 0 .8.47 1.49 1.14 1.81-.04.23-.06.46-.06.69 0 2.82 3.55 5.1 7.92 5.1s7.92-2.28 7.92-5.1c0-.23-.02-.46-.06-.69A2 2 0 0 0 21 12.5ZM8.1 13.7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm7.83 4.01c-.96.9-2.52 1.34-3.93 1.34s-2.97-.44-3.93-1.34a.55.55 0 0 1 .75-.8c.71.67 1.91 1.05 3.18 1.05s2.47-.38 3.18-1.05a.55.55 0 1 1 .75.8Zm-.03-1.51a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" fill="currentColor"/></svg>' },
  { label: 'Threads', url: threadsUrl, icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.7 20.7c-4.8 0-8.2-3.12-8.2-8.63 0-5.5 3.16-8.77 8.05-8.77 4.42 0 7.1 2.23 7.57 6.12l-2.24.35c-.38-2.65-2.07-4.1-5.3-4.1-3.55 0-5.77 2.19-5.77 6.38 0 4.16 2.17 6.49 5.96 6.49 3.16 0 5.08-1.63 5.08-4.02 0-1.99-1.22-3.14-3.32-3.14-1.63 0-2.75.7-2.75 1.84 0 1.03.83 1.65 2.16 1.65 1.08 0 2.04-.42 2.81-1.18-.23 3.24-1.82 5.01-4.05 5.01-2.02 0-3.32-1.03-3.32-2.72 0-2.06 1.75-3.31 4.65-3.31 1.14 0 2.15.2 3.02.57-.32-2.13-1.68-3.3-4.12-3.3-2.15 0-3.57 1.04-4.07 3.04l-2.13-.5c.73-2.99 2.98-4.74 6.28-4.74 4.18 0 6.55 2.24 6.68 6.25 2.14 1.01 3.34 2.79 3.34 5.24 0 3.64-2.88 6.99-7.37 6.99Z" fill="currentColor"/></svg>' },
  { label: 'LinkedIn', url: linkedinUrl, icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.15 3.25A2.15 2.15 0 1 1 5.14 7.55a2.15 2.15 0 0 1 .01-4.3ZM3.3 8.8h3.7V20.7H3.3V8.8Zm5.95 0h3.55v1.63h.05c.49-.94 1.69-1.93 3.48-1.93 3.72 0 4.41 2.45 4.41 5.64v6.56h-3.7v-5.82c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.08v5.92h-3.61V8.8Z" fill="currentColor"/></svg>' }
]

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
      </div>
    </div>

    <div className="container footer-bottom">
      <span>© {new Date().getFullYear()} Ashwin James. All rights reserved.</span>
      <div className="footer-social-icons" aria-label="Social links">
        {socialLinks.map(({ label, url, icon }) => <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label} dangerouslySetInnerHTML={{ __html: icon }} />)}
      </div>
      <div className="footer-bottom-links">
        <Link to="/privacy">Privacy policy</Link>
        <Link to="/terms">Terms & conditions</Link>
        <Link to="/sitemap.xml">Sitemap</Link>
      </div>
    </div>
  </footer>
}
