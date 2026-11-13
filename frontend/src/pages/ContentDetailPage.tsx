import { Link, useParams } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { SiteLayout } from '../components/layout/SiteLayout'
import { Marquee } from '../components/ui/Marquee'

const detailSections: Record<string, { name: string; note: string }> = {
  services: { name: 'Service', note: 'This service detail will include scope, deliverables, process and a way to enquire.' },
  products: { name: 'Product', note: 'This product detail will include its purpose, key features, availability and support information.' },
  projects: { name: 'Project', note: 'This case study will include an approved brief, the work delivered and verified outcomes.' },
  insights: { name: 'Article', note: 'This article page will include its author, publication date, reading content and related insights.' },
}

export function ContentDetailPage() {
  const { section, slug } = useParams()
  const definition = section ? detailSections[section] : undefined

  if (!definition || !slug) {
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

  const title = slug.replaceAll('-', ' ')
  const titleCase = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <SiteLayout>
      <PageHero
        eyebrow={definition.name}
        title={titleCase}
        description={definition.note}
        breadcrumb={definition.name}
      />
      <Marquee items={['Curiosity', 'Clarity', 'Care']} label="Curiosity. Clarity. Care." />
      <section className="editorial-section section-pad">
        <div className="container-wide editorial-grid">
          <div className="editorial-heading">
            <p className="eyebrow">{definition.name} / Detail</p>
            <h2>More about {titleCase.toLowerCase()}.</h2>
          </div>
          <div className="editorial-body">
            <p>{definition.note}</p>
            <div className="content-status">
              <span className="status-dot" aria-hidden="true" />
              <span>Details pending company approval</span>
            </div>
            <p className="content-status-note">
              This page will be completed with verified information before publication.
            </p>
            <Link className="text-link" to={`/${section}`}>
              Back to {section} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
