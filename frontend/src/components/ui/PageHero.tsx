import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PageMetadata } from './PageMetadata'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  breadcrumb?: string
}

export function PageHero({ eyebrow, title, description, breadcrumb }: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <PageMetadata
        title={`${title} | Peculiar Technologies Limited`}
        description={description}
      />
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container-wide page-hero-inner">
          {breadcrumb && (
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{breadcrumb}</span>
            </nav>
          )}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="page-hero-copy"
          >
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 id="page-title">{title}</h1>
            <p className="page-hero-description">{description}</p>
          </motion.div>
          <motion.div
            className="page-hero-art"
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9, rotate: -7 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="page-art-ring page-art-ring-one" />
            <div className="page-art-ring page-art-ring-two" />
            <div className="page-art-card">
              <span className="page-art-kicker">PECULIAR / {eyebrow.toUpperCase()}</span>
              <span className="page-art-line page-art-line-wide" />
              <span className="page-art-line" />
              <span className="page-art-line page-art-line-short" />
              <span className="page-art-stamp">P.</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
