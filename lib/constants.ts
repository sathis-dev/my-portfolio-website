export const SITE_CONFIG = {
  name: 'Sathis Ravishka Hettiarachchi',
  title: 'Sathis Ravishka Hettiarachchi - Frontend Developer',
  description: 'Frontend Developer & AI Integration Specialist building modern web experiences with Next.js, TypeScript, and AI-assisted workflows from Cambridge, UK.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sathis.dev',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/sathis',
    linkedin: 'https://linkedin.com/in/sathis',
    email: 'mailto:hello@sathis.dev',
  },
  location: {
    city: 'Cambridge',
    country: 'UK',
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '/', exact: true },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export const SOCIAL_LINKS = [
  {
    platform: 'GitHub',
    href: SITE_CONFIG.links.github,
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    href: SITE_CONFIG.links.linkedin,
    icon: 'Linkedin',
  },
  {
    platform: 'Email',
    href: SITE_CONFIG.links.email,
    icon: 'Mail',
  },
]

export const PROJECT_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'featured', label: 'Featured', icon: 'Star' },
  { id: 'web-app', label: 'Web Apps', icon: 'Globe' },
  { id: 'ai', label: 'AI & Data', icon: 'Brain' },
  { id: 'client', label: 'Client Work', icon: 'Briefcase' },
]

