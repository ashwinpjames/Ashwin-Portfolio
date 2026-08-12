import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  return <article className="blog-card"><div className="blog-card-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><Link to={`/blog/${post.slug}`} className="blog-card-link">Read article <span>→</span></Link></article>
}
