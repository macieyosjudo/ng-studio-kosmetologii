import { motion } from 'framer-motion'

export default function SectionReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const offset = direction === 'up' ? { y: 24 } : direction === 'left' ? { x: 24 } : { x: -24 }
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
