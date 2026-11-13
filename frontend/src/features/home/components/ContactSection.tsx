import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Reveal } from '../../../components/ui/Reveal'

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <Reveal className="container-wide">
        <div className="contact-panel">
          <div>
            <p className="eyebrow eyebrow-light">Contact information</p>
            <h2 id="contact-title">The right way to reach us is being confirmed.</h2>
            <p className="contact-panel-note">
              Visit the contact page for its current status. We will publish
              contact channels once they are approved.
            </p>
          </div>
          <Link className="button-primary" to="/contact">
            View contact page <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
