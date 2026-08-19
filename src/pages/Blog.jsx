import { blogPosts } from '../data/blog.js'
import BlogCard from '../components/blog/BlogCard.jsx'

export default function Blog() {
  return <main className="blog-page"><section className="blog-hero"><div className="container"><p className="blog-eyebrow">Insights</p><h1>Thinking clearly about <span>growth and marketing.</span></h1><p>Practical notes on performance marketing, analytics, lead generation, conversion and the systems that connect them.</p></div></section><section className="blog-library"><div className="container"><div className="blog-heading"><div><p className="blog-eyebrow">From the field</p><h2>Ideas worth testing.</h2></div><p>Original articles will live here as they are published. The structure is ready for real content without hardcoding posts into the page.</p></div><div className="blog-grid">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div></div></section></main>
}
