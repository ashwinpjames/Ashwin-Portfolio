import { Link, useLocation } from 'react-router-dom'
import { acquisitionArticles } from '../data/acquisitionArticles.js'
import EditorialSections, { EditorialNextSteps } from '../components/blog/EditorialSections.jsx'

export default function AcquisitionArticle() {
  const { pathname } = useLocation()
  const article = acquisitionArticles.find((item) => pathname === `/blog/${item.slug}`)
  if (!article) return null
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title, description: article.description, datePublished: article.date, dateModified: article.date, author: { '@type': 'Person', name: 'Ashwin James', url: 'https://www.ashwinjames.com/about' }, mainEntityOfPage: `https://www.ashwinjames.com/blog/${article.slug}` }
  return <main className="pms-blog-page"><article className="pms-blog-shell editorial-article">
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
    <header className="pms-hero"><Link className="pms-back" to="/blog">Back to all blogs</Link><p className="pms-eyebrow">{article.category}</p><p className="pms-meta"><time dateTime={article.date}>14 November 2026</time> · By <Link to="/about">Ashwin James</Link></p><h1>{article.title}</h1><p className="pms-lede">{article.description}</p></header>
    <nav className="editorial-toc" aria-label="On this page"><h2>In this guide</h2><ul>{article.sections.map((section, i) => <li key={section.title}><a href={`#practical-section-${i + 1}`}>{section.title}</a></li>)}</ul></nav>
    <div className="pms-content"><EditorialSections sections={article.sections} /><EditorialNextSteps content={article} /></div>
  </article></main>
}
