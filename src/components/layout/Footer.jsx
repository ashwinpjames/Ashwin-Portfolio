import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="footer-brand">ASHWIN<span>.</span></Link>
          <p>Performance marketing, analytics and growth systems.</p>
        </div>
        <p>© {new Date().getFullYear()} Ashwin James. All rights reserved.</p>
      </div>
    </footer>
  )
}
