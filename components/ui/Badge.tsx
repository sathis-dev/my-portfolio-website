'use client'

import { HTMLAttributes } from 'react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

type IconName = keyof typeof LucideIcons

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'error'
  size?: 'xs' | 'sm' | 'md'
  icon?: IconName
  pulse?: boolean
}

export default function Badge({
  className,
  variant = 'default',
  size = 'sm',
  icon,
  pulse = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-primary-500/20 text-primary-400',
    secondary: 'bg-dark-bg-tertiary text-dark-text-secondary',
    outline: 'bg-transparent text-dark-text-secondary border border-dark-border-medium',
    success: 'bg-semantic-success/20 text-green-400',
    warning: 'bg-semantic-warning/20 text-yellow-400',
    error: 'bg-semantic-error/20 text-red-400',
  }

  const sizes = {
    xs: 'px-2 py-0.5 text-body-xs h-5',
    sm: 'px-2.5 py-1 text-body-sm h-6',
    md: 'px-3 py-1.5 text-body h-7',
  }

  const iconSizes = {
    xs: 12,
    sm: 14,
    md: 16,
  }

  const Icon = icon ? (LucideIcons[icon] as React.ComponentType<{ size: number; 'aria-hidden': string }>) : null

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'rounded-full font-medium whitespace-nowrap',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {Icon && <Icon size={iconSizes[size]} aria-hidden="true" />}
      {children}
    </span>
  )
}

