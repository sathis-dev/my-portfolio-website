'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

type IconName = keyof typeof LucideIcons

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: IconName
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, icon, required, id, ...props }, ref) => {
    const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`
    const errorId = error ? `${inputId}-error` : undefined
    const Icon = icon ? (LucideIcons[icon] as React.ComponentType<{ size: number; 'aria-hidden': string }>) : null

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-label font-medium text-dark-text-primary"
          >
            {label}
            {required && <span className="text-semantic-error ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-text-tertiary pointer-events-none">
              <Icon size={20} aria-hidden="true" />
            </div>
          )}
          
          <input
            id={inputId}
            ref={ref}
            type={type}
            className={cn(
              'w-full h-11',
              Icon ? 'pl-10 pr-4' : 'px-4',
              'py-3',
              'bg-dark-bg-tertiary',
              'border border-dark-border-subtle',
              'rounded-input',
              'text-body text-dark-text-primary',
              'placeholder:text-dark-text-tertiary',
              'transition-all duration-200',
              'outline-none',
              'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
              error && 'border-semantic-error focus:border-semantic-error focus:ring-semantic-error/20',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={errorId}
            {...props}
          />
        </div>
        
        {error && (
          <p
            id={errorId}
            role="alert"
            className="flex items-center gap-1.5 text-body-sm text-semantic-error"
          >
            <LucideIcons.AlertCircle size={16} aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

