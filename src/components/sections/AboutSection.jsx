import { motion } from 'framer-motion'
import { aboutPoints, impactStats } from '../../data/siteData'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import SectionHeading from '../common/SectionHeading'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
}

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="Data-focused, business-aware, and driven by meaningful insights."
          description="I am building my career in Data Analytics with a strong interest in dashboards, reporting, trend analysis, and transforming data into practical business decisions."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard variants={itemVariants} className="p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Professional Introduction</p>
            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              I enjoy turning raw data into clean visuals, clear narratives, and actionable recommendations.
            </h3>
            <div className="mt-6 space-y-5 text-sm leading-8 text-slate-300 sm:text-base">
              {aboutPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </GlassCard>

          <div className="grid gap-6">
            <GlassCard variants={itemVariants} className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Education</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Bachelor of Computer Applications (BCA)</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                A strong academic base in computing, logical thinking, and systems understanding that supports my analytics journey.
              </p>
            </GlassCard>

            <GlassCard variants={itemVariants} className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Career Focus</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Data Analytics</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Focused on reporting, dashboards, data cleaning, visualization, and uncovering insights that support smarter decisions.
              </p>
            </GlassCard>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {impactStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
