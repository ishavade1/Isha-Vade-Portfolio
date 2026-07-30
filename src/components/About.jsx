import { GraduationCap, MapPin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const titleReveal = useReveal()
  const copyReveal = useReveal()

  return (
    <section className="section" id="about">
      <div className="section-inner about-grid">
        <div className={`reveal-init${titleReveal.inView ? ' in-view' : ''}`} ref={titleReveal.ref}>
          <p className="section-eyebrow">01 — About</p>
          <h2 className="section-title">
            I like questions that don't have
            <br /> an obvious answer yet.
          </h2>
        </div>
        <div
          className={`about-copy reveal-init delay-1${copyReveal.inView ? ' in-view' : ''}`}
          ref={copyReveal.ref}
        >
          <p>
            My journey into data analytics began with a curiosity to understand the stories 
            hidden behind numbers. Through hands-on projects, I've learned how to clean messy 
            datasets, analyze trends, build interactive dashboards, and communicate insights that 
            support better decision-making.
          </p>
          <p>
           I enjoy solving real-world business problems using SQL, Python, Excel, Power BI, and Tableau. 
           Whether it's uncovering customer behavior, analyzing business performance, or 
           automating repetitive analysis, I focus on turning raw data into clear, 
           actionable insights.
          </p>
          <p>
            I'm continuously learning, building projects, and exploring new analytical techniques 
            to grow as a data analyst and create meaningful business impact.
          </p>
          <div className="about-facts">
            <div className="fact">
              <GraduationCap />
              <div>
                <span className="fact-title">MCA</span>
                <span className="fact-sub">Amity University Mumbai</span>
              </div>
            </div>
            <div className="fact">
              <MapPin />
              <div>
                <span className="fact-title">Based in Mumbai</span>
                <span className="fact-sub">Open to remote / Full Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
