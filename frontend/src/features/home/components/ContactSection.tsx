import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Reveal } from '../../../components/ui/Reveal'
import { CompanyContactDetails } from '../../../components/ui/CompanyContactDetails'

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <Reveal className="container-wide">
        <div className="contact-panel">
          <div>
            <p className="eyebrow eyebrow-light">Contact Peculiar</p>
            <h2 id="contact-title">Let&apos;s talk about what you&apos;re building.</h2>
            <p className="contact-panel-note">
              Reach our team by email or phone to discuss your technology needs.
            </p>
            <CompanyContactDetails compact />
          </div>
          <Link className="button-primary" to="/contact">
            View contact page <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
