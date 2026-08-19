const insights = [
  ['LEAD GENERATION · 6 MIN READ', 'Why more leads can be the wrong growth target', 'A better way to look at volume, qualification and the real cost of a sales conversation.'],
  ['GOOGLE ADS · 8 MIN READ', 'The metrics a Dubai business should watch after launch', 'Move beyond clicks and learn the signals that reveal whether your campaign is building momentum.'],
  ['CONVERSION · 5 MIN READ', 'Three points of friction hiding on your lead page', 'Small experience decisions can make the difference between enquiry volume and enquiry quality.'],
]

export default function Insights() {
  return <section id="insights" className="home-section insights-section"><div className="container"><div className="section-heading split-heading reveal-home"><div className="insights-heading"><p className="home-eyebrow">Insights</p><h2>Useful thinking for better growth decisions.</h2><a className="text-link insights-all-link" href="/blog">View all insights <span>→</span></a></div></div><div className="insights-grid">{insights.map(([tag, title, text]) => <article className="insight-card reveal-home" key={title}><p>{tag}</p><h3>{title}</h3><span>{text}</span><a href="/blog">Read article <span>→</span></a></article>)}</div></div></section>
}
