import '../components/blog/editorial.css'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog.js'
import BlogCard from '../components/blog/BlogCard.jsx'

const andromedaUpdatePost = { slug: 'meta-andromeda-update-2026', category: 'Meta Ads', title: 'Meta Andromeda Update 2026: What Changed and What Advertisers Should Do', excerpt: 'A practical explanation of Meta’s next-generation Andromeda retrieval engine, the October 2026 technical update and its implications for creative testing and campaign measurement.', date: 'Nov 4, 2026', readTime: '10 min read' }

const bestSpecialistPost = { slug: 'best-performance-marketing-specialist', category: 'Performance Marketing', title: 'Best Performance Marketing Specialist: How to Choose the Right Expert in Dubai', excerpt: 'Learn how to evaluate performance marketing expertise, qualified lead metrics, CRM analysis and case studies before hiring a specialist.', date: 'Oct 19, 2026', readTime: '12 min read' }

const newBlogPost = { slug: 'why-attribution-matters-performance-marketing', category: 'Performance Marketing', title: 'Why Attribution Matters in Performance Marketing', excerpt: 'Understand marketing attribution, attribution models and how attribution should influence performance marketing decisions.', date: 'Sep 15, 2026', readTime: '14 min read' }

const latestBlogPost = { slug: 'roas-vs-roi', category: 'Performance Marketing', title: 'ROAS vs ROI: What Is the Difference?', excerpt: 'Understand the difference between ROAS and ROI, how to calculate each metric, when to use them and how they affect advertising decisions.', date: 'Sep 15, 2026', readTime: '12 min read' }

const getPostTimestamp = (date) => {
  if (!date || date === 'Coming soon') return 0
  const timestamp = new Date(date).getTime()
  return Number.isNaN(timestamp) ? 0 : timestamp
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All categories')
  const [sortOrder, setSortOrder] = useState('newest')

  useEffect(() => {
    const button = document.getElementById('ashwin-preferred-source-btn')
    if (!button) return

    const setupPreferredSource = (preferredSource) => {
      preferredSource.init({
        theme: 'light',
        lang: 'en',
      })

      button.onclick = () => {
        preferredSource.addPreferredSource()
      }
    }

    const queue = (self.PREFERRED_SOURCE = self.PREFERRED_SOURCE || [])
    queue.push(setupPreferredSource)

    const existingScript = document.querySelector('script[data-google-preferred-source]')
    if (!existingScript) {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://news.google.com/swg/js/v1/publisher.js'
      script.setAttribute('preferred-sources-control', 'manual')
      script.setAttribute('data-google-preferred-source', 'true')
      document.head.appendChild(script)
    }

    return () => {
      button.onclick = null
    }
  }, [])

  const posts = [andromedaUpdatePost, bestSpecialistPost, newBlogPost, latestBlogPost, ...blogPosts.filter((post) => ![andromedaUpdatePost.slug, bestSpecialistPost.slug, newBlogPost.slug, latestBlogPost.slug].includes(post.slug))]
  const publishedPosts = posts.filter((post) => post.date !== 'Coming soon')
  const latestPost = [...publishedPosts].sort((a, b) => getPostTimestamp(b.date) - getPostTimestamp(a.date))[0]
  const categories = [...new Set(publishedPosts.map((post) => post.category).filter(Boolean))].sort()
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    const matchingPosts = publishedPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'All categories' || post.category === selectedCategory
      const searchableText = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase()
      return matchesCategory && (!query || searchableText.includes(query))
    })

    return [...matchingPosts].sort((a, b) => {
      if (sortOrder === 'oldest') return getPostTimestamp(a.date) - getPostTimestamp(b.date)
      if (sortOrder === 'title-asc') return a.title.localeCompare(b.title)
      if (sortOrder === 'title-desc') return b.title.localeCompare(a.title)
      return getPostTimestamp(b.date) - getPostTimestamp(a.date)
    })
  }, [publishedPosts, searchQuery, selectedCategory, sortOrder])

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

          <nav className="editorial-reading-path" aria-label="Business acquisition reading path"><h2>Start with your business problem</h2><ol>
<li><Link to="/blog/performance-marketing-services-checklist">Choosing marketing support</Link></li>
<li><Link to="/blog/improve-lead-quality-connection-rates">Leads are not becoming clients</Link></li>
<li><Link to="/blog/google-ads-conversion-tracking">Conversions are not measured reliably</Link></li>
<li><Link to="/blog/landing-page-optimisation-lead-generation">Visitors are not enquiring</Link></li>
</ol></nav>
<div className="blog-hero-pills" aria-label="Blog topics">
            {categories.map((category) => <span key={category}>{category}</span>)}
          </div>

          <button
            id="ashwin-preferred-source-btn"
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '24px',
              minHeight: '42px',
              padding: '9px 16px',
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontFamily: 'inherit',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Add Ashwin James as a preferred source on Google"
          >
            ☆ Add as a Preferred Source on Google
          </button>
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
<div className="blog-controls" role="search" aria-label="Search and filter articles">
          <label className="blog-search-field">
            <span className="sr-only">Search articles</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 4 4" /></svg>
            <input type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search articles, topics or keywords..." />
            {searchQuery && <button type="button" onClick={() => setSearchQuery('')} aria-label="Clear search">×</button>}
          </label>
          <label className="blog-control-select">
            <span>Category</span>
            <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
              <option>All categories</option>
              {categories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </label>
          <label className="blog-control-select">
            <span>Sort by</span>
            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
            </select>
          </label>
        </div>
        <div className="blog-results-summary" aria-live="polite">
          <span>{filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found</span>
          {(searchQuery || selectedCategory !== 'All categories') && <button type="button" onClick={() => { setSearchQuery(''); setSelectedCategory('All categories') }}>Clear filters</button>}
        </div>
        {filteredPosts.length > 0 ? <div className="blog-grid">{filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div> : (
          <div className="blog-empty-state">
            <h3>No articles found</h3>
            <p>Try a different search term or clear your filters to see all articles.</p>
            <button type="button" onClick={() => { setSearchQuery(''); setSelectedCategory('All categories') }}>Show all articles</button>
          </div>
        )}
      </div>
    </section>
  </main>
}
