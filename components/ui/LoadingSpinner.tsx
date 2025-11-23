'use client'

import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  text?: string
}

export default function LoadingSpinner({
  size = 'md',
  color,
  text,
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 20,
    md: 32,
    lg: 48,
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Loader2
        size={sizes[size]}
        className={cn('animate-spin', color || 'text-primary-500')}
        aria-hidden="true"
      />
      {text && (
        <p className="text-body-sm text-dark-text-secondary">{text}</p>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  )
}

