import { Mail, Link2, Code2 } from 'lucide-react'
import { profile } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const reveal = useReveal()

  return (
    <section className="section contact" id="contact">
      <div
        className={`section-inner contact-inner reveal-init${reveal.inView ? ' in-view' : ''}`}
        ref={reveal.ref}
      >
        <p className="section-eyebrow">05 — Contact</p>
        <h2 className="section-title">
          Have a hard question with
          <br /> messy data behind it?
        </h2>
        <p className="contact-sub">
          I'm currently open to analyst and analytics-engineering roles. Reach out and I'll
          usually reply within a day.
        </p>

        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg">
            <Mail />
            <span>{profile.email}</span>
          </a>
          <a href="https://linkedin.com/in/ishavade01" className="btn btn-secondary btn-lg">
            <Link2 />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/ishavade1" className="btn btn-secondary btn-lg">
            <Code2 />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
