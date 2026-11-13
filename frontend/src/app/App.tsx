import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import '../App.css'

const HomePage = lazy(() =>
  import('../pages/HomePage').then(({ HomePage }) => ({ default: HomePage })),
)
const ContentIndexPage = lazy(() =>
  import('../pages/ContentIndexPage').then(({ ContentIndexPage }) => ({ default: ContentIndexPage })),
)
const ContentDetailPage = lazy(() =>
  import('../pages/ContentDetailPage').then(({ ContentDetailPage }) => ({ default: ContentDetailPage })),
)
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage').then(({ NotFoundPage }) => ({ default: NotFoundPage })),
)

export function App() {
  return (
    <Suspense fallback={<div className="page-loading" role="status">Loading page…</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:section" element={<ContentIndexPage />} />
        <Route path="/:section/:slug" element={<ContentDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
