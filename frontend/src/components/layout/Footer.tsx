import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-inner">
        <Link className="brand" to="/" aria-label="Peculiar Technologies home">
          <span className="brand-mark" aria-hidden="true">P.</span>
          <span className="brand-name">peculiar<span>.</span></span>
        </Link>
        <p className="footer-copy">© {currentYear} Peculiar Technologies Limited</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/team">Team</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/" aria-label="Back to top">
            Back to top <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
