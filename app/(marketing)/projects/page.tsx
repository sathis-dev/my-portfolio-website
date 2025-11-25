'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Globe, Brain, Briefcase, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import BentoEffects from '@/components/ui/BentoEffects'

const categories = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'featured', label: 'Featured', icon: Star },
  { id: 'web-apps', label: 'Web Apps', icon: Globe },
  { id: 'ai-data', label: 'AI & Data', icon: Brain },
  { id: 'client-work', label: 'Client Work', icon: Briefcase },
]

const projects = [
  {
    id: 'silent-help',
    slug: 'silent-help',
    title: 'Silent Help',
    subtitle: 'AI-Supported Mental Health Platform',
    description: 'A calming web platform that gives users a safe space for check-ins, breathing exercises, journaling, and AI-assisted support when they feel overwhelmed.',
    categories: ['featured', 'web-apps', 'ai-data'],
    tags: ['AI', 'MENTAL HEALTH', 'ACCESSIBILITY'],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Claude API', 'Framer Motion'],
    status: 'In Active Development',
    statusColor: '#10B981',
    featured: true,
    size: 'large'
  },
  {
    id: 'brimstone-energy',
    slug: 'brimstone-energy',
    title: 'Brimstone Energy Website',
    subtitle: 'WordPress Website Redesign',
    description: 'A modern WordPress redesign for a green-energy company, focusing on clearer storytelling, better usability, and future-proof content structure.',
    categories: ['featured', 'client-work'],
    tags: ['WORDPRESS', 'WEB DESIGN', 'SEO'],
    techStack: ['WordPress', 'Stax Theme', 'CSS', 'JavaScript', 'PHP'],
    status: 'Completed',
    statusColor: '#10B981',
    featured: true,
    size: 'medium',
    liveUrl: 'https://brimstone-energy.uk/'
  },
  {
    id: 'studio-stack-bot',
    slug: 'studio-stack-bot',
    title: 'Studio Stack Bot',
    subtitle: 'Discord AI & Automation Assistant',
    description: 'A powerful Discord bot designed to manage audio, automation, and AI features for creators and communities from a single command interface.',
    categories: ['web-apps', 'ai-data'],
    tags: ['DISCORD', 'AI', 'AUTOMATION'],
    techStack: ['Node.js', 'TypeScript', 'Discord.js', 'PostgreSQL'],
    status: 'Under Construction',
    statusColor: '#FBBF24',
    featured: false,
    size: 'medium'
  },
  {
    id: 'studypilot-ai',
    slug: 'studypilot-ai',
    title: 'StudyPilot AI',
    subtitle: 'Assignment & Project Planner for Students',
    description: 'An AI-powered planner that turns long assignment briefs into clear tasks, timelines, and daily study plans, without writing the work for you.',
    categories: ['web-apps', 'ai-data'],
    tags: ['AI', 'EDUCATION', 'PRODUCTIVITY'],
    techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'Claude API'],
    status: 'Planned',
    statusColor: '#9D6EFF',
    featured: false,
    size: 'small'
  }
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilter = (categoryId: string) => {
    setActiveFilter(categoryId)
    
    if (categoryId === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(p => p.categories.includes(categoryId)))
    }
  }

  // Get grid span class based on size for Magic Bento layout
  const getGridSpan = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-6 lg:col-span-6 row-span-2 min-h-[500px]'
      case 'medium':
        return 'col-span-1 md:col-span-3 lg:col-span-6 min-h-[350px]'
      case 'small':
        return 'col-span-1 md:col-span-3 lg:col-span-6 min-h-[300px]'
      default:
        return 'col-span-1 md:col-span-6 min-h-[350px]'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Compact Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4"
              style={{
                letterSpacing: '-0.02em',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
            >
              My Work
            </h1>
            <p 
              className="text-base sm:text-lg max-w-[900px] mx-auto leading-relaxed px-4"
              style={{
                color: 'rgba(255, 255, 255, 0.85)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
              }}
            >
              A collection of real and in-progress projects that show how I think, build, and use AI in modern web experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="sticky top-20 z-[100] px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div 
          className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-center gap-3 p-3 rounded-2xl"
          style={{
            background: 'rgba(10, 5, 15, 0.85)',
            backdropFilter: 'blur(20px) saturate(100%)',
            border: '1px solid rgba(199, 21, 133, 0.2)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeFilter === category.id

            return (
              <motion.button
                key={category.id}
                onClick={() => handleFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor="button"
                data-cursor-text={category.label}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  background: isActive 
                    ? 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)'
                    : 'transparent',
                  color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                  border: isActive 
                    ? '1px solid rgba(255, 255, 255, 0.2)'
                    : '1px solid transparent',
                  boxShadow: isActive ? '0 4px 12px rgba(199, 21, 133, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(199, 21, 133, 0.1)'
                    e.currentTarget.style.color = '#FFFFFF'
                    e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.3)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                    e.currentTarget.style.borderColor = 'transparent'
                  }
                }}
              >
                {Icon && <Icon size={16} />}
                {category.label}
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Magic Bento Grid with Effects */}
      <section className="px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <BentoEffects
            spotlightRadius={400}
            enableStars={false}
            enableSpotlight={true}
            enableClickEffect={true}
            className="min-h-screen"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]"
              >
                {filteredProjects.map((project, index) => (
                  <BentoCard 
                    key={project.id} 
                    project={project}
                    index={index}
                    gridSpan={getGridSpan(project.size)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-lg text-white/60">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </BentoEffects>
        </div>
      </section>
    </div>
  )
}

// Magic Bento Card Component
interface BentoCardProps {
  project: typeof projects[0]
  index: number
  gridSpan: string
}

function BentoCard({ project, index, gridSpan }: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${gridSpan} group`}
    >
      <Link href={`/projects/${project.slug}`}>
        <div
          className="relative h-full rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-400 cursor-pointer overflow-hidden"
          style={{
            background: 'rgba(10, 5, 15, 0.4)',
            backdropFilter: 'blur(20px) saturate(90%)',
            border: '1px solid rgba(199, 21, 133, 0.25)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Dynamic Spotlight Glow Effect */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, rgba(199, 21, 133, 0.2) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 70%)`,
              opacity: isHovered ? 1 : 0
            }}
          />

          {/* Ambient Glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-400"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(199, 21, 133, 0.08) 0%, transparent 70%)',
              opacity: isHovered ? 1 : 0
            }}
          />

          {/* Header Badges */}
          <div className="flex items-start justify-between mb-4 relative z-10">
            {/* Featured Badge */}
            {project.featured && (
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold"
                style={{
                  background: 'rgba(139, 92, 246, 1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                }}
              >
                <Star size={12} fill="currentColor" />
                Featured
              </div>
            )}

            {/* Status Badge */}
            <div
              className="px-3 py-2 rounded-xl text-xs font-bold ml-auto"
              style={{
                background: project.statusColor,
                color: project.statusColor === '#FBBF24' ? '#1F2937' : '#FFFFFF',
              }}
            >
              {project.status}
            </div>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-3 mb-4 relative z-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold tracking-wider"
                style={{ color: '#E91E8C' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow relative z-10">
            {/* Title */}
            <h3 
              className={`font-extrabold text-white mb-2 transition-colors group-hover:text-[#E91E8C] ${
                project.size === 'large' ? 'text-3xl' : project.size === 'medium' ? 'text-2xl' : 'text-xl'
              }`}
              style={{ lineHeight: 1.2 }}
            >
              {project.title}
            </h3>

            {/* Subtitle */}
            <p 
              className="text-sm font-semibold mb-4"
              style={{ color: 'rgba(255, 255, 255, 0.65)' }}
            >
              {project.subtitle}
            </p>

            {/* Description */}
            <p 
              className={`text-[0.9375rem] leading-relaxed mb-6 flex-grow ${
                project.size === 'small' ? 'line-clamp-3' : 'line-clamp-4'
              }`}
              style={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-auto pt-4 border-t border-white/10">
              <p 
                className="text-xs font-bold uppercase tracking-wider mb-3"
                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, project.size === 'small' ? 3 : 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-300"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      background: 'rgba(199, 21, 133, 0.08)',
                      border: '1px solid rgba(199, 21, 133, 0.15)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > (project.size === 'small' ? 3 : 5) && (
                  <span className="text-xs font-medium text-white/50">
                    +{project.techStack.length - (project.size === 'small' ? 3 : 5)} more
                  </span>
                )}
              </div>
            </div>

            {/* View Links */}
            <div className="flex items-center gap-4 mt-6">
              {/* Live Site Link - Show if liveUrl exists */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-bold text-sm transition-all duration-300 group/live"
                  style={{ color: '#10B981' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe size={16} />
                  Visit Live Site
                  <ArrowRight 
                    size={16} 
                    className="transition-transform group-hover/live:translate-x-1"
                  />
                </a>
              )}
              
              {/* Project Details Link */}
              <div 
                className="flex items-center gap-2 font-bold text-sm transition-all duration-300 group/link"
                style={{ color: '#E91E8C' }}
              >
                View Details
                <ArrowRight 
                  size={16} 
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
