'use client'

/**
 * Blur Fade Component - Content that fades in with blur effect
 * Perfect for revealing content on scroll
 */

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  blur?: string
  inView?: boolean
  inViewMargin?: string
  yOffset?: number
  variant?: {
    hidden: { y?: number; opacity?: number; filter?: string }
    visible: { y?: number; opacity?: number; filter?: string }
  }
}

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.5,
  blur = '8px',
  inView = false,
  inViewMargin = '-100px',
  yOffset = 20,
  variant,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: inViewMargin as any,
  })
  
  const defaultVariants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
  }
  
  const combinedVariants = variant || defaultVariants

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? (isInView ? 'visible' : 'hidden') : 'visible'}
      variants={combinedVariants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

/**
 * BlurFadeStagger Component - Staggered blur fade for lists
 */
interface BlurFadeStaggerProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  delay?: number
  duration?: number
  blur?: string
  yOffset?: number
}

export function BlurFadeStagger({
  children,
  className,
  staggerDelay = 0.1,
  delay = 0,
  duration = 0.5,
  blur = '8px',
  yOffset = 20,
}: BlurFadeStaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: {
              y: yOffset,
              opacity: 0,
              filter: `blur(${blur})`,
            },
            visible: {
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
            },
          }}
          transition={{
            duration,
            delay: delay + index * staggerDelay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

/**
 * BlurFadeText Component - Text that reveals word by word
 */
interface BlurFadeTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  wordDelay?: number
}

export function BlurFadeText({
  text,
  className,
  delay = 0,
  duration = 0.3,
  wordDelay = 0.05,
}: BlurFadeTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  
  const words = text.split(' ')

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn('flex flex-wrap gap-x-1', className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              filter: 'blur(8px)',
              y: 10,
            },
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
            },
          }}
          transition={{
            duration,
            delay: delay + index * wordDelay,
            ease: 'easeOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
