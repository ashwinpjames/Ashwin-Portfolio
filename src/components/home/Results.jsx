import { useEffect, useState } from 'react'

const results = [
  [140, '+', 'Campaigns managed'],
  [12000, '+', 'Qualified leads generated'],
  [31, '%', 'Average CPL reduction'],
  [4.8, 'x', 'Average return on ad spend'],
  [8, '', 'Industries served'],
  [95, '%', 'Client satisfaction rate'],
]

function Counter({ target, suffix }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let frame
    let start
    const tick = (time) => {
      if (!start) start = time
      const progress = Math.min((time - start) / 1200, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target < 10 ? Number((target * eased).toFixed(1)) : Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target])
  return <>{target < 10 ? value.toFixed(1) : value.toLocaleString('en-US')}{suffix}</>
}

export default function Results() {
  return <section id="results" className="home-section results-section"><div className="container"><div className="section-heading reveal-home"><p className="home-eyebrow">Business results</p><h2>Growth should be visible in the numbers that matter.</h2></div><div className="results-grid six">{results.map(([target, suffix, label]) => <article className="result-card reveal-home" key={label}><strong><Counter target={target} suffix={suffix} /></strong><span>{label}</span></article>)}</div><p className="results-note">Representative performance across past engagements. Results vary by market, offer, spend, sales process and starting point.</p></div></section>
}
