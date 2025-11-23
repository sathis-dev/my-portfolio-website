'use client'

import { SelectHTMLAttributes, forwardRef } from 'react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'placeholder'> {
  label?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, required, id, placeholder, ...props }, ref) => {
    const selectId = id || `select-${label?.toLowerCase().replace(/\s+/g, '-')}`
    const errorId = error ? `${selectId}-error` : undefined

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="text-label font-medium text-dark-text-primary"
          >
            {label}
            {required && <span className="text-semantic-error ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              'w-full h-11',
              'px-4 pr-10 py-3',
              'bg-dark-bg-tertiary',
              'border border-dark-border-subtle',
              'rounded-input',
              'text-body text-dark-text-primary',
              'transition-all duration-200',
              'outline-none',
              'appearance-none',
              'cursor-pointer',
              'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
              error && 'border-semantic-error focus:border-semantic-error focus:ring-semantic-error/20',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={errorId}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-text-tertiary pointer-events-none">
            <LucideIcons.ChevronDown size={20} aria-hidden="true" />
          </div>
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

Select.displayName = 'Select'

export default Select

