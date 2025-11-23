'use client'

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
            className="text-label font-medium text-dark-text-primary"
          >
            {label}
            {required && <span className="text-semantic-error ml-1">*</span>}
          </label>
        )}
        
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            'w-full min-h-[120px]',
            'px-4 py-3',
            'bg-dark-bg-tertiary',
            'border border-dark-border-subtle',
            'rounded-input',
            'text-body text-dark-text-primary',
            'placeholder:text-dark-text-tertiary',
            'transition-all duration-200',
            'outline-none',
            'resize-vertical',
            'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
            error && 'border-semantic-error focus:border-semantic-error focus:ring-semantic-error/20',
            'disabled:opacity-50 disabled:cursor-not-allowed',
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

Textarea.displayName = 'Textarea'

export default Textarea

