import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blog.js'

export default function Insights() {
  const featuredSlugs = ['improve-lead-quality-connection-rates', 'crm-data-for-paid-ads', 'cpm-explained']
  const publishedPosts = featuredSlugs.map((slug) => blogPosts.find((post) => post.slug === slug && post.date !== 'Coming soon')).filter(Boolean)

  return <section id="insights" className="home-section insights-section">
    <div className="container">
      <div className="section-heading split-heading reveal-home">
        <div className="insights-heading"><p className="home-eyebrow">Insights</p><h2>Useful thinking for better growth decisions.</h2><Link className="text-link insights-all-link" to="/blog">View all insights <span>→</span></Link></div>
      </div>
      <div className="insights-grid">
        {publishedPosts.map((post) => <article className="insight-card reveal-home" key={post.slug}>
          <p>{post.category} · {post.readTime}</p><h3>{post.title}</h3><span>{post.excerpt}</span><Link to={`/blog/${post.slug}`}>Read article <span>→</span></Link>
        </article>)}
      </div>
    </div>
  </section>
}
