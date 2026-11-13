import { Link, useParams } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { SiteLayout } from '../components/layout/SiteLayout'
import { Marquee } from '../components/ui/Marquee'
import { ContentReadiness } from '../components/ui/ContentReadiness'
import { PageContentSections } from '../components/ui/PageContentSections'

const detailSections: Record<
  string,
  {
    name: string
    note: string
    image: string
    needed: string[]
    blocks: { title: string; description: string; items: string[] }[]
  }
> = {
  services: {
    name: 'Service',
    note: 'Service details will be published when Peculiar confirms the offering and its scope.',
    image: '/images/workshop.webp',
    needed: ['Confirmed service name and audience', 'Scope, deliverables and engagement process', 'Approved examples and FAQs', 'A verified enquiry route'],
    blocks: [
      {
        title: 'Scope and fit',
        description: 'A service page should help a visitor understand who the work is for and what need it addresses.',
        items: ['Audience and problem', 'Confirmed scope and deliverables', 'Availability and engagement model'],
      },
      {
        title: 'Delivery and next steps',
        description: 'The service process and enquiry route will be explained after the offering is confirmed.',
        items: ['Process and responsibilities', 'Approved examples or FAQs', 'Verified contact route'],
      },
    ],
  },
  products: {
    name: 'Product',
    note: 'Product details will be published when Peculiar confirms the product and its availability.',
    image: '/images/workspace.webp',
    needed: ['Confirmed product name and intended users', 'Verified features and availability', 'Approved screenshots or demo', 'Support and access information'],
    blocks: [
      {
        title: 'Product overview',
        description: 'The overview will describe the product’s purpose and intended users using approved details.',
        items: ['Confirmed product name and purpose', 'Intended users and verified features', 'Current availability'],
      },
      {
        title: 'Access and support',
        description: 'Visitors will be shown how to evaluate, access and get help with the product.',
        items: ['Approved screenshots or demo', 'Access or purchase route', 'Support channel and terms'],
      },
    ],
  },
  projects: {
    name: 'Project',
    note: 'Project stories will be published only with client approval and evidence for any stated outcomes.',
    image: '/images/collaborative-work.webp',
    needed: ['Client and publication permission', 'Project challenge, scope and solution', 'Approved project visuals', 'Verified outcomes with supporting context'],
    blocks: [
      {
        title: 'Challenge and approach',
        description: 'A case study will provide useful context about the challenge and the work, with client approval.',
        items: ['Approved client attribution', 'Challenge, constraints and scope', 'Work delivered and approved visuals'],
      },
      {
        title: 'Outcome and evidence',
        description: 'Results will be included only when they are verified and presented with the right context.',
        items: ['Evidence and timeframe', 'Client-reviewed outcome description', 'Permission to publish the final story'],
      },
    ],
  },
  insights: {
    name: 'Article',
    note: 'Insights will be published after editorial review and author details are confirmed.',
    image: '/images/team-session.webp',
    needed: ['Reviewed article content', 'Confirmed author and biography', 'Publication date and topic', 'Related reading and sharing image'],
    blocks: [
      {
        title: 'Article content',
        description: 'A published article should offer original, reviewed content with a clear subject and useful structure.',
        items: ['Reviewed article body', 'Topic and publication date', 'Accessible images and captions'],
      },
      {
        title: 'Authorship and discovery',
        description: 'Article metadata and related links will be complete before content is presented as published.',
        items: ['Confirmed author and biography', 'Search and social metadata', 'Related articles and references'],
      },
    ],
  },
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

  return (
    <SiteLayout>
      <PageHero
        eyebrow={definition.name}
        title={`${definition.name} details in preparation`}
        description={definition.note}
        breadcrumb={`${definition.name} details`}
        image={definition.image}
      />
      <Marquee items={['Verified details', 'Approved content', 'Clear context']} label="Verified details. Approved content. Clear context." />
      <section className="editorial-section section-pad">
        <div className="container-wide editorial-grid">
          <div className="editorial-heading">
            <p className="eyebrow">{definition.name} / Content status</p>
            <h2>This page is a preparation template, not a published {definition.name.toLowerCase()}.</h2>
          </div>
          <div className="editorial-body">
            <p>{definition.note}</p>
            <div className="content-status">
              <span className="status-dot" aria-hidden="true" />
              <span>Details pending company approval</span>
            </div>
            <p className="content-status-note">
              The address currently identifies a content type only; no specific {definition.name.toLowerCase()} is being represented here.
            </p>
            <Link className="text-link" to={`/${section}`}>
              Back to {section} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <PageContentSections label={`${definition.name} detail`} blocks={definition.blocks} />
      <ContentReadiness
        title={`What this ${definition.name.toLowerCase()} page needs`}
        description="The detail page will be written only after these facts and permissions are confirmed."
        items={definition.needed}
      />
    </SiteLayout>
  )
}
