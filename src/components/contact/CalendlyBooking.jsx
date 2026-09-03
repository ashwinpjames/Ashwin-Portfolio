import { useEffect, useRef } from 'react'

const calendlyUrl = 'https://calendly.com/ashwinjames-marketing/30min'
const calendlyScriptUrl = 'https://assets.calendly.com/assets/external/widget.js'

export default function CalendlyBooking() {
  const widgetRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    const initialize = () => {
      if (!cancelled && window.Calendly && widgetRef.current) {
        widgetRef.current.innerHTML = ''
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: widgetRef.current,
        })
      }
    }

    const existingScript = document.querySelector(`script[src="${calendlyScriptUrl}"]`)

    if (existingScript) {
      if (window.Calendly) initialize()
      else existingScript.addEventListener('load', initialize, { once: true })
      return () => {
        cancelled = true
        existingScript.removeEventListener('load', initialize)
      }
    }

    const script = document.createElement('script')
    script.src = calendlyScriptUrl
    script.async = true
    script.onload = initialize
    document.body.appendChild(script)

    return () => {
      cancelled = true
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
          ref={widgetRef}
          className="calendly-inline-widget"
          style={{ minWidth: '320px', height: '680px' }}
          aria-label="Calendly booking calendar"
        />
      </div>
    </section>
  )
}
