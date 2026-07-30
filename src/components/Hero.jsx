import { useState } from 'react'
import { Sparkle, ArrowRight, Download, TrendingUp, CircleCheck } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import { profile, heroStats, heroChartData } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { useChartColors } from '../hooks/useChartColors'

function StatNumber({ value, inView }) {
  const count = useCountUp(value, inView)
  return <span className="stat-number">{count}</span>
}

export default function Hero({ theme }) {
  const copyReveal = useReveal()
  const visualReveal = useReveal()
  const colors = useChartColors(theme)
  const [hasPhoto, setHasPhoto] = useState(true)

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className={`hero-copy reveal-init${copyReveal.inView ? ' in-view' : ''}`} ref={copyReveal.ref}>
          <p className="eyebrow">
            <Sparkle /> Available for new roles
          </p>
          <h1 className="hero-title">
            Data becomes
            <br />
            <span className="text-accent">decisions</span> when someone
            <br />
            knows how to ask it.
          </h1>
          <p className="hero-sub">
           I'm Isha, a Data Analyst passionate about extracting meaningful insights from complex datasets. I combine analytical thinking with technical skills in SQL, Python, Excel, Power BI, and Tableau to build dashboards, automate analysis, and solve real-world business problems. Whether it's cleaning messy data, identifying trends, or communicating findings through compelling visualizations, I enjoy turning information into decisions that matter.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              <span>View my work</span>
              <ArrowRight />
            </a>
            <a href="/assets/resume.pdf" className="btn btn-secondary" download>
              <Download />
              <span>Download résumé</span>
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <StatNumber value={stat.value} inView={copyReveal.inView} />
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`hero-visual reveal-init delay-1${visualReveal.inView ? ' in-view' : ''}`}
          ref={visualReveal.ref}
        >
          <div className="blob-layer">
            <div className="visual-blob blob-a"></div>
            <div className="visual-blob blob-b"></div>
          </div>

          <div className="photo-frame">
            <div className="photo-ring">
              <div className="photo-inner">
                {hasPhoto && (
                  <img
                    src="/assets/Isha Profile.jpeg"
                    alt={profile.name}
                    onError={() => setHasPhoto(false)}
                  />
                )}
                {!hasPhoto && <span className="photo-placeholder">{profile.initials}</span>}
              </div>
            </div>
          </div>

          <div className="status-badge">
            <span className="status-dot"></span>
            Open to new roles
          </div>

          <div className="metric-card">
            <div className="metric-card-head">
              <span className="metric-card-title">Weekly active</span>
              <span className="metric-card-delta">
                <TrendingUp /> 8.4%
              </span>
            </div>
            <span className="metric-card-value">184.2K</span>
            <div className="metric-sparkline">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={heroChartData} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={colors['chart-1']} stopOpacity={0.32} />
                      <stop offset="100%" stopColor={colors['chart-1']} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="cohortA"
                    stroke={colors['chart-1']}
                    strokeWidth={2}
                    fill="url(#sparkFill)"
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
