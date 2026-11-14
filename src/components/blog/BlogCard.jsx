const refreshedSlugs = new Set(['best-performance-marketing-specialist', 'improve-lead-quality-connection-rates', 'google-ads-conversion-tracking', 'google-ads-vs-meta-ads', 'crm-lead-tracking-paid-ads', 'customer-acquisition-cost-vs-cpl'])
import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  return <article className="blog-card"><div className="blog-card-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p>{refreshedSlugs.has(post.slug) && <p className="editorial-update">Updated 14 November 2026</p>}<Link to={`/blog/${post.slug}`} className="blog-card-link">Read article <span>→</span></Link></article>
}
