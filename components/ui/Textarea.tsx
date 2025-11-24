'use client'

/**
 * DarkVeil Design System v4.1 - Textarea Component
 * Form textarea with proper touch targets and focus states
 */

import { TextareaHTMLAttributes, forwardRef } from 'react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, required, id, ...props }, ref) => {
    const textareaId = id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-')}`
    const errorId = error ? `${textareaId}-error` : undefined

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-white"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            // Base styles
            'w-full min-h-[120px]',
            'px-4 py-3.5',
            
            // Design System v4.1 - Input styles
            'bg-background-elevated',
            'border',
            'border-[rgba(255,255,255,0.06)]',
            'rounded-[0.625rem]',
            
            // Typography
            'text-base text-white',
            'placeholder:text-text-tertiary',
            
            // Transitions
            'transition-all duration-200',
            'outline-none',
            
            // Resize
            'resize-vertical',
            
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

Textarea.displayName = 'Textarea'

export default Textarea

