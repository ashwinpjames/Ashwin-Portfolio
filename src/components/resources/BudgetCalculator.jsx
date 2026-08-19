import { useMemo, useState } from 'react'

const initial = { monthlyRevenue: '', grossMargin: '', targetCpa: '', monthlyConversions: '', learningWeeks: '4' }

export default function BudgetCalculator() {
  const [values, setValues] = useState(initial)
  const update = (key, value) => setValues((current) => ({ ...current, [key]: value }))
  const result = useMemo(() => {
    const revenue = Number(values.monthlyRevenue)
    const margin = Number(values.grossMargin) / 100
    const cpa = Number(values.targetCpa)
    const conversions = Number(values.monthlyConversions)
    const weeks = Number(values.learningWeeks)
    if (!revenue || !margin || !cpa || !conversions || !weeks) return null
    const contribution = revenue * margin
    const maxMonthly = Math.max(0, contribution * 0.3)
    const conversionBudget = cpa * conversions
    const recommended = Math.max(conversionBudget, maxMonthly * 0.5)
    const weekly = recommended / 4.345
    const learning = weekly * weeks
    return { contribution, recommended, weekly, learning }
  }, [values])

  const reset = () => setValues(initial)
  const money = (value) => new Intl.NumberFormat('en', { maximumFractionDigits: 0 }).format(value)

  return <div className="budget-tool">
    <div className="budget-form">
      <div className="tool-section-heading"><div><h2>Your inputs</h2><p>Use realistic numbers. This is a planning model, not a forecast.</p></div></div>
      <div className="budget-fields">
        {[
          ['monthlyRevenue', 'Monthly revenue', 'AED'],
          ['grossMargin', 'Gross margin', '%'],
          ['targetCpa', 'Target CPA', 'AED'],
          ['monthlyConversions', 'Target monthly conversions', 'leads'],
        ].map(([key, label, unit]) => <label className="budget-field" key={key}><span>{label}</span><div className="budget-input-wrap"><input type="number" min="0" value={values[key]} onChange={(event) => update(key, event.target.value)} placeholder="0" /><b>{unit}</b></div></label>)}
      </div>
      <label className="budget-field budget-range"><span>Learning phase duration</span><div><input type="range" min="2" max="8" value={values.learningWeeks} onChange={(event) => update('learningWeeks', event.target.value)} /><strong>{values.learningWeeks} weeks</strong></div></label>
      <div className="budget-actions"><button className="budget-button primary" type="button" onClick={() => setValues((current) => ({ ...current }))}>Calculate budget <span>→</span></button><button className="budget-button" type="button" onClick={reset}>Reset</button></div>
    </div>
    <div className="budget-results">
      <p className="budget-result-label">Recommended starting point</p>
      <div className="budget-result-value">{result ? `AED ${money(result.recommended)}` : 'Enter your numbers'}</div>
      <p className="budget-result-copy">{result ? 'A practical monthly test budget based on the inputs above.' : 'Complete the fields to generate an estimate.'}</p>
      <div className="budget-result-grid">
        <div><small>Weekly budget</small><strong>{result ? `AED ${money(result.weekly)}` : '—'}</strong></div>
        <div><small>Learning budget</small><strong>{result ? `AED ${money(result.learning)}` : '—'}</strong></div>
        <div><small>Contribution base</small><strong>{result ? `AED ${money(result.contribution)}` : '—'}</strong></div>
        <div><small>Target CPA</small><strong>{values.targetCpa ? `AED ${money(Number(values.targetCpa))}` : '—'}</strong></div>
      </div>
      <div className="budget-note"><b>How to use this:</b> start with the estimate, then validate it against actual conversion rate, lead quality and sales economics before scaling spend.</div>
    </div>
  </div>
}
