import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Reveal } from '../../../components/ui/Reveal'
import { featuredDestinations } from '../../../data/pageContent'

export function ExploreSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="explore-section section-pad" aria-labelledby="explore-title">
      <div className="container-wide">
        <Reveal className="section-heading">
          <p className="eyebrow">Explore Peculiar</p>
          <h2 id="explore-title">A little more of what we do.</h2>
          <p>
            The pages below are being prepared with confirmed company
            information. We&apos;ll add the detail as it is ready.
          </p>
        </Reveal>
        <div className="destination-grid">
          {featuredDestinations.map((destination, index) => (
            <Reveal key={destination.href} delay={index * 0.08}>
              <motion.article
                className={`destination-card destination-${destination.tone}`}
                whileHover={shouldReduceMotion ? undefined : { y: -7 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                <span className="destination-number">{destination.number}</span>
                <span className="destination-glyph" aria-hidden="true">
                  {destination.number === '01' ? '↗' : destination.number === '02' ? '◈' : destination.number === '03' ? '▧' : '✳'}
                </span>
                <div>
                  <h3>{destination.title}</h3>
                  <p>{destination.description}</p>
                </div>
                <Link to={destination.href} aria-label={`Explore ${destination.title}`}>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                </Link>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
