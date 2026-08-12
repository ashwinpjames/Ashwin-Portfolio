const platforms = ['Meta Ads', 'Google Ads', 'HubSpot', 'GA4', 'Looker Studio', 'WordPress', 'Figma', 'Python', 'SQL']

export default function PlatformMarquee() {
  const items = [...platforms, ...platforms]

  return (
    <section className="platform-strip" aria-label="Platforms and tools">
      <div className="platform-mask">
        <div className="platform-track-react">
          {items.map((platform, index) => <span key={`${platform}-${index}`}>{platform}</span>)}
        </div>
      </div>
    </section>
  )
}
