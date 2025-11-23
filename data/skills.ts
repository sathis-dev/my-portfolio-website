import { Skill } from '@/types'

export const skills: Skill[] = [
  // Frontend
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    proficiency: {
      level: 'Advanced',
      confidence: 95,
      years: 2,
    },
    usage: {
      context: 'Primary framework for production applications with App Router, Server Components, and optimized image loading',
      frequency: 'Daily',
      lastUsed: '2024-03',
    },
    tags: ['Production', 'Daily'],
    icon: '/icons/nextjs.svg',
    relatedProjects: ['silent-help'],
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    proficiency: {
      level: 'Advanced',
      confidence: 90,
      years: 3,
    },
    usage: {
      context: 'Component architecture, hooks expertise, and state management for complex UIs',
      frequency: 'Daily',
      lastUsed: '2024-03',
    },
    tags: ['Production', 'Daily'],
    icon: '/icons/react.svg',
    relatedProjects: ['silent-help', 'airsense'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    proficiency: {
      level: 'Advanced',
      confidence: 85,
      years: 2,
    },
    usage: {
      context: 'Type-safe development with advanced patterns like generics, utility types, and strict null checking',
      frequency: 'Daily',
      lastUsed: '2024-03',
    },
    tags: ['Production', 'Daily'],
    icon: '/icons/typescript.svg',
    relatedProjects: ['silent-help'],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    proficiency: {
      level: 'Advanced',
      confidence: 95,
      years: 2,
    },
    usage: {
      context: 'Utility-first styling and custom design systems with responsive design and dark mode',
      frequency: 'Daily',
      lastUsed: '2024-03',
    },
    tags: ['Production', 'Daily'],
    icon: '/icons/tailwind.svg',
    relatedProjects: ['silent-help', 'airsense'],
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'Frontend',
    proficiency: {
      level: 'Intermediate',
      confidence: 70,
      years: 1,
    },
    usage: {
      context: 'Animation and interactive UI transitions for cinematic user experiences',
      frequency: 'Weekly',
      lastUsed: '2024-03',
    },
    tags: ['Production'],
    icon: '/icons/framer.svg',
    relatedProjects: ['silent-help'],
  },

  // Backend
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Backend',
    proficiency: {
      level: 'Intermediate',
      confidence: 75,
      years: 1.5,
    },
    usage: {
      context: 'MVC architecture, Eloquent ORM, Livewire for reactive components',
      frequency: 'Weekly',
      lastUsed: '2024-02',
    },
    tags: ['Production'],
    icon: '/icons/laravel.svg',
    relatedProjects: ['airsense'],
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Backend',
    proficiency: {
      level: 'Intermediate',
      confidence: 70,
      years: 2,
    },
    usage: {
      context: 'Database design, complex queries, indexing, and optimization for performance',
      frequency: 'Weekly',
      lastUsed: '2024-02',
    },
    tags: ['Production'],
    icon: '/icons/mysql.svg',
    relatedProjects: ['airsense', 'dream-weddings'],
  },
  {
    id: 'rest-api',
    name: 'REST APIs',
    category: 'Backend',
    proficiency: {
      level: 'Intermediate',
      confidence: 80,
      years: 2,
    },
    usage: {
      context: 'API design, integration, and documentation with proper error handling',
      frequency: 'Weekly',
      lastUsed: '2024-03',
    },
    tags: ['Production'],
    icon: '/icons/api.svg',
    relatedProjects: ['silent-help', 'airsense'],
  },

  // Tools
  {
    id: 'git',
    name: 'Git',
    category: 'Tools',
    proficiency: {
      level: 'Advanced',
      confidence: 90,
      years: 3,
    },
    usage: {
      context: 'Version control, branching strategies, collaboration workflows, and conflict resolution',
      frequency: 'Daily',
      lastUsed: '2024-03',
    },
    tags: ['Daily'],
    icon: '/icons/git.svg',
    relatedProjects: [],
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Tools',
    proficiency: {
      level: 'Advanced',
      confidence: 95,
      years: 3,
    },
    usage: {
      context: 'Primary IDE with custom extensions, snippets, and integrated workflows',
      frequency: 'Daily',
      lastUsed: '2024-03',
    },
    tags: ['Daily'],
    icon: '/icons/vscode.svg',
    relatedProjects: [],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Tools',
    proficiency: {
      level: 'Beginner',
      confidence: 50,
      years: 1,
    },
    usage: {
      context: 'Basic containerization for development environments and reproducible builds',
      frequency: 'Occasionally',
      lastUsed: '2024-01',
    },
    tags: ['Learning'],
    icon: '/icons/docker.svg',
    relatedProjects: [],
  },

  // AI
  {
    id: 'claude',
    name: 'Claude',
    category: 'AI',
    proficiency: {
      level: 'Advanced',
      confidence: 90,
      years: 1,
    },
    usage: {
      context: 'AI-assisted development, code review, problem-solving, and API integration',
      frequency: 'Daily',
      lastUsed: '2024-03',
    },
    tags: ['Daily', 'Productivity'],
    icon: '/icons/claude.svg',
    relatedProjects: ['silent-help'],
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI',
    proficiency: {
      level: 'Advanced',
      confidence: 85,
      years: 1.5,
    },
    usage: {
      context: 'Research, documentation generation, rapid prototyping, and learning new technologies',
      frequency: 'Daily',
      lastUsed: '2024-03',
    },
    tags: ['Daily', 'Productivity'],
    icon: '/icons/chatgpt.svg',
    relatedProjects: [],
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'AI',
    proficiency: {
      level: 'Intermediate',
      confidence: 75,
      years: 0.5,
    },
    usage: {
      context: 'AI-powered code editor for faster development with intelligent code completion',
      frequency: 'Daily',
      lastUsed: '2024-03',
    },
    tags: ['Learning', 'Daily'],
    icon: '/icons/cursor.svg',
    relatedProjects: [],
  },

  // Design
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design',
    proficiency: {
      level: 'Intermediate',
      confidence: 65,
      years: 2,
    },
    usage: {
      context: 'Design review, implementation, and basic prototyping for web projects',
      frequency: 'Weekly',
      lastUsed: '2024-02',
    },
    tags: ['Regular'],
    icon: '/icons/figma.svg',
    relatedProjects: ['brimston-energy'],
  },
]

export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((s) => s.category === category)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(skills.map((s) => s.category)))
}

export const skillCategories = [
  {
    id: 'Frontend',
    title: 'Core Frontend',
    icon: 'Code',
    color: '#8b5cf6',
  },
  {
    id: 'Backend',
    title: 'Backend & Database',
    icon: 'Server',
    color: '#3b82f6',
  },
  {
    id: 'Tools',
    title: 'Tools & DevOps',
    icon: 'Wrench',
    color: '#10b981',
  },
  {
    id: 'AI',
    title: 'AI & Productivity',
    icon: 'Sparkles',
    color: '#a78bfa',
  },
  {
    id: 'Design',
    title: 'Design & Motion',
    icon: 'Palette',
    color: '#ec4899',
  },
]

