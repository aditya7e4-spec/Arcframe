import './ContactPage.css'
import Navbar from './Navbar.jsx'

const contactItems = [
  {
    label: 'Email',
    value: 'aditya7e4@gmail.com',
    href: 'mailto:aditya7e4@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 9263844949',
    href: 'tel:+919263844949',
  },
  {
    label: 'WhatsApp',
    value: '+91 9263844949',
    href: 'https://wa.me/919263844949',
  },
  {
    label: 'Location',
    value: 'Jamshedpur, Jharkhand, India',
    href: 'https://www.google.com/maps/place/Jamshedpur,+Jharkhand,+India',
  },
]

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/something.around.you?igsh=eGtjaDIyeDRnZTNl' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-63a032212/' },
  { name: 'X / Twitter', href: 'Currently not available' },
  { name: 'Behance', href: 'https://www.behance.net/aloksahu26' },
]

function ContactPage() {
  return (
    <div className="contact-shell">
      <div className="contact-mesh" aria-hidden="true" />
      <div className="contact-lines" aria-hidden="true" />

      <Navbar />

      <main className="contact-main">
        <section className="contact-hero">
          <p className="contact-kicker">Contact</p>
          <h1>Let&apos;s connect.</h1>
          <p className="contact-lead">
            This page uses placeholder contact details for now. Replace them with your real info when you are ready.
          </p>
        </section>

        <section className="contact-grid">
          <article className="contact-card">
            <p className="contact-card-label">Direct Contact</p>
            <h2>Reach me directly</h2>
            <div className="contact-list">
              {contactItems.map((item) => (
                <div key={item.label} className="contact-row">
                  <span>{item.label}</span>
                  {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                </div>
              ))}
            </div>
          </article>

          <article className="contact-card contact-alt">
            <p className="contact-card-label">Socials</p>
            <h2>Find me online</h2>
            <div className="contact-tags">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href}>
                  {item.name}
                </a>
              ))}
            </div>
          </article>
        </section>

        <section className="contact-meta">
          <article className="meta-card">
            <p>Working Hours</p>
            <h3>Mon - Fri</h3>
            <span>9:00 AM - 6:00 PM</span>
          </article>
          <article className="meta-card">
            <p>Response Time</p>
            <h3>Within 24 hours</h3>
            <span>Usually much faster on weekdays</span>
          </article>
          <article className="meta-card">
            <p>Project Start</p>
            <h3>Next available slot</h3>
            <span>March 2026</span>
          </article>
        </section>
      </main>

      <footer className="contact-footer">
        <p>A</p>
        <span>Contact Aditya for info.</span>
      </footer>
    </div>
  )
}

export default ContactPage
