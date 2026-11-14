import { allRouteMeta } from '../../seo.js'
import { Link } from 'react-router-dom'
import './editorial.css'

export default function EditorialSections({ sections }) {
  return sections.map((section, index) => <section className="editorial-section" key={section.title} id={`practical-section-${index + 1}`}>
    <h2>{section.title}</h2>
    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
    {section.table && <div className="editorial-table" role="region" aria-label={section.title} tabIndex={0}><table><thead><tr>{section.table.headers.map((h) => <th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>}
  </section>)
}

export function EditorialNextSteps({ content }) {
  return <aside className="editorial-next" aria-label="Related guidance and next steps">
    {content.sources?.length > 0 && <><h2>Official references</h2><ul>{content.sources.map((source) => <li key={source.url}><a href={source.url}>{source.label}</a></li>)}</ul></>}
    <h2>Put the framework into practice</h2>
    <p><Link to={content.service}>Explore the relevant service</Link> or <Link to="/contact">{content.cta.toLowerCase()}</Link>.</p>
    <p>Written by <Link to="/about">Ashwin James</Link>, a <Link to="/">performance marketing specialist</Link> based in Dubai.</p>
    <ul>{content.related.map((url) => <li key={url}><Link to={url}>{allRouteMeta[url]?.[0].replace(/ \| Ashwin James$/, '') || 'Related guidance'}</Link></li>)}</ul>
  </aside>
}
