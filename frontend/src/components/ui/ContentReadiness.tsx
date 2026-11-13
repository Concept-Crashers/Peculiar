interface ContentReadinessProps {
  title: string
  description: string
  items: string[]
}

export function ContentReadiness({ title, description, items }: ContentReadinessProps) {
  return (
    <section className="content-readiness section-pad" aria-labelledby="content-readiness-title">
      <div className="container-wide">
        <div className="content-readiness-heading">
          <p className="eyebrow">Content preparation</p>
          <h2 id="content-readiness-title">{title}</h2>
          <p>{description}</p>
        </div>
        <ul className="content-readiness-list">
          {items.map((item, index) => (
            <li className="content-readiness-item" key={item}>
              <span className="content-readiness-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="content-readiness-copy">{item}</span>
              <span className="content-readiness-status">Needs confirmation</span>
            </li>
          ))}
        </ul>
        <p className="content-readiness-note">
          These are publication requirements, not claims about current company services, people, or results.
        </p>
      </div>
    </section>
  )
}
