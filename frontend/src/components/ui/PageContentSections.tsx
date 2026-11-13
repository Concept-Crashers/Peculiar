import { Reveal } from './Reveal'

interface PageContentBlock {
  title: string
  description: string
  items: string[]
}

interface PageContentSectionsProps {
  label: string
  blocks: PageContentBlock[]
}

export function PageContentSections({ label, blocks }: PageContentSectionsProps) {
  return (
    <section className="page-content-sections section-pad" aria-label={`${label} page details`}>
      <div className="container-wide">
        <Reveal className="page-content-intro">
          <p className="eyebrow">A useful page, built on confirmed details</p>
          <h2>What visitors should be able to find here.</h2>
        </Reveal>
        <div className="page-content-grid">
          {blocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.08}>
              <article className="page-content-card">
                <span className="page-content-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="page-content-status">Content in preparation</span>
                <h3>{block.title}</h3>
                <p>{block.description}</p>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
