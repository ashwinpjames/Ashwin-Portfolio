const tags = [
  'Performance Marketing',
  'Performance Marketing Consultant',
  'Performance Marketing Specialist',
  'Performance Marketing Specialist in Dubai',
  'Performance Marketing Services',
  'Performance Marketing UAE',
  'Performance Marketing Dubai',
  'Marketing Specialist',
  'Growth Marketing',
  'Paid Media',
  'Meta Ads',
  'Google Ads',
  'Lead Generation',
  'Conversion Rate Optimization',
  'Landing Page Optimization',
  'Marketing Funnel Strategy',
  'Campaign Management',
  'Marketing Analytics',
  'Google Analytics 4',
  'Google Tag Manager',
  'HubSpot CRM',
  'Conversion Tracking',
  'UTM Tracking',
  'A/B Testing',
  'Retargeting',
  'Audience Research',
  'Creative Testing',
  'Reporting & Attribution',
  'SEO Strategy',
  'Digital Marketing',
  'Dubai & UAE'
]

export default function ExpertiseTags() {
  return <section className="expertise-tags-section" aria-labelledby="expertise-tags-title">
    <div className="container">
      <p className="home-eyebrow">Services & Expertise</p>
      <h2 id="expertise-tags-title">The skills behind measurable growth</h2>
      <p className="expertise-tags-copy">From campaign strategy to tracking and conversion optimization, I connect the pieces that help marketing perform better.</p>
      <div className="expertise-tags-list">
        {tags.map((tag) => <span className="expertise-pill" key={tag}>{tag}</span>)}
      </div>
    </div>
  </section>
}
