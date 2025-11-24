'use client'

/**
 * Number Ticker Component - Animated number counter
 * Perfect for stats, achievements, and metrics
 */

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NumberTickerProps {
  value: number
  direction?: 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  decimalPlaces?: number
  prefix?: string
  suffix?: string
  separateThousands?: boolean
}

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  duration = 2,
  className,
  decimalPlaces = 0,
  prefix = '',
  suffix = '',
  separateThousands = true,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(direction === 'up' ? 0 : value)
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView || hasAnimated) return

    const startValue = direction === 'up' ? 0 : value
    const endValue = direction === 'up' ? value : 0
    const increment = (endValue - startValue) / (duration * 60) // 60fps
    let currentValue = startValue

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentValue += increment

        if (
          (direction === 'up' && currentValue >= endValue) ||
          (direction === 'down' && currentValue <= endValue)
        ) {
          setDisplayValue(endValue)
          clearInterval(interval)
          setHasAnimated(true)
        } else {
          setDisplayValue(currentValue)
        }
      }, 1000 / 60) // 60fps

      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [value, direction, delay, duration, isInView, hasAnimated])

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimalPlaces)
    
    if (separateThousands) {
      const parts = fixed.split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
    
    return fixed
  }

  return (
    <span
      ref={ref}
      className={cn(
        'inline-block tabular-nums',
        'bg-gradient-to-r from-magenta-light via-purple to-violet',
        'bg-clip-text text-transparent',
        className
      )}
    >
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  )
}

/**
 * AnimatedCounter Component - Simpler counter with rolling effect
 */
interface AnimatedCounterProps {
  value: number
  className?: string
  duration?: number
}

export function AnimatedCounter({ value, className, duration = 0.5 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const controls = {
      start: 0,
      end: value,
    }

    const increment = (controls.end - controls.start) / (duration * 60)
    let current = controls.start

    const animate = () => {
      current += increment
      
      if (current >= controls.end) {
        setDisplayValue(controls.end)
      } else {
        setDisplayValue(Math.floor(current))
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration, isInView])

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
    >
      <span
        className="inline-block transition-transform duration-300"
        style={{
          transform: `translateY(${-(displayValue * 100)}%)`,
        }}
      >
        {Array.from({ length: value + 1 }, (_, i) => (
          <span
            key={i}
            className="block h-full"
            style={{ height: '1em' }}
          >
            {i}
          </span>
        ))}
      </span>
    </div>
  )
}
