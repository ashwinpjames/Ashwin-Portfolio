const calendlyUrl = 'https://calendly.com/ashwinjames-marketing/30min?hide_gdpr_banner=1'

export default function CalendlyBooking() {
  return (
    <section className="calendly-booking" aria-labelledby="calendly-heading">
      <div className="calendly-booking-heading">
        <p>Book a call</p>
        <h2 id="calendly-heading">Choose a time that works for you.</h2>
        <span>A focused 30 minute conversation about your business, marketing and growth opportunities.</span>
      </div>
      <div className="calendly-frame">
        <iframe
          src={calendlyUrl}
          title="Book a call with Ashwin James"
          className="calendly-iframe"
          loading="lazy"
          frameBorder="0"
        />
      </div>
    </section>
  )
}
