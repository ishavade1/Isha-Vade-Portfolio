import { Database, LayoutDashboard, Radar as RadarIcon } from 'lucide-react'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts'
import { dataSkills, vizSkills, roleFitData } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { useChartColors } from '../hooks/useChartColors'

function SkillBars({ skills }) {
  return (
    <ul className="skill-bars">
      {skills.map((skill) => (
        <li key={skill.name}>
          <span>{skill.name}</span>
          <b>{skill.level}%</b>
          <div className="bar">
            <i style={{ '--w': `${skill.level}%` }}></i>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Skills({ theme }) {
  const panel1 = useReveal()
  const panel2 = useReveal()
  const panel3 = useReveal()
  const colors = useChartColors(theme)

  return (
    <section className="section section-alt" id="skills">
      <div className="section-inner">
        <p className="section-eyebrow">02 — Toolkit</p>
        <h2 className="section-title">What I reach for, and how often.</h2>

        <div className="skills-grid">
          <div
            className={`skill-panel reveal-init${panel1.inView ? ' in-view' : ''}`}
            ref={panel1.ref}
          >
            <h3 className="panel-title">
              <Database /> Data &amp; Analysis
            </h3>
            <SkillBars skills={dataSkills} />
          </div>

          <div
            className={`skill-panel reveal-init delay-1${panel2.inView ? ' in-view' : ''}`}
            ref={panel2.ref}
          >
            <h3 className="panel-title">
              <LayoutDashboard /> Visualization &amp; BI
            </h3>
            <SkillBars skills={vizSkills} />
          </div>

          <div
            className={`skill-panel reveal-init delay-2${panel3.inView ? ' in-view' : ''}`}
            ref={panel3.ref}
          >
            <div className="radar-wrap">
              <h3 className="panel-title">
                <RadarIcon /> Role fit
              </h3>
              <div className="radar-chart-frame">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={roleFitData} outerRadius="72%">
                    <PolarGrid stroke={colors.border} />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: colors['text-secondary'], fontSize: 10.5 }}
                    />
                    <Radar
                      dataKey="value"
                      stroke={colors['chart-1']}
                      fill={colors['chart-1']}
                      fillOpacity={0.15}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
