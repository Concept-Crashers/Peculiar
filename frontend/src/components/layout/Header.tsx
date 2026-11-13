import { useState } from 'react'
import { faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Work', href: '/projects' },
  { label: 'Insights', href: '/insights' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="container-wide nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Peculiar Technologies home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">P.</span>
          <span className="brand-name">peculiar<span>.</span></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} aria-hidden="true" />
        </button>
        <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {links.map((link) => (
            <NavLink key={link.href} to={link.href} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact" onClick={closeMenu}>
            Get in touch <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
