import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', whileHover, ...props }) {
  return (
    <motion.div
      className={`glass-panel rounded-3xl ${className}`}
      whileHover={whileHover}
      {...props}
    >
      {children}
    </motion.div>
  )
}
