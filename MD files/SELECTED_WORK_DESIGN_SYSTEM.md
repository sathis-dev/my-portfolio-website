# Selected Work Section - Complete Design System

## Overview
A stunning projects showcase section that seamlessly continues the DarkVeil background with glass morphism effects, interactive hover states, and full responsive design.

---

## 🎨 Design Philosophy

### Visual Continuity
- **Background**: Transparent - continues DarkVeil seamlessly
- **Glass Morphism**: `backdrop-filter: blur(16px)` on all cards
- **Color Harmony**: Magenta accent (#E91E8C) matches entire portfolio
- **No Breaks**: No visual separation from previous sections

### Layout Strategy
- **Responsive Grid**: 1 column (mobile) → 3 columns (desktop)
- **Card Aspect**: 16:9 images with flexible content height
- **Spacing**: Generous gaps for visual breathing room
- **Max Width**: 1400px container for optimal readability

---

## 📐 Component Structure

### Section Layout
```typescript
{
  padding: {
    mobile: "py-16 px-4",
    tablet: "py-20 px-6",
    desktop: "py-24 px-8",
    large: "py-32 px-8"
  },
  maxWidth: "1400px",
  margin: "0 auto",
  position: "relative",
  zIndex: 10
}
```

### Section Header
```typescript
{
  title: {
    fontSize: {
      mobile: "text-3xl",
      tablet: "text-4xl",
      desktop: "text-5xl",
      large: "text-6xl"
    },
    fontWeight: 800,
    color: "#FFFFFF",
    letterSpacing: "-0.02em",
    marginBottom: "1rem"
  },
  subtitle: {
    fontSize: {
      mobile: "text-sm",
      tablet: "text-base",
      desktop: "text-lg"
    },
    color: "rgba(255, 255, 255, 0.65)",
    maxWidth: "800px",
    margin: "0 auto"
  }
}
```

---

## 🎴 Project Cards

### Card Default State
```css
background: rgba(39, 10, 33, 0.25);
backdrop-filter: blur(16px) saturate(100%);
border: 1px solid rgba(199, 21, 133, 0.15);
border-radius: 24px;
box-shadow: 
  0 8px 32px rgba(74, 20, 140, 0.15),
  inset 0 1px 0 rgba(199, 21, 133, 0.08);
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Card Hover State
```css
background: rgba(39, 10, 33, 0.35);
border: 1px solid rgba(199, 21, 133, 0.3);
box-shadow: 
  0 16px 56px rgba(74, 20, 140, 0.25),
  inset 0 1px 0 rgba(199, 21, 133, 0.12),
  0 0 80px rgba(199, 21, 133, 0.15);
transform: translateY(-8px);
```

---

## 🖼️ Image Container

### Default State
```typescript
{
  aspectRatio: "16/9",
  background: "rgba(199, 21, 133, 0.05)",
  borderBottom: "1px solid rgba(199, 21, 133, 0.1)",
  position: "relative",
  overflow: "hidden"
}
```

### Image Hover Effect
```css
.image {
  transition: transform 0.4s ease;
}

.card:hover .image {
  transform: scale(1.05);
}
```

### Overlay
```css
position: absolute;
inset: 0;
background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
opacity: 0;
transition: opacity 0.4s ease;

/* On hover */
opacity: 1;
```

---

## 🏷️ Badges

### Featured Badge
```typescript
{
  position: "absolute",
  top: "1rem",
  left: "1rem",
  zIndex: 10,
  background: "rgba(139, 92, 246, 0.9)",
  backdropFilter: "blur(8px)",
  color: "#FFFFFF",
  fontSize: "0.75rem",
  fontWeight: 600,
  padding: "0.375rem 0.75rem",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)"
}
```

### Status Badges
```typescript
{
  development: {
    background: "rgba(16, 185, 129, 0.9)", // Green
    color: "#FFFFFF",
    label: "In Active Development"
  },
  planned: {
    background: "rgba(251, 191, 36, 0.9)", // Yellow
    color: "#000000",
    label: "Planned"
  },
  completed: {
    background: "rgba(59, 130, 246, 0.9)", // Blue
    color: "#FFFFFF",
    label: "Completed"
  }
}
```

---

## 📝 Content Structure

### Category Tags
```css
display: flex;
flex-wrap: wrap;
gap: 0.5rem;
margin-bottom: 0.75rem;

