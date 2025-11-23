# Decrypted Text Effect Guide

## Overview
Animated text decryption effect inspired by React Bits. Characters scramble and reveal progressively with a terminal-style cursor and magenta glow.

---

## Component Location
`components/ui/decrypted-text.tsx`

---

## Features

✨ **Progressive Decryption**
- Characters reveal left to right
- Remaining text scrambles randomly
- Smooth letter-by-letter animation

✨ **Terminal Cursor**
- Blinking magenta cursor █
- Appears during decryption
- Disappears when complete

✨ **Color-Matched Glow**
- Magenta text shadow during decryption
- Matches DarkVeil palette
- Fades to normal when complete

✨ **Fully Responsive**
- Works on all screen sizes
- Adapts to parent font size
- Maintains readability

---

## Usage

### Basic Usage

```tsx
import { DecryptedText } from '@/components/ui/decrypted-text'

<DecryptedText 
  text="Your text here"
/>
```

### With Custom Speed

```tsx
<DecryptedText 
  text="Faster decryption"
  speed={20}  // milliseconds per character (lower = faster)
/>
```

### With Delay

```tsx
<DecryptedText 
  text="Delayed start"
  interval={1000}  // wait 1 second before starting
/>
```

### Full Example

```tsx
<DecryptedText 
  text="Building modern web experiences with Next.js"
  speed={30}
  interval={800}
  className="text-lg text-white/80"
/>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | Required | The text to decrypt |
| `speed` | `number` | `50` | Milliseconds per character reveal |
| `interval` | `number` | `50` | Delay before starting (ms) |
| `className` | `string` | `''` | Additional CSS classes |

---

## Current Implementation

**Location:** `components/sections/HeroSection.tsx` (Hero section)

```tsx
<DecryptedText
  text="Building modern web experiences with Next.js, TypeScript, and AI-assisted workflows from Cambridge, UK"
  speed={30}
  interval={800}
  className="text-base sm:text-lg"
/>
```

**Settings:**
- Speed: 30ms per character (fast, snappy)
- Delay: 800ms (starts after name/subtitle animate)
- Responsive text size
- Center aligned

---

## Animation Breakdown

### Phase 1: Scrambled (0%)
```
█jK9@#mN&*dLpQ$vX...
```
All characters are random scrambles

### Phase 2: Decrypting (50%)
```
Building moder█3K@#L...
```
Left half revealed, right half scrambling

### Phase 3: Complete (100%)
```
Building modern web experiences...
```
All text revealed, cursor disappears

---

## Customization

### Speed Variants

```tsx
// Very Fast (20ms)
<DecryptedText text="Quick reveal" speed={20} />

// Balanced (30ms) - Default for hero
<DecryptedText text="Smooth reveal" speed={30} />

// Slow (60ms) - For dramatic effect
<DecryptedText text="Dramatic reveal" speed={60} />

// Very Slow (100ms) - Matrix style
<DecryptedText text="Matrix style" speed={100} />
```

### Color Customization

Modify the component to change colors:

```tsx
// Purple variant
style={{
  textShadow: isDecrypting 
    ? '0 0 8px rgba(139, 92, 246, 0.5)' 
    : 'none',
}}

// Pink variant
style={{
  textShadow: isDecrypting 
    ? '0 0 8px rgba(233, 30, 140, 0.5)' 
    : 'none',
}}

// Green (hacker style)
style={{
  textShadow: isDecrypting 
    ? '0 0 8px rgba(16, 185, 129, 0.5)' 
    : 'none',
}}
```

### Cursor Styles

```tsx
// Current (block)
█

// Underscore
_

// Pipe
|

// Custom
▮
```

---

## Technical Details

### Character Set
```typescript
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
```

Includes:
- Uppercase letters (A-Z)
- Lowercase letters (a-z)
- Numbers (0-9)
- Special characters

### Algorithm

```typescript
1. Start with all characters scrambled
2. Every [speed]ms:
   - Reveal next character
   - Re-scramble remaining characters
3. When complete:
   - Show final text
   - Remove cursor
   - Remove glow
