import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'airsense',
    slug: 'airsense',
    title: 'AirSense IoT Dashboard',
    tagline: 'Real-time air quality monitoring for smart environments',
    shortDescription: 'IoT dashboard for monitoring and visualizing air quality metrics with device management capabilities.',
    fullDescription: 'A comprehensive IoT dashboard built with Laravel and Livewire that provides real-time monitoring of air quality sensors. Features include device management, data visualization, historical trends, and alert notifications.',
    metadata: {
      type: 'IoT',
      category: 'Academic',
      featured: true,
      status: 'Live',
      timeline: {
        start: '2022-03',
        end: '2022-06',
        duration: '3 months',
      },
      role: 'Full-Stack Developer',
    },
    technical: {
      techStack: ['Laravel', 'Livewire', 'MySQL', 'Chart.js', 'Tailwind CSS', 'Alpine.js'],
      architecture: 'MVC with Livewire components for reactive updates',
      challenges: [
        'Handling real-time data synchronization without WebSockets',
        'Optimizing database queries for large sensor datasets',
        'Designing responsive charts for mobile devices',
      ],
      learnings: [
        'Livewire component architecture and state management',
        'Efficient data polling strategies',
        'Time-series data visualization best practices',
      ],
    },
    content: {
      problem: 'Indoor air quality monitoring systems often lack user-friendly interfaces and real-time visualization capabilities. Users need an intuitive dashboard to monitor multiple sensors, view historical data, and receive alerts when air quality degrades.',
      solution: 'Built a comprehensive web dashboard that connects to IoT air quality sensors, providing real-time data visualization, historical trend analysis, and configurable alert systems. The interface adapts to various screen sizes for monitoring on the go.',
      features: [
        {
          title: 'Real-time Data Visualization',
          description: 'Live charts updating every 30 seconds showing temperature, humidity, CO2, and particulate matter levels',
          icon: 'BarChart3',
        },
        {
          title: 'Device Management',
          description: 'Add, configure, and monitor multiple sensor devices from a centralized interface',
          icon: 'Settings',
        },
        {
          title: 'Historical Analytics',
          description: 'View trends over time with customizable date ranges and data export functionality',
          icon: 'TrendingUp',
        },
        {
          title: 'Alert System',
          description: 'Configurable thresholds with email notifications when air quality drops below safe levels',
          icon: 'Bell',
        },
      ],
      myContribution: [
        'Designed and implemented the complete frontend UI/UX',
        'Built Laravel backend with Livewire reactive components',
        'Created MySQL database schema optimized for time-series data',
        'Implemented real-time data polling and visualization with Chart.js',
        'Developed responsive design for mobile monitoring',
        'Set up alert notification system with configurable thresholds',
      ],
      improvements: 'If rebuilding today, I would use WebSockets for true real-time updates, implement more sophisticated data aggregation for better performance with large datasets, and add predictive analytics using machine learning to forecast air quality trends.',
    },
    media: {
      thumbnail: '/images/projects/airsense/thumbnail.jpg',
      hero: '/images/projects/airsense/hero.jpg',
      screenshots: [
        { src: '/images/projects/airsense/dashboard.jpg', caption: 'Main dashboard with live metrics', alt: 'AirSense dashboard overview' },
        { src: '/images/projects/airsense/devices.jpg', caption: 'Device management interface', alt: 'Device management screen' },
        { src: '/images/projects/airsense/analytics.jpg', caption: 'Historical data analytics', alt: 'Analytics and trends view' },
      ],
    },
    links: {
      github: 'https://github.com/sathis/airsense',
    },
    tags: ['IoT', 'Dashboard', 'Real-time', 'Data Visualization'],
    seo: {
      metaTitle: 'AirSense IoT Dashboard - Real-time Air Quality Monitoring',
      metaDescription: 'IoT dashboard for monitoring air quality metrics built with Laravel, Livewire, and Chart.js',
      ogImage: '/images/projects/airsense/og-image.jpg',
    },
  },
  {
    id: 'silent-help',
    slug: 'silent-help',
    title: 'Silent Help',
    tagline: 'AI-powered mental wellbeing support platform',
    shortDescription: 'A compassionate mental health platform with AI-assisted conversational support for users seeking help.',
    fullDescription: 'Silent Help is a mental wellbeing platform that provides AI-powered conversational support for users experiencing mental health challenges. Built with Next.js and Claude API, it offers a safe, anonymous space for users to express their feelings and receive empathetic, informed responses.',
    metadata: {
      type: 'Web App',
      category: 'Personal',
      featured: true,
      status: 'Live',
      timeline: {
        start: '2023-09',
        end: '2023-12',
        duration: '4 months',
      },
      role: 'Lead Developer',
    },
    technical: {
      techStack: ['Next.js 14', 'TypeScript', 'Claude API', 'Tailwind CSS', 'Framer Motion'],
      architecture: 'Next.js App Router with server actions for API calls, streaming responses for real-time chat',
      challenges: [
        'Ensuring empathetic and appropriate AI responses for sensitive topics',
        'Implementing privacy-first architecture with no data retention',
        'Creating accessible interface for users in distress',
        'Handling streaming AI responses with proper error states',
      ],
      learnings: [
        'AI prompt engineering for mental health contexts',
        'Streaming API responses with React Server Components',
        'Designing for accessibility in crisis situations',
        'Privacy-focused architecture patterns',
      ],
    },
    content: {
      problem: 'Many people struggle to access mental health support due to stigma, cost, or availability. They need a safe, immediate way to express their feelings and receive supportive guidance, especially during difficult moments.',
      solution: 'Created a web platform that provides immediate, AI-powered conversational support 24/7. The interface prioritizes empathy, privacy, and accessibility, offering users a judgment-free space to process their emotions with intelligent, compassionate responses.',
      features: [
        {
          title: 'AI-Powered Chat Interface',
          description: 'Natural conversation flow with Claude AI providing empathetic, informed responses',
          icon: 'MessageCircle',
        },
        {
          title: 'Privacy-First Design',
          description: 'No account required, end-to-end encryption, and optional conversation export only',
          icon: 'Shield',
        },
        {
          title: 'Crisis Resources',
          description: 'Immediate access to professional helplines and emergency services',
          icon: 'Phone',
        },
        {
          title: 'Accessibility Focused',
          description: 'WCAG AA compliant with screen reader support and keyboard navigation',
          icon: 'Accessibility',
        },
      ],
      myContribution: [
        'Architected Next.js application with TypeScript and App Router',
        'Integrated Claude API with custom prompt engineering for mental health contexts',
        'Designed empathetic, calming user interface with Tailwind CSS',
        'Implemented streaming chat responses for real-time interaction',
        'Built privacy-focused system with no permanent data storage',
        'Ensured WCAG AA accessibility compliance',
        'Created crisis resource directory with location-based helplines',
      ],
      improvements: 'Future enhancements would include multilingual support, mood tracking analytics (with user consent), integration with professional therapist directories, and guided meditation/breathing exercises.',
    },
    media: {
      thumbnail: '/images/projects/silent-help/thumbnail.jpg',
      hero: '/images/projects/silent-help/hero.jpg',
      screenshots: [
        { src: '/images/projects/silent-help/chat.jpg', caption: 'Empathetic chat interface', alt: 'Chat conversation interface' },
        { src: '/images/projects/silent-help/welcome.jpg', caption: 'Welcoming landing page', alt: 'Landing page with privacy promise' },
      ],
    },
    links: {
      live: 'https://silenthelp.vercel.app',
      github: 'https://github.com/sathis/silent-help',
    },
    tags: ['AI', 'Mental Health', 'Accessibility', 'Privacy'],
    seo: {
      metaTitle: 'Silent Help - AI-Powered Mental Wellbeing Support',
      metaDescription: 'Anonymous, AI-assisted mental health support platform providing empathetic conversations 24/7',
      ogImage: '/images/projects/silent-help/og-image.jpg',
    },
  },
  {
    id: 'brimston-energy',
    slug: 'brimston-energy',
    title: 'Brimston Energy Website',
    tagline: 'WordPress redesign with Stax theme for green energy company',
    shortDescription: 'Redesigning the public site in WordPress using the Stax theme with focus on cleaner structure, modern sections, and editor-friendly components.',
    fullDescription: 'A comprehensive website redesign project for Brimston Energy using WordPress and the Stax theme. Working entirely in preview/draft mode to ensure the live site isn\'t disrupted while creating cleaner structure, modern sections, and editor-friendly reusable components.',
    metadata: {
      type: 'CMS',
      category: 'Client Work',
      featured: true,
      status: 'In Development',
      timeline: {
        start: '2025-11',
        end: 'Present',
        duration: 'Ongoing',
      },
      role: 'Frontend Developer (WordPress – Stax Theme)',
    },
    technical: {
      techStack: ['WordPress', 'Stax Theme', 'PHP', 'CSS', 'JavaScript'],
      architecture: 'WordPress theme customization with reusable blocks and editor-friendly components',
      challenges: [
        'Audit existing pages and competitor sites to define page objectives',
        'Working in preview/draft mode to avoid disrupting live site',
        'Preserving theme upgradability while implementing custom CSS/JS tweaks',
        'Creating reusable blocks that editors can update without breaking layout',
      ],
      learnings: [
        'Stax theme architecture and customization patterns',
        'WordPress block editor best practices',
        'Client workflow management for live site transitions',
        'Editor-friendly component design',
      ],
    },
    content: {
      problem: 'Brimston Energy needed a modernized website with cleaner structure and better user experience, but required a solution that wouldn\'t disrupt their live site during development and would be maintainable by non-technical editors.',
      solution: 'Redesigning the complete site in WordPress using the Stax theme, working entirely in preview/draft mode. Focus on creating reusable, editor-friendly blocks with consistent spacing, accessible color contrast, and clear CTAs that preserve theme upgradability.',
      features: [
        {
          title: 'Reusable Content Blocks',
          description: 'Editor-friendly components that can be updated without breaking layout',
          icon: 'Blocks',
        },
        {
          title: 'Accessible Design',
          description: 'Consistent spacing, typography, and color contrast meeting accessibility standards',
          icon: 'Accessibility',
        },
        {
          title: 'Template System',
          description: 'Homepage, QR-Landing, Blog List, and Reusable Content page templates',
          icon: 'Layout',
        },
        {
          title: 'Clear Navigation',
          description: 'Simplified page hierarchy for clearer user journeys',
          icon: 'Navigation',
        },
      ],
      myContribution: [
        'Audit existing pages and competitor sites; define page objectives and content blocks',
        'Recompose Homepage, QR-Landing, Blog List, and Reusable Content page templates within Stax',
        'Implement consistent spacing/typography, accessible colour contrast, and clear CTAs',
        'Light custom CSS/JS for section tweaks while preserving theme upgradability',
        'Prepare content-migration and publishing checklist for handover',
        'Simplified navigation and page hierarchy for clearer user journeys',
        'Created reusable blocks editors can update without breaking layout',
      ],
      improvements: 'Planning to complete the content migration checklist and final handover to client with comprehensive documentation for ongoing maintenance.',
    },
    media: {
      thumbnail: '/images/projects/brimston/thumbnail.jpg',
      hero: '/images/projects/brimston/hero.jpg',
      screenshots: [
        { src: '/images/projects/brimston/home.jpg', caption: 'Homepage redesign', alt: 'Brimston Energy homepage' },
        { src: '/images/projects/brimston/services.jpg', caption: 'Services page', alt: 'Services overview page' },
      ],
    },
    links: {
      live: 'https://brimstonenergy.co.uk',
    },
    tags: ['WordPress', 'Stax Theme', 'Web Design', 'Client Work', 'In Progress'],
    seo: {
      metaTitle: 'Brimston Energy Website Redesign - WordPress & Stax Theme',
      metaDescription: 'WordPress website redesign using Stax theme with focus on editor-friendly reusable components and modern UX',
      ogImage: '/images/projects/brimston/og-image.jpg',
    },
  },
  {
    id: 'dream-weddings',
    slug: 'dream-weddings',
    title: 'Dream Weddings Catalogue',
    tagline: 'Wedding service and product catalogue with booking system',
    shortDescription: 'E-commerce platform for wedding services featuring search, filtering, and booking functionality.',
    fullDescription: 'A comprehensive wedding services catalogue built with JSP and MySQL, allowing users to browse services, compare packages, and make bookings for their special day.',
    metadata: {
      type: 'E-commerce',
      category: 'Academic',
      featured: false,
      status: 'Archived',
      timeline: {
        start: '2021-09',
        end: '2021-12',
        duration: '4 months',
      },
      role: 'Full-Stack Developer',
    },
    technical: {
      techStack: ['JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Apache Tomcat'],
      architecture: 'MVC pattern with JSP pages and MySQL database',
      challenges: [
        'Implementing secure user authentication',
        'Designing normalized database schema',
        'Creating intuitive search and filter interface',
      ],
      learnings: [
        'Full-stack web development fundamentals',
        'Database design and normalization',
        'Server-side rendering with JSP',
      ],
    },
    content: {
      problem: 'Wedding planners needed a centralized platform to showcase services and manage bookings, while customers wanted an easy way to compare and book wedding services.',
      solution: 'Built a complete e-commerce platform with service catalogue, advanced search, and booking management system. Implemented user authentication and admin panel for content management.',
      features: [
        {
          title: 'Service Catalogue',
          description: 'Browse wedding services with detailed descriptions and pricing',
          icon: 'ShoppingBag',
        },
        {
          title: 'Search & Filter',
          description: 'Advanced filtering by category, price range, and availability',
          icon: 'Search',
        },
        {
          title: 'Booking System',
          description: 'Secure booking process with email confirmations',
          icon: 'Calendar',
        },
      ],
      myContribution: [
        'Built complete JSP-based web application',
        'Designed MySQL database schema',
        'Implemented search and filter functionality',
        'Created admin panel for content management',
        'Developed user authentication system',
      ],
    },
    media: {
      thumbnail: '/images/projects/dream-weddings/thumbnail.jpg',
      hero: '/images/projects/dream-weddings/hero.jpg',
      screenshots: [
        { src: '/images/projects/dream-weddings/catalogue.jpg', caption: 'Service catalogue', alt: 'Wedding services catalogue' },
        { src: '/images/projects/dream-weddings/booking.jpg', caption: 'Booking interface', alt: 'Booking system' },
      ],
    },
    links: {
      github: 'https://github.com/sathis/dream-weddings',
    },
    tags: ['JSP', 'MySQL', 'E-commerce', 'Full-Stack'],
    seo: {
      metaTitle: 'Dream Weddings Catalogue - JSP E-commerce Platform',
      metaDescription: 'Wedding services e-commerce platform built with JSP and MySQL featuring booking system',
      ogImage: '/images/projects/dream-weddings/og-image.jpg',
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.metadata.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects
  if (category === 'featured') return getFeaturedProjects()
  
  return projects.filter((p) => 
    p.tags.some(tag => tag.toLowerCase() === category.toLowerCase()) ||
    p.metadata.type.toLowerCase() === category.toLowerCase()
  )
}