.tag {
  font-size: 0.75rem;
  font-weight: 600;
  color: #E91E8C;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Title
```css
font-size: 1.5rem; /* 2rem on tablet+ */
font-weight: 700;
color: #FFFFFF;
margin-bottom: 0.75rem;
line-height: 1.3;
```

### Description
```css
font-size: 0.9375rem;
color: rgba(255, 255, 255, 0.65);
line-height: 1.7;
margin-bottom: 1rem;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
```

---

## 🔧 Tech Stack Section

### Layout
```css
margin-top: auto;
padding-top: 1.5rem;
border-top: 1px solid rgba(199, 21, 133, 0.1);
```

### Label
```css
font-size: 0.75rem;
font-weight: 600;
color: rgba(255, 255, 255, 0.5);
text-transform: uppercase;
letter-spacing: 0.05em;
margin-bottom: 0.75rem;
```

### Tech Tags
```css
/* Default */
font-size: 0.8125rem;
font-weight: 500;
color: rgba(255, 255, 255, 0.7);
background: rgba(199, 21, 133, 0.08);
border: 1px solid rgba(199, 21, 133, 0.15);
padding: 0.375rem 0.75rem;
border-radius: 8px;
transition: all 0.3s ease;

/* Hover */
color: #FFFFFF;
background: rgba(199, 21, 133, 0.15);
border: 1px solid rgba(199, 21, 133, 0.25);
transform: translateY(-2px);
```

---

## 🔗 Interactive Elements

### View Project Link
```css
/* Default */
display: flex;
align-items: center;
gap: 0.5rem;
color: #E91E8C;
font-size: 0.9375rem;
font-weight: 600;
transition: all 0.3s ease;

/* Hover */
color: #FFFFFF;
gap: 0.75rem;

.arrow {
  transform: translateX(4px);
}
```

### View All Button
```css
/* Default */
display: flex;
align-items: center;
gap: 0.75rem;
padding: 1rem 2rem;
border-radius: 16px;
background: rgba(199, 21, 133, 0.1);
border: 1px solid rgba(199, 21, 133, 0.25);
backdrop-filter: blur(12px);
color: #FFFFFF;
font-size: 1rem;
font-weight: 600;
box-shadow: 0 4px 16px rgba(199, 21, 133, 0.1);

/* Hover */
background: rgba(199, 21, 133, 0.2);
border: 1px solid rgba(199, 21, 133, 0.35);
transform: translateY(-2px);
box-shadow: 0 8px 24px rgba(199, 21, 133, 0.2);
```

---

## 🎭 Animations

### Card Entry
```typescript
{
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  transition: {
    duration: 0.6,
    delay: index * 0.15, // Stagger
    ease: [0.4, 0, 0.2, 1]
  }
}
```

### Card Hover
```typescript
{
  whileHover: {
    y: -8,
    transition: { duration: 0.3 }
  }
}
```

### Image Zoom
```css
transition: transform 0.4s ease;
transform: scale(1.05); /* On card hover */
```

### Tag Bounce
```typescript
{
  whileHover: {
    y: -2
  }
}
```

---

## 🌈 Color Palette

### Backgrounds
```typescript
{
  cardDefault: "rgba(39, 10, 33, 0.25)",
  cardHover: "rgba(39, 10, 33, 0.35)",
  imageContainer: "rgba(199, 21, 133, 0.05)",
  featuredBadge: "rgba(139, 92, 246, 0.9)",
  tagDefault: "rgba(199, 21, 133, 0.08)",
  tagHover: "rgba(199, 21, 133, 0.15)"
}
```

### Borders
```typescript
{
  cardDefault: "rgba(199, 21, 133, 0.15)",
  cardHover: "rgba(199, 21, 133, 0.3)",
  imageBorder: "rgba(199, 21, 133, 0.1)",
  techStackDivider: "rgba(199, 21, 133, 0.1)"
}
```

### Text
```typescript
{
  heading: "#FFFFFF",
  subtitle: "rgba(255, 255, 255, 0.65)",
  cardTitle: "#FFFFFF",
  description: "rgba(255, 255, 255, 0.65)",
  categoryTag: "#E91E8C",
  techTag: "rgba(255, 255, 255, 0.7)",
  link: "#E91E8C",
  linkHover: "#FFFFFF"
}
```

### Accent Colors
```typescript
{
  featured: "#8B5CF6", // Purple
  inDevelopment: "#10B981", // Green
  planned: "#FBBF24", // Yellow
  completed: "#3B82F6", // Blue
  magenta: "#E91E8C"
}
```

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)
```css
.section {
  padding: 4rem 1rem;
}

.heading {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.grid {
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.card {
  padding: 1.5rem;
}
```

