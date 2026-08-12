const points = [
  ['Senior ownership', 'You work directly with the person shaping the strategy and doing the work.'],
  ['Direct communication', 'No layers between the question and the answer. Practical communication with the person responsible.'],
  ['Nimble execution', 'Focused work means less internal friction and faster movement from decision to tested action.'],
  ['Strategy and delivery', 'Strategy and execution stay connected instead of being split across different teams.'],
  ['Flexible support', 'The engagement adapts to the work that matters now without forcing a large agency structure.'],
  ['Clear accountability', 'One senior owner stays close to outcomes, learns quickly and takes responsibility for the next move.'],
]

export default function Approach() {
  return (
    <section id="approach" className="home-section approach-section">
      <div className="container">
        <div className="section-heading split-heading reveal-home"><div><p className="home-eyebrow">Why hire me</p><h2>Why hire an independent growth partner?</h2></div><p>A senior, hands on consultant who brings the clarity and pace of a focused freelancer without the agency layers.</p></div>
        <div className="approach-grid">
          {points.map(([title, text]) => <article className="surface approach-card reveal-home" key={title}><span className="approach-mark">+</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  )
}
