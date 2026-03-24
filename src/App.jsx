import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar.jsx'
import GitCheatsheet from './GitCheatsheet.jsx'
import HomePage from './HomePage.jsx'
import FigmaGuidePage from './FigmaGuidePage.jsx'
import PricingPage from './PricingPage.jsx'

function App() {
  return (
    <Router>
      <div className="studio-shell">
        <div className="mesh" aria-hidden="true" />
        <div className="lines" aria-hidden="true" />

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/git" element={<GitCheatsheet />} />
          <Route path="/figma" element={<FigmaGuidePage />} />
        </Routes>

        <footer className="footer reveal" style={{ '--delay': '220ms' }}>
          <p>A</p>
          <span>Designed, built, and written with care. Every project supports a bigger ambition.</span>
        </footer>
      </div>
    </Router>
  )
}

export default App