### Tablet (640px - 1024px)
```css
.section {
  padding: 5rem 1.5rem;
}

.heading {
  font-size: 3rem;
  margin-bottom: 3.5rem;
}

.grid {
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

.card {
  padding: 1.75rem;
}
```

### Desktop (1024px+)
```css
.section {
  padding: 6rem 2rem;
}

.heading {
  font-size: 3.5rem;
  margin-bottom: 4rem;
}

.grid {
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card {
  padding: 2rem;
}
```

---

## 🎯 Cursor Hover Effects

### Section Heading
```typescript
data-cursor="hover"
data-cursor-text="Projects"
```

### Project Cards
```typescript
data-cursor="hover"
data-cursor-text="View Project"
```

### Tech Tags
```typescript
data-cursor="link"
data-cursor-text={techName}
```

### View All Button
```typescript
data-cursor="link"
data-cursor-text="All Projects"
```

---

## ✅ Project Data Structure

```typescript
{
  id: string;
  title: string;
  slug: string;
  categories: string[];
  description: string;
  features?: string[];
  techStack: string[];
  image: string;
  featured: boolean;
  status: 'development' | 'planned' | 'completed';
  statusLabel: string;
}
```

---

## 🚫 DO NOT Rules

1. ❌ DO NOT add separate background - continue DarkVeil transparently
2. ❌ DO NOT use solid backgrounds - always rgba with magenta tint
3. ❌ DO NOT create visual separation from previous sections
4. ❌ DO NOT forget backdrop-filter on glass elements
5. ❌ DO NOT use generic colors - extract from DarkVeil palette
6. ❌ DO NOT add horizontal dividers between sections
7. ❌ DO NOT make project images full-bleed - keep aspect ratio
8. ❌ DO NOT forget hover states on all interactive elements

---

## 📊 Performance Optimizations

### Image Optimization
- Using Next.js `Image` component
- Proper `fill` sizing with aspect ratio
- Lazy loading by default

### Animation Performance
- GPU-accelerated transforms
- `will-change` on hover elements
- Efficient transition timing functions

### Render Optimization
- `useInView` for scroll-triggered animations
- Single animation trigger per card
- Staggered entry animations

---

## 🎨 Integration with Existing Design

### Seamless Flow
1. **Header** → DarkVeil background starts
2. **Hero Content** → Main intro with availability badge
3. **Stats Section** → Animated counters
4. **What I Do** → 3D tilt service cards
5. **Logo Loop** → Infinite scrolling tech logos
6. **Selected Work** → Project showcase (NEW!)
7. **Scroll Indicator** → Smart directional hint

### Visual Continuity
- Same glass morphism effect
- Consistent magenta accent color
- Matching border styles
- Unified hover states
- Same animation timing curves

---

## 🎯 User Experience

### Clear Hierarchy
1. Section heading draws attention
2. Featured badges highlight key projects
3. Status badges provide context
4. Categories help quick scanning
5. Tech stack shows technical expertise

### Interaction Feedback
- Hover lift on cards
- Image zoom on hover
- Overlay fade on hover
- Tag color change on hover
- Arrow slide on link hover
- Button lift on hover

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text on images
- Keyboard navigation support
- Focus states on interactive elements

---

## 📈 Future Enhancements

### Potential Additions
- Filter by category
- Search functionality
- Load more pagination
- Project preview modal
- GitHub stars count
- Live demo links
- Case study indicators

### Animation Ideas
- Particle effects on hover
- Gradient border animation
- Text reveal effects
- Parallax scrolling
- Magnetic cursor pull

---

This design system ensures the Selected Work section maintains perfect visual harmony with your entire portfolio while providing an engaging, interactive showcase of your projects! 🚀

