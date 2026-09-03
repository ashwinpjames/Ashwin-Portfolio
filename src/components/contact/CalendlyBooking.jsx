import { useEffect } from 'react'

const calendlyUrl = 'https://calendly.com/ashwinjames-marketing/30min'
const calendlyScriptUrl = 'https://assets.calendly.com/assets/external/widget.js'

export default function CalendlyBooking() {
  useEffect(() => {
    const initialize = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({ url: calendlyUrl })
      }
    }

    const existingScript = document.querySelector(`script[src="${calendlyScriptUrl}"]`)
    if (existingScript) {
      if (window.Calendly) initialize()
      else existingScript.addEventListener('load', initialize, { once: true })
      return () => existingScript.removeEventListener('load', initialize)
    }

    const script = document.createElement('script')
    script.src = calendlyScriptUrl
    script.async = true
    script.onload = initialize
    document.body.appendChild(script)

    return () => {
      script.onload = null
    }
  }, [])

  return (
    <section className="calendly-booking" aria-labelledby="calendly-heading">
      <div className="calendly-booking-heading">
        <p>Book a call</p>
        <h2 id="calendly-heading">Choose a time that works for you.</h2>
        <span>A focused 30 minute conversation about your business, marketing and growth opportunities.</span>
      </div>
      <div className="calendly-frame">
        <div
          className="calendly-inline-widget"
          data-auto-load="false"
          style={{ minWidth: '320px', height: '680px' }}
        />
      </div>
    </section>
  )
}
