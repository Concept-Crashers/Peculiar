import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Reveal } from '../../../components/ui/Reveal'
import { companyServices } from '../../../data/companyInformation'

interface ServicesCatalogProps {
  home?: boolean
}

export function ServicesCatalog({ home = false }: ServicesCatalogProps) {
  return (
    <section
      className={`services-catalog section-pad${home ? ' services-catalog--home' : ''}`}
      aria-labelledby={home ? 'home-services-title' : 'services-catalog-title'}
    >
      <div className="container-wide">
        <Reveal className="services-catalog-heading">
          <p className="eyebrow">{home ? 'Our services' : 'What we do'}</p>
          <h2 id={home ? 'home-services-title' : 'services-catalog-title'}>
            {home ? 'Technology capabilities for real-world needs.' : 'From software and design to strategy and skills.'}
          </h2>
          <p>
            {home
              ? 'Explore software, digital experiences, technology strategy and training.'
              : 'Explore Peculiar Technologies’ services and the capabilities included in each area.'}
          </p>
        </Reveal>
        <div className="services-catalog-grid">
          {companyServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <article className="services-catalog-card">
                <div className="services-catalog-card-top">
                  <span className="services-catalog-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="services-catalog-icon" aria-hidden="true">
                    <FontAwesomeIcon icon={service.icon} />
                  </span>
                </div>
                <div className="services-catalog-card-content">
                  <h3>{service.title}</h3>
                  <p>{home ? service.summary : service.description}</p>
                  {!home && (
                    <ul>
                      {service.capabilities.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                  )}
                  <Link to={`/services/${service.slug}`} className="services-catalog-link">
                    Explore service <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {home && (
          <Reveal className="services-catalog-action">
            <Link className="button-primary" to="/services">Explore all services <span aria-hidden="true">→</span></Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
