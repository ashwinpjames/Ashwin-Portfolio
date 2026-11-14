import { allRouteMeta, normalizePath } from '../seo.js'

// Only controlled labels and known route paths reach the data layer. Never form values,
// contact URLs, query strings, or chat contents. GTM owns delivery and consent settings.
export function trackEnquiryEvent(event, formId) {
  if (typeof window === 'undefined') return
  const allowed = {
    generate_lead: ['contact', 'case_study', 'chatbot'],
    resource_request: ['homepage_checklist'],
    contact_click: ['whatsapp', 'email', 'booking'],
  }
  if (!allowed[event]?.includes(formId)) return
  const pathname = normalizePath(window.location.pathname)
  const payload = {
    event,
    form_id: formId,
    page_path: allRouteMeta[pathname] ? pathname : '/404',
  }
  // Measurement must never turn a successfully delivered enquiry into a form error.
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(payload)
  } catch { /* An unavailable analytics integration must not block contact. */ }
}

export function contactMethod(href) {
  try {
    const url = new URL(href)
    if (url.protocol === 'mailto:') return 'email'
    if (url.protocol !== 'https:') return null
    if (url.hostname === 'wa.me' || url.hostname === 'api.whatsapp.com') return 'whatsapp'
    if (url.hostname === 'calendly.com') return 'booking'
  } catch { /* Not a supported contact link. */ }
  return null
}
