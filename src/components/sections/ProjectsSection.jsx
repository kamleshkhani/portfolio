import { projects } from '../../data/siteData'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import SectionHeading from '../common/SectionHeading'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function ProjectsSection({ onOpenProject }) {
  return (
    <AnimatedSection id="projects" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Personal Projects"
          title="Interactive dashboards designed to be explored directly inside the portfolio."
          description="Each featured project opens as an embedded dashboard experience with KPI cards, bar charts, line charts, and pie charts using sample data for demonstration."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <GlassCard
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`} />
              <div className="absolute inset-0 bg-slate-950/75" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Featured Dashboard</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                    {project.tools[0]}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.focus.map((item) => (
                    <span key={item} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-1 items-end">
                  <button
                    type="button"
                    onClick={() => onOpenProject(project)}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1"
                  >
                    View Dashboard
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
