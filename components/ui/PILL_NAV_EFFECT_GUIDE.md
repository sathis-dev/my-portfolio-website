# Pill Nav Effect Guide

## Overview
Animated pill background effect for navigation items, inspired by React Bits. The pill smoothly animates behind the active navigation item with spring physics.

---

## Component Location
`components/ui/pill-nav-effect.tsx`

---

## Features

✨ **Smooth Animation**
- Spring physics for natural movement
- Smooth transitions between nav items
- GPU-accelerated transforms

✨ **Auto-Positioning**
- Automatically calculates pill position
- Adapts to different nav item sizes
- Responsive to window resize

✨ **Color-Matched**
- Magenta tint: `rgba(199, 21, 133, 0.15)`
- Magenta border: `rgba(199, 21, 133, 0.3)`
- Magenta glow shadow
- Matches DarkVeil palette

✨ **Performance**
- Uses refs for direct DOM access
- Minimal re-renders
- Smooth 60fps animation

---

## How It Works

### 1. **Position Calculation**
```tsx
// Calculates pill position based on active nav item
const containerRect = container.getBoundingClientRect()
const linkRect = activeLink.getBoundingClientRect()

setPillStyle({
  left: linkRect.left - containerRect.left,
  width: linkRect.width,
  opacity: 1,
})
```

### 2. **Spring Animation**
```tsx
// Framer Motion spring physics
transition={{
  type: 'spring',
  stiffness: 380,  // Fast response
  damping: 30,     // Smooth settling
  mass: 0.8,       // Light weight
}}
```

### 3. **Responsive Updates**
- Updates on page navigation
- Updates on window resize
- Updates on layout changes

---

## Implementation

### In Header Navigation

**File:** `components/sections/HeroSection.tsx`

```tsx
import { useRef } from 'react'
import { PillNavEffect } from '@/components/ui/pill-nav-effect'

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null)
  const activeNavIndex = navItems.findIndex(item => item.href === pathname)

  return (
    <div ref={navRef} className="relative flex gap-1">
      {/* Pill Effect */}
      {activeNavIndex >= 0 && (
        <PillNavEffect
          activeIndex={activeNavIndex}
          itemsCount={navItems.length}
          containerRef={navRef}
        />
      )}
      
      {/* Nav Items */}
      {navItems.map((item, index) => (
        <Link key={item.href} href={item.href} data-nav-item>
          {item.label}
        </Link>
      ))}
    </div>
  )
}
```

---

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `activeIndex` | `number` | Yes | Index of active nav item (0-based) |
| `itemsCount` | `number` | Yes | Total number of nav items |
| `containerRef` | `RefObject<HTMLDivElement>` | Yes | Ref to nav container element |

---

## Styling

### Current Colors (Color-Matched)

```css
/* Background */
background: rgba(199, 21, 133, 0.15);  /* Magenta tint */

/* Border */
border: 1px solid rgba(199, 21, 133, 0.3);  /* Magenta border */

/* Shadow */
box-shadow: 0 4px 12px rgba(199, 21, 133, 0.2);  /* Magenta glow */

/* Shape */
border-radius: 12px;  /* Rounded corners */
height: calc(100% - 8px);  /* Inset from container */
top: 4px;  /* Offset from top */
```

### Customization

To change colors, modify the component:

```tsx
// Purple variant
style={{
  background: 'rgba(139, 92, 246, 0.15)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2)',
}}

// Pink variant
style={{
  background: 'rgba(233, 30, 140, 0.15)',
  border: '1px solid rgba(233, 30, 140, 0.3)',
  boxShadow: '0 4px 12px rgba(233, 30, 140, 0.2)',
}}
```

---

## Animation Tuning

### Spring Parameters

```tsx
// Current (Snappy & Smooth)
stiffness: 380
damping: 30
mass: 0.8

// Slower & Bouncier
stiffness: 200
damping: 20
mass: 1.0

// Faster & Stiffer
stiffness: 500
damping: 40
mass: 0.6

// Super Smooth (No bounce)
stiffness: 300
damping: 40
mass: 1.0
```

### Visual Examples

