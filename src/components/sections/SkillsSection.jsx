import { motion } from 'framer-motion'
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaDatabase,
  FaFileExcel,
  FaFilter,
  FaLightbulb,
  FaPython,
  FaThLarge
} from 'react-icons/fa'
import { skills } from '../../data/siteData'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import SectionHeading from '../common/SectionHeading'

const iconMap = {
  excel: FaFileExcel,
  sql: FaDatabase,
  powerbi: FaChartPie,
  python: FaPython,
  visualization: FaChartPie,
  cleaning: FaFilter,
  dashboard: FaThLarge,
  analysis: FaChartLine,
  statistics: FaChartBar,
  solving: FaLightbulb
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technical strengths built for analytics, reporting, and dashboard storytelling."
          description="A toolkit centered around data preparation, analysis, visualization, and building polished decision-support experiences."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon] || FaChartBar

            return (
              <GlassCard
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="h-full p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-2xl text-cyan-200">
                    <Icon />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">{skill.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{skill.description}</p>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
