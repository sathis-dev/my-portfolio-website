'use client'

/**
 * Ripple Component - Ripple effect on click/hover
 * Perfect for interactive elements and buttons
 */

import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RippleProps {
  children: React.ReactNode
  className?: string
  color?: string
  duration?: number
  size?: number
  disabled?: boolean
  trigger?: 'click' | 'hover' | 'both'
  opacity?: number
}

interface RippleEffect {
  id: number
  x: number
  y: number
  size: number
}

export function Ripple({
  children,
  className,
  color = 'rgba(199, 21, 133, 0.3)',
  duration = 0.6,
  size = 100,
  disabled = false,
  trigger = 'click',
  opacity = 0.5,
}: RippleProps) {
  const [ripples, setRipples] = useState<RippleEffect[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const createRipple = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return

    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY
    
    const x = clientX - rect.left
    const y = clientY - rect.top
    
    const rippleSize = size || Math.max(rect.width, rect.height)
    
    const newRipple: RippleEffect = {
      id: Date.now(),
      x,
      y,
      size: rippleSize * 2,
    }
    
    setRipples((prev) => [...prev, newRipple])
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, duration * 1000)
  }, [disabled, size, duration])

  const handleClick = (e: React.MouseEvent) => {
    if (trigger === 'click' || trigger === 'both') {
      createRipple(e)
    }
  }

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (trigger === 'hover' || trigger === 'both') {
      createRipple(e)
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onTouchStart={createRipple}
    >
      {children}
      
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="pointer-events-none absolute"
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
            }}
            initial={{
              scale: 0,
              opacity: opacity,
            }}
            animate={{
              scale: 1,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration,
              ease: 'easeOut',
            }}
          >
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: color,
              }}
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}

/**
 * RippleButton Component - Button with built-in ripple effect
 */
interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string
  rippleDuration?: number
}

export function RippleButton({
  children,
  className,
  rippleColor = 'rgba(255, 255, 255, 0.3)',
  rippleDuration = 0.6,
  ...props
}: RippleButtonProps) {
  return (
    <Ripple
      color={rippleColor}
      duration={rippleDuration}
      trigger="click"
      className={cn(
        'inline-flex items-center justify-center',
        'px-6 py-3 rounded-xl',
        'bg-gradient-primary text-white font-semibold',
        'transition-all duration-300',
        'hover:-translate-y-0.5 active:translate-y-0',
        'shadow-magenta hover:shadow-magenta-hover',
        className
      )}
    >
      <button {...props} className="relative z-10 w-full h-full">
        {children}
      </button>
    </Ripple>
  )
}

/**
 * PulsingRipple Component - Continuous pulsing ripple effect
 */
interface PulsingRippleProps {
  children: React.ReactNode
  className?: string
  color?: string
  duration?: number
  size?: number
}

export function PulsingRipple({
  children,
  className,
  color = 'rgba(199, 21, 133, 0.4)',
  duration = 2,
  size = 200,
}: PulsingRippleProps) {
  return (
    <div className={cn('relative', className)}>
      {children}
      
      {/* Multiple ripples for smooth effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: size,
            height: size,
          }}
          animate={{
            scale: [1, 2],
            opacity: [0.4, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay: i * (duration / 3),
            ease: 'easeOut',
          }}
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background: color,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}



