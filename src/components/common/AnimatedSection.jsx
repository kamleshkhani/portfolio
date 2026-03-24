import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12
    }
  }
}

export default function AnimatedSection({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  )
}
