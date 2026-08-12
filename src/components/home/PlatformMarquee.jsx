const platforms = ['META', 'GOOGLE ADS', 'GA4', 'HUBSPOT', 'NOTION', 'LOOKER STUDIO']

export default function PlatformMarquee() {
  const items = [...platforms, ...platforms]
  return <section className="platform-strip" aria-label="Growth platforms and tools"><div className="platform-mask"><div className="platform-track-react">{items.map((platform, index) => <span key={`${platform}-${index}`}>{platform}</span>)}</div></div></section>
}
