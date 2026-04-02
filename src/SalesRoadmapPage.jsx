import { useEffect } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import './SalesRoadmapPage.css'

function SalesRoadmapPage() {
  useEffect(() => {
    document.title = 'Sales Learning Roadmap'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="studio-shell sales-shell">
      <div className="mesh" aria-hidden="true" />
      <div className="lines" aria-hidden="true" />

      <Navbar />

      <main className="sales-roadmap-page">
        <section className="sales-roadmap-wrap reveal" style={{ '--delay': '120ms' }}>
          <iframe className="sales-roadmap-frame" src="/sales-roadmap.html" title="Sales Learning Roadmap" />
        </section>
      </main>
    </div>
  )
}

export default SalesRoadmapPage
