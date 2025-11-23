'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  label: string
  value: string | number
  icon: keyof typeof LucideIcons
  accentColor?: string
  animated?: boolean
  className?: string
}

export default function StatCard({
  label,
  value,
  icon,
  accentColor = '#8b5cf6',
  animated = true,
  className,
}: StatCardProps) {
  const Icon = LucideIcons[icon] as any
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  // Extract numeric value for animation
  const numericValue = typeof value === 'number' 
    ? value 
    : parseInt(value.toString().replace(/\D/g, '')) || 0
  
  const spring = useSpring(0, { duration: 2000 })
  const display = useTransform(spring, (latest) => 
    Math.floor(latest).toLocaleString()
  )

  useEffect(() => {
    if (isInView && animated && typeof value === 'number') {
      spring.set(numericValue)
    }
  }, [isInView, animated, value, numericValue, spring])

  return (
    <motion.div
      ref={ref}
      className={cn(
        'bg-dark-bg-tertiary/40 backdrop-blur-md',
        'border border-dark-border-subtle',
        'rounded-card',
        'p-6',
        'text-center',
        'transition-all duration-300',
        'hover:shadow-card hover:-translate-y-1',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      {/* Icon */}
      <div
        className="inline-flex w-12 h-12 items-center justify-center rounded-lg mb-4"
        style={{
          backgroundColor: `${accentColor}1A`, // 10% opacity
        }}
      >
        {Icon && (
          <Icon
            size={24}
            style={{ color: accentColor }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Value */}
      {animated && typeof value === 'number' ? (
        <motion.p className="text-display-lg font-bold text-dark-text-primary">
          {display}
        </motion.p>
      ) : (
        <p className="text-display-lg font-bold text-dark-text-primary">
          {value}
        </p>
      )}

      {/* Label */}
      <p className="text-body-sm text-dark-text-secondary mt-2">
        {label}
      </p>
    </motion.div>
  )
}

