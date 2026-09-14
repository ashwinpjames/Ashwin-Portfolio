import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const servicePresets = [
  'Meta Ads Management',
  'Google Ads Management',
  'Performance Marketing',
  'SEO Services',
  'Social Media Management',
  'Content Marketing',
  'Marketing Consulting',
  'Creative Services',
  'Monthly Retainer',
]

const currencies = [
  { code: 'AED', symbol: 'AED' },
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
  { code: 'INR', symbol: '₹' },
]

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return <label className="invoice-field"><span>{label}</span><input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /></label>
}

export default function InvoiceGenerator() {
  const [business, setBusiness] = useState({ name: '', email: '', phone: '', address: '' })
  const [client, setClient] = useState({ name: '', email: '', address: '' })
  const [invoice, setInvoice] = useState({ number: `INV-${new Date().getFullYear()}-001`, issueDate: new Date().toISOString().slice(0, 10), dueDate: '', currency: 'AED', tax: '0', discount: '0', notes: '' })
  const [items, setItems] = useState([{ description: '', quantity: '1', rate: '' }])

  const currency = currencies.find((item) => item.code === invoice.currency)?.symbol || invoice.currency
  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.rate) || 0), 0)
    const discount = subtotal * ((Number(invoice.discount) || 0) / 100)
    const taxable = Math.max(subtotal - discount, 0)
    const tax = taxable * ((Number(invoice.tax) || 0) / 100)
    return { subtotal, discount, tax, total: taxable + tax }
  }, [items, invoice.discount, invoice.tax])

  const updateItem = (index, key, value) => setItems((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, [key]: value } : item))
  const addItem = () => setItems((current) => [...current, { description: '', quantity: '1', rate: '' }])
  const removeItem = (index) => setItems((current) => current.length === 1 ? current : current.filter((_, itemIndex) => itemIndex !== index))

  const printInvoice = () => window.print()

  return <main className="invoice-page"><div className="container"><Link className="calculator-back" to="/resources">← Back to resources</Link><section className="calculator-hero"><p className="resources-eyebrow">Free marketing tool</p><h1>Free Invoice <span>Generator.</span></h1><p>Create a professional invoice for freelance marketing work, client retainers and consulting projects. Add your branding, services, tax and payment details, then print or save the finished invoice as a PDF.</p></section><div className="invoice-tool"><section className="invoice-form"><div className="invoice-section"><div className="tool-section-heading"><h2>Your business</h2><p>The details shown on the invoice.</p></div><div className="invoice-grid"><Field label="Business name" value={business.name} onChange={(value) => setBusiness({ ...business, name: value })} placeholder="Ashwin James" /><Field label="Email" value={business.email} onChange={(value) => setBusiness({ ...business, email: value })} placeholder="hello@example.com" /><Field label="Phone" value={business.phone} onChange={(value) => setBusiness({ ...business, phone: value })} placeholder="+971 ..." /><Field label="Address" value={business.address} onChange={(value) => setBusiness({ ...business, address: value })} placeholder="Dubai, UAE" /></div></div><div className="invoice-section"><div className="tool-section-heading"><h2>Client</h2><p>Who the invoice is being issued to.</p></div><div className="invoice-grid"><Field label="Client name" value={client.name} onChange={(value) => setClient({ ...client, name: value })} placeholder="Client or company" /><Field label="Client email" value={client.email} onChange={(value) => setClient({ ...client, email: value })} placeholder="client@example.com" /><Field label="Client address" value={client.address} onChange={(value) => setClient({ ...client, address: value })} placeholder="Client address" /></div></div><div className="invoice-section"><div className="tool-section-heading"><h2>Invoice details</h2><p>Set the number, dates, currency and tax.</p></div><div className="invoice-grid"><Field label="Invoice number" value={invoice.number} onChange={(value) => setInvoice({ ...invoice, number: value })} placeholder="INV-001" /><Field label="Issue date" type="date" value={invoice.issueDate} onChange={(value) => setInvoice({ ...invoice, issueDate: value })} /><Field label="Due date" type="date" value={invoice.dueDate} onChange={(value) => setInvoice({ ...invoice, dueDate: value })} /><label className="invoice-field"><span>Currency</span><select value={invoice.currency} onChange={(event) => setInvoice({ ...invoice, currency: event.target.value })}>{currencies.map((item) => <option value={item.code} key={item.code}>{item.code}</option>)}</select></label><Field label="Tax %" type="number" value={invoice.tax} onChange={(value) => setInvoice({ ...invoice, tax: value })} placeholder="0" /><Field label="Discount %" type="number" value={invoice.discount} onChange={(value) => setInvoice({ ...invoice, discount: value })} placeholder="0" /></div></div><div className="invoice-section"><div className="tool-section-heading"><h2>Services</h2><p>Add your marketing services and rates.</p></div><div className="invoice-presets">{servicePresets.map((preset) => <button type="button" key={preset} onClick={() => setItems((current) => [...current, { description: preset, quantity: '1', rate: '' }])}>{preset}</button>)}</div><div className="invoice-items-head"><span>Service</span><span>Qty</span><span>Rate</span><span>Total</span><span aria-hidden="true" /></div>{items.map((item, index) => <div className="invoice-item" key={index}><input value={item.description} onChange={(event) => updateItem(index, 'description', event.target.value)} placeholder="Marketing service" /><input type="number" min="0" value={item.quantity} onChange={(event) => updateItem(index, 'quantity', event.target.value)} /><input type="number" min="0" step="0.01" value={item.rate} onChange={(event) => updateItem(index, 'rate', event.target.value)} placeholder="0.00" /><strong>{currency} {((Number(item.quantity) || 0) * (Number(item.rate) || 0)).toFixed(2)}</strong><button type="button" className="invoice-remove" onClick={() => removeItem(index)} aria-label="Remove service">×</button></div>)}<button type="button" className="budget-button" onClick={addItem}>+ Add service</button></div><div className="invoice-section"><div className="tool-section-heading"><h2>Notes and payment details</h2><p>Add terms, bank details or a payment message.</p></div><textarea className="invoice-notes" value={invoice.notes} onChange={(event) => setInvoice({ ...invoice, notes: event.target.value })} placeholder="Payment due within 14 days. Thank you for your business." /></div><div className="invoice-actions"><button type="button" className="budget-button primary" onClick={printInvoice}>Print or save as PDF</button></div></section><aside className="invoice-preview-wrap"><div className="invoice-preview" id="invoice-preview"><div className="invoice-paper-head"><div><div className="invoice-brand">{business.name || 'Your Business'}</div><p>{business.address || 'Business address'}</p><p>{business.email || 'business@email.com'}{business.phone ? ` · ${business.phone}` : ''}</p></div><div className="invoice-title"><span>INVOICE</span><strong>{invoice.number}</strong></div></div><div className="invoice-meta"><div><small>BILL TO</small><strong>{client.name || 'Client name'}</strong><span>{client.email || 'client@email.com'}</span><span>{client.address || 'Client address'}</span></div><div><small>ISSUED</small><span>{invoice.issueDate || 'Not set'}</span><small>DUE</small><span>{invoice.dueDate || 'Not set'}</span></div></div><table className="invoice-table"><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Total</th></tr></thead><tbody>{items.map((item, index) => <tr key={index}><td>{item.description || 'Marketing service'}</td><td>{item.quantity || '0'}</td><td>{currency} {Number(item.rate || 0).toFixed(2)}</td><td>{currency} {((Number(item.quantity) || 0) * (Number(item.rate) || 0)).toFixed(2)}</td></tr>)}</tbody></table><div className="invoice-summary"><div><span>Subtotal</span><strong>{currency} {totals.subtotal.toFixed(2)}</strong></div>{totals.discount > 0 && <div><span>Discount</span><strong>− {currency} {totals.discount.toFixed(2)}</strong></div>}{Number(invoice.tax) > 0 && <div><span>Tax</span><strong>{currency} {totals.tax.toFixed(2)}</strong></div>}<div className="grand"><span>Total</span><strong>{currency} {totals.total.toFixed(2)}</strong></div></div><div className="invoice-footer"><strong>Payment details</strong><p>{invoice.notes || 'Add your payment instructions in the form.'}</p></div></div></aside></div><section className="calculator-explanation"><div><p className="resources-eyebrow">Built for marketers</p><h2>Invoice your marketing work without a complicated setup.</h2></div><div><p>Use service presets for common freelance and agency work, adjust quantities and rates, and keep the finished invoice in a clean format that works well for client billing.</p><p><strong>Note:</strong> this tool runs in your browser. Your invoice details are not submitted to a server by this page.</p></div></section></div></main>
}
