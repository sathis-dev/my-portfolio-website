# Color Harmony Design System - DarkVeil Integration

## Overview
Complete color-matched design system that extracts colors from the DarkVeil background for perfect visual integration across the entire portfolio.

---

## Color Palette (Extracted from DarkVeil)

### Primary Colors
```
Magenta:  #C71585  (Primary - Main brand color)
Pink:     #E91E8C  (Light - Hover states)
Purple:   #8B5CF6  (Secondary - Accent color)
Violet:   #7C3AED  (Dark - Deep accent)
Deep:     #4A148C  (Darkest - Shadows)
```

### Complementary Colors
```
Green:    #10B981  (Availability badge only)
```

### Background Bases
```
Burgundy: rgba(39, 10, 33, 0.3)   // Default header/cards
Burgundy: rgba(39, 10, 33, 0.5)   // Scrolled header
Burgundy: rgba(39, 10, 33, 0.7)   // Strong overlay
```

---

## Component Colors

### Header
```css
/* Background */
Default:  rgba(39, 10, 33, 0.3)
Scrolled: rgba(39, 10, 33, 0.5)

/* Border */
Default:  rgba(199, 21, 133, 0.15)  /* Magenta tint */
Scrolled: rgba(199, 21, 133, 0.25)

/* Shadow */
Default:  0 4px 16px rgba(74, 20, 140, 0.2)   /* Purple tint */
Scrolled: 0 8px 24px rgba(74, 20, 140, 0.25)

/* Inset Highlight */
rgba(199, 21, 133, 0.03) → rgba(199, 21, 133, 0.05)
```

### Navigation Links
```css
/* Active State */
Background: rgba(199, 21, 133, 0.15)
Border:     rgba(199, 21, 133, 0.3)
Text:       #FFFFFF

/* Hover State */
Background: rgba(199, 21, 133, 0.08)
Border:     rgba(199, 21, 133, 0.15)
Text:       #FFFFFF
```

### Buttons

#### Primary Button (CTA)
```css
/* Default */
Background: linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)
Shadow:     0 8px 24px rgba(199, 21, 133, 0.4)
Inset:      inset 0 1px 0 rgba(255, 255, 255, 0.1)

/* Hover */
Background: linear-gradient(135deg, #E91E8C 0%, #9D6EFF 50%, #8B5CF6 100%)
Shadow:     0 12px 32px rgba(199, 21, 133, 0.5)
Inset:      inset 0 1px 0 rgba(255, 255, 255, 0.15)
```

#### Secondary Button (Download CV)
```css
/* Default */
Background: rgba(199, 21, 133, 0.08)
Border:     1px solid rgba(199, 21, 133, 0.2)
Backdrop:   blur(10px)

/* Hover */
Background: rgba(199, 21, 133, 0.15)
Border:     1px solid rgba(199, 21, 133, 0.3)
```

#### Small Buttons (Command, Mobile Menu)
```css
/* Default */
Background: rgba(199, 21, 133, 0.08)
Border:     rgba(199, 21, 133, 0.15)

/* Hover */
Background: rgba(199, 21, 133, 0.15)
Border:     rgba(199, 21, 133, 0.25)
```

### Text Gradients

#### Hero Name (Hettiarachchi)
```css
background: linear-gradient(135deg, #E91E8C 0%, #C71585 30%, #8B5CF6 70%, #7C3AED 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Glow Effect (background blur) */
filter: blur(40px);
opacity: 0.5;
```

#### Stats Numbers
```css
background: linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.75) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Badges

#### Availability Badge (Green - Exception)
```css
/* Header Version */
Background: rgba(16, 185, 129, 0.08)
Border:     rgba(16, 185, 129, 0.25)
Text:       #10B981
Dot:        #10B981

/* Hero Version */
Background: rgba(16, 185, 129, 0.1)
Border:     rgba(16, 185, 129, 0.3)
Backdrop:   blur(12px)
Shadow:     0 4px 16px rgba(16, 185, 129, 0.15)
```

### Scroll Indicator
```css
/* Border */
border: 2px solid rgba(199, 21, 133, 0.3);

/* Dot */
background: rgba(199, 21, 133, 0.6);
```

### Mobile Menu
```css
/* Divider */
background: rgba(199, 21, 133, 0.2);

/* Active Item */
background: rgba(199, 21, 133, 0.15);
```

---

## Shadow System

### Purple-Tinted Shadows
```css
--shadow-sm:  0 2px 8px rgba(74, 20, 140, 0.15);
--shadow-md:  0 4px 16px rgba(74, 20, 140, 0.2);
--shadow-lg:  0 8px 24px rgba(74, 20, 140, 0.25);
--shadow-xl:  0 12px 32px rgba(74, 20, 140, 0.3);
```

### Magenta-Tinted Shadows
```css
--shadow-magenta:       0 8px 24px rgba(199, 21, 133, 0.4);
--shadow-magenta-hover: 0 12px 32px rgba(199, 21, 133, 0.5);
```

---

## Gradient System

### Primary Gradient (Buttons, Accents)
```css
/* Default */
linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)

