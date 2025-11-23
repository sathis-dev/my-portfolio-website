'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

type IconName = keyof typeof LucideIcons

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
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
    const variants = {
      primary: 'bg-gradient-primary text-white border-none hover:shadow-accent',
      secondary: 'bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-500/10',
      ghost: 'bg-transparent text-dark-text-secondary border-none hover:bg-dark-bg-tertiary hover:text-dark-text-primary',
      outline: 'bg-transparent text-dark-text-secondary border border-dark-border-medium hover:bg-dark-bg-tertiary hover:border-dark-border-strong',
    }

    const sizes = {
      sm: 'px-4 py-2 text-body-sm h-9',
      md: 'px-6 py-3 text-body h-11',
      lg: 'px-8 py-4 text-body-lg h-14',
    }

    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24,
    }

    const Icon = icon && !loading ? (LucideIcons[icon] as React.ComponentType<{ size: number; 'aria-hidden': string }>) : null
    const LoaderIcon = loading ? LucideIcons.Loader2 : null

    const buttonClasses = cn(
      'inline-flex items-center justify-center gap-2',
      'rounded-button font-semibold',
      'transition-all duration-300 ease-out',
      'outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg-primary',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    )

    const content = (
      <>
        {LoaderIcon && (
          <LoaderIcon
            size={iconSizes[size]}
            className="animate-spin"
            aria-hidden="true"
          />
        )}
        {Icon && !loading && iconPosition === 'left' && (
          <Icon size={iconSizes[size]} aria-hidden="true" />
        )}
        {children}
        {Icon && !loading && iconPosition === 'right' && (
          <Icon size={iconSizes[size]} aria-hidden="true" />
        )}
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

