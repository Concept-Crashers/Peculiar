import { Reveal } from '../../../components/ui/Reveal'
import { Link } from 'react-router-dom'

export function AboutSection() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="container-wide about-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">Peculiar Technologies Limited</p>
          <h2 id="about-title">A Ugandan technology company, grounded in real needs.</h2>
        </Reveal>
        <Reveal className="about-aside" delay={0.12}>
          <figure className="about-image">
            <img
              src="/images/workspace.webp"
              alt="A bright, collaborative workspace with shared desks"
              width="1200"
              height="800"
              loading="lazy"
            />
            <figcaption>Illustrative workspace photography</figcaption>
          </figure>
          <p>
            Based in Kampala, Peculiar Technologies Limited is building a
            clear, useful account of its company, services, products and work.
          </p>
          <p>
            We will share company-specific details as they are confirmed, so
            visitors can distinguish real capabilities and outcomes from
            illustrative content.
          </p>
          <Link className="text-link" to="/about">
            Read about Peculiar <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