```

### Performance

- Uses `setTimeout` for animation (not `requestAnimationFrame`)
- Cleans up timers on unmount
- No layout reflow (text-only changes)
- Minimal re-renders
- GPU-accelerated text-shadow

---

## Responsive Behavior

### Mobile (< 640px)
```tsx
className="text-base"  // 16px
```

### Tablet (640px - 1024px)
```tsx
className="sm:text-lg"  // 18px
```

### Desktop (> 1024px)
```tsx
className="sm:text-lg"  // 18px (consistent)
```

---

## Color System (DarkVeil Matched)

### During Decryption
```css
/* Magenta Glow */
text-shadow: 0 0 8px rgba(199, 21, 133, 0.5);
color: rgba(255, 255, 255, 0.9);

/* Cursor */
color: #C71585;
text-shadow: 0 0 10px rgba(199, 21, 133, 0.8);
```

### After Complete
```css
/* Inherits parent color */
color: inherit;
text-shadow: none;
```

---

## Accessibility

✅ **Screen Readers**
- Text is accessible throughout animation
- No ARIA needed (semantic text)
- Scrambled characters ignored by screen readers

✅ **Reduced Motion**
To respect user preferences:

```tsx
const prefersReducedMotion = useReducedMotion()

<DecryptedText
  text="Your text"
  speed={prefersReducedMotion ? 0 : 30}
  interval={prefersReducedMotion ? 0 : 800}
/>
```

✅ **Keyboard Navigation**
- No interaction required
- Pure visual effect
- Doesn't block page functionality

---

## Browser Support

✅ **Fully Supported:**
- Chrome 88+
- Firefox 83+
- Safari 14+
- Edge 88+

**Features Used:**
- `setTimeout` (universal)
- `Math.random()` (universal)
- CSS text-shadow (universal)
- Framer Motion (React 18+)

---

## Common Use Cases

### Hero Sections
```tsx
<DecryptedText 
  text="Building the future of web development"
  speed={30}
  className="text-2xl"
/>
```

### Taglines
```tsx
<DecryptedText 
  text="Design. Develop. Deploy."
  speed={40}
  className="text-xl font-bold"
/>
```

### Tech Stack Display
```tsx
<DecryptedText 
  text="Next.js • React • TypeScript • Tailwind"
  speed={25}
  className="text-sm font-mono"
/>
```

### Call to Action
```tsx
<DecryptedText 
  text="Let's build something amazing"
  speed={35}
  className="text-lg"
/>
```

---

## Animation Timing

**Current Hero Sequence:**

```
0ms:    Page loads
100ms:  Availability badge appears
400ms:  Name "Sathis Ravishka" appears
600ms:  Name "Hettiarachchi" appears (gradient)
800ms:  Subtitle appears
1000ms: Description container appears
1800ms: Decryption starts ← (1000ms + 800ms delay)
4800ms: Decryption completes ← (~100 chars × 30ms)
```

---

## Troubleshooting

### Issue: Text appears instantly
**Solution:**
- Check `speed` and `interval` props
- Ensure component is mounted
- Verify no CSS overrides

### Issue: Scrambling looks wrong
**Solution:**
- Check `CHARACTERS` constant
- Ensure monospace font for consistency
- Verify `Math.random()` is working

### Issue: Cursor doesn't appear
**Solution:**
- Check `isDecrypting` state
- Verify cursor character renders (█)
- Check z-index and color contrast

### Issue: Performance issues
**Solution:**
- Increase `speed` value (slower = less updates)
- Reduce text length
- Check for other animations running

---

## Related Components

- **Hero Section** - Uses this effect
- **Animated Text** - Alternative text effects
- **Gradient Text** - Color gradient text
- **Text Reveal** - Fade-in reveals

---

## Future Enhancements

Possible improvements:

1. **Glitch Effect**
   - Random character jumps
   - Color shifts
   - Position jitter

2. **Wave Reveal**
   - Characters reveal in wave pattern
   - Not strictly left-to-right

3. **Multiple Colors**
   - Different colors for different parts
   - Rainbow effect

4. **Sound Effects**
   - Typing sounds
   - Terminal beep
   - Complete sound

---

Your hero description now has a **premium, hacker-style decryption effect** that perfectly matches your DarkVeil magenta palette! ✨

