import { motion } from 'framer-motion'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import dataGrid from '../../assets/data-grid.svg'
import { heroHighlights, heroMetrics } from '../../data/siteData'
import CustomTooltip from '../common/CustomTooltip'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'

const chartData = [
  { label: 'Jan', revenue: 22 },
  { label: 'Feb', revenue: 28 },
  { label: 'Mar', revenue: 26 },
  { label: 'Apr', revenue: 34 },
  { label: 'May', revenue: 41 },
  { label: 'Jun', revenue: 47 }
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
}

export default function HeroSection() {
  return (
    <AnimatedSection id="home" className="relative flex min-h-screen items-center pb-20 pt-32 sm:pb-24 lg:pt-36">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <motion.span variants={itemVariants} className="section-label">
            Data Analyst Portfolio
          </motion.span>

          <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Kamlesh Singh
            <span className="mt-3 block gradient-text">Turning Data into Insights and Insights into Decisions</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Data Analyst focused on dashboards, clean reporting, and insight-driven storytelling that helps businesses act with confidence.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative">
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-violet-500/20 blur-2xl sm:block"
          />

          <GlassCard className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-transparent" />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Live Preview</p>
                  <p className="mt-2 text-xl font-semibold text-white">Performance Insight Overview</p>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Active Dashboard
                </span>
              </div>

              <div className="mt-8 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="heroRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.65} />
                        <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(148,163,184,0.12)" strokeDasharray="4 4" />
                    <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#38bdf8"
                      strokeWidth={3}
                      fill="url(#heroRevenue)"
                      name="Revenue"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          <motion.img
            src={dataGrid}
            alt="Abstract data illustration"
            className="pointer-events-none absolute -bottom-60 -left-200 hidden w-40 opacity-75 sm:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
