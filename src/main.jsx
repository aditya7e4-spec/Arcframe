import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ServicesPage from './ServicesPage.jsx'
import ProcessPage from './ProcessPage.jsx'
import ContactPage from './ContactPage.jsx'
import PortfolioPage from './PortfolioPage.jsx'

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const pages = {
  '/': App,
  '/services': ServicesPage,
  '/work': PortfolioPage,
  '/portfolio': PortfolioPage,
  '/process': ProcessPage,
  '/contact': ContactPage,
}

const Page = pages[normalizedPath] ?? App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
