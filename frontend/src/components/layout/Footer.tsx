import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { BrandLogo } from '../ui/BrandLogo'
import { siteLocation } from '../../data/siteSettings'

const currentYear = new Date().getFullYear()

const footerGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'About Peculiar', to: '/about' },
      { label: 'Our services', to: '/services' },
      { label: 'Products', to: '/products' },
      { label: 'Projects', to: '/projects' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'Insights', to: '/insights' },
      { label: 'Our team', to: '/team' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'Privacy notice', to: '/privacy' },
      { label: 'Terms of use', to: '/terms' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-cta">
        <img
          src="/images/workshop.webp"
          alt=""
          width="960"
          height="640"
          loading="lazy"
          className="footer-cta-image"
        />
        <div className="footer-cta-shade" aria-hidden="true" />
        <span className="footer-photo-note">Illustrative stock image</span>
        <div className="footer-cta-content">
          <p className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" aria-hidden="true" />
            Contact information
          </p>
          <h2>We&apos;re preparing a clear way to get in touch.</h2>
          <p>Approved contact channels and enquiry information will be published here once confirmed.</p>
        </div>
        <Link className="button-primary button-lime footer-cta-button" to="/contact">
          View contact page <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
        </Link>
      </div>

      <div className="container-wide footer-main">
        <div className="footer-brand-column">
          <Link className="brand footer-brand" to="/" aria-label="Peculiar Technologies home">
            <BrandLogo />
          </Link>
          <p className="footer-description">
            Crafting tomorrow&apos;s technology today, from Kampala, Uganda.
          </p>
          <p className="footer-location">
            <span className="footer-location-dot" aria-hidden="true" />
            Peculiar Technologies Limited <span aria-hidden="true">·</span> {siteLocation}
          </p>
        </div>

        {footerGroups.map((group) => (
          <nav className="footer-nav" aria-label={group.title} key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>
                    {link.label}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container-wide footer-bottom">
        <p>© {currentYear} Peculiar Technologies Limited. All rights reserved.</p>
        <p>Thoughtful technology. Human perspective.</p>
        <button
          type="button"
          className="back-to-top"
          onClick={() => {
            const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
              ? 'auto'
              : 'smooth'
            window.scrollTo({ top: 0, behavior })
          }}
        >
          Back to top <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  )
}
