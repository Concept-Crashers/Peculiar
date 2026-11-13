import { useEffect, useRef, useState } from 'react'
import { faArrowRight, faBars, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from '../ui/BrandLogo'
import { siteLocation, socialProfiles } from '../../data/siteSettings'

const links = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Work', href: '/projects' },
  { label: 'Insights', href: '/insights' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => {
    setMenuOpen(false)
    if (window.matchMedia('(max-width: 767.98px)').matches) {
      menuToggleRef.current?.focus()
    }
  }

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container-wide utility-inner">
          <p className="utility-location">
            <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
            {siteLocation}
          </p>
          {socialProfiles.length > 0 && (
            <div className="utility-socials">
              <span>Follow Peculiar</span>
              {socialProfiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={profile.label}
                  title={profile.label}
                >
                  <FontAwesomeIcon icon={profile.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <nav className="container-wide nav-shell" aria-label="Main navigation">
        <Link className="brand brand-header" to="/" aria-label="Peculiar Technologies home" onClick={closeMenu}>
          <BrandLogo />
        </Link>
        <button
          ref={menuToggleRef}
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
            Get a quote <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
