import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: 'default' | 'secondary' | 'accent' | 'gradient'
  fullWidth?: boolean
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function Section({
  id,
  background = 'default',
  fullWidth = false,
  containerSize,
  className,
  children,
  ...props
}: SectionProps) {
  const backgrounds = {
    default: 'bg-dark-bg-primary',
    secondary: 'bg-dark-bg-secondary',
    accent: 'bg-dark-bg-tertiary',
    gradient: 'bg-gradient-hero',
  }

  const content = fullWidth ? (
    children
  ) : (
    <Container size={containerSize}>{children}</Container>
  )

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        backgrounds[background],
        className
      )}
      {...props}
    >
      {content}
    </section>
  )
}

