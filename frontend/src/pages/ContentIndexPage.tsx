import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SiteLayout } from '../components/layout/SiteLayout'
import { Marquee } from '../components/ui/Marquee'
import { ContentReadiness } from '../components/ui/ContentReadiness'
import { PageContentSections } from '../components/ui/PageContentSections'
import { pageContent } from '../data/pageContent'
import { ServicesCatalog } from '../features/services/components/ServicesCatalog'
import { CompanyContactDetails } from '../components/ui/CompanyContactDetails'

const pageImages: Record<string, string> = {
  about: '/images/team-session.webp',
  services: '/images/workshop.webp',
  products: '/images/workspace.webp',
  projects: '/images/collaborative-work.webp',
  team: '/images/team-session.webp',
  insights: '/images/workspace.webp',
  careers: '/images/team-session.webp',
  contact: '/images/workshop.webp',
  privacy: '/images/workspace.webp',
  terms: '/images/workspace.webp',
}

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
        image={section ? pageImages[section] : undefined}
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
            {section !== 'services' && section !== 'contact' && (
              <p className="content-status-note">
                We&apos;ll publish this information when it has been confirmed and approved.
              </p>
            )}
          </Reveal>
        </div>
      </section>
      {section === 'services' ? (
        <ServicesCatalog />
      ) : section === 'contact' ? (
        <section className="contact-details-section section-pad">
          <div className="container-wide contact-details-layout">
            <Reveal className="contact-details-copy">
              <p className="eyebrow">Contact details</p>
              <h2>We&apos;d be glad to hear from you.</h2>
              <p>Get in touch by email or phone and tell us what you&apos;re looking to build or improve.</p>
            </Reveal>
            <Reveal className="contact-details-card">
              <CompanyContactDetails />
            </Reveal>
          </div>
        </section>
      ) : (
        <>
          <PageContentSections label={page.label} blocks={page.blocks} />
          <ContentReadiness
            title="What we need before publishing"
            description="Each part of this page will be completed with approved information, so visitors can rely on what they read."
            items={page.needed}
          />
        </>
      )}
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
