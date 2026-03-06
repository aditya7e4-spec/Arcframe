import './PortfolioPage.css'
import Navbar from './Navbar.jsx'

const portfolioItems = [
  {
    title: 'Ownit1st',
    subtitle: 'Vadodara Real Estate',
    vibe: 'Premium Property Advisor',
    goal: 'Trust and authority with local insider positioning.',
    url: 'https://concrete-canvas-guide.lovable.app',
    suggestions: [
      'Secure Your Piece of Vadodara’s Future.',
      'Premium Real Estate Investment, Simplified for Vadodara.',
    ],
    draft:
      'Navigating the property market can be complex. We provide the data-backed insights you need to buy with confidence, whether it is your first home or your next investment.',
  },
  {
    title: 'Jamshedpur Real Estate',
    subtitle: 'Local Real Estate Brand',
    vibe: 'Discover Your Perfect Home in Jamshedpur',
    goal: 'Local connection with warm, trustworthy market guidance.',
    url: 'https://pill-pad-estate.lovable.app',
    suggestions: ['Find Your Place in the Steel City.', 'Jamshedpur’s Finest Homes, Curated for You.'],
    draft: 'From Sakchi to Bistupur, we help you find a home that fits your life, not just your budget.',
  },
  {
    title: 'Draftly',
    subtitle: 'AI Content Generator',
    vibe: 'AI Content Generator',
    goal: 'Speed and efficiency for creators who need output fast.',
    url: 'https://hoad.lovable.app',
    suggestions: ['Stop Staring at a Blank Page.', 'Turn Ideas into Content in Seconds.'],
    draft: 'CTA direction: Generate Your First Post or Start Writing for Free.',
  },
  {
    title: 'Atelier',
    subtitle: 'Luxury Interior Design',
    vibe: 'Luxury Interior Design & Architecture',
    goal: 'Aspiration and elegance with minimal copy.',
    url: 'https://elegant-frame-luxe.lovable.app',
    suggestions: ['Designing Spaces that Breathe.', 'Where Architecture Meets Art.'],
    draft:
      'We do not just fill rooms; we curate environments. Every texture, light, and line is chosen to elevate the way you live.',
  },
  {
    title: 'Urban Estate Grit',
    subtitle: 'Real Estate Concept',
    vibe: 'Raw industrial-modern tone',
    goal: 'Strong, gritty positioning for a modern property showcase.',
    url: 'https://urban-estate-grit.lovable.app',
    suggestions: ['Raw. Real. Refined.'],
    draft: 'Direction: emphasize confidence, edge, and no-fluff property messaging.',
  },
]

function PortfolioPage() {
  return (
    <div className="portfolio-shell">
      <div className="portfolio-mesh" aria-hidden="true" />
      <div className="portfolio-lines" aria-hidden="true" />

      <Navbar />

      <main className="portfolio-main">
        <section className="portfolio-hero">
          <p className="portfolio-kicker">Work / Portfolio</p>
          <h1>Selected projects and copy direction.</h1>
          <p className="portfolio-lead">
            A curated snapshot of live builds with positioning, headline options, and messaging direction for each
            brand.
          </p>
        </section>

        <section className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article key={item.title} className="portfolio-card">
              <div className="portfolio-head">
                <p>{item.subtitle}</p>
                <h2>{item.title}</h2>
              </div>

              <div className="portfolio-meta">
                <span>
                  <strong>Vibe:</strong> {item.vibe}
                </span>
                <span>
                  <strong>Goal:</strong> {item.goal}
                </span>
              </div>

              <div className="portfolio-copy">
                <p className="portfolio-label">Headline Suggestions</p>
                <ul>
                  {item.suggestions.map((suggestion) => (
                    <li key={suggestion}>{suggestion}</li>
                  ))}
                </ul>
                <p className="portfolio-draft">{item.draft}</p>
              </div>

              <a href={item.url} target="_blank" rel="noreferrer">
                View Live Project
              </a>
            </article>
          ))}
        </section>
      </main>

      <footer className="portfolio-footer">
        <p>A</p>
        <span>Portfolio owned by Aditya.</span>
      </footer>
    </div>
  )
}

export default PortfolioPage
