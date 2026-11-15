const platforms = ['Meta Ads', 'Google Ads', 'HubSpot CRM', 'TikTok Ads', 'Performance Marketing', 'Google Analytics']

export default function PlatformMarquee() {
  return <section className="platform-strip" aria-label="Marketing platforms and areas of expertise"><div className="platform-mask"><div className="platform-track-react"><div className="platform-marquee-set" style={{ display: 'flex', flexShrink: 0 }}>{platforms.map((platform) => <span key={platform}>{platform}</span>)}</div><div className="platform-marquee-set" style={{ display: 'flex', flexShrink: 0 }} aria-hidden="true">{platforms.map((platform) => <span key={platform}>{platform}</span>)}</div></div></div></section>
}
