'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill
  className?: string
}

export default function SkillCard({ skill, className }: SkillCardProps) {
  const levelColors = {
    Beginner: 'text-yellow-400',
    Intermediate: 'text-blue-400',
    Advanced: 'text-green-400',
  }

  const levelBadgeVariants = {
    Beginner: 'warning' as const,
    Intermediate: 'default' as const,
    Advanced: 'success' as const,
  }

  return (
    <div
      className={cn(
        // Design System v4.1 - Card styles
        'bg-background-elevated backdrop-blur-[12px]',
        'border border-card',
        'rounded-2xl',
        'p-6',
        
        // GPU acceleration
        'transform-gpu will-change-transform',
        
        // Transitions
        'transition-all duration-300 ease-out',
        
        // Hover states
        'hover:-translate-y-2',
        'hover:border-[rgba(255,255,255,0.12)]',
        'hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]',
        
        // Performance optimization
        'contain-layout',
        
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        {/* Icon */}
        {skill.icon && (
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-dark-bg-primary rounded-lg">
            <img
              src={skill.icon}
              alt=""
              width={24}
              height={24}
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Name & Level */}
        <div className="flex-1 min-w-0">
          <h4 className="text-h5 font-semibold text-dark-text-primary truncate">
            {skill.name}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            <Badge
              variant={levelBadgeVariants[skill.proficiency.level]}
              size="sm"
            >
              {skill.proficiency.level}
            </Badge>
            <span className="text-body-xs text-dark-text-tertiary">
              {skill.proficiency.years} yrs
            </span>
          </div>
        </div>
      </div>

      {/* Confidence Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-body-sm text-dark-text-secondary">
            Confidence
          </span>
          <span className="text-body-xs text-dark-text-tertiary">
            {skill.proficiency.confidence}%
          </span>
        </div>
        <div className="h-2 bg-dark-bg-primary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-primary"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency.confidence}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Usage Context */}
      <p className="text-body-sm text-dark-text-secondary mb-3 line-clamp-2">
        {skill.usage.context}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {skill.tags.map((tag) => (
          <Badge key={tag} variant="outline" size="xs">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}

