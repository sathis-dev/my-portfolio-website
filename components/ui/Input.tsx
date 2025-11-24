'use client'

/**
 * DarkVeil Design System v4.1 - Input Component
 * Form input with proper touch targets and focus states
 */

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
            className="text-sm font-medium text-white"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none">
              <Icon size={20} aria-hidden="true" />
            </div>
          )}
          
          <input
            id={inputId}
            ref={ref}
            type={type}
            className={cn(
              // Base styles
              'w-full',
              Icon ? 'pl-10 pr-4' : 'px-4',
              'py-3.5',
              
              // Design System v4.1 - Input styles
              'bg-background-elevated',
              'border',
              'border-[rgba(255,255,255,0.06)]',
              'rounded-[0.625rem]',
              
              // Typography
              'text-base text-white',
              'placeholder:text-text-tertiary',
              
              // Touch targets
              'min-h-[48px]',
              
              // Transitions
              'transition-all duration-200',
              'outline-none',
              
              // Hover state
              'hover:border-[rgba(255,255,255,0.1)]',
              
              // Focus state
              'focus:bg-[rgba(139,92,246,0.1)]',
              'focus:border-[rgba(139,92,246,0.4)]',
              'focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)]',
              
              // Error state
              error && [
                'border-red-500',
                'focus:border-red-500',
                'focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]',
              ],
              
              // Disabled state
              'disabled:opacity-50 disabled:cursor-not-allowed',
              
              // Prevent iOS zoom
              'text-[16px]',
              
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
            className="flex items-center gap-1.5 text-sm text-red-500"
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

