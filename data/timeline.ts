import { TimelineEntry } from '@/types'

export const timeline: TimelineEntry[] = [
  {
    id: 'brimston-2024',
    type: 'project',
    date: {
      start: '2024-01',
      end: '2024-03',
      display: 'Jan - Mar 2024',
    },
    content: {
      title: 'Frontend Developer',
      organization: 'Brimston Energy Website Redesign',
      location: 'Remote',
      description: 'Complete WordPress site redesign for green energy company focusing on modern UX and performance.',
      responsibilities: [
        'Redesigned user experience and visual identity',
        'Implemented custom WordPress theme (Stax)',
        'Optimized for performance and SEO',
        'Ensured accessibility compliance',
      ],
      achievements: [
        'Improved page load time by 40%',
        'Increased mobile usability score to 95+',
        'Enhanced brand consistency across all pages',
      ],
    },
    technologies: ['WordPress', 'Stax Theme', 'CSS', 'JavaScript'],
    visual: {
      icon: 'Briefcase',
      accentColor: '#10b981',
      thumbnail: '/images/experience/brimston.jpg',
    },
    relatedProject: 'brimston-energy',
  },
  {
    id: 'silent-help-2023',
    type: 'project',
    date: {
      start: '2023-09',
      end: '2023-12',
      display: 'Sep - Dec 2023',
    },
    content: {
      title: 'Full-Stack Developer',
      organization: 'Silent Help - Mental Wellbeing Platform',
      location: 'Personal Project',
      description: 'AI-powered mental health support platform with empathetic chat interface and crisis resources.',
      responsibilities: [
        'Architected Next.js application with TypeScript',
        'Integrated Claude API for conversational support',
        'Designed empathetic user interface',
        'Implemented privacy-first data handling',
      ],
      achievements: [
        'Built responsive chat interface with real-time responses',
        'Achieved Lighthouse score of 98',
        'Implemented WCAG AA accessibility standards',
      ],
    },
    technologies: ['Next.js', 'TypeScript', 'Claude API', 'Tailwind CSS', 'Framer Motion'],
    visual: {
      icon: 'Heart',
      accentColor: '#a78bfa',
      thumbnail: '/images/experience/silent-help.jpg',
    },
    relatedProject: 'silent-help',
  },
  {
    id: 'airsense-2022',
    type: 'project',
    date: {
      start: '2022-03',
      end: '2022-06',
      display: 'Mar - Jun 2022',
    },
    content: {
      title: 'Full-Stack Developer',
      organization: 'AirSense IoT Dashboard',
      location: 'Academic Project',
      description: 'Real-time air quality monitoring dashboard with device management and data visualization.',
      responsibilities: [
        'Developed Laravel backend with Livewire components',
        'Built MySQL database schema for sensor data',
        'Created real-time data visualization dashboard',
        'Implemented device management system',
      ],
      achievements: [
        'Successfully deployed to production',
        'Handled 1000+ data points per day',
        'Responsive design for mobile monitoring',
      ],
    },
    technologies: ['Laravel', 'Livewire', 'MySQL', 'Chart.js', 'Tailwind CSS'],
    visual: {
      icon: 'Activity',
      accentColor: '#3b82f6',
      thumbnail: '/images/experience/airsense.jpg',
    },
    relatedProject: 'airsense',
  },
  {
    id: 'dream-weddings-2021',
    type: 'project',
    date: {
      start: '2021-09',
      end: '2021-12',
      display: 'Sep - Dec 2021',
    },
    content: {
      title: 'Full-Stack Developer',
      organization: 'Dream Weddings Catalogue',
      location: 'Academic Project',
      description: 'Wedding service and product catalogue with booking system and payment integration.',
      responsibilities: [
        'Built JSP-based web application',
        'Designed MySQL database schema',
        'Implemented search and filter functionality',
        'Created admin panel for content management',
      ],
      achievements: [
        'First full-stack project from scratch',
        'Learned database normalization',
        'Implemented user authentication system',
      ],
    },
    technologies: ['JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    visual: {
      icon: 'ShoppingBag',
      accentColor: '#ec4899',
      thumbnail: '/images/experience/dream-weddings.jpg',
    },
    relatedProject: 'dream-weddings',
  },
  {
    id: 'education-bsc',
    type: 'education',
    date: {
      start: '2021-01',
      end: '2024-12',
      display: '2021 - 2024',
    },
    content: {
      title: 'BSc (Hons) Computer Science',
      organization: 'British College of Applied Studies',
      location: 'Cambridge, UK',
      description: 'Comprehensive computer science education with focus on software engineering and web technologies.',
      keyModules: [
        'Web Technologies & Applications',
        'Database Systems & Design',
        'Software Engineering Principles',
        'Algorithms & Data Structures',
        'Human-Computer Interaction',
        'Project Management',
      ],
      achievements: [
        'Graduated with Honours',
        'Led multiple group projects',
        'Specialized in web development track',
      ],
      grade: 'First Class Honours (Expected)',
    },
    visual: {
      icon: 'GraduationCap',
      accentColor: '#8b5cf6',
      thumbnail: '/images/education/university.jpg',
    },
  },
]

export function getTimelineByType(type: string): TimelineEntry[] {
  if (type === 'all') return timeline
  return timeline.filter((t) => t.type === type)
}

export function getProjectTimeline(): TimelineEntry[] {
  return timeline.filter((t) => t.type === 'project')
}

export function getEducationTimeline(): TimelineEntry[] {
  return timeline.filter((t) => t.type === 'education')
}

