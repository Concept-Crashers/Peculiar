import { motion, useReducedMotion } from 'framer-motion'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container-wide hero-inner">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" aria-hidden="true" />
            Technology for people and progress
          </p>
          <h1 id="hero-title">
            Crafting tomorrow&apos;s
            <br />
            technology
            <br />
            <span>today.</span>
          </h1>
          <p className="hero-copy">
            Peculiar Technologies Limited is based in Kampala, Uganda. Explore
            our story, the way we think about technology, and the information
            we are preparing to share.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" to="/about">
              Discover Peculiar <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </Link>
            <Link className="text-link" to="/services">
              Services overview <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="hero-photo-wrap"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="hero-photo"
            src="/images/collaborative-work.webp"
            alt="Illustrative photo of colleagues collaborating around a shared workspace"
            fetchPriority="high"
            width="1440"
            height="960"
          />
          <div className="hero-photo-shade" aria-hidden="true" />
          <div className="hero-photo-caption">
            <span>
              <strong>Thoughtful technology starts with people.</strong>
              <small>Illustrative stock photography</small>
            </span>
          </div>
          <span className="hero-photo-index">Based in Kampala, Uganda</span>
        </motion.div>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Scroll to learn about Peculiar">
        <span>Scroll to explore</span>
        <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" />
      </a>
    </section>
  )
}
