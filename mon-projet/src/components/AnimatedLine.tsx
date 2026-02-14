import { useMemo } from 'react'
import { motion } from 'motion/react'

import type { Variants } from 'motion/react'

type AnimatedLineProps = {
  text: string
}

export function AnimatedLine({ text }: AnimatedLineProps) {
  const containerVariants = useMemo<Variants>(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.06,
        },
      },
    }),
    [],
  )

  const charVariants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0, y: 14, filter: 'blur(8px)' },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      },
    }),
    [],
  )

  return (
    <motion.div variants={containerVariants} style={{ display: 'inline-block' }}>
      {Array.from(text).map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          variants={charVariants}
          style={{ display: 'inline-block', whiteSpace: ch === ' ' ? 'pre' : 'normal' }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.div>
  )
}
