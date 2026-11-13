import { Reveal } from '../../../components/ui/Reveal'

const steps = [
  {
    number: '01',
    title: 'Listen & understand',
    description:
      'We start with your context, your goals and the people you want to reach.',
  },
  {
    number: '02',
    title: 'Make a clear plan',
    description:
      'Together, we shape the challenge into an approach that feels useful and achievable.',
  },
  {
    number: '03',
    title: 'Create with care',
    description:
      'We bring the right people and technology together to move the idea forward.',
  },
]

export function ApproachSection() {
  return (
    <section className="approach-section section-pad" id="approach" aria-labelledby="approach-title">
      <div className="container-wide">
        <Reveal className="section-heading">
          <p className="eyebrow eyebrow-light">Our approach</p>
          <h2 id="approach-title">Thoughtful at every step.</h2>
          <p>
            No one-size-fits-all playbook. Just a clear, collaborative process
            built around the outcome you need.
          </p>
        </Reveal>
        <div className="approach-grid">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <article className="approach-step">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
