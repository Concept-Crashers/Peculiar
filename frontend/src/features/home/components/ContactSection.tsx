import { faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Reveal } from '../../../components/ui/Reveal'
import { companyContact } from '../../../data/companyInformation'

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
            <div className="contact-panel-actions">
              <a className="button-primary" href={`mailto:${companyContact.email}`}>
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> Email us
              </a>
              <a className="contact-call-link" href={`tel:${companyContact.phones[0].replaceAll(' ', '')}`}>
                <FontAwesomeIcon icon={faPhone} aria-hidden="true" /> Call {companyContact.phones[0]}
              </a>
            </div>
          </div>
          <Link className="contact-panel-details-link" to="/contact">
            All contact details <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
