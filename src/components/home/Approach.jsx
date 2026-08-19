const points = [
  ['Senior ownership', 'You work directly with the person shaping the strategy and doing the work.', 'user'],
  ['Direct communication', 'No layers between the question and the answer. Practical communication with the person responsible.', 'message'],
  ['Nimble execution', 'Focused work means less internal friction and faster movement from decision to tested action.', 'bolt'],
  ['Strategy and delivery', 'Strategy and execution stay connected instead of being split across different teams.', 'target'],
  ['Flexible support', 'The engagement adapts to the work that matters now without forcing a large agency structure.', 'sliders'],
  ['Clear accountability', 'One senior owner stays close to outcomes, learns quickly and takes responsibility for the next move.', 'shield'],
]

function ApproachIcon({ type }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'user') return <svg {...common}><circle cx="12" cy="8" r="3"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></svg>
  if (type === 'message') return <svg {...common}><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3.5-.75L4 20l1.75-4.25A7.2 7.2 0 0 1 4.5 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/><path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01"/></svg>
  if (type === 'bolt') return <svg {...common}><path d="M13 2 4.5 13h6L11 22l8.5-11h-6L13 2Z"/></svg>
  if (type === 'target') return <svg {...common}><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/></svg>
  if (type === 'sliders') return <svg {...common}><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="10" cy="18" r="2"/></svg>
  return <svg {...common}><path d="M12 3 20 6v5.5c0 4.8-3.1 7.9-8 9.5-4.9-1.6-8-4.7-8-9.5V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>
}

export default function Approach() {
  return (
    <section id="approach" className="home-section approach-section">
      <div className="container">
        <div className="section-heading split-heading reveal-home"><div><p className="home-eyebrow">Why hire me</p><h2>Why hire an independent growth partner?</h2></div><p>A senior, hands on consultant who brings the clarity and pace of a focused freelancer without the agency layers.</p></div>
        <div className="approach-grid">
          {points.map(([title, text, icon]) => <article className="surface approach-card reveal-home" key={title}><span className="approach-mark"><ApproachIcon type={icon} /></span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  )
}
