import { Link } from 'react-router-dom'

const tags = [
  ['Performance Marketing', '/services/performance-marketing-specialist'],
  ['Performance Marketing Consultant', '/blog/freelance-marketing-consultant-uae'],
  ['Digital Marketing Consultant', '/services/digital-marketing-consultant-dubai'],
  ['Performance Marketing Specialist', '/services/performance-marketing-specialist'],
  ['Performance Marketing Specialist in Dubai', '/performance-marketing-specialist-in-dubai'],
  ['Performance Marketing Services', '/services'],
  ['Performance Marketing UAE', '/blog/performance-marketing-strategy-uae'],
  ['Performance Marketing Dubai', '/performance-marketing-specialist-in-dubai'],
  ['Marketing Specialist', '/about'],
  ['Growth Marketing', '/services/performance-marketing-specialist'],
  ['Paid Media', '/services'],
  ['Meta Ads', '/services/meta-ads'],
  ['Google Ads', '/services'],
  ['Lead Generation', '/services/lead-generation'],
  ['Conversion Rate Optimization', '/services/cro'],
  ['Landing Page Optimization', '/services'],
  ['Marketing Funnel Strategy', '/blog/marketing-sales-funnel-sales-pipeline'],
  ['Campaign Management', '/services/performance-marketing-specialist'],
  ['Marketing Analytics', '/blog/performance-marketing-metrics'],
  ['Google Analytics 4', '/blog/ga4-performance-marketing'],
  ['Google Tag Manager', '/blog/conversion-tracking-performance-marketing'],
  ['HubSpot CRM', '/services/hubspot-crm-integration'],
  ['Conversion Tracking', '/blog/conversion-tracking-performance-marketing'],
  ['UTM Tracking', '/resources/utm-builder'],
  ['A/B Testing', '/services/cro'],
  ['Retargeting', '/services/meta-ads'],
  ['Audience Research', '/blog/how-meta-ads-algorithm-works'],
  ['Creative Testing', '/blog/creative-is-the-new-targeting'],
  ['Reporting & Attribution', '/blog/why-attribution-matters-performance-marketing'],
  ['SEO Strategy', '/blog/seo-ai-search-entity-authority-2026'],
  ['Digital Marketing', '/blog/performance-marketing-vs-digital-marketing']
]

export default function ExpertiseTags() {
  return <section className="expertise-tags-section" aria-labelledby="expertise-tags-title">
    <div className="container">
      <p className="home-eyebrow">Services & Expertise</p>
      <h2 id="expertise-tags-title">The skills behind measurable growth</h2>
      <p className="expertise-tags-copy">From campaign strategy to tracking and conversion optimization, I connect the pieces that help marketing perform better.</p>
      <div className="expertise-tags-list">
        {tags.map(([tag, to]) => <Link className="expertise-pill" key={tag} to={to}>{tag}</Link>)}
      </div>
    </div>
  </section>
}
