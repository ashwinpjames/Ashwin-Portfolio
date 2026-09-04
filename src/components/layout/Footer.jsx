import { Link } from 'react-router-dom'
import { emailAddress } from '../../utils/contact.js'

const googleBusinessUrl = 'https://maps.google.com/maps?cid=10308854881025155882'
const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJn3EsesSYBK4RKmOOSOVoEI8'

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link to="/" className="footer-brand">ASHWIN<span>.</span></Link><p>Performance marketing and growth systems for businesses ready to create a more predictable pipeline.</p><div className="footer-social"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></div></div><div><h3>Explore</h3><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/case-studies">Case studies</Link><Link to="/blog">Insights</Link></div><div><h3>Services</h3><Link to="/services">Performance marketing</Link><Link to="/services">Landing pages & CRO</Link><Link to="/services">Analytics</Link><Link to="/services">CRM automation</Link></div><div><h3>Google Business</h3><p>Find my business profile, location and public reviews on Google.</p><a href={googleBusinessUrl} target="_blank" rel="noreferrer">View Google Business Profile ↗</a><a href={googleReviewUrl} target="_blank" rel="noreferrer">Leave a Google review ↗</a><a href={`mailto:${emailAddress}`}>Get in touch →</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Ashwin James. All rights reserved.</span><span><a href="#">Privacy policy</a><a href="#">Terms & conditions</a></span></div></footer>
}
