'use client'

import {motion} from 'framer-motion'

import {cn} from '@/lib/utils'

type RevealVariant = 'fadeUp' | 'fade' | 'slideLeft' | 'slideRight' | 'scale'

interface RevealConfig {
  initial: {opacity: number; y?: number; x?: number; scale?: number}
  whileInView: {opacity: number; y?: number; x?: number; scale?: number}
}

const variantConfig: Record<RevealVariant, RevealConfig> = {
  fadeUp: {
    initial: {opacity: 0, y: 16},
    whileInView: {opacity: 1, y: 0},
  },
  fade: {
    initial: {opacity: 0},
    whileInView: {opacity: 1},
  },
  slideLeft: {
    initial: {opacity: 0, x: 24},
    whileInView: {opacity: 1, x: 0},
  },
  slideRight: {
    initial: {opacity: 0, x: -24},
    whileInView: {opacity: 1, x: 0},
  },
  scale: {
    initial: {opacity: 0, scale: 0.96},
    whileInView: {opacity: 1, scale: 1},
  },
}

interface RevealProps {
  children: React.ReactNode
  delay?: number
  variant?: RevealVariant
  className?: string
}

export function Reveal({children, delay = 0, variant = 'fadeUp', className}: RevealProps) {
  const config = variantConfig[variant]
  return (
    <motion.div
      className={cn(className)}
      initial={config.initial}
      whileInView={config.whileInView}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.5, delay, ease: [0.16, 1, 0.3, 1]}}
    >
      {children}
    </motion.div>
  )
}

const staggerContainer = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.08, delayChildren: 0.05},
  },
}

const staggerItem = {
  hidden: {opacity: 0, y: 16},
  visible: {opacity: 1, y: 0},
}

interface RevealStaggerProps {
  children: React.ReactNode
  className?: string
}

export function RevealStagger({children, className}: RevealStaggerProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
    >
      {children}
    </motion.div>
  )
}

interface RevealStaggerItemProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'li'
}

export function RevealStaggerItem({children, className, as: Component = 'div'}: RevealStaggerItemProps) {
  const MotionComponent = Component === 'li' ? motion.li : motion.div
  return (
    <MotionComponent className={cn(className)} variants={staggerItem}>
      {children}
    </MotionComponent>
  )
}
