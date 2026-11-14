import { useEffect } from 'react'
import { contactMethod, trackEnquiryEvent } from '../../utils/analytics.js'

export default function ContactTracking() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.('a[href]')
      if (!link) return
      const method = contactMethod(link.href)
      if (method) trackEnquiryEvent('contact_click', method)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
