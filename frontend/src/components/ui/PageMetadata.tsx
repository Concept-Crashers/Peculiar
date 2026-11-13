import { useEffect } from 'react'

interface PageMetadataProps {
  title: string
  description: string
}

export function PageMetadata({ title, description }: PageMetadataProps) {
  useEffect(() => {
    document.title = title

    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const openGraphTitleTag = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    const openGraphDescriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    )

    if (descriptionTag) descriptionTag.content = description
    if (openGraphTitleTag) openGraphTitleTag.content = title
    if (openGraphDescriptionTag) openGraphDescriptionTag.content = description
  }, [description, title])

  return null
}
