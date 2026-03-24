import { useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { motion } from 'framer-motion'
import CustomTooltip from '../common/CustomTooltip'

const pieColors = ['#38bdf8', '#22d3ee', '#8b5cf6', '#ec4899', '#f59e0b']

export default function ProjectModal({ project, onClose }) {
  const [showComparison, setShowComparison] = useState(true)

  useEffect(() => {
    if (!project) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    setShowComparison(true)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, project])

  if (!project) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-slate-950/80 px-4 py-6 backdrop-blur-lg sm:py-10">
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-5 shadow-panel backdrop-blur-xl sm:p-7"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Interactive Project Dashboard
            </div>
            <h3 id="project-modal-title" className="text-2xl font-bold text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowComparison((current) => !current)}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-400/20"
            >
              {showComparison ? 'Hide Comparison' : 'Show Comparison'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-200 transition hover:border-white/20 hover:text-white"
              aria-label="Close dashboard"
            >
              x
            </button>
          </div>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {project.kpis.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  {item.delta}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 lg:col-span-2">
            <div className="mb-5">
              <p className="text-lg font-semibold text-white">{project.lineChart.title}</p>
              <p className="mt-1 text-sm text-slate-400">{project.lineChart.description}</p>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={project.lineChart.data}>
                  <CartesianGrid stroke="rgba(148,163,184,0.12)" strokeDasharray="3 3" />
                  <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ color: '#cbd5e1' }} />
                  <Line
                    type="monotone"
                    dataKey="primary"
                    stroke="#38bdf8"
                    strokeWidth={3}
                    dot={{ r: 3, strokeWidth: 2, fill: '#050816' }}
                    activeDot={{ r: 6 }}
                    name={project.lineChart.primaryLabel}
                  />
                  {showComparison ? (
                    <Line
                      type="monotone"
                      dataKey="secondary"
                      stroke="#8b5cf6"
                      strokeWidth={2.5}
                      strokeDasharray="6 6"
                      dot={{ r: 2.5, strokeWidth: 2, fill: '#050816' }}
                      name={project.lineChart.secondaryLabel}
                    />
                  ) : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <div className="mb-5">
              <p className="text-lg font-semibold text-white">{project.pieChart.title}</p>
              <p className="mt-1 text-sm text-slate-400">{project.pieChart.description}</p>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={project.pieChart.data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={70}
                    outerRadius={108}
                    paddingAngle={5}
                  >
                    {project.pieChart.data.map((entry, index) => (
                      <Cell key={`${entry.name}-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="bottom" iconType="circle" wrapperStyle={{ paddingTop: 16, color: '#cbd5e1' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 lg:col-span-2">
            <div className="mb-5">
              <p className="text-lg font-semibold text-white">{project.barChart.title}</p>
              <p className="mt-1 text-sm text-slate-400">{project.barChart.description}</p>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={project.barChart.data}>
                  <CartesianGrid stroke="rgba(148,163,184,0.12)" strokeDasharray="3 3" />
                  <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ color: '#cbd5e1' }} />
                  <Bar dataKey="primary" radius={[10, 10, 0, 0]} fill="#22d3ee" name={project.barChart.primaryLabel} />
                  {showComparison ? (
                    <Bar dataKey="secondary" radius={[10, 10, 0, 0]} fill="#8b5cf6" name={project.barChart.secondaryLabel} />
                  ) : null}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
            <p className="text-lg font-semibold text-white">Key Insights</p>
            <div className="mt-5 space-y-3">
              {project.insights.map((insight, index) => (
                <div key={insight} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-300">
                  <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-bold text-cyan-200">
                    {index + 1}
                  </span>
                  <p>{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

