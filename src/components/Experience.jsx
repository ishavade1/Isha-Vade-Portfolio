import { experience } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function TimelineItem({ item, index }) {
  const reveal = useReveal()
  const delayClass = index === 1 ? ' delay-1' : index === 2 ? ' delay-2' : ''

  return (
    <div
      className={`timeline-item reveal-init${delayClass}${reveal.inView ? ' in-view' : ''}`}
      ref={reveal.ref}
    >
      <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
      <div className="timeline-content">
        <div className="timeline-head">
          <h3>{item.role}</h3>
          <span className="timeline-date">{item.date}</span>
        </div>
        <p className="timeline-company">{item.company}</p>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="section-inner">
        <p className="section-eyebrow">04 — Experience</p>
        <h2 className="section-title">Where I've done the work.</h2>

        <div className="timeline">
          {experience.map((item, index) => (
            <TimelineItem key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
