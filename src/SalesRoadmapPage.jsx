import { useEffect } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import salesRoadmapHtml from '../sales-roadmap.html?raw'
import './SalesRoadmapPage.css'

const normalizedSalesRoadmapHtml = salesRoadmapHtml
  .replaceAll('\u00c2\u00b7', '·')
  .replaceAll('\u00e2\u20ac\u201d', '—')
  .replaceAll('\u00e2\u20ac\u201c', '–')
  .replaceAll('\u00e2\u20ac\u00a6', '...')
  .replaceAll('\u00e2\u2020\u2019', '→')
  .replaceAll('\u00e2\u2020\u00b3', '↳')
  .replaceAll('\u00e2\u0161\u00a1', '')
  .replaceAll('\u00f0\u0178\u0161\u00ab', '')
  .replaceAll('\u00f0\u0178\u201c\u0160', '')
  .replaceAll('\u00e2\u20ac\u0161\u00b9', '₹')
  .replaceAll('\u00c3\u2014', '×')

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
          <iframe
            className="sales-roadmap-frame"
            srcDoc={normalizedSalesRoadmapHtml}
            title="Sales Learning Roadmap"
          />
        </section>
      </main>
    </div>
  )
}

export default SalesRoadmapPage
