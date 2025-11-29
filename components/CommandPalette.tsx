'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, Folder, Code, Briefcase, Mail, FileText, Home, User, X } from 'lucide-react'
import Fuse from 'fuse.js'
import { useRouter } from 'next/navigation'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

interface Command {
  id: string
  title: string
  description?: string
  action: () => void
  icon: any
  category: 'page' | 'project' | 'skill' | 'action'
  keywords?: string[]
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  // Build searchable commands
  const commands: Command[] = useMemo(() => [
    // Pages
    {
      id: 'home',
      title: 'Home',
      description: 'Go to homepage',
      action: () => router.push('/'),
      icon: Home,
      category: 'page' as const,
      keywords: ['home', 'main', 'start'],
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'View all projects',
      action: () => router.push('/projects'),
      icon: Folder,
      category: 'page' as const,
      keywords: ['projects', 'work', 'portfolio', 'showcase'],
    },
    {
      id: 'about',
      title: 'About Me',
      description: 'Learn more about me',
      action: () => router.push('/about'),
      icon: User,
      category: 'page' as const,
      keywords: ['about', 'bio', 'story', 'background'],
    },
    {
      id: 'skills',
      title: 'Skills',
      description: 'View my skills and expertise',
      action: () => router.push('/skills'),
      icon: Code,
      category: 'page' as const,
      keywords: ['skills', 'technologies', 'tech stack', 'expertise'],
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'View my timeline and experience',
      action: () => router.push('/experience'),
      icon: Briefcase,
      category: 'page' as const,
      keywords: ['experience', 'timeline', 'history', 'work'],
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch with me',
      action: () => router.push('/contact'),
      icon: Mail,
      category: 'page' as const,
      keywords: ['contact', 'email', 'reach out', 'get in touch'],
    },
    // Projects
    ...projects.map((project) => ({
      id: `project-${project.id}`,
      title: project.title,
      description: project.shortDescription,
      action: () => router.push(`/projects/${project.slug}`),
      icon: Folder,
      category: 'project' as const,
      keywords: [project.title, ...project.tags, ...project.technical.techStack],
    })),
    // Skills (by category)
    ...Array.from(new Set(skills.map(s => s.category))).map((category) => {
      const categorySkills = skills.filter(s => s.category === category)
      return {
        id: `skill-${category}`,
        title: `${category} Skills`,
        description: `View ${categorySkills.length} ${category.toLowerCase()} skills`,
        action: () => router.push('/skills'),
        icon: Code,
        category: 'skill' as const,
        keywords: [category, ...categorySkills.map(s => s.name)],
      }
    }),
    // Quick Actions
    {
      id: 'cv',
      title: 'Request CV',
      description: 'Get in touch to request my CV',
      action: () => window.location.href = '/contact',
      icon: FileText,
      category: 'action' as const,
      keywords: ['cv', 'resume', 'download', 'pdf'],
    },
    {
      id: 'copy-email',
      title: 'Copy Email',
      description: 'Copy my email address',
      action: () => {
        navigator.clipboard.writeText('hello@sathis.dev')
        onClose()
        // Optional: Show toast notification
      },
      icon: Mail,
      category: 'action' as const,
      keywords: ['email', 'copy', 'contact'],
    },
  ], [router, onClose])

  // Fuzzy search setup
  const fuse = useMemo(
    () =>
      new Fuse(commands, {
        keys: [
          { name: 'title', weight: 2 },
          { name: 'description', weight: 1 },
          { name: 'keywords', weight: 1.5 },
        ],
        threshold: 0.3,
        includeScore: true,
      }),
    [commands]
  )

