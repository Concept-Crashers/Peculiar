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
            <p className="eyebrow eyebrow-light">Let&apos;s make a start</p>
            <h2 id="contact-title">Have something in mind? Let&apos;s explore it.</h2>
          </div>
          <Link className="button-primary" to="/contact">
            Contact Peculiar <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
