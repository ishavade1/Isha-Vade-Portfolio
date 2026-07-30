import { ArrowUpRight } from 'lucide-react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'
import { projects } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { useChartColors } from '../hooks/useChartColors'

function ProjectChart({ project, colors }) {
  if (project.chartType === 'bar') {
    const shades = [1, 0.8, 0.6, 0.4]
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={project.chartData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
          <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={22}>
            {project.chartData.map((entry, i) => (
              <Cell key={entry.label} fill={colors['chart-1']} fillOpacity={shades[i] ?? 1} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    )
  }

  if (project.chartType === 'line') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={project.chartData} margin={{ top: 8, right: 4, bottom: 0, left: 4 }}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={colors['chart-2']}
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  // donut
  const donutColors = [colors['chart-1'], colors['chart-3'], colors.border]
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={project.chartData}
          dataKey="value"
          nameKey="label"
          innerRadius="58%"
          outerRadius="82%"
          paddingAngle={2}
          stroke="none"
        >
          {project.chartData.map((entry, i) => (
            <Cell key={entry.label} fill={donutColors[i % donutColors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

function ProjectCard({ project, index, colors }) {
  const reveal = useReveal()
  const delayClass = index === 1 ? ' delay-1' : index === 2 ? ' delay-2' : ''

  return (
    <article
      className={`project-card reveal-init${delayClass}${reveal.inView ? ' in-view' : ''}`}
      ref={reveal.ref}
    >
      <div className="project-chart">
        <ProjectChart project={project} colors={colors} />
      </div>
      <div className="project-body">
        <span className="project-tag">{project.tag}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.value}</span>
              {metric.label}
            </div>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project <ArrowUpRight />
        </a>
      </div>
    </article>
  )
}

export default function Projects({ theme }) {
  const colors = useChartColors(theme)

  return (
    <section className="section" id="work">
      <div className="section-inner">
        <p className="section-eyebrow">03 — Selected work</p>
        <h2 className="section-title">Projects, with the impact attached.</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} colors={colors} />
          ))}
        </div>
      </div>
    </section>
  )
}
