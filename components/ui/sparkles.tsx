'use client'

/**
 * Sparkles Component - Animated sparkle effects
 * Perfect for CTAs, buttons, and highlighting important content
 */

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SparklesProps {
  children: React.ReactNode
  className?: string
  sparkleColor?: string
  sparkleSize?: number
  sparkleCount?: number
  duration?: number
  minDelay?: number
  maxDelay?: number
  hoverable?: boolean
}

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export function Sparkles({
  children,
  className,
  sparkleColor = '#C71585',
  sparkleSize = 4,
  sparkleCount = 10,
  duration = 2,
  minDelay = 0,
  maxDelay = 1,
  hoverable = false,
}: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [isHovered, setIsHovered] = useState(false)

  const generateSparkle = (): Sparkle => ({
    id: Date.now() + Math.random(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * sparkleSize + sparkleSize / 2,
    delay: Math.random() * (maxDelay - minDelay) + minDelay,
    duration: Math.random() * duration + duration / 2,
  })

  useEffect(() => {
    if (!hoverable || isHovered) {
      const initialSparkles = Array.from({ length: sparkleCount }, generateSparkle)
      setSparkles(initialSparkles)

      const interval = setInterval(() => {
        setSparkles((current) => {
          const now = Date.now()
          const filtered = current.filter(
            (s) => now - s.id < (s.duration + s.delay) * 1000
          )
          
          if (filtered.length < sparkleCount && (!hoverable || isHovered)) {
            return [...filtered, generateSparkle()]
          }
          
          return filtered
        })
      }, 200)

      return () => clearInterval(interval)
    } else {
      setSparkles([])
    }
  }, [isHovered, hoverable, sparkleCount, sparkleSize, duration, minDelay, maxDelay])

  return (
    <div
      className={cn('relative inline-block', className)}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
    >
      {children}
      
      <div className="pointer-events-none absolute inset-0">
        <AnimatePresence>
          {sparkles.map((sparkle) => (
            <Sparkle
              key={sparkle.id}
              sparkle={sparkle}
              color={sparkleColor}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

function Sparkle({ sparkle, color }: { sparkle: Sparkle; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        duration: sparkle.duration,
        delay: sparkle.delay,
        ease: 'easeInOut',
      }}
      className="absolute"
      style={{
        left: `${sparkle.x}%`,
        top: `${sparkle.y}%`,
        width: sparkle.size,
        height: sparkle.size,
      }}
    >
      <svg
        width={sparkle.size}
        height={sparkle.size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
          fill={color}
        />
      </svg>
      
      {/* Glow effect */}
      <div
        className="absolute inset-0"
        style={{
          background: color,
          filter: 'blur(4px)',
          opacity: 0.8,
        }}
      />
    </motion.div>
  )
}

/**
 * SparkleText Component - Text with sparkle effect
 */
interface SparkleTextProps {
  text: string
  className?: string
  sparkleColor?: string
}

export function SparkleText({ text, className, sparkleColor = '#C71585' }: SparkleTextProps) {
  return (
    <span className={cn('relative inline-block', className)}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="relative inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: i * 0.05,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
          {Math.random() > 0.7 && (
            <motion.span
              className="absolute -top-1 -right-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8">
                <path
                  d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3L4 0Z"
                  fill={sparkleColor}
                />
              </svg>
            </motion.span>
          )}
        </motion.span>
      ))}
    </span>
  )
}


