import { useState } from 'react'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useReducedMotion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  label: string
  dark?: boolean
}

export function Marquee({ items, label, dark = false }: MarqueeProps) {
  const [paused, setPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const isPaused = paused || shouldReduceMotion

  return (
    <div
      className={`marquee${dark ? ' marquee-dark' : ''}${isPaused ? ' marquee-paused' : ''}`}
      role="group"
      aria-label={label}
    >
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {items.map((item, index) => (
              <span className="marquee-item" key={`${item}-${index}`}>
                {item}
                <span className="marquee-star">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      {!shouldReduceMotion && (
        <button
          className="marquee-toggle"
          type="button"
          aria-label={paused ? 'Resume scrolling text' : 'Pause scrolling text'}
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          <FontAwesomeIcon icon={paused ? faPlay : faPause} aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
