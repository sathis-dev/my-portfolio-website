'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'
import TechChip from '@/components/ui/TechChip'
import { TimelineEntry } from '@/types'

interface TimelineCardProps {
  entry: TimelineEntry
  position: 'left' | 'right'
  className?: string
}

export default function TimelineCard({
  entry,
  position,
  className,
}: TimelineCardProps) {
  const Icon = LucideIcons[entry.visual.icon as keyof typeof LucideIcons] as any

  return (
    <div
      className={cn(
        'flex gap-8',
        position === 'left' ? 'flex-row' : 'flex-row-reverse',
        'mb-12',
        className
      )}
    >
      {/* Connector */}
      <div className="flex-shrink-0 flex flex-col items-center w-12">
        {/* Node */}
        <motion.div
          className={cn(
            'w-4 h-4 rounded-full',
            'border-2',
            'bg-dark-bg-primary',
            'z-10'
          )}
          style={{
            borderColor: entry.visual.accentColor,
          }}
          whileInView={{
            backgroundColor: entry.visual.accentColor,
            scale: 1.2,
            boxShadow: `0 0 20px ${entry.visual.accentColor}`,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Line */}
        <div
          className="w-0.5 flex-1 mt-2"
          style={{
            background: `linear-gradient(180deg, ${entry.visual.accentColor} 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Content Card */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: position === 'left' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={cn(
            'bg-dark-bg-tertiary/40 backdrop-blur-md',
            'border border-dark-border-subtle',
            'rounded-card',
            'p-6',
            'transition-all duration-300',
            'hover:shadow-card-hover hover:border-dark-border-medium'
          )}
          style={{
            borderLeftWidth: '4px',
            borderLeftColor: entry.visual.accentColor,
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              {/* Icon */}
              {Icon && (
                <Icon
                  size={24}
                  className="mb-2"
                  style={{ color: entry.visual.accentColor }}
                  aria-hidden="true"
                />
              )}
              
              {/* Title */}
              <h3 className="text-h4 font-semibold text-dark-text-primary">
                {entry.content.title}
              </h3>
              
              {/* Organization */}
              <p className="text-body text-dark-text-secondary mt-1">
                {entry.content.organization}
              </p>
              
              {/* Location */}
              <p className="text-body-sm text-dark-text-tertiary mt-0.5">
                {entry.content.location}
              </p>
            </div>

            {/* Date */}
            <time className="text-body-sm text-dark-text-tertiary whitespace-nowrap ml-4">
              {entry.date.display}
            </time>
          </div>

          {/* Thumbnail */}
          {entry.visual.thumbnail && (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image
                src={entry.visual.thumbnail}
                alt={entry.content.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-body-sm text-dark-text-secondary mb-4">
            {entry.content.description}
          </p>

          {/* Responsibilities */}
          {entry.content.responsibilities && entry.content.responsibilities.length > 0 && (
            <div className="mb-4">
              <h4 className="text-body font-semibold text-dark-text-primary mb-2">
                Responsibilities
              </h4>
              <ul className="space-y-2">
                {entry.content.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-body-sm text-dark-text-secondary">
                    <LucideIcons.CheckCircle
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: entry.visual.accentColor }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Achievements */}
          {entry.content.achievements && entry.content.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="text-body font-semibold text-dark-text-primary mb-2">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {entry.content.achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-body-sm text-dark-text-secondary">
                    <LucideIcons.Star
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: entry.visual.accentColor }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Modules (for education) */}
          {entry.content.keyModules && entry.content.keyModules.length > 0 && (
            <div className="mb-4">
              <h4 className="text-body font-semibold text-dark-text-primary mb-2">
                Key Modules
              </h4>
              <ul className="space-y-2">
                {entry.content.keyModules.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-body-sm text-dark-text-secondary">
                    <LucideIcons.BookOpen
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: entry.visual.accentColor }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Grade */}
          {entry.content.grade && (
            <p className="text-body-sm text-dark-text-secondary mb-4">
              <strong>Grade:</strong> {entry.content.grade}
            </p>
          )}

          {/* Technologies */}
          {entry.technologies && entry.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {entry.technologies.map((tech) => (
                <TechChip key={tech} tech={{ name: tech }} size="sm" />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

