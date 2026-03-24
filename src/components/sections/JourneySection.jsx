import { motion } from 'framer-motion'
import { learningJourney } from '../../data/siteData'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import SectionHeading from '../common/SectionHeading'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
}

export default function JourneySection() {
  return (
    <AnimatedSection id="journey" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="A learning journey shaped by curiosity, tools, and continuous growth."
          description="From core analytics concepts to dashboard development, each step has been focused on becoming more effective at working with data and communicating insights clearly."
        />

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/60 to-violet-500/0 lg:left-1/2" />

          <div className="space-y-8">
            {learningJourney.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="absolute left-4 top-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-400 lg:left-1/2" />
                <div className={`w-full pl-12 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-14' : 'lg:pl-14'}`}>
                  <GlassCard className="p-6 sm:p-7">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">{item.phase}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{item.description}</p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
