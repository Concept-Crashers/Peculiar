import { Link, useParams } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { ServiceDetailPage } from './ServiceDetailPage'

export function ContentDetailPage() {
  const { section, slug } = useParams()
  if (section === 'services' && slug) return <ServiceDetailPage />

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
