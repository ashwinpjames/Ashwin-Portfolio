import { editorialRefreshes } from '../../data/editorialRefreshes.js'
import EditorialSections, { EditorialNextSteps } from './EditorialSections.jsx'

export default function EditorialRefresh({ slug }) {
  const content = editorialRefreshes[slug]
  if (!content) return null
  return <section className="editorial-refresh" aria-label="Practical implementation guide">
    <p className="editorial-update">Practical guide updated <time dateTime="2026-11-14">14 November 2026</time></p>
    <h2>{content.title}</h2>
    <EditorialSections sections={content.sections} />
    <EditorialNextSteps content={content} />
  </section>
}
