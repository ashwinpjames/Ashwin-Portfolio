const whatsappUrl = 'https://wa.me/97105227704142?text=Hello%20Ashwin%2C%20I%20would%20like%20to%20discuss%20generating%20more%20qualified%20leads%20for%20my%20business.'
const email = 'ashwinjames2720@gmail.com'

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a>
      <a href={`mailto:${email}`} aria-label="Send email">Email</a>
    </div>
  )
}
