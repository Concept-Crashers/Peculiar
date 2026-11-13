import { Link, useParams } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SiteLayout } from '../components/layout/SiteLayout'
import { companyServices } from '../data/companyInformation'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = companyServices.find((item) => item.slug === slug)

  if (!service) {
    return (
      <SiteLayout>
        <div className="container-wide not-found">
          <p className="eyebrow">404 · Service not found</p>
          <h1>That service isn&apos;t here.</h1>
          <Link className="button-primary" to="/services">Explore our services <span aria-hidden="true">→</span></Link>
        </div>
      </SiteLayout>
    )
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our services"
        title={service.title}
        description={service.summary}
        breadcrumb={service.title}
        image="/images/workshop.webp"
      />
      <section className="service-detail-section section-pad">
        <div className="container-wide service-detail-layout">
          <Reveal className="service-detail-intro">
            <p className="eyebrow">What we offer</p>
            <h2>Capabilities shaped around your needs.</h2>
            <p>{service.description}</p>
            <Link className="button-primary" to="/contact">Talk to our team <span aria-hidden="true">→</span></Link>
          </Reveal>
          <div className="service-detail-capabilities">
            {service.capabilities.map((capability, index) => (
              <Reveal key={capability} delay={index * 0.05}>
                <div className="service-detail-capability">
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{capability}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="service-detail-cta">
        <div className="container-wide service-detail-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">Have a project in mind?</p>
            <h2>Let&apos;s talk about what you need.</h2>
          </div>
          <Link className="button-primary button-lime" to="/contact">Get in touch <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </SiteLayout>
  )
}
