import contactPhoto from '../../assets/ashwin-contact-photo.js'

const linkedinUrl = 'https://www.linkedin.com/in/ashwin-james'

export default function AshwinPortraitCard({ className = '' }) {
  return <div className={`ashwin-portrait-card ${className}`.trim()}>
    <div className="ashwin-portrait-image-wrap">
      <img className="ashwin-portrait-image" src={contactPhoto} alt="Ashwin James, Performance Marketing Specialist" />
      <div className="ashwin-portrait-overlay" />
      <span className="ashwin-portrait-availability"><i />Available to work</span>
    </div>
    <div className="ashwin-portrait-info">
      <div className="ashwin-portrait-quote">“Build the system, not just the campaign.”</div>
      <div className="ashwin-portrait-divider" />
      <div className="ashwin-portrait-bottom">
        <div className="ashwin-portrait-caption">
          <strong>Ashwin James</strong>
          <span>Performance Marketing &amp; Growth Systems Specialist</span>
        </div>
        <a className="ashwin-linkedin-button" href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="View Ashwin James on LinkedIn"><span>in</span></a>
      </div>
    </div>
  </div>
}
