import './Navbar.css'

function Navbar() {
  return (
    <header className="top-nav reveal" style={{ '--delay': '50ms' }}>
      <a className="brand" href="/">
        ARC/FRAME
      </a>
      <nav>
        <a href="/services">Services</a>
        <a href="/portfolio">Work</a>
        <a href="/process">Process</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar
