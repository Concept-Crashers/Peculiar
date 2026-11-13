import { Reveal } from '../../../components/ui/Reveal'
import { Link } from 'react-router-dom'

export function AboutSection() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="container-wide about-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">A thoughtful technology partner</p>
          <h2 id="about-title">Good technology starts with understanding.</h2>
        </Reveal>
        <Reveal className="about-aside" delay={0.12}>
          <p>
            The best digital work is more than a clever idea or a line of code.
            It begins by listening, asking better questions and understanding
            what people actually need.
          </p>
          <p>
            Peculiar Technologies Limited is here to help turn that understanding
            into purposeful technology and digital experiences.
          </p>
          <Link className="text-link" to="/about">
            Get to know Peculiar <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
