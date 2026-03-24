import './PricingPage.css'
import Navbar from './Navbar.jsx'
import framerLogo from './assets/ico/Framer.svg'
import lovableLogo from './assets/ico/lovable-logo-icon.svg'
import reactLogo from './assets/ico/react.svg'
import chatbaseLogo from './assets/ico/Chatbase.svg'
import geminiLogo from './assets/ico/gemini-color.svg'

const websitePackages = [
  {
    id: 'starter',
    index: '01',
    name: 'Starter',
    tech: 'Framer Template',
    logo: framerLogo,
    logoAlt: 'Framer logo',
    cardClass: 'pricing-card-starter',
    description:
      "Perfect for getting online quickly - ideal if you're just starting out and want a professional presence without the complexity.",
    price: 'Rs 7,500 / one-time setup fee',
    bullets: [
      'Built on a premium Framer template',
      'Fast setup and launch',
      'Clean, modern design out of the box',
      'Platform hosting: Rs 4,332/yr (billed directly to you by Framer)',
    ],
  },
  {
    id: 'growth',
    index: '02',
    name: 'Growth',
    tech: 'Lovable.dev',
    logo: lovableLogo,
    logoAlt: 'Lovable logo',
    badge: 'Most Popular',
    description:
      'For businesses ready to invest in a distinctive online identity - a fully custom-designed site built with a modern, no-code platform.',
    price: 'Rs 15,000 / one-time fee',
    bullets: [
      'Fully custom design tailored to your brand',
      'Built on Lovable.dev for easy future self-editing',
      'Trending UI/UX patterns and layouts',
      'Platform hosting: Rs 23,256/yr (billed directly to you by Lovable.dev)',
    ],
  },
  {
    id: 'listings-pro',
    index: '03',
    name: 'Listings Pro',
    tech: 'Zola (Static Code)',
    monogram: 'ZOLA',
    monogramSub: 'Static Code',
    description:
      'Designed for businesses with large catalogues - properties, products, or portfolios. Handles scale without breaking a sweat.',
    price: 'Rs 25,000 / one-time fee',
    bullets: [
      'Custom-coded design, built from scratch',
      'Supports up to 10,000 pages',
      'Optimized for listings and directories',
      'Free hosting included (no platform fees)',
    ],
  },
  {
    id: 'premium',
    index: '04',
    name: 'Premium',
    tech: 'React (Custom Code)',
    logo: reactLogo,
    logoAlt: 'React logo',
    description:
      'The most powerful option - a fully hand-coded React site built to industry standards with a marketing-first approach to help your brand stand out.',
    price: 'Rs 45,000 / one-time fee',
    bullets: [
      'Bespoke design - no templates, no limits',
      'Built with React to industry standards',
      'Marketing and conversion focused',
      'Free hosting included (no platform fees)',
      'Ideal for brands that want to stand out',
    ],
  },
]

const aiAddOns = [
  {
    id: 'chatbase',
    index: '05',
    name: 'AI Assistant',
    tech: 'Chatbase',
    logo: chatbaseLogo,
    logoAlt: 'Chatbase logo',
    description:
      'Add a smart, always-on AI assistant to your site - handles FAQs, collects leads, and integrates with your social media channels.',
    price: 'Rs 9,500 one-time setup fee',
    bullets: [
      'FAQ bot available 24/7 on your website',
      'Lead collection integration',
      'Social media channel integration',
      'Platform cost: Rs 35,437/yr - Charged by Chatbase based on usage (approx Rs 2,953/mo for typical small business usage)',
    ],
    availability: ['Website', 'Social media platforms'],
  },
  {
    id: 'api-powered',
    index: '06',
    name: 'AI Assistant',
    tech: 'API-Powered',
    logo: geminiLogo,
    logoAlt: 'API assistant logo',
    description:
      'A leaner, more affordable AI option - great for websites that need smart FAQ support without a large monthly commitment.',
    price: 'Rs 14,500 one-time setup fee',
    bullets: [
      'FAQ bot available on your website',
      'Supports multiple creative styles and designs',
      'Flexible, usage-based platform pricing (passed to client)',
      'Platform cost: approx Rs 300/mo credit base (can scale to approx Rs 2,305/mo with higher usage)',
    ],
    availability: ['Website only'],
  },
]

