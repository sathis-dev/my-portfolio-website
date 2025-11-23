# Sathis Ravishka Hettiarachchi - Personal Portfolio

A cinematic, high-performance personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Features

- ✨ **Cinematic Design** - Motion-rich interface with Framer Motion animations
- ⚡ **Lightning Fast** - Optimized for performance (Lighthouse score ≥95)
- ♿ **Fully Accessible** - WCAG 2.2 AA compliant with keyboard navigation and screen reader support
- 📱 **Responsive** - Mobile-first design that works flawlessly on all devices
- 🎨 **Modern Stack** - Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- 🔍 **SEO Optimized** - Comprehensive meta tags, sitemap, and structured data

## 🚀 Tech Stack

### Core
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3.4+

### Animation & UI
- **Animations**: Framer Motion 11+
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

### Features
- Server Components and Server Actions
- Optimized images with `next/image`
- Custom fonts with `next/font`
- Responsive design with mobile-first approach
- Dark theme with custom color palette

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── (marketing)/         # Marketing pages group
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── projects/        # Projects list & detail
│   │   ├── skills/          # Skills page
│   │   ├── experience/      # Experience timeline
│   │   └── contact/         # Contact form
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── layout/              # Layout components
│   └── cards/               # Specialized card components
├── data/                    # Mock data
│   ├── projects.ts
│   ├── skills.ts
│   └── timeline.ts
├── lib/                     # Utility functions
│   ├── utils.ts
│   ├── animations.ts
│   ├── validations.ts
│   └── constants.ts
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
└── public/                  # Static assets
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sathis/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your values:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript compiler check
- `npm run format` - Format code with Prettier

## 🎨 Design System

### Color Palette
- **Primary**: Purple shades (#8b5cf6)
- **Background**: Dark theme with multiple layers
- **Text**: Hierarchical text colors for readability
- **Semantic**: Success, warning, error, info colors

### Typography
- **Sans**: Inter (body text)
- **Display**: Space Grotesk (headings)
- **Mono**: JetBrains Mono (code)

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Hover and interaction effects
- Reduced motion support

## 📝 Content Management

All content is managed through TypeScript files in the `/data` directory:

- **Projects** (`data/projects.ts`) - Portfolio projects
- **Skills** (`data/skills.ts`) - Technical skills and proficiencies
- **Timeline** (`data/timeline.ts`) - Work experience and education

To add new content, simply update these files following the existing TypeScript interfaces.

## 🔧 Customization

### Update Site Information
Edit `lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  url: 'https://your-domain.com',
  // ... more config
}
```

### Add New Pages
1. Create a new file in `app/(marketing)/your-page/page.tsx`
2. Add route to `lib/constants.ts` NAV_LINKS
3. Update sitemap in `app/sitemap.ts`

### Modify Colors
Edit `tailwind.config.ts` to customize the color palette.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
npm run start
```

## ♿ Accessibility

This portfolio is built with accessibility in mind:

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Color contrast compliance (WCAG AA)
- ✅ Focus indicators
- ✅ Reduced motion support
- ✅ Skip to main content link

## ⚡ Performance

Optimization techniques used:

- Image optimization with `next/image`
- Font optimization with `next/font`
- Code splitting and lazy loading
- Efficient CSS with Tailwind
- Minimal JavaScript bundle
- Server-side rendering
- Static generation where possible

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📬 Contact

- **Email**: hello@sathis.dev
- **LinkedIn**: [linkedin.com/in/sathis](https://linkedin.com/in/sathis)
- **GitHub**: [github.com/sathis](https://github.com/sathis)
- **Website**: [sathis.dev](https://sathis.dev)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

