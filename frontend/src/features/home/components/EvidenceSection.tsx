import { faArrowRight, faFileCircleCheck, faMessage, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Reveal } from '../../../components/ui/Reveal'

const evidenceTypes = [
  {
    icon: faFileCircleCheck,
    title: 'Client-approved work',
    description: 'Project context and visuals will be shared only when publication is approved.',
  },
  {
    icon: faMessage,
    title: 'Genuine client perspectives',
    description: 'Any feedback will be real, attributed and published with the speaker’s permission.',
  },
  {
    icon: faChartLine,
    title: 'Verified outcomes',
    description: 'Results will include clear context and evidence rather than unsupported numbers.',
  },
]

export function EvidenceSection() {
  return (
    <section className="evidence-section section-pad" aria-labelledby="evidence-title">
      <div className="container-wide">
        <div className="evidence-intro">
          <Reveal className="section-heading">
            <p className="eyebrow">Evidence, not promises</p>
            <h2 id="evidence-title">Good work deserves a clear, honest story.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="evidence-description">
              We’ll add project stories, client feedback and outcomes here when the details are verified and approved.
              Nothing is presented as a client result or testimonial until then.
            </p>
          </Reveal>
        </div>
        <div className="evidence-grid">
          {evidenceTypes.map((evidence, index) => (
            <Reveal key={evidence.title} delay={index * 0.08}>
              <article className="evidence-card">
                <span className="evidence-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={evidence.icon} />
                </span>
                <span className="evidence-status">To be confirmed</span>
                <h3>{evidence.title}</h3>
                <p>{evidence.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link className="evidence-link" to="/projects">
            Explore the projects page <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
