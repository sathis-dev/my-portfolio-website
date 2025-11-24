'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Server, Wrench, Sparkles, Palette } from 'lucide-react'
import Header from '@/components/layout/Header'
import { DecryptedText } from '@/components/ui/decrypted-text'
import { Tilt3DCard } from '@/components/ui/Tilt3DCard'
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills'

// Logo mapping for skills - using multiple reliable CDN sources for crisp SVG icons
const logoMap: Record<string, string> = {
  // DevIcons CDN
  'nextjs': 'https://cdn.simpleicons.org/nextdotjs/white',
  'react': 'https://cdn.simpleicons.org/react/61DAFB',
  'typescript': 'https://cdn.simpleicons.org/typescript/3178C6',
  'tailwind': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'laravel': 'https://cdn.simpleicons.org/laravel/FF2D20',
  'mysql': 'https://cdn.simpleicons.org/mysql/4479A1',
  'git': 'https://cdn.simpleicons.org/git/F05032',
  'vscode': 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
  'figma': 'https://cdn.simpleicons.org/figma/F24E1E',
  'framer-motion': 'https://cdn.simpleicons.org/framer/0055FF',
  'php': 'https://cdn.simpleicons.org/php/777BB4',
  'nodejs': 'https://cdn.simpleicons.org/nodedotjs/339933',
  'docker': 'https://cdn.simpleicons.org/docker/2496ED',
  'postgresql': 'https://cdn.simpleicons.org/postgresql/4169E1',
  'mongodb': 'https://cdn.simpleicons.org/mongodb/47A248',
  'javascript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'python': 'https://cdn.simpleicons.org/python/3776AB',
  'css3': 'https://cdn.simpleicons.org/css3/1572B6',
  'html5': 'https://cdn.simpleicons.org/html5/E34F26',
  // AI Tools - Custom logos
  'claude': 'https://cdn.simpleicons.org/anthropic/191919',
  'chatgpt': 'https://cdn.simpleicons.org/openai/412991',
  'cursor': 'https://cdn.simpleicons.org/cursor/000000',
  // Additional common tools
  'rest-api': 'https://cdn.simpleicons.org/postman/FF6C37',
}

const getLevelStyle = (level: string) => {
  switch (level) {
    case 'Advanced':
      return {
        bg: 'rgba(16, 185, 129, 0.15)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        color: '#10B981'
      }
    case 'Intermediate':
      return {
        bg: 'rgba(139, 92, 246, 0.15)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        color: '#8B5CF6'
      }
    case 'Beginner':
      return {
        bg: 'rgba(251, 191, 36, 0.15)',
        border: '1px solid rgba(251, 191, 36, 0.3)',
        color: '#FBBF24'
      }
    default:
      return {
        bg: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: '#FFFFFF'
      }
  }
}

const getUsageStyle = (usage: string) => {
  switch (usage) {
    case 'Production':
      return {
        bg: 'rgba(59, 130, 246, 0.15)',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        color: '#3B82F6'
      }
    case 'Daily':
      return {
        bg: 'rgba(139, 92, 246, 0.15)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        color: '#8B5CF6'
      }
    case 'Learning':
      return {
        bg: 'rgba(251, 191, 36, 0.15)',
        border: '1px solid rgba(251, 191, 36, 0.3)',
        color: '#FBBF24'
      }
    default:
      return {
        bg: 'rgba(156, 163, 175, 0.15)',
        border: '1px solid rgba(156, 163, 175, 0.3)',
        color: '#9CA3AF'
      }
  }
}

