import { motion, useReducedMotion } from 'framer-motion'
import { faArrowRight, faLayerGroup, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
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
            Peculiar Technologies Limited
          </p>
          <h1 id="hero-title">
            Thoughtful tech.
            <br />
            <span>Real purpose.</span>
          </h1>
          <p className="hero-copy">
            We believe the best technology begins with understanding people and
            the challenges they want to solve.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" to="/services">
              Discover our work <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </Link>
            <a className="text-link" href="#about">
              See our approach <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-art"
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="art-orbit"
            animate={shouldReduceMotion ? undefined : { rotateZ: [-25, -20, -25] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="art-core"
            animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [-12, -9, -12] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>P.</span>
          </motion.div>
          <motion.div
            className="art-chip art-chip-one"
            animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            Ideas into experiences
          </motion.div>
          <motion.div
            className="art-chip art-chip-two"
            animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            People-first technology
          </motion.div>
          <span className="art-spark">✳</span>
        </motion.div>
      </div>
    </section>
  )
}
