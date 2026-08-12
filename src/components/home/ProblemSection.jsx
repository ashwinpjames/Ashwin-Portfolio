const problems = [
  ['01', 'Targeting and offers', 'Weak targeting and an unclear offer can attract attention without attracting the right buyers.'],
  ['02', 'Conversion and tracking', 'Low converting landing pages and broken tracking hide where customers hesitate and what is working.'],
  ['03', 'Sales follow up', 'Slow sales follow up can turn high intent enquiries into missed opportunities before a real conversation begins.'],
]

export default function ProblemSection() {
  return (
    <section className="home-section problem-section">
      <div className="container">
        <div className="problem-heading reveal-home">
          <div><p className="home-eyebrow">Designed for growth minded teams</p><h2>Poor performance is rarely just traffic.</h2></div>
          <p>Poor performance usually starts before the click becomes revenue: weak targeting, an unclear offer, a low converting landing page, broken tracking, or slow sales follow up. I look across the full journey to identify where demand is leaking and what needs to change first.</p>
        </div>
        <div className="problem-grid reveal-home">
          {problems.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  )
}
