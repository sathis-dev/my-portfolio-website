'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import TechChip from '@/components/ui/TechChip'
import { Tilt3DCard } from '@/components/ui/Tilt3DCard'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Pick<
    Project,
    'id' | 'slug' | 'title' | 'shortDescription' | 'tags' | 'media' | 'metadata' | 'technical'
  >
  variant?: 'default' | 'featured'
  className?: string
}

export default function ProjectCardEnhanced({
  project,
  variant = 'default',
  className,
}: ProjectCardProps) {
  const isFeatured = variant === 'featured' || project.metadata.featured

  return (
    <Link 
      href={`/projects/${project.slug}`} 
      className="group block"
      data-cursor="card"
    >
      <Tilt3DCard
        className={cn(
          'relative',
          'bg-dark-bg-tertiary/40 backdrop-blur-md',
          'border border-dark-border-subtle',
          'rounded-card',
          'overflow-hidden',
          'transition-all duration-300',
          'hover:bg-dark-bg-tertiary/60 hover:border-dark-border-medium hover:shadow-accent',
          isFeatured && 'col-span-2 row-span-2',
          className
        )}
      >
        <motion.article
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={project.media.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg-primary/90 via-dark-bg-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            {/* Featured Badge with pulse */}
            {isFeatured && (
              <div className="absolute top-4 left-4">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Badge variant="default" size="sm" icon="Star">
                    Featured
                  </Badge>
                </motion.div>
              </div>
            )}
            
            {/* View Project Overlay with animation */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="flex items-center gap-2 text-white font-semibold text-lg"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                View Project
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.span>
            </motion.div>
          </div>

          {/* Content */}
          <div className={cn('p-6', isFeatured && 'p-8')}>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.slice(0, 3).map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge variant="secondary" size="xs">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>

            {/* Title with gradient on hover */}
            <h3
              className={cn(
                'font-semibold text-dark-text-primary mb-2 transition-all duration-300',
                'group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-primary-600',
                'group-hover:bg-clip-text group-hover:text-transparent',
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

            {/* Tech Stack with stagger animation */}
            <div className="flex flex-wrap gap-2">
              {project.technical.techStack.slice(0, isFeatured ? 5 : 4).map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <TechChip tech={{ name: tech }} size="xs" />
                </motion.div>
              ))}
            </div>

            {/* Animated Arrow Icon */}
            <motion.div
              className="absolute bottom-6 right-6 text-primary-500"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </div>

          {/* Gradient border glow effect */}
          <div className="absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-card bg-gradient-to-r from-primary-500/20 via-primary-400/20 to-primary-600/20 blur-xl" />
          </div>
        </motion.article>
      </Tilt3DCard>
    </Link>
  )
}

