interface MarqueeProps {
  items: string[]
  label: string
  dark?: boolean
}

export function Marquee({ items, label, dark = false }: MarqueeProps) {
  const repeatedItems = [...items, ...items]

  return (
    <div className={`marquee${dark ? ' marquee-dark' : ''}`} role="img" aria-label={label}>
      <div className="marquee-track" aria-hidden="true">
        {repeatedItems.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
            <span className="marquee-star">✳</span>
          </span>
        ))}
      </div>
    </div>
  )
}