function PricingPage() {
  return (
    <div className="pricing-shell">
      <div className="pricing-aura" aria-hidden="true" />
      <div className="pricing-grid" aria-hidden="true" />

      <Navbar />

      <main className="pricing-main">
        <section className="pricing-hero">
          <p className="pricing-kicker">Pricing</p>
          <h1>Transparent packages built for your growth stage.</h1>
          <p className="pricing-lead">
            No surprises. Pick what fits your goals now and scale when you are ready.
          </p>
          <p className="pricing-note">
            <span className="pricing-note-badge">Copy support included</span>
            Need help with the words too? I can refine your text so it sounds honest, confident, and genuinely like
            you.
          </p>
        </section>

        <section className="pricing-section">
          <div className="pricing-head">
            <p>Website Packages</p>
            <h2>From fast launch templates to fully custom React builds.</h2>
          </div>
          <div className="pricing-card-grid">
            {websitePackages.map((pkg) => (
              <article
                key={pkg.id}
                className={`pricing-card ${pkg.badge ? 'pricing-card-featured' : ''} ${pkg.cardClass ?? ''}`}
              >
                {pkg.logo ? (
                  <div className={`pricing-logo-wrap ${pkg.id === 'starter' ? 'pricing-logo-wrap-light' : ''}`}>
                    <img className="pricing-logo" src={pkg.logo} alt={pkg.logoAlt} />
                  </div>
                ) : (
                  <div className="pricing-logo-mark" aria-label={`${pkg.monogram} logo`}>
                    <strong>{pkg.monogram}</strong>
                    <span>{pkg.monogramSub}</span>
                  </div>
                )}
                <p className="pricing-card-index">{pkg.index}</p>
                <h3>
                  {pkg.name} <span>- {pkg.tech}</span>
                </h3>
                {pkg.badge ? <p className="pricing-badge">{pkg.badge}</p> : null}
                <p className="pricing-description">{pkg.description}</p>
                <p className="pricing-price">{pkg.price}</p>
                <ul>
                  {pkg.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-section pricing-section-soft">
          <div className="pricing-head">
            <p>AI Add-Ons</p>
            <h2>Smart assistant options for FAQs, lead capture, and support.</h2>
          </div>
          <div className="pricing-card-grid pricing-addons-grid">
            {aiAddOns.map((pkg) => (
              <article key={pkg.id} className="pricing-card">
                <img className="pricing-logo" src={pkg.logo} alt={pkg.logoAlt} />
                <p className="pricing-card-index">{pkg.index}</p>
                <h3>
                  {pkg.name} <span>- {pkg.tech}</span>
                </h3>
                <p className="pricing-description">{pkg.description}</p>
                <p className="pricing-price">{pkg.price}</p>
                <ul>
                  {pkg.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="pricing-availability">
                  <p>Available on:</p>
                  {pkg.availability.map((surface) => (
                    <span key={surface}>{surface}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-bundle">
          <p className="pricing-kicker">Bundle Deal</p>
          <h2>Choose Growth (Lovable.dev) and API-powered AI hosting is included at no extra cost.</h2>
          <p>
            All prices in INR. Packages can be customized, and I can help improve your website copy so the final site
            feels more human and more convincing.
          </p>
          <p className="pricing-support-note">
            <span className="pricing-support-tag">Why it matters</span>
            When you invest here, you are not just paying for a website. You are backing an independent ambition and
            helping it grow.
          </p>
          <a href="mailto:aditya7e4@gmail.com">Book Free Consultation</a>
        </section>
      </main>

      <footer className="pricing-footer">
        <p>A</p>
        <span>Designed, built, and refined with care for people building something real.</span>
      </footer>
    </div>
  )
}

export default PricingPage
