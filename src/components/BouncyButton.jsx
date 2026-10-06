import { motion, useReducedMotion } from 'framer-motion'

// Outer span breathes forever; inner link squishes on press and springs back with overshoot (trampoline).
export default function BouncyButton({ href, className, children }) {
  const reduce = useReducedMotion()
  return (
    <motion.span
      className="inline-block"
      animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.a
        href={href}
        className={className}
        whileTap={{ scale: 0.88, y: 4 }}
        transition={{ type: 'spring', stiffness: 600, damping: 9 }}
      >
        {children}
      </motion.a>
    </motion.span>
  )
}
