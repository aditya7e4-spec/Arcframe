import './ServicesPage.css'
import Navbar from './Navbar.jsx'

const serviceCards = [
  {
    title: 'Custom Websites',
    text: 'Designed from scratch to match your brand, goals, and voice. No copied templates.',
  },
  {
    title: 'Lightning-Fast Performance',
    text: 'Optimized builds using tools like Framer, Zola, React, and Lovable so pages load quickly.',
    highlight: 'Most sites load in under 3 seconds for better SEO and happier users.',
  },
  {
    title: 'AI Chatbot Integration',
    text: 'Smart chat assistants that stay useful and focused on outcomes.',
    bullets: ['Answer FAQs', 'Guide visitors', 'Capture leads', 'Support customers 24/7'],
  },
  {
    title: 'WhatsApp Integration',
    text: 'Let customers message you instantly with one tap. No forms, no waiting.',
  },
  {
    title: 'Redesigns',
    text: 'Have an old or slow website? I will rebuild it clean, modern, and fast.',
  },
]

const advantages = [
  'Lightweight code with no unnecessary junk',
  'Mobile-first design',
  'SEO-friendly structure',
  'Easy to update',
  'Secure and low maintenance',
  'Personal support (not an agency maze)',
]

const audience = ['Startups', 'Small businesses', 'Students', 'Freelancers', 'Creators', 'Local stores']

function ServicesPage() {
  return (
    <div className="services-shell">
      <div className="services-aura" aria-hidden="true" />
      <div className="services-grid" aria-hidden="true" />

      <Navbar />

      <main className="services-main">
        <section className="services-hero" id="top">
          <p className="services-kicker">Services</p>
          <h1>Fast. Lightweight. Built to Convert.</h1>
          <p className="services-lead">
            I build modern websites that load in under 3 seconds, look unique, and help your business grow.
          </p>
          <ul className="services-hero-list">
            <li>No heavy themes.</li>
            <li>No bloated plugins.</li>
            <li>No template-looking designs.</li>
          </ul>
          <p className="services-subtle">Clean, fast, custom websites made for real users.</p>
        </section>

        <section className="services-section">
          <div className="services-head">
            <p>What I build</p>
            <h2>Focused services designed for speed, trust, and conversions.</h2>
          </div>
          <div className="services-card-grid">
            {serviceCards.map((service) => (
              <article key={service.title} className="services-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                {service.highlight ? <p className="services-highlight">{service.highlight}</p> : null}
                {service.bullets ? (
                  <ul className="services-bullets">
                    {service.bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="services-section services-why">
          <div className="services-head">
            <p>Why work with me?</p>
            <h2>Practical execution, personal support, and low-maintenance results.</h2>
          </div>
          <div className="services-advantage-grid">
            {advantages.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <p className="services-focus">You focus on your business. Your website handles the rest.</p>
        </section>

        <section className="services-section">
          <div className="services-head">
            <p>Who it is for</p>
            <h2>Perfect for teams and individuals who need a fast, professional online presence.</h2>
          </div>
          <div className="services-audience">
            {audience.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="services-subtle">
            If you need a simple, fast, professional online presence, this is for you.
          </p>
        </section>

        <section className="services-cta" id="contact">
          <div>
            <p className="services-kicker">Let&apos;s build something great</p>
            <h2>Have an idea or need a website upgrade?</h2>
            <p>Let&apos;s talk and get you live in days, not months.</p>
          </div>
          <a href="mailto:aditya7e4@gmail.com">Contact me</a>
        </section>
      </main>

      <footer className="services-footer">
        <p>A</p>
        <span>Made with love in India.</span>
      </footer>
    </div>
  )
}

export default ServicesPage
