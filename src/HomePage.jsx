import { useMemo, useState } from 'react'

const ticker = [
  'Brand Identity',
  'React Frontends',
  'Story-Led UX',
  'Conversion Architecture',
  'Performance Audits',
  'Motion Systems',
]

const capabilities = [
  {
    title: 'Narrative UI Direction',
    text: 'Each screen carries a clear emotional arc so users feel orientation, momentum, and intent.',
  },
  {
    title: 'Conversion-Centric Layouts',
    text: 'Pages are structured around decisive actions, removing friction between curiosity and commitment.',
  },
  {
    title: 'Copy That Sounds Like You',
    text: 'If your current text feels flat, I can refine it so it sounds clear, genuine, and true to your brand.',
  },
  {
    title: 'Speed and Stability',
    text: 'Lean CSS and sensible architecture keep your experience fast on real devices, not just demos.',
  },
]

const projects = [
  {
    id: 'ownit1st',
    name: 'Ownit1st',
    sector: 'Vadodara Real Estate',
    summary:
      'Positioned as a premium property advisor with trust-first messaging for buyers and investors in Vadodara.',
    outcomes: ["Secure Your Piece of Vadodara's Future.", "Premium Real Estate Investment, Simplified for Vadodara."],
    link: 'https://concrete-canvas-guide.lovable.app',
    tone: 'sun',
  },
  {
    id: 'draftly',
    name: 'Draftly',
    sector: 'AI Content Generator',
    summary: 'Built around speed and output so users can move from idea to publish-ready content in seconds.',
    outcomes: ['Stop Staring at a Blank Page.', 'Turn Ideas into Content in Seconds.'],
    link: 'https://hoad.lovable.app',
    tone: 'ocean',
  },
  {
    id: 'atelier',
    name: 'Atelier',
    sector: 'Luxury Interior Design',
    summary:
      'Minimal, elegant storytelling that lets visuals lead while copy reinforces craft and aspiration.',
    outcomes: ['Designing Spaces that Breathe.', 'Where Architecture Meets Art.'],
    link: 'https://elegant-frame-luxe.lovable.app',
    tone: 'ember',
  },
]

const phases = [
  {
    step: '01',
    title: 'Discover',
    text: 'Audit goals, audience, and conversion bottlenecks in one focused workshop.',
  },
  {
    step: '02',
    title: 'Shape',
    text: 'Translate strategy into layout systems, tone, and interaction principles.',
  },
  {
    step: '03',
    title: 'Build',
    text: 'Implement polished React UI with clean structure and performance guardrails.',
  },
  {
    step: '04',
    title: 'Refine',
    text: 'Test, tune, and sharpen details until the experience feels inevitable.',
  },
]

function HomePage() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? projects[0],
    [activeProjectId],
  )

  return (
    <main>
      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="kicker reveal" style={{ '--delay': '90ms' }}>
            React Design Studio
          </p>
          <h1 className="reveal" style={{ '--delay': '160ms' }}>
            Websites with pulse, precision, and unmistakable character.
          </h1>
          <p className="lead reveal" style={{ '--delay': '240ms' }}>
            Built for founders and teams who want their digital presence to feel premium, clear, and impossible to
            ignore.
          </p>
          <p className="hero-pop reveal" style={{ '--delay': '280ms' }}>
            <span className="hero-pop-label">Also included</span>
            If you already have the ideas but need help with the wording, I can shape your text so it sounds
            <strong> natural, genuine, and fully like you.</strong>
          </p>
          <div className="hero-actions reveal" style={{ '--delay': '340ms' }}>
            <a className="btn btn-primary" href="/contact">
              Start A Build
            </a>
            <a className="btn btn-secondary" href="/portfolio">
              See Featured Work
            </a>
          </div>
        </div>

        <aside className="hero-panel reveal" style={{ '--delay': '300ms' }}>
          <p className="panel-label">Studio Snapshot</p>
          <div className="stat-row">
            <h2>21 Days</h2>
            <p>Average time to launch a focused marketing site.</p>
          </div>
          <div className="stat-row">
            <h2>2.7x</h2>
            <p>Typical uplift in qualified lead conversions post-redesign.</p>
          </div>
          <div className="stat-row">
            <h2>100%</h2>
            <p>Responsive, accessible layouts from day one.</p>
          </div>
        </aside>
      </section>

      <section className="ticker reveal" style={{ '--delay': '380ms' }} aria-label="Capabilities ticker">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-head reveal" style={{ '--delay': '70ms' }}>
          <p>Services</p>
          <h3>Everything needed to turn a plain website into a distinct product experience.</h3>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article className="capability-card reveal" key={item.title} style={{ '--delay': `${110 + index * 90}ms` }}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-head reveal" style={{ '--delay': '90ms' }}>
          <p>Featured Work</p>
          <h3>Selected portfolio previews with positioning and live links.</h3>
        </div>

        <div className="showcase-layout">
          <div className="project-list">
            {projects.map((project, index) => (
              <button
                className={`project-chip reveal ${project.id === activeProjectId ? 'is-active' : ''}`}
                key={project.id}
                style={{ '--delay': `${140 + index * 90}ms` }}
                type="button"
                onClick={() => setActiveProjectId(project.id)}
              >
                <strong>{project.name}</strong>
                <span>{project.sector}</span>
              </button>
            ))}
          </div>

          <article className={`spotlight reveal tone-${activeProject.tone}`} style={{ '--delay': '260ms' }}>
            <p className="spotlight-sector">{activeProject.sector}</p>
            <h4>{activeProject.name}</h4>
            <p className="spotlight-copy">{activeProject.summary}</p>
            <div className="outcomes">
              {activeProject.outcomes.map((outcome) => (
                <span key={outcome}>{outcome}</span>
              ))}
            </div>
            <a className="spotlight-link" href={activeProject.link} target="_blank" rel="noreferrer">
              Open Live Project
            </a>
          </article>
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-head reveal" style={{ '--delay': '80ms' }}>
          <p>Process</p>
          <h3>Lean execution, high taste, no wasted cycles.</h3>
        </div>

        <div className="phase-grid">
          {phases.map((phase, index) => (
            <article className="phase-card reveal" key={phase.title} style={{ '--delay': `${120 + index * 80}ms` }}>
              <span>{phase.step}</span>
              <h4>{phase.title}</h4>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonial reveal" style={{ '--delay': '140ms' }}>
        <p>
          "They didn&apos;t just design pages. They designed momentum. Our funnel got sharper, our brand got clearer,
          and the site finally feels like the company we are becoming."
        </p>
        <span>Head of Growth, Nova Atelier</span>
      </section>

      <section className="section cta reveal" id="contact" style={{ '--delay': '180ms' }}>
        <div className="cta-copy">
          <p>Want a website people remember after one scroll?</p>
          <span className="cta-pop">
            <em>More than a website</em>
            Working with Arc/frame means more than buying a website. You are supporting a real ambition being built
            with care.
          </span>
        </div>
        <a href="mailto:aditya7e4@gmail.com">aditya7e4@gmail.com</a>
      </section>
    </main>
  )
}

export default HomePage
