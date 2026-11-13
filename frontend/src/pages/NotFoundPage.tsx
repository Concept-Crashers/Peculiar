import { Link } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { PageMetadata } from '../components/ui/PageMetadata'

export function NotFoundPage() {
  return (
    <SiteLayout>
      <PageMetadata
        title="Page not found | Peculiar Technologies Limited"
        description="The page you are looking for could not be found."
      />
      <div className="not-found container-wide">
        <p className="eyebrow">404 · Page not found</p>
        <h1>That page isn&apos;t here.</h1>
        <Link className="button-primary" to="/">
          Back to home <span aria-hidden="true">→</span>
        </Link>
      </div>
    </SiteLayout>
  )
}
