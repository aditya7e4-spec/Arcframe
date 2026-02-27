import './ProcessPage.css'
import Navbar from './Navbar.jsx'

const processSteps = [
  {
    step: 'Step 1',
    title: "Let's Talk",
    intro: 'We start with a quick chat.',
    bullets: ['What you want to build', 'Your goals', 'Features you need', 'Design vibe you like'],
    detail: 'I suggest the best approach and tech stack, like Framer, React, Zola, or Lovable.',
    note: 'Simple language. No jargon.',
  },
  {
    step: 'Step 2',
    title: 'Plan & Structure',
    intro: 'Before designing, I map everything clearly:',
    bullets: ['Pages', 'Layout', 'Content sections', 'User flow'],
    detail: 'This avoids confusion later and keeps the build fast.',
    note: 'Think of it like a blueprint for your website.',
  },
  {
    step: 'Step 3',
    title: 'Design',
    intro: 'Now the fun part.',
    bullets: ['Clean UI', 'Modern look', 'Mobile-first layout', 'Unique custom design (not templates)'],
    detail: 'You get previews and can suggest changes.',
    note: 'We refine until it feels perfect.',
  },
  {
    step: 'Step 4',
    title: 'Build & Optimize',
    intro: 'Time to make it real.',
    bullets: [
      'Lightweight code',
      'Fast loading (under 3 seconds)',
      'SEO-friendly structure',
      'Smooth animations',
      'Chatbot + WhatsApp integrations (if needed)',
    ],
    detail: 'Everything is optimized for speed and performance.',
    note: 'No bloat. No unnecessary plugins.',
  },
  {
    step: 'Step 5',
    title: 'Test Everything',
    intro: 'Before launch, I test:',
    bullets: ['Mobile + desktop', 'Performance', 'Links', 'Forms', 'Chatbot', 'Integrations'],
    detail: 'Your users should not hit bugs.',
  },
  {
    step: 'Step 6',
    title: 'Launch',
    intro: 'Your site goes live. Fast, secure, and ready for customers.',
    bullets: ['Deployment', 'Domain setup', 'Hosting guidance', 'Final checks'],
    detail: "I stay with you through launch day.",
  },
  {
    step: 'Step 7',
    title: 'Support',
    intro: 'I do not disappear after delivery.',
    bullets: ['Need updates?', 'Want new features?', 'Found something to tweak?'],
    detail: "Message me anytime. I've got you.",
  },
]

function ProcessPage() {
  return (
    <div className="process-shell">
      <div className="process-glow" aria-hidden="true" />
      <div className="process-noise" aria-hidden="true" />

      <Navbar />

      <main className="process-main">
        <section className="process-hero">
          <p className="process-kicker">My Process</p>
          <h1>Simple. Clear. No chaos.</h1>
          <p className="process-lead">
            No long meetings, no confusing tech talk, no months of waiting. Just a clean workflow that takes your
            idea to a live website fast.
          </p>
        </section>

        <section className="process-flow">
          {processSteps.map((item) => (
            <article key={item.step} className="process-card">
              <p className="process-step">{item.step}</p>
              <h2>{item.title}</h2>
              <p className="process-intro">{item.intro}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="process-detail">{item.detail}</p>
              {item.note ? <p className="process-note">{item.note}</p> : null}
            </article>
          ))}
        </section>

        <section className="process-cta" id="contact">
          <p className="process-kicker">Ready to start?</p>
          <h2>Tell me your idea and we will turn it into a fast, modern website in days, not months.</h2>
          <a href="mailto:aditya7e4@gmail.com">Let&apos;s build</a>
        </section>
      </main>

      <footer className="process-footer">
        <p>A</p>
        <span>Made with love in India.</span>
      </footer>
    </div>
  )
}

export default ProcessPage
