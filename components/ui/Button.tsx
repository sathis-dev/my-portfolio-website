'use client'

/**
 * DarkVeil Design System v4.1 - Button Component
 * GPU-accelerated, performance-optimized button with proper touch targets
 */

import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

type IconName = keyof typeof LucideIcons

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: IconName
  iconPosition?: 'left' | 'right'
  loading?: boolean
  fullWidth?: boolean
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      loading = false,
      disabled,
      fullWidth,
      href,
      children,
      ...props
    },
    ref
  ) => {
    // Design System v4.1 variants
    const variants = {
      primary: cn(
        // Gradient background
        'bg-gradient-primary hover:bg-gradient-hover',
        // Text and shadows
        'text-white font-semibold',
        'shadow-magenta hover:shadow-magenta-hover',
        // Inset highlight for depth
        '[box-shadow:0_8px_24px_rgba(199,21,133,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]',
        'hover:[box-shadow:0_12px_32px_rgba(199,21,133,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]',
      ),
      secondary: cn(
        'bg-magenta-subtle border border-magenta-light',
        'hover:bg-magenta-light hover:border-magenta-medium',
        'text-white font-semibold',
        'backdrop-blur-[10px]',
      ),
      icon: cn(
        'bg-magenta-subtle border border-magenta-subtle',
        'hover:bg-magenta-light hover:border-magenta-medium',
        'text-text-secondary hover:text-white',
        '!p-0', // Override padding for icon buttons
      ),
      ghost: cn(
        'bg-transparent text-text-secondary border-none',
        'hover:bg-burgundy-light hover:text-white',
      ),
      outline: cn(
        'bg-transparent text-text-secondary',
        'border border-card',
        'hover:bg-burgundy-light hover:border-card',
      ),
    }

    const sizes = {
      sm: cn(
        'px-4 py-2 text-sm',
        'min-h-[40px]', // iOS minimum
      ),
      md: cn(
        'px-6 py-3 text-base',
        'min-h-[44px] md:min-h-[48px]', // Better touch target
      ),
      lg: cn(
        'px-8 py-4 text-lg',
        'min-h-[48px] md:min-h-[52px]',
      ),
    }

    // Icon button sizes (square)
    const iconSizes = {
      sm: 'w-10 h-10',
      md: 'w-12 h-12',
      lg: 'w-14 h-14',
    }

    // Icon component sizes
    const iconComponentSizes = {
      sm: 16,
      md: 20,
      lg: 24,
    }

    const Icon = icon && !loading ? (LucideIcons[icon] as React.ComponentType<{ size: number; 'aria-hidden': string; className?: string }>) : null
    const LoaderIcon = loading ? LucideIcons.Loader2 : null

    const buttonClasses = cn(
      // Base styles
      'relative inline-flex items-center justify-center gap-2',
      'font-semibold rounded-xl',
      
      // GPU acceleration for 60+ FPS
      'transform-gpu will-change-transform',
      'hover:-translate-y-0.5 active:translate-y-0',
      
      // Smooth transitions (GPU-friendly properties only)
      'transition-all duration-300 ease-out',
      
      // Touch optimization
      'touch-manipulation select-none',
      
      // Performance optimization
      'contain-layout',
      
      // Focus states
      'outline-none focus-visible:ring-2 focus-visible:ring-purple ring-offset-2 ring-offset-background-base',
      
      // Disabled state
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      'disabled:transform-none', // No hover effect when disabled
      
      // Variant and size
      variants[variant],
      variant === 'icon' ? iconSizes[size] : sizes[size],
      fullWidth && 'w-full',
      className
    )

    const content = (
      <>
        {/* Inset highlight for depth (primary variant only) */}
        {variant === 'primary' && (
          <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
        )}
        
        {/* Content wrapper for proper z-index */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {LoaderIcon && (
            <LoaderIcon
              size={iconComponentSizes[size]}
              className="animate-spin"
              aria-hidden="true"
            />
          )}
          {Icon && !loading && iconPosition === 'left' && (
            <Icon size={iconComponentSizes[size]} aria-hidden="true" />
          )}
          {children}
          {Icon && !loading && iconPosition === 'right' && (
            <Icon size={iconComponentSizes[size]} aria-hidden="true" />
          )}
        </span>
      </>
    )

    if (href) {
      return (
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

