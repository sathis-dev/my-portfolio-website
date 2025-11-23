# Star Border Component Guide

## Overview
Animated rotating gradient border component inspired by React Bits, color-matched to your DarkVeil palette.

---

## Component Location
`components/ui/star-border.tsx`

---

## Features

✨ **Animated Border**
- Rotating conic gradient effect
- Smooth infinite animation
- Customizable rotation speed

✨ **Glow Effect**
- Blurred background layer
- Creates depth and premium feel
- Matches border color

✨ **Color-Matched**
- Default: Magenta `rgba(199, 21, 133, 0.6)`
- Matches DarkVeil background palette
- Customizable color prop

✨ **Flexible**
- Works with any component (`as` prop)
- Framer Motion compatible
- Fully responsive

---

## Usage

### Basic Usage

```tsx
import { StarBorder } from '@/components/ui/star-border'

<StarBorder>
  <button>Click me</button>
</StarBorder>
```

### With Custom Color

```tsx
<StarBorder color="rgba(139, 92, 246, 0.8)">
  <button>Purple border</button>
</StarBorder>
```

### With Custom Speed

```tsx
<StarBorder speed={5}>
  <button>Slower rotation (5s)</button>
</StarBorder>
```

### With Framer Motion

```tsx
import { motion } from 'framer-motion'

<StarBorder
  as={motion.a}
  href="/download"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span>Download</span>
</StarBorder>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Content inside the border |
| `className` | `string` | `''` | Additional CSS classes |
| `speed` | `number` | `2` | Rotation duration in seconds |
| `as` | `any` | `'button'` | Component to render as |
| `color` | `string` | `'rgba(199, 21, 133, 0.6)'` | Border/glow color |
| `...props` | `any` | - | Any additional props |

---

## Color-Matched Variants

### Magenta (Default - Matches DarkVeil)
```tsx
<StarBorder color="rgba(199, 21, 133, 0.6)">
  Default magenta
</StarBorder>
```

### Bright Magenta (Header)
```tsx
<StarBorder color="rgba(199, 21, 133, 0.8)">
  Brighter magenta
</StarBorder>
```

### Purple
```tsx
<StarBorder color="rgba(139, 92, 246, 0.6)">
  Purple variant
</StarBorder>
```

### Pink
```tsx
<StarBorder color="rgba(233, 30, 140, 0.6)">
  Pink variant
</StarBorder>
```

---

## Current Implementations

### 1. Header CV Button

**Location:** `components/sections/HeroSection.tsx` (Header section)

```tsx
<StarBorder
  as={motion.a}
  href="/cv.pdf"
  download
  speed={3}
  color="rgba(199, 21, 133, 0.8)"
>
  <span className="flex items-center gap-2 px-3 sm:px-4 py-2">
    <Download size={16} />
    <span>CV</span>
  </span>
</StarBorder>
```

**Features:**
- 3s rotation speed
- Bright magenta border
- Compact size for header
- Magenta→Purple→Violet gradient background

### 2. Hero CV Button

**Location:** `components/sections/HeroSection.tsx` (Hero section)

```tsx
<StarBorder
  as={motion.a}
  href="/cv.pdf"
  download
  speed={4}
  color="rgba(199, 21, 133, 0.6)"
>
  <span className="flex items-center gap-2 px-8 py-4">
    <Download size={18} />
    Download CV
  </span>
</StarBorder>
```

**Features:**
- 4s rotation speed (slower, more elegant)
- Softer magenta border
- Larger size for hero prominence
- Glass effect background

---

## Customization Examples

### Fast Rotation
```tsx
<StarBorder speed={1.5}>
  Fast rotating border
</StarBorder>
```

### Slow & Elegant
```tsx
<StarBorder speed={6}>
  Slow elegant rotation
</StarBorder>
```

### Multiple Colors (Rainbow Effect)
```tsx
<StarBorder 
  color="linear-gradient(135deg, #E91E8C 0%, #8B5CF6 50%, #7C3AED 100%)"
>
  Rainbow border
</StarBorder>
```

### With Custom Background
```tsx
<StarBorder color="rgba(199, 21, 133, 0.8)">
  <span style={{ 
    background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)',
    padding: '16px 32px'
  }}>
    Custom gradient bg
  </span>
</StarBorder>
```

---

## Technical Details

### Animation
- Uses Framer Motion's `motion.span`
- Infinite rotation with `linear` easing
- GPU-accelerated for smooth performance

### Gradient
- `conic-gradient` creates the rotating effect
- Two transparent stops and two color stops
- Creates the "star" appearance

### Layers
```
┌─────────────────────┐
│   Content (z-10)    │  ← Your content
├─────────────────────┤
│   Background        │  ← Dark bg (#0A0A0F)
├─────────────────────┤
│   Glow (z-0, blur)  │  ← Blurred gradient
├─────────────────────┤
│   Border (z-0)      │  ← Rotating gradient
└─────────────────────┘
```

### Performance
- Uses `transform: rotate()` (GPU-accelerated)
- No repaints, only composite
- Smooth 60fps animation
- Minimal performance impact

---

## Best Practices

### ✅ DO
- Use for primary CTAs and important actions
- Match colors to your design system
- Keep rotation speed reasonable (2-6s)
- Test on different devices

### ❌ DON'T
- Overuse (max 2-3 per page)
- Use on small elements (<40px)
- Use extremely fast speeds (<1s)
- Forget to set a background color

---

## Accessibility

```tsx
<StarBorder
  as="button"
  aria-label="Download CV"
  role="button"
>
  <Download /> CV
</StarBorder>
```

- Ensure proper ARIA labels
- Maintain sufficient contrast
- Don't rely on animation alone for meaning
- Test with reduced motion preferences

---

## Browser Support

✅ **Supported:**
- Chrome 88+
- Firefox 83+
- Safari 14+
- Edge 88+

**Features Used:**
- `conic-gradient` (widely supported)
- CSS transforms (universal)
- Framer Motion (React 18+)

---

## Troubleshooting

### Border not visible
- Check `color` prop has sufficient opacity
- Ensure parent doesn't have `overflow: hidden`
- Verify z-index stacking context

### Animation not smooth
- Check for forced reflows in parent
- Ensure no heavy JS on same thread
- Test on different devices

### Glow effect too strong/weak
- Adjust `color` opacity (0.4-0.8 range)
- Modify blur in component if needed
- Test on different backgrounds

---

## Related Components

- **Primary Button** - Uses magenta→purple gradient
- **DarkVeil** - Background that inspired colors
- **Magnetic Button** - Can be combined with StarBorder

---

Your CV buttons now have a premium, award-winning Star Border effect that perfectly matches your DarkVeil color palette! ✨

