'use client'

import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface TechChipProps extends HTMLAttributes<HTMLSpanElement> {
  tech: {
    name: string
    icon?: string
    color?: string
  }
  size?: 'xs' | 'sm' | 'md'
  showIcon?: boolean
}

export default function TechChip({
  tech,
  size = 'sm',
  showIcon = false,
  className,
  ...props
}: TechChipProps) {
  const sizes = {
    xs: 'px-2 py-1 text-body-xs',
    sm: 'px-2.5 py-1.5 text-body-sm',
    md: 'px-3 py-2 text-body',
  }

  const iconSizes = {
    xs: 14,
    sm: 16,
    md: 18,
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'bg-dark-bg-tertiary',
        'border border-dark-border-subtle',
        'rounded-lg',
        'font-medium text-dark-text-secondary',
        'transition-all duration-200',
        'hover:bg-dark-bg-accent hover:border-dark-border-medium hover:-translate-y-0.5',
        sizes[size],
        className
      )}
      {...props}
    >
      {showIcon && tech.icon && (
        <img
          src={tech.icon}
          alt=""
          width={iconSizes[size]}
          height={iconSizes[size]}
          className="object-contain"
          aria-hidden="true"
        />
      )}
      {tech.name}
    </span>
  )
}

