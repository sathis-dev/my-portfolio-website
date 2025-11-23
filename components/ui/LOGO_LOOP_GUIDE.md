# Logo Loop Component Guide

## Overview
Infinite scrolling logo showcase inspired by React Bits. Displays tech stack logos in a seamless loop with fade-out edges and hover effects, perfectly color-matched to DarkVeil.

---

## Component Location
`components/ui/logo-loop.tsx`

---

## Features

✨ **Infinite Scrolling**
- Seamless loop animation
- 25 second duration for smooth viewing
- Linear easing for consistent speed
- No jump or reset visible

✨ **Fade-Out Edges**
- Gradient overlays on left/right
- Smooth fade to background
- Creates floating effect
- Hides loop seam

✨ **Hover Effects**
- Cards scale up (110%)
- Border color intensifies
- Shadow strengthens
- Name text brightens

✨ **Color-Matched Design**
- Magenta tint: `rgba(199, 21, 133, 0.08)`
- Magenta borders: `rgba(199, 21, 133, 0.15)`
- Purple shadows: `rgba(74, 20, 140, 0.15)`
- Matches DarkVeil palette perfectly

---

## Current Tech Stack Logos

1. **Next.js** ▲
2. **React** ⚛
3. **TypeScript** TS
4. **Tailwind** 🎨
5. **Framer** F
6. **Node.js** ⬢
7. **Git** ⎇
8. **Vercel** ▲

---

## Implementation

**Location:** `components/sections/HeroSection.tsx`

```tsx
{/* Logo Loop - Tech Stack */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1.8 }}
  className="relative z-10 w-full max-w-6xl mx-auto mb-16 px-4"
>
  <LogoLoop />
</motion.div>
```

**Position:**
- After stats section (15+, 3+, 10+)
- Before scroll indicator
- z-index: 10 (above background, below scroll)
- margin-bottom: 16 (4rem spacing)

---

## Animation Details

### Scrolling Animation

```tsx
animate={{
  x: [0, -50 + '%'],
}}
transition={{
  duration: 25,      // 25 seconds per full loop
  repeat: Infinity,  // Loop forever
  ease: 'linear',    // Consistent speed
}}
```

**How it works:**
1. Logos array is duplicated
2. Animation moves from 0% to -50%
3. When at -50%, shows duplicate set
4. Seamless loop (no visible reset)

### Fade Gradients

**Left Fade:**
```css
background: linear-gradient(
  to right,
  rgba(10, 10, 15, 1) 0%,     /* Solid at edge */
  rgba(10, 10, 15, 0) 100%    /* Transparent */
)
width: 96px (6rem)
```

**Right Fade:**
```css
background: linear-gradient(
  to left,
  rgba(10, 10, 15, 1) 0%,     /* Solid at edge */
  rgba(10, 10, 15, 0) 100%    /* Transparent */
)
width: 96px (6rem)
```

---

## Customization

### Adding New Logos

```tsx
const logos: Logo[] = [
  { name: 'Next.js', icon: '▲' },
  { name: 'React', icon: '⚛' },
  // Add your logo:
  { name: 'Python', icon: '🐍' },
  { name: 'Docker', icon: '🐳' },
]
```

### Changing Speed

```tsx
// Slower (30 seconds)
transition={{
  duration: 30,
  repeat: Infinity,
  ease: 'linear',
}}

// Faster (15 seconds)
transition={{
  duration: 15,
  repeat: Infinity,
  ease: 'linear',
}}
```

### Card Styling

```tsx
// Current (Magenta)
background: 'rgba(199, 21, 133, 0.08)'
border: 'rgba(199, 21, 133, 0.15)'

// Purple variant
background: 'rgba(139, 92, 246, 0.08)'
border: 'rgba(139, 92, 246, 0.15)'

// Pink variant
background: 'rgba(233, 30, 140, 0.08)'
border: 'rgba(233, 30, 140, 0.15)'
```

---

## Responsive Design

### Mobile (< 640px)
```
Icon Size:    56px × 56px (w-14 h-14)
Text Size:    12px (text-xs)
Gap:          32px (gap-8)
```

### Tablet/Desktop (≥ 640px)
```
Icon Size:    64px × 64px (w-16 h-16)
Text Size:    14px (text-sm)
Gap:          48px (gap-12)
```

---

## Color System (DarkVeil Matched)

### Default State
```css
/* Card Background */
background: rgba(199, 21, 133, 0.08);  /* Magenta tint */

/* Card Border */
border: 1px solid rgba(199, 21, 133, 0.15);  /* Magenta border */

/* Card Shadow */
box-shadow: 0 4px 12px rgba(74, 20, 140, 0.15);  /* Purple shadow */

/* Icon Color */
color: rgba(255, 255, 255, 0.7);  /* White 70% */

/* Name Text */
color: rgba(255, 255, 255, 0.4);  /* White 40% */
```

