import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaFilter,
  FaLightbulb,
  FaRegFileAlt,
  FaThLarge
} from 'react-icons/fa'
import { services } from '../../data/siteData'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import SectionHeading from '../common/SectionHeading'

const iconMap = {
  analysis: FaChartLine,
  dashboard: FaThLarge,
  cleaning: FaFilter,
  visualization: FaChartPie,
  reporting: FaRegFileAlt,
  insights: FaLightbulb
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function ServicesSection() {
  return (
    <AnimatedSection id="services" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Ways I can support data-driven teams and business reporting needs."
          description="A practical service set focused on analytics, dashboards, reporting quality, and insight generation."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FaChartBar

            return (
              <GlassCard
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="h-full p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-2xl text-cyan-200">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