  // Filter commands based on query
  const filteredCommands = useMemo(() => {
    if (!query.trim()) {
      // Show quick actions by default
      return commands.filter(c => c.category === 'page' || c.category === 'action')
    }
    return fuse.search(query).map((result) => result.item)
  }, [query, commands, fuse])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex((prev) => 
            Math.min(prev + 1, filteredCommands.length - 1)
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex((prev) => Math.max(prev - 1, 0))
          break
        case 'Enter':
          e.preventDefault()
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action()
            onClose()
          }
          break
        case 'Escape':
          e.preventDefault()
          onClose()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, filteredCommands, onClose])

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  // Reset query when closed
  useEffect(() => {
    if (!isOpen) {
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  const getCategoryLabel = (category: Command['category']) => {
    switch (category) {
      case 'page': return 'Pages'
      case 'project': return 'Projects'
      case 'skill': return 'Skills'
      case 'action': return 'Actions'
    }
  }

  const getCategoryColor = (category: Command['category']) => {
    switch (category) {
      case 'page': return 'text-blue-400'
      case 'project': return 'text-primary-400'
      case 'skill': return 'text-green-400'
      case 'action': return 'text-orange-400'
    }
  }

  // Group commands by category
  const groupedCommands = useMemo(() => {
    const grouped: Record<Command['category'], Command[]> = {
      page: [],
      project: [],
      skill: [],
      action: [],
    }
    
    filteredCommands.forEach(cmd => {
      grouped[cmd.category].push(cmd)
    })
    
    return Object.entries(grouped).filter(([_, items]) => items.length > 0)
  }, [filteredCommands])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
            onClick={onClose}
          />

          {/* Command Palette Modal */}
          <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="w-full max-w-2xl bg-dark-bg-secondary/95 backdrop-blur-xl border border-dark-border-medium rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-dark-border-subtle">
                <Search className="text-dark-text-tertiary" size={20} />
                <input
                  type="text"
                  placeholder="Search projects, skills, or type a command..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-dark-text-primary placeholder:text-dark-text-tertiary text-lg"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-dark-bg-tertiary rounded-md transition-colors"
                >
                  <X size={18} className="text-dark-text-tertiary" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-12 text-center text-dark-text-tertiary">
                    <Search size={48} className="mx-auto mb-3 opacity-30" />
                    <p>No results found</p>
                    <p className="text-sm mt-1">Try different keywords or explore all projects</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {groupedCommands.map(([category, items]) => (
                      <div key={category}>
                        <div className="px-3 py-2 text-xs font-semibold text-dark-text-tertiary uppercase tracking-wider">
                          {getCategoryLabel(category as Command['category'])}
                        </div>
                        <div className="space-y-1">
                          {items.map((command, index) => {
                            const globalIndex = filteredCommands.indexOf(command)
                            const isSelected = globalIndex === selectedIndex
                            const Icon = command.icon

                            return (
                              <motion.button
                                key={command.id}
                                onClick={() => {
                                  command.action()
                                  onClose()
                                }}
                                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                                  isSelected
                                    ? 'bg-primary-500/20 border border-primary-500/30'
                                    : 'hover:bg-dark-bg-tertiary/50'
                                }`}
                                whileHover={{ x: 4 }}
                              >
                                <div className={`${getCategoryColor(command.category)}`}>
                                  <Icon size={18} />
                                </div>
                                <div className="flex-1 text-left">
                                  <div className="text-dark-text-primary font-medium">
                                    {command.title}
                                  </div>
                                  {command.description && (
                                    <div className="text-sm text-dark-text-tertiary">
                                      {command.description}
                                    </div>
                                  )}
                                </div>
                                {isSelected && (
                                  <ArrowRight size={16} className="text-primary-400" />
                                )}
                              </motion.button>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer with keyboard hints */}
              <div className="flex items-center gap-4 px-4 py-3 border-t border-dark-border-subtle bg-dark-bg-primary/50 text-xs text-dark-text-tertiary">
                <div className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-dark-bg-tertiary rounded border border-dark-border-subtle">↑↓</kbd>
                  <span>Navigate</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-dark-bg-tertiary rounded border border-dark-border-subtle">↵</kbd>
                  <span>Select</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 bg-dark-bg-tertiary rounded border border-dark-border-subtle">Esc</kbd>
                  <span>Close</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

