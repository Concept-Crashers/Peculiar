import { Reveal } from '../../../components/ui/Reveal'
import { Link } from 'react-router-dom'

export function AboutSection() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="container-wide about-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">Peculiar Technologies Limited</p>
          <h2 id="about-title">Technology, design and digital skills from Kampala.</h2>
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
            Peculiar Technologies Limited is a Kampala-based technology
            company offering software development, website design and
            development, and UI/UX and product design.
          </p>
          <p>
            Our services also include IT consulting and digital strategy,
            data and automation, emerging technologies, and training and
            capacity building.
          </p>
          <Link className="text-link" to="/about">
            Read about Peculiar <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