/* Hover */
linear-gradient(135deg, #E91E8C 0%, #9D6EFF 50%, #8B5CF6 100%)
```

### Text Gradient (Hero Name)
```css
linear-gradient(135deg, #E91E8C 0%, #C71585 30%, #8B5CF6 70%, #7C3AED 100%)
```

### Stats Gradient
```css
linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.75) 100%)
```

---

## Border System

### Magenta-Tinted Borders
```css
--border-subtle:  rgba(199, 21, 133, 0.15);
--border-default: rgba(199, 21, 133, 0.25);
--border-strong:  rgba(199, 21, 133, 0.35);
```

---

## Background System

### Magenta-Tinted Backgrounds
```css
--bg-subtle:  rgba(199, 21, 133, 0.08);
--bg-default: rgba(199, 21, 133, 0.12);
--bg-medium:  rgba(199, 21, 133, 0.15);
--bg-strong:  rgba(199, 21, 133, 0.2);
```

---

## Implementation Files

### 1. `lib/colors.ts`
Centralized color palette library with all DarkVeil-extracted colors organized by category:
- Magenta scale (50-900)
- Purple scale (50-900)
- Background bases
- Border colors
- Gradient definitions
- Shadow definitions

### 2. `app/globals.css`
CSS variables and utility classes:
```css
:root {
  --color-magenta: #C71585;
  --color-purple: #8B5CF6;
  --gradient-primary: linear-gradient(...);
  /* ... etc */
}

.bg-magenta { background: var(--bg-default); }
.gradient-text { background: var(--gradient-text); }
/* ... etc */
```

### 3. `tailwind.config.ts`
Extended Tailwind color system:
```typescript
colors: {
  magenta: { DEFAULT: '#C71585', light: '#E91E8C', ... },
  purple: { DEFAULT: '#8B5CF6', light: '#9D6EFF', ... },
}
backgroundImage: {
  'gradient-primary': 'linear-gradient(...)',
  'gradient-text': 'linear-gradient(...)',
}
boxShadow: {
  'magenta': '0 8px 24px rgba(199, 21, 133, 0.4)',
  'purple': '0 8px 24px rgba(139, 92, 246, 0.4)',
}
```

### 4. `components/sections/HeroSection.tsx`
All components updated with color-matched styling:
- Header navigation
- Logo hover states
- Active nav links
- Command palette button
- CV download button
- Mobile menu
- Hero text gradients
- CTA buttons
- Scroll indicator

---

## Design Principles

### 1. Color Extraction
All colors are derived from the DarkVeil background's pink/purple/magenta gradient spectrum.

### 2. Tinted Neutrals
No pure whites or grays - everything is tinted with magenta/purple for cohesion:
- Borders: Magenta tint (rgba(199, 21, 133, ...))
- Shadows: Purple tint (rgba(74, 20, 140, ...))
- Backgrounds: Burgundy base (rgba(39, 10, 33, ...))

### 3. Gradient Harmony
All gradients use the same color stops from the DarkVeil palette:
- Pink (#E91E8C) → Magenta (#C71585) → Purple (#8B5CF6) → Violet (#7C3AED)

### 4. Complementary Green
Green is reserved exclusively for the "Available for Projects" badge to create visual distinction and hierarchy.

---

## DO NOT Rules

❌ **DO NOT** use pure white borders - always use magenta-tinted whites  
❌ **DO NOT** use blue gradients - use pink/purple/magenta only  
❌ **DO NOT** use green for primary actions - reserved for availability  
❌ **DO NOT** use orange/yellow - not in color palette  
❌ **DO NOT** forget to tint shadows with purple/magenta  
❌ **DO NOT** use solid backgrounds - always use rgba with purple tint  

---

## Visual Comparison

### Before (Mismatched)
```
Header:   Generic purple (#8B5CF6)
Borders:  Pure white rgba(255, 255, 255, ...)
Shadows:  Black rgba(0, 0, 0, ...)
Buttons:  Standard purple gradient
Result:   Disconnected from background ❌
```

### After (Color-Matched)
```
Header:   Burgundy rgba(39, 10, 33, ...)
Borders:  Magenta-tinted rgba(199, 21, 133, ...)
Shadows:  Purple-tinted rgba(74, 20, 140, ...)
Buttons:  Magenta→Purple→Violet gradient
Result:   Perfect harmony with DarkVeil ✅
```

---

## Result

🎨 **Perfect Color Harmony**
- All UI elements match the DarkVeil background palette
- Seamless visual integration
- Professional cohesion
- Competition-winning aesthetic

✨ **Visual Unity**
- Every color extracted from the background
- No jarring color mismatches
- Smooth transitions between elements
- Background-first design philosophy

🏆 **World-Class Design**
- Sophisticated color relationships
- Subtle yet effective differentiation
- Premium feel throughout
- Award-worthy execution

