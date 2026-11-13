import { Reveal } from '../../../components/ui/Reveal'

const steps = [
  {
    number: '01',
    title: 'People & context',
    description:
      'Who is affected, what is happening now, and what needs to change?',
  },
  {
    number: '02',
    title: 'Purpose & outcomes',
    description:
      'What would a useful outcome look like, and how would you recognize it?',
  },
  {
    number: '03',
    title: 'Constraints & fit',
    description:
      'What existing systems, resources or requirements should shape the solution?',
  },
]

export function ApproachSection() {
  return (
    <section className="approach-section section-pad" id="approach" aria-labelledby="approach-title">
      <div className="container-wide">
        <Reveal className="section-heading">
          <p className="eyebrow eyebrow-light">Before choosing a solution</p>
          <h2 id="approach-title">Start with the questions that matter.</h2>
          <p>
            These are useful discovery questions, not a claim about a specific
            Peculiar delivery process.
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
