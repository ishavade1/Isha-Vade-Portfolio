import { logos } from '../data/content'

export default function Logos() {
  return (
    <section className="logos">
      <p className="logos-label">Previously trusted with data by</p>
      <div className="logos-row">
        {logos.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </section>
  )
}
