'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import TechChip from '@/components/ui/TechChip'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Pick<
    Project,
    'id' | 'slug' | 'title' | 'shortDescription' | 'tags' | 'media' | 'metadata' | 'technical'
  >
  variant?: 'default' | 'featured'
  className?: string
}

export default function ProjectCard({
  project,
  variant = 'default',
  className,
}: ProjectCardProps) {
  const isFeatured = variant === 'featured' || project.metadata.featured

  return (
    <Link href={`/projects/${project.slug}`}>
      <article
        className={cn(
          'group relative',
          // Design System v4.1 - Card styles
          'bg-background-elevated backdrop-blur-[12px]',
          'border border-card',
          'rounded-2xl',
          'overflow-hidden',
          
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
          
          // Grid layout
          isFeatured && 'col-span-2 row-span-2',
          className
        )}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.media.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg-primary/90 via-dark-bg-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-4 left-4">
              <Badge variant="default" size="sm" icon="Star">
                Featured
              </Badge>
            </div>
          )}
          
          {/* View Project Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="flex items-center gap-2 text-white font-semibold text-lg">
              View Project
              <ArrowRight size={20} />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={cn('p-6', isFeatured && 'p-8')}>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" size="xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h3
            className={cn(
              'font-semibold text-dark-text-primary mb-2 group-hover:text-primary-500 transition-colors',
              isFeatured ? 'text-h3' : 'text-h4'
            )}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className={cn(
              'text-dark-text-secondary mb-4',
              isFeatured ? 'text-body line-clamp-3' : 'text-body-sm line-clamp-2'
            )}
          >
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technical.techStack.slice(0, isFeatured ? 5 : 4).map((tech) => (
              <TechChip key={tech} tech={{ name: tech }} size="xs" />
            ))}
          </div>

          {/* Arrow Icon */}
          <div className="absolute bottom-6 right-6 text-primary-500 transition-transform group-hover:translate-x-1">
            <ArrowRight size={20} />
          </div>
        </div>
      </article>
    </Link>
  )
}