const getCategoryIcon = (categoryId: string) => {
  switch (categoryId) {
    case 'Frontend':
      return Code2
    case 'Backend':
      return Server
    case 'Tools':
      return Wrench
    case 'AI':
      return Sparkles
    case 'Design':
      return Palette
    default:
      return Code2
  }
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Continuous Background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{ background: '#0A050F' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(199, 21, 133, 0.15) 0%, rgba(10, 5, 15, 0.95) 50%, rgba(10, 5, 15, 1) 100%)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
          }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'opacity, transform' }}
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              <DecryptedText 
                text="Skills & Technologies" 
                speed={40}
                interval={200}
              />
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg max-w-[700px] mx-auto leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              The tools and technologies I use to design, build, and refine modern web experiences
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Legend Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skill Levels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl p-8"
              style={{
                background: 'rgba(10, 5, 15, 0.92)',
                border: '1px solid rgba(199, 21, 133, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                willChange: 'opacity, transform',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
              }}
            >
              <h3 className="text-2xl font-extrabold text-white mb-6">
                Skill Levels
              </h3>
              <div className="space-y-4">
                {[
                  { level: 'Advanced', desc: 'Deep expertise and daily usage' },
                  { level: 'Intermediate', desc: 'Comfortable with production use' },
                  { level: 'Beginner', desc: 'Learning and experimenting' }
                ].map((item) => {
                  const style = getLevelStyle(item.level)
                  return (
                    <div key={item.level} className="flex items-start gap-3">
                      <span
                        className="text-sm font-bold px-3 py-1.5 rounded-lg whitespace-nowrap"
                        style={{
                          background: style.bg,
                          border: style.border,
                          color: style.color
                        }}
                      >
                        {item.level}
                      </span>
                      <span 
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      >
                        {item.desc}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Usage Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl p-8"
              style={{
                background: 'rgba(10, 5, 15, 0.92)',
                border: '1px solid rgba(199, 21, 133, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                willChange: 'opacity, transform',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
              }}
            >
              <h3 className="text-2xl font-extrabold text-white mb-6">
                Usage Tags
              </h3>
              <div className="space-y-4">
                {[
                  { tag: 'Production', desc: 'Used in live projects' },
                  { tag: 'Daily', desc: 'Part of daily workflow' },
                  { tag: 'Learning', desc: 'Currently learning' }
                ].map((item) => {
                  const style = getUsageStyle(item.tag)
                  return (
                    <div key={item.tag} className="flex items-start gap-3">
                      <span
                        className="text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap"
                        style={{
                          background: style.bg,
                          border: style.border,
                          color: style.color
                        }}
                      >
                        {item.tag}
                      </span>
                      <span 
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      >
                        {item.desc}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      {skillCategories.map((category, categoryIndex) => {
        const categorySkills = getSkillsByCategory(category.id)
        const Icon = getCategoryIcon(category.id)

        return (
          <section 
            key={category.id} 
            className="relative py-16 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-[1200px] mx-auto">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 mb-12"
                style={{ willChange: 'opacity, transform' }}
              >
                <Icon size={32} style={{ color: '#E91E8C' }} />
                <h2 className="text-3xl font-extrabold text-white">
                  {category.title}
                </h2>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, skillIndex) => (
                  <SkillCardEnhanced 
                    key={skill.id}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Projects Section */}
      <section 
        className="relative py-16 pb-32 px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(10, 5, 15, 0.3)' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              <DecryptedText 
                text="How I Use These in Real Projects" 
                speed={35}
                interval={100}
              />
            </h2>
            <p 
              className="text-base sm:text-lg"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Skills in action across my portfolio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Silent Help Platform',
                description: 'AI-powered mental wellbeing platform with chat interface',
                tech: ['Next.js', 'TypeScript', 'Claude API', 'Tailwind CSS']
              },
              {
                title: 'Brimston Energy Website',
                description: 'Complete WordPress website redesign with improved UX',
                tech: ['WordPress', 'Stax Theme', 'CSS', 'JavaScript', 'PHP']
              },
              {
                title: 'Studio Stack Bot',
                description: 'Discord AI & automation assistant for creators',
                tech: ['Node.js', 'TypeScript', 'Discord.js', 'PostgreSQL']
              },
              {
                title: 'StudyPilot AI',
                description: 'Assignment & project planner for students (Planned)',
                tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma']
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-3xl p-8"
                style={{
                  background: 'rgba(10, 5, 15, 0.93)',
                  border: '1px solid rgba(199, 21, 133, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  willChange: 'transform',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden'
                }}
              >
                <h3 className="text-xl font-extrabold text-white mb-3">
                  {project.title}
                </h3>
                <p 
                  className="text-[0.9375rem] leading-relaxed mb-6"
                  style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                      style={{
                        background: 'rgba(139, 92, 246, 0.15)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        color: '#8B5CF6'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Enhanced Skill Card Component with Progress Bar Animation
function SkillCardEnhanced({ skill, index }: { skill: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [progress, setProgress] = useState(0)
  const [imageError, setImageError] = useState(false)
  const levelStyle = getLevelStyle(skill.proficiency.level)

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setProgress(skill.proficiency.confidence)
      }, index * 100)
      return () => clearTimeout(timeout)
    }
  }, [inView, skill.proficiency.confidence, index])

  const logo = logoMap[skill.id] || skill.icon
  
  // Get first letter of skill name for fallback
  const getInitial = (name: string) => name.charAt(0).toUpperCase()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'opacity, transform' }}
    >
      <Tilt3DCard
        maxTilt={6}
        perspective={1200}
        className="h-full"
      >
        <div
          className="rounded-3xl p-6 h-full"
          style={{
            background: 'rgba(10, 5, 15, 0.95)',
            border: '1px solid rgba(199, 21, 133, 0.25)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            willChange: 'transform',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4 flex-1">
              {/* Logo */}
              <div
                className="rounded-xl flex items-center justify-center p-2 flex-shrink-0"
                style={{
                  width: '48px',
                  height: '48px',
                  background: imageError ? 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)' : 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {!imageError ? (
                  <img
                    src={logo}
                    alt={skill.name}
                    className="w-full h-full object-contain p-1"
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: ['claude', 'cursor'].includes(skill.id) ? 'invert(1)' : 'none'
                    }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <span 
                    className="text-2xl font-extrabold text-white"
                    style={{
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {getInitial(skill.name)}
                  </span>
                )}
              </div>

              {/* Title & Meta */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-extrabold text-white mb-1">
                  {skill.name}
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-lg"
                    style={{
                      background: levelStyle.bg,
                      border: levelStyle.border,
                      color: levelStyle.color
                    }}
                  >
                    {skill.proficiency.level}
                  </span>
                  <span 
                    className="text-xs font-medium"
                    style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    {skill.proficiency.years} yrs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Confidence Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span 
                className="text-xs font-semibold"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                Confidence
              </span>
              <span className="text-sm font-extrabold text-white">
                {skill.proficiency.confidence}%
              </span>
            </div>
            <div
              className="h-1.5 rounded-full overflow-hidden"
              style={{ background: 'rgba(255, 255, 255, 0.05)' }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #C71585 0%, #8B5CF6 100%)',
                  boxShadow: '0 0 12px rgba(199, 21, 133, 0.5)'
                }}
              />
            </div>
          </div>

          {/* Description */}
          <p 
            className="text-sm leading-relaxed mb-5"
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            {skill.usage.context}
          </p>

          {/* Usage Tags */}
          <div className="flex flex-wrap gap-2">
            {skill.tags.map((tag: string) => {
              const style = getUsageStyle(tag)
              return (
                <span
                  key={tag}
                  className="text-xs font-bold px-2.5 py-1 rounded-lg"
                  style={{
                    background: style.bg,
                    border: style.border,
                    color: style.color
                  }}
                >
                  {tag}
                </span>
              )
            })}
          </div>
        </div>
      </Tilt3DCard>
    </motion.div>
  )
}

