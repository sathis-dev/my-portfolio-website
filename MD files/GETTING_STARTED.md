# Getting Started with Your Portfolio

Welcome! Your cinematic personal portfolio is ready to deploy. Follow these steps to get it running.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=
EMAIL_SERVICE_API_KEY=
EMAIL_TO=hello@sathis.dev
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📝 Customization Steps

### Update Personal Information

**File: `lib/constants.ts`**
```typescript
export const SITE_CONFIG = {
  name: 'Your Full Name',
  title: 'Your Title - Your Profession',
  description: 'Your bio...',
  url: 'https://your-domain.com',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:your@email.com',
  },
}
```

### Add Your Projects

**File: `data/projects.ts`**

1. Update existing project entries with your real projects
2. Replace placeholder images with your project screenshots
3. Update links to live sites and GitHub repos

### Add Your Skills

**File: `data/skills.ts`**

1. Add/remove skills based on your expertise
2. Update proficiency levels and confidence scores
3. Link skills to your projects

### Update Experience & Education

**File: `data/timeline.ts`**

1. Add your work experience
2. Update education details
3. Add certifications or achievements

### Add Images

Create these directories and add your images:

```
public/
├── images/
│   ├── projects/
│   │   ├── airsense/
│   │   │   ├── thumbnail.jpg
│   │   │   ├── hero.jpg
│   │   │   └── ...
│   │   └── ...
│   ├── experience/
│   └── education/
├── icons/
│   ├── nextjs.svg
│   ├── react.svg
│   └── ...
├── og-image.jpg (1200x630px)
└── cv.pdf
```

**Image Requirements:**
- **Thumbnails**: 800x450px (16:9)
- **Hero images**: 1920x1080px (16:9)
- **OG image**: 1200x630px
- **Format**: JPG for photos, PNG for UI, SVG for icons
- **Optimization**: Use tools like TinyPNG or Squoosh

## 🎨 Styling Customization

### Change Colors

**File: `tailwind.config.ts`**

Update the primary color or any other colors in the `extend.colors` section:

```typescript
primary: {
  500: '#8b5cf6', // Change this to your brand color
  // ... other shades will be generated
}
```

### Modify Typography

Update font families in the same file:

```typescript
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-jetbrains)', 'Courier New', 'monospace'],
}
```

## 🔧 Advanced Configuration

### Add Google Analytics

1. Get your GA4 measurement ID from Google Analytics
2. Add it to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Set Up Email for Contact Form

The contact form currently uses a mock API. To enable real email sending:

1. Choose an email service (Resend, SendGrid, etc.)
2. Get API key and add to `.env.local`
3. Update `app/api/contact/route.ts` with your email service integration

Example with Resend:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.EMAIL_SERVICE_API_KEY)

// In your POST handler:
await resend.emails.send({
  from: 'Portfolio <onboarding@resend.dev>',
  to: process.env.EMAIL_TO || 'your@email.com',
  subject: `Contact Form: ${result.data.subject}`,
  // ... email content
})
```

## 📦 Building for Production

### Test Production Build

```bash
npm run build
npm run start
```

### Check for Issues

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables
6. Click "Deploy"

### Custom Domain

1. Purchase a domain
2. In Vercel dashboard, go to Settings → Domains
3. Add your domain and follow DNS configuration steps

## ✅ Pre-Launch Checklist

- [ ] Update all personal information in `lib/constants.ts`
- [ ] Add real projects to `data/projects.ts`
- [ ] Add skills to `data/skills.ts`
- [ ] Update timeline in `data/timeline.ts`
- [ ] Replace placeholder images
- [ ] Add your CV as `public/cv.pdf`
- [ ] Set up custom domain
- [ ] Add Google Analytics ID
- [ ] Test contact form
- [ ] Test on multiple devices/browsers
- [ ] Run Lighthouse audit (aim for 95+ scores)
- [ ] Check accessibility with screen reader
- [ ] Test keyboard navigation
- [ ] Verify all links work
- [ ] Update social media links
- [ ] Create OG image (1200x630px)

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `.next` and `node_modules`
2. Run `npm install` again
3. Run `npm run build`

### Image Loading Issues

- Ensure images are in the correct directories
- Check file extensions match (case-sensitive on some systems)
- Verify image paths in data files

### Type Errors

Run `npm run type-check` to see detailed TypeScript errors.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Hook Form Documentation](https://react-hook-form.com/)

## 💡 Tips

1. **Start Small**: Get the basics working, then add polish
2. **Use Real Content**: Replace mock data with your real projects and experience
3. **Test Often**: Check on different devices and browsers
4. **Optimize Images**: Large images slow down your site
5. **Keep it Updated**: Regularly add new projects and skills

## 🆘 Need Help?

If you encounter any issues:

1. Check the console for error messages
2. Review the file structure
3. Ensure all dependencies are installed
4. Check that environment variables are set

---

Ready to launch your portfolio? Follow these steps and you'll be live in no time! 🚀

