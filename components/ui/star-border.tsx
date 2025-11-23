'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StarBorderProps {
  children: ReactNode
  className?: string
  speed?: number
  as?: any
  color?: string
  [key: string]: any
}

export function StarBorder({
  children,
  className = '',
  speed = 5,
  as: Component = 'button',
  color = 'rgba(199, 21, 133, 0.8)', // Magenta default
  ...props
}: StarBorderProps) {
  return (
    <Component
      className={`relative inline-flex overflow-hidden rounded-2xl p-[1.5px] ${className}`}
      {...props}
    >
      {/* Animated gradient border - GPU Accelerated */}
      <motion.span
        className="absolute inset-0 z-0"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, 
            transparent 0%, 
            ${color} 20%, 
            transparent 40%, 
            ${color} 60%, 
            transparent 80%, 
            ${color} 90%,
            transparent 100%)`,
          willChange: 'transform',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      />

      {/* Animated glow effect - Synced with border */}
      <motion.span
        className="absolute inset-0 z-0"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, 
            transparent 0%, 
            ${color} 20%, 
            transparent 40%, 
            ${color} 60%, 
            transparent 80%, 
            ${color} 90%,
            transparent 100%)`,
          filter: 'blur(6px)',
          opacity: 0.5,
          willChange: 'transform',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      />

      {/* Inner content - Solid background */}
      <span 
        className="relative z-10 flex h-full w-full items-center justify-center rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.98) 0%, rgba(20, 10, 20, 0.98) 100%)',
        }}
      >
        {children}
      </span>
    </Component>
  )
}

