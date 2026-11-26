import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { easeOut } from '../../lib/motion.ts'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay in seconds, handy for staggering items in a list. */
  delay?: number
}

/** Fades and lifts its content into place the first time it scrolls into view. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}