### Hover State
```css
/* Card Background */
background: rgba(199, 21, 133, 0.15);  /* Brighter magenta */

/* Card Border */
border: 1px solid rgba(199, 21, 133, 0.3);  /* Stronger magenta */

/* Card Shadow */
box-shadow: 0 6px 16px rgba(199, 21, 133, 0.25);  /* Magenta glow */

/* Card Scale */
transform: scale(1.1);  /* 110% size */

/* Name Text */
color: rgba(255, 255, 255, 0.6);  /* White 60% */
```

---

## Technical Details

### Layout Structure

```
┌─────────────────────────────────────────────┐
│  Logo Loop Container                        │
│  ┌───────────────────────────────────────┐  │
│  │ Fade │  Logo  Logo  Logo  Logo │ Fade │  │
│  │ Left │   ⚛    ▲    TS   🎨   │ Right│  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

### Z-Index Layers
```
Scroll Indicator:  relative (in flow)
Logo Loop:         z-10 (above bg)
Fade Overlays:     z-10 (above logos)
DarkVeil:          z--1 (background)
```

### Performance Optimizations

1. **GPU Acceleration**
   - Uses `transform: translateX()` (GPU)
   - No layout reflow
   - Smooth 60fps animation

2. **Minimal Re-renders**
   - Static logo array
   - No state changes during animation
   - Pure CSS/Framer Motion

3. **Efficient Rendering**
   - Duplicated array (not cloned DOM)
   - Linear animation (no calculations)
   - Pointer-events: none on fades

---

## Position in Hero Section

```
┌───────────────────────────────────────┐
│  Header Navigation                    │
├───────────────────────────────────────┤
│  Availability Badge                   │
│  Name (Sathis Ravishka)              │
│  Name (Hettiarachchi) - Gradient     │
│  Subtitle                             │
│  Description - Decrypted Text        │
│  CTA Buttons                          │
│  Stats (15+, 3+, 10+)                │
├───────────────────────────────────────┤
│  ✨ LOGO LOOP (YOU ARE HERE) ✨      │ ← Scrolling tech stack
├───────────────────────────────────────┤
│  Scroll Indicator                     │
└───────────────────────────────────────┘
```

**Spacing:**
- `mb-16` (4rem) below logo loop
- Creates breathing room before scroll
- Doesn't overlap with scroll indicator

---

## Animation Timeline

```
0ms:     Page loads
100ms:   Availability badge
400ms:   Name appears
600ms:   Gradient name
800ms:   Subtitle
1000ms:  Description container
1200ms:  CTA buttons
1400ms:  Stats appear
1800ms:  🎬 LOGO LOOP FADES IN
2000ms:  Scroll indicator appears
```

Logo loop animates infinitely after fade-in!

---

## Accessibility

✅ **Semantic HTML**
- Proper div structure
- Meaningful class names
- Clear hierarchy

✅ **Keyboard Navigation**
- No interactive elements (display only)
- Doesn't trap focus
- Doesn't interfere with tab order

✅ **Reduced Motion**
To respect user preferences:

```tsx
const prefersReducedMotion = useReducedMotion()

<motion.div
  animate={prefersReducedMotion ? {} : { x: [0, -50 + '%'] }}
  transition={prefersReducedMotion ? { duration: 0 } : { duration: 25 }}
>
```

✅ **Screen Readers**
- Decorative only
- Logos are visible in text
- No critical information

---

## Browser Support

✅ **Fully Supported:**
- Chrome 88+
- Firefox 83+
- Safari 14+
- Edge 88+

**Features Used:**
- CSS transforms (universal)
- Linear gradients (universal)
- Framer Motion (React 18+)
- Flexbox (universal)

---

## Common Issues & Solutions

### Issue: Logos jump at loop end
**Solution:**
- Ensure logos array is duplicated
- Animation goes to exactly -50%
- Check `ease: 'linear'`

### Issue: Fade doesn't work
**Solution:**
- Verify `overflow: hidden` on container
- Check gradient z-index
- Ensure pointer-events: none on fades

### Issue: Hover doesn't work
**Solution:**
- Remove pointer-events: none from cards
- Check z-index stacking
- Verify hover handlers are attached

### Issue: Animation too fast/slow
**Solution:**
- Adjust `duration` in transition
- Typical range: 15-30 seconds
- Lower = faster, higher = slower

---

## Future Enhancements

Possible improvements:

1. **Pause on Hover**
   ```tsx
   onMouseEnter={() => setPaused(true)}
   onMouseLeave={() => setPaused(false)}
   ```

2. **Click to External Link**
   ```tsx
   onClick={() => window.open(logo.url, '_blank')}
   ```

3. **Tooltips**
   ```tsx
   <Tooltip content={logo.description}>
     <LogoCard />
   </Tooltip>
   ```

4. **Real Logo Images**
   ```tsx
   <img src={`/logos/${logo.name}.svg`} alt={logo.name} />
   ```

---

Your hero section now has a **premium infinite logo loop** that showcases your tech stack with perfect color matching to your DarkVeil palette! ✨

