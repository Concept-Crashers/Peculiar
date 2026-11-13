import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Reveal } from '../../../components/ui/Reveal'
import {
  faArrowRight,
  faClipboardCheck,
  faPeopleGroup,
  faRoute,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const serviceDetails = [
  {
    icon: faPeopleGroup,
    title: 'Who it is for',
    description: 'The people, needs and situations a confirmed service is designed to support.',
  },
  {
    icon: faClipboardCheck,
    title: 'What is included',
    description: 'A practical explanation of scope, deliverables and responsibilities.',
  },
  {
    icon: faRoute,
    title: 'How it works',
    description: 'The engagement steps and next actions, once confirmed by the company.',
  },
  {
    icon: faScaleBalanced,
    title: 'Evidence and examples',
    description: 'Relevant examples and outcomes, shared only when verified and approved.',
  },
]

export function ServicesSection() {
  return (
    <section className="services-section section-pad" id="services" aria-labelledby="services-title">
      <div className="container-wide">
        <div className="services-top">
          <Reveal className="section-heading">
            <p className="eyebrow">Our services</p>
            <h2 id="services-title">Useful service information should answer real questions.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="services-note">
              Peculiar&apos;s confirmed service catalogue is being prepared.
              These are the details we&apos;ll provide—not a list of claimed offerings.
            </p>
          </Reveal>
        </div>
        <div className="principle-grid">
          {serviceDetails.map((detail, index) => (
            <Reveal key={detail.title} delay={index * 0.07}>
              <article className="principle-card">
                <span className="principle-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={detail.icon} />
                </span>
                <span className="principle-index">0{index + 1}</span>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link className="service-preview" to="/services">
            <span className="service-preview-copy">
              <strong>Looking for a specific capability?</strong>
              <span>Our confirmed services and details will be added here.</span>
            </span>
            <span className="service-preview-link">
              View services <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
