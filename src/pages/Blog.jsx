import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog.js'
import BlogCard from '../components/blog/BlogCard.jsx'

const newBlogPost = { slug: 'why-attribution-matters-performance-marketing', category: 'Performance Marketing', title: 'Why Attribution Matters in Performance Marketing', excerpt: 'Understand marketing attribution, attribution models and how attribution should influence performance marketing decisions.', date: 'Sep 15, 2026', readTime: '14 min read' }

const latestBlogPost = { slug: 'roas-vs-roi', category: 'Performance Marketing', title: 'ROAS vs ROI: What Is the Difference?', excerpt: 'Understand the difference between ROAS and ROI, how to calculate each metric, when to use them and how they affect advertising decisions.', date: 'Sep 15, 2026', readTime: '12 min read' }

export default function Blog() {
  const posts = [newBlogPost, latestBlogPost, ...blogPosts.filter((post) => post.slug !== newBlogPost.slug && post.slug !== latestBlogPost.slug)]
  const publishedPosts = posts.filter((post) => post.date !== 'Coming soon')
  const latestPost = publishedPosts[0]
  const categories = ['Performance Marketing', 'Marketing Psychology', 'Analytics', 'Lead Gen', 'CRO']

  return <main className="blog-page">
    <section className="blog-hero">
      <div className="blog-orb blog-orb-a" aria-hidden="true" />
      <div className="blog-orb blog-orb-b" aria-hidden="true" />

      <div className="container blog-hero-inner">
        <div className="blog-hero-copy">
          <div className="blog-hero-eyebrow">
            <span className="blog-pulse-dot" aria-hidden="true" />
            <span>INSIGHTS</span>
          </div>

          <h1>
            <span className="blog-hero-line-one">Thinking clearly about</span>
            <span className="blog-hero-line-two">growth and marketing.</span>
          </h1>
          <p className="blog-hero-sub">Practical notes on performance marketing, analytics, lead generation, conversion and the systems that connect them.</p>

          <div className="blog-hero-pills" aria-label="Blog topics">
            {categories.map((category) => <span key={category}>{category}</span>)}
          </div>
        </div>

        {latestPost && <div className="blog-post-stack" aria-label="Latest article">
          <div className="blog-stack-card blog-stack-back-two" aria-hidden="true" />
          <div className="blog-stack-card blog-stack-back-one" aria-hidden="true" />
          <Link to={`/blog/${latestPost.slug}`} className="blog-stack-card blog-stack-front">
            <div className="blog-latest-tag"><span />LATEST POST</div>
            <h3>{latestPost.title}</h3>
          </Link>
        </div>}
      </div>
    </section>

    <section className="blog-library">
      <div className="container">
        <div className="blog-heading"><div><p className="blog-eyebrow">From the field</p><h2>Ideas worth testing.</h2></div><p>Original articles on performance marketing, analytics, lead generation, conversion and the systems behind sustainable growth.</p></div>
        <div className="blog-grid">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
      </div>
    </section>
  </main>
}
