import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog.js'
import BlogCard from '../components/blog/BlogCard.jsx'

export default function Blog() {
  const publishedPosts = blogPosts.filter((post) => post.date !== 'Coming soon')
  const latestPost = publishedPosts[0]
  const articleCount = publishedPosts.length
  const categories = ['Performance Marketing', 'Analytics', 'Lead Gen', 'CRO']

  return <main className="blog-page">
    <section className="blog-hero">
      <div className="blog-orb blog-orb-a" aria-hidden="true" />
      <div className="blog-orb blog-orb-b" aria-hidden="true" />

      <div className="container blog-hero-inner">
        <div className="blog-hero-copy">
          <div className="blog-hero-eyebrow">
            <span className="blog-pulse-dot" aria-hidden="true" />
            <span>INSIGHTS</span>
            <span className="blog-hero-count">· {articleCount} {articleCount === 1 ? 'article' : 'articles'} · updated as published</span>
          </div>

          <h1>Thinking clearly about<br /><span>growth and marketing.</span></h1>
          <p className="blog-hero-sub">Practical notes on performance marketing, analytics, lead generation, conversion and the systems that connect them.</p>

          <div className="blog-hero-pills" aria-label="Blog topics">
            {categories.map((category) => <span key={category}>{category}</span>)}
          </div>
        </div>

        {latestPost && <div className="blog-post-stack" aria-label="Latest article">
          <div className="blog-stack-count">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><rect x="1" y="4" width="9" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.1" /><path d="M3.5 4V2.5C3.5 1.94772 3.94772 1.5 4.5 1.5H10.5C11.0523 1.5 11.5 1.94772 11.5 2.5V9.5C11.5 10.0523 11.0523 10.5 10.5 10.5H10" stroke="currentColor" strokeWidth="1.1" /></svg>
            {articleCount} {articleCount === 1 ? 'article' : 'articles'}
          </div>
          <div className="blog-stack-card blog-stack-back-two" aria-hidden="true" />
          <div className="blog-stack-card blog-stack-back-one" aria-hidden="true" />
          <Link to={`/blog/${latestPost.slug}`} className="blog-stack-card blog-stack-front">
            <div className="blog-latest-tag"><span />LATEST POST</div>
            <h3>{latestPost.title}</h3>
            <p>{latestPost.excerpt}</p>
            <div className="blog-latest-meta"><span>{latestPost.date}</span><span>{latestPost.readTime}</span></div>
          </Link>
        </div>}

        <div className="blog-scroll-cue" aria-hidden="true">
          <span>Scroll to explore</span>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none"><path d="M7 1V17M7 17L1 11M7 17L13 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </section>

    <section className="blog-library">
      <div className="container">
        <div className="blog-heading"><div><p className="blog-eyebrow">From the field</p><h2>Ideas worth testing.</h2></div><p>Original articles on performance marketing, analytics, lead generation, conversion and the systems behind sustainable growth.</p></div>
        <div className="blog-grid">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
      </div>
    </section>
  </main>
}
