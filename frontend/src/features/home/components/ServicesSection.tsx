import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Reveal } from '../../../components/ui/Reveal'
import { faArrowRight, faCompass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function ServicesSection() {
  return (
    <section className="services-section section-pad" id="services" aria-labelledby="services-title">
      <div className="container-wide">
        <div className="services-top">
          <Reveal className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2 id="services-title">The right solution begins with the right question.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="services-note">
              We&apos;re preparing a clear guide to Peculiar&apos;s confirmed
              services and how each one can help.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <Link className="service-preview" to="/services">
            <span className="service-preview-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faCompass} />
            </span>
            <span className="service-preview-copy">
              <strong>Explore the service catalogue</strong>
              <span>See the details as they become available.</span>
            </span>
            <FontAwesomeIcon className="service-preview-arrow" icon={faArrowRight} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
