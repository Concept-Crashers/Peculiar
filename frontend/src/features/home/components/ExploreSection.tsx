import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Reveal } from '../../../components/ui/Reveal'
import { featuredDestinations } from '../../../data/pageContent'

export function ExploreSection() {
  return (
    <section className="explore-section section-pad" aria-labelledby="explore-title">
      <div className="container-wide">
        <Reveal className="section-heading">
          <p className="eyebrow">Explore Peculiar</p>
          <h2 id="explore-title">Explore the pages taking shape.</h2>
          <p>
            Browse the areas of our site. Company-specific details will be
            published as they are confirmed.
          </p>
        </Reveal>
        <div className="destination-grid">
          {featuredDestinations.map((destination, index) => (
            <Reveal key={destination.href} delay={index * 0.08}>
              <Link
                className={`destination-card destination-${destination.tone}`}
                to={destination.href}
                aria-label={`Explore ${destination.title}`}
              >
                <span className="destination-number">{destination.number}</span>
                <img
                  className="destination-image"
                  src={destination.image}
                  alt=""
                  width="960"
                  height="640"
                  loading="lazy"
                />
                <span className="destination-image-note">Illustrative image</span>
                <div>
                  <h3>{destination.title}</h3>
                  <p>{destination.description}</p>
                </div>
                <span className="destination-card-arrow" aria-hidden="true">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
