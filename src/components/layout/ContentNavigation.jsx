import { Link, useLocation } from 'react-router-dom'
import { breadcrumbsFor, breadcrumbSchema, relatedContentFor } from '../../utils/content-navigation.js'
import '../../styles/content-navigation.css'

export default function ContentNavigation() {
  const { pathname } = useLocation()
  const crumbs = breadcrumbsFor(pathname)
  const related = relatedContentFor(pathname)
  const article = pathname.startsWith('/blog/') && crumbs.length > 0
  if (!crumbs.length) return null
  return <div className="content-navigation">
    {related.length > 0 && <section className="container seo-related" aria-labelledby="related-content-heading">
      {article && <p className="seo-author">Written by <Link to="/about">Ashwin James</Link> · Performance marketing specialist in Dubai</p>}
      <h2 id="related-content-heading">Put the next step in context.</h2>
      <p>Explore the service behind the work, or go deeper into the problem you are reviewing.</p>
      <div className="seo-related-grid">{related.map(({ path, title, description, isService }) => <article key={path}>
        <span>{isService ? 'Work with Ashwin' : 'Further reading'}</span>
        <h3><Link to={path}>{title}</Link></h3><p>{description}</p>
      </article>)}</div>
    </section>}
    <nav className="container seo-breadcrumbs" aria-label="Breadcrumb"><ol>{crumbs.map(({ path, label }, index) => <li key={path}>{index === crumbs.length - 1 ? <span aria-current="page">{label}</span> : <Link to={path}>{label}</Link>}</li>)}</ol></nav>
    <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(crumbs))}</script>
  </div>
}
