const trustpilotUrl = 'https://www.trustpilot.com/'

export default function TrustpilotBadge() {
  return (
    <a
      className="trustpilot-badge"
      href={trustpilotUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="View Trustpilot reviews"
    >
      <div className="trustpilot-badge-copy">
        <span className="trustpilot-badge-label">We're rated</span>
        <strong>Great</strong>
      </div>

      <div className="trustpilot-badge-rating">
        <span>Rated <strong>4.2</strong> out of 5</span>
        <div className="trustpilot-stars" aria-hidden="true">
          <span>★</span><span>★</span><span>★</span><span>★</span><span className="trustpilot-star-partial">★</span>
        </div>
      </div>

      <div className="trustpilot-brand" aria-hidden="true">
        <span className="trustpilot-mark">★</span>
        <span>Trustpilot</span>
      </div>
    </a>
  )
}
