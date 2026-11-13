import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SiteLayout } from '../components/layout/SiteLayout'
import { Marquee } from '../components/ui/Marquee'
import { pageContent } from '../data/pageContent'

export function ContentIndexPage() {
  const { section } = useParams()
  const page = section ? pageContent[section] : undefined

  if (!page) {
    return (
      <SiteLayout>
        <div className="container-wide not-found">
          <p className="eyebrow">404 · Page not found</p>
          <h1>That page isn&apos;t here.</h1>
          <Link className="button-primary" to="/">Back to home <span aria-hidden="true">→</span></Link>
        </div>
      </SiteLayout>
    )
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumb={page.label}
      />
      <Marquee items={['People first', 'Built with purpose', 'Made to matter']} label="People first. Built with purpose. Made to matter." />
      <section className="editorial-section section-pad">
        <div className="container-wide editorial-grid">
          <Reveal className="editorial-heading">
            <p className="eyebrow">{page.label} / A note</p>
            <h2>{page.introTitle}</h2>
          </Reveal>
          <Reveal className="editorial-body" delay={0.12}>
            <p>{page.intro}</p>
            <div className="content-status">
              <span className="status-dot" aria-hidden="true" />
              <span>{page.status}</span>
            </div>
            <p className="content-status-note">
              We&apos;ll publish this information when it has been confirmed and approved.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="page-next-section">
        <div className="container-wide page-next-inner">
          <Reveal>
            <p className="eyebrow eyebrow-light">Continue exploring</p>
            <h2>Get to know Peculiar, one step at a time.</h2>
          </Reveal>
          <Link className="button-primary button-lime" to="/contact">
            Start a conversation <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