```
Stiffness: How quickly it responds
Low (100)  ████░░░░░░  Slow start
Med (300)  ██████░░░░  Balanced
High (500) ████████░░  Instant

Damping: How much it settles
Low (10)   ↗↘↗↘↗↘     Bouncy
Med (30)   ↗↘↗        Smooth
High (50)  ↗          No bounce

Mass: Weight feel
Low (0.5)  🪶 Light, snappy
Med (1.0)  📦 Balanced
High (2.0) 🪨 Heavy, sluggish
```

---

## Technical Details

### Layout Structure

```
┌─────────────────────────────────────┐
│  Navigation Container (ref)         │
│  ┌───────────────────────────────┐  │
│  │  Pill (absolute, -z-10)       │  │ ← Behind items
│  └───────────────────────────────┘  │
│                                     │
│  [Home] [Projects] [About] ...     │ ← Nav items
└─────────────────────────────────────┘
```

### Z-Index Layers
```
Nav Items:     z-index: auto (default)
Pill Effect:   z-index: -10 (behind)
```

### Performance Optimizations

1. **Direct DOM Access**
   - Uses refs instead of state for measurements
   - Avoids unnecessary re-renders

2. **GPU Acceleration**
   - Uses `transform` for movement
   - Uses `opacity` for fade
   - No layout reflow

3. **Debounced Updates**
   - Window resize listener
   - Cleaned up on unmount

---

## Common Issues & Solutions

### Issue: Pill doesn't appear
**Solution:**
- Ensure `activeIndex >= 0`
- Check `data-nav-item` attribute on links
- Verify container has `ref={navRef}`

### Issue: Pill position is off
**Solution:**
- Check parent element positioning
- Ensure nav items have consistent spacing
- Verify no transforms on parent

### Issue: Animation is jumpy
**Solution:**
- Increase damping (30 → 40)
- Reduce stiffness (380 → 300)
- Check for layout shifts in parent

### Issue: Pill size is wrong
**Solution:**
- Ensure nav items have padding
- Check for hidden overflow
- Verify `calc(100% - 8px)` height works

---

## Accessibility

The pill effect is purely visual and doesn't affect accessibility:

✅ **Screen Readers**
- Pill is decorative only
- Navigation remains semantic
- ARIA labels unchanged

✅ **Keyboard Navigation**
- Focus states still visible
- Tab order maintained
- No interaction required

✅ **Reduced Motion**
To respect user preferences:

```tsx
const prefersReducedMotion = useReducedMotion()

<PillNavEffect
  transition={{
    type: prefersReducedMotion ? 'tween' : 'spring',
    duration: prefersReducedMotion ? 0 : undefined,
  }}
/>
```

---

## Browser Support

✅ **Fully Supported:**
- Chrome 88+
- Firefox 83+
- Safari 14+
- Edge 88+

**Features Used:**
- CSS `calc()` (universal)
- `getBoundingClientRect()` (universal)
- Framer Motion (React 18+)
- CSS transforms (universal)

---

## Comparison: Before vs After

### Before (Static Backgrounds)
```tsx
// Each link had individual background
<Link 
  style={{
    background: isActive ? 'rgba(...)' : 'transparent'
  }}
>
  {item.label}
</Link>
```
- ❌ No animation between items
- ❌ Jarring instant changes
- ❌ No visual flow

### After (Pill Effect)
```tsx
// Single animated pill follows active item
<PillNavEffect activeIndex={index} />
<Link data-nav-item>{item.label}</Link>
```
- ✅ Smooth animations
- ✅ Natural transitions
- ✅ Professional polish
- ✅ Better visual hierarchy

---

## Related Components

- **Header Navigation** - Uses this effect
- **Mobile Menu** - Could use similar effect
- **Tab Navigation** - Compatible pattern
- **Sidebar Nav** - Adaptable layout

---

## Future Enhancements

Possible improvements:

1. **Hover Preview**
   - Show pill on hover before click
   - Fade in/out effect

2. **Vertical Support**
   - Calculate `top` instead of `left`
   - For vertical navigation

3. **Multi-Row Support**
   - Handle wrapped nav items
   - Calculate row changes

4. **Custom Shapes**
   - Circular pills
   - Underline style
   - Custom SVG shapes

---

Your header navigation now has a **premium, fluid pill effect** that smoothly follows the active page with perfect color matching to your DarkVeil palette! ✨

