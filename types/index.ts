export interface Project {
  id: string
  slug: string
  title: string
  tagline: string
  shortDescription: string
  fullDescription: string
  metadata: {
    type: 'Web App' | 'Dashboard' | 'E-commerce' | 'CMS' | 'IoT'
    category: 'Client Work' | 'Personal' | 'Academic'
    featured: boolean
    status: 'Live' | 'In Development' | 'Archived'
    timeline: {
      start: string
      end: string
      duration: string
    }
    role: string
  }
  technical: {
    techStack: string[]
    architecture?: string
    challenges?: string[]
    learnings?: string[]
  }
  content: {
    problem: string
    solution: string
    features: Array<{
      title: string
      description: string
      icon?: string
    }>
    myContribution: string[]
    improvements?: string
  }
  media: {
    thumbnail: string
    hero: string
    screenshots: Array<{
      src: string
      caption: string
      alt: string
    }>
    video?: string
  }
  links: {
    live?: string
    github?: string
    case_study?: string
  }
  tags: string[]
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage: string
  }
}

export interface Skill {
  id: string
  name: string
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI' | 'Design'
  proficiency: {
    level: 'Beginner' | 'Intermediate' | 'Advanced'
    confidence: number
    years: number
  }
  usage: {
    context: string
    frequency: 'Daily' | 'Weekly' | 'Occasionally'
    lastUsed: string
  }
  tags: string[]
  icon: string
  color?: string
  relatedProjects: string[]
}

export interface TimelineEntry {
  id: string
  type: 'project' | 'education' | 'certification' | 'milestone'
  date: {
    start: string
    end: string | 'Present'
    display: string
  }
  content: {
    title: string
    organization: string
    location: string
    description: string
    responsibilities?: string[]
    achievements?: string[]
    keyModules?: string[]
    grade?: string
    certificate?: string
  }
  technologies?: string[]
  visual: {
    icon: string
    accentColor: string
    thumbnail?: string
  }
  relatedProject?: string
}

export interface ContactSubmission {
  name: string
  email: string
  subject: 'project' | 'collaboration' | 'job' | 'other'
  message: string
  timestamp: Date
  status: 'pending' | 'sent' | 'failed'
}

