import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Reveal } from '../../../components/ui/Reveal'
import { companyServices } from '../../../data/companyInformation'

const servicePaths = [
  {
    number: '01',
    title: 'Build digital products',
    description: 'Explore software and website capabilities for digital products and business needs.',
    services: [companyServices[0], companyServices[1]],
  },
  {
    number: '02',
    title: 'Design useful experiences',
    description: 'Explore research, prototyping and product design capabilities.',
    services: [companyServices[2]],
  },
  {
    number: '03',
    title: 'Plan, automate and build skills',
    description: 'Explore strategy, data, automation and technology training capabilities.',
    services: [companyServices[3], companyServices[4], companyServices[5]],
  },
]

export function ExploreSection() {
  return (
    <section className="explore-section section-pad" aria-labelledby="explore-title">
      <div className="container-wide">
        <Reveal className="section-heading">
          <p className="eyebrow">Explore our capabilities</p>
          <h2 id="explore-title">Where would you like to start?</h2>
          <p>Choose an area to see the related services and capabilities.</p>
        </Reveal>
        <div className="explore-path-grid">
          {servicePaths.map((path, index) => (
            <Reveal key={path.number} delay={index * 0.08}>
              <article className="explore-path-card">
                <span className="explore-path-number">{path.number}</span>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <ul>
                  {path.services.map((service) => (
                    <li key={service.slug}>
                      <Link to={`/services/${service.slug}`}>
                        {service.title}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="explore-path-action">
          <Link className="text-link" to="/services">
            View all services <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
