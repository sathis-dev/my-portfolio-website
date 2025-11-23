# React Bits Registry Setup

## Overview
React Bits registry has been configured in your project for seamless installation of premium UI components from [reactbits.dev](https://reactbits.dev).

---

## Configuration File

**`components.json`**

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "@react-bits": "https://reactbits.dev/r/{name}.json"
  }
}
```

---

## How to Install Components

### Basic Command
```bash
npx shadcn@latest add @react-bits/[component-name]
```

### Examples

#### Backgrounds & Effects
```bash
# DarkVeil WebGL Background (already in use)
npx shadcn@latest add @react-bits/DarkVeil-TS-TW

# Gradient Mesh Background
npx shadcn@latest add @react-bits/GradientMesh-TS-TW

# Particle Field
npx shadcn@latest add @react-bits/ParticleField-TS-TW
```

#### Buttons & Interactive Elements
```bash
# Magnetic Button
npx shadcn@latest add @react-bits/MagneticButton-TS-TW

# Shimmer Button
npx shadcn@latest add @react-bits/ShimmerButton-TS-TW

# Glow Button
npx shadcn@latest add @react-bits/GlowButton-TS-TW
```

#### Cards & Containers
```bash
# Glass Card
npx shadcn@latest add @react-bits/GlassCard-TS-TW

# Tilt Card
npx shadcn@latest add @react-bits/TiltCard-TS-TW

# Magnetic Card
npx shadcn@latest add @react-bits/MagneticCard-TS-TW
```

#### Navigation
```bash
# Dock Navigation
npx shadcn@latest add @react-bits/Dock-TS-TW

# Pill Navigation
npx shadcn@latest add @react-bits/PillNav-TS-TW

# Glassmorphism Header
npx shadcn@latest add @react-bits/GlassHeader-TS-TW
```

#### Text Effects
```bash
# Gradient Text
npx shadcn@latest add @react-bits/GradientText-TS-TW

# Animated Text
npx shadcn@latest add @react-bits/AnimatedText-TS-TW

# Text Reveal
npx shadcn@latest add @react-bits/TextReveal-TS-TW
```

---

## Component Structure

After installation, components will be added to:

```
components/
  ui/
    [component-name].tsx  ← React Bits components install here
  effects/
    DarkVeil.tsx          ← Already installed
  sections/
    HeroSection.tsx
  ...
```

---

## Usage Example

After installing a component:

```tsx
// Import the component
import { MagneticButton } from '@/components/ui/magnetic-button'

// Use in your component
export default function MyPage() {
  return (
    <MagneticButton>
      Click me!
    </MagneticButton>
  )
}
```

---

## Dependencies

Most React Bits components work with your existing setup:
- ✅ Next.js 14+
- ✅ React 18+
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Framer Motion (already installed)

Some components may require additional dependencies:
- `ogl` - for WebGL components (already installed for DarkVeil)
- `three` - for 3D components
- `@react-three/fiber` - for React Three Fiber components

---

## Color Matching

When using React Bits components, apply your color-matched design system:

```tsx
// Use your DarkVeil-matched colors
import { colors } from '@/lib/colors'

<MagneticButton
  style={{
    background: colors.gradients.primary,
    boxShadow: colors.shadows.magenta,
  }}
>
  Color-matched button
</MagneticButton>
```

Or use Tailwind utilities:

```tsx
<GlassCard className="bg-magenta-subtle border-magenta-subtle">
  Color-matched card
</GlassCard>
```

---

## Already Installed

### ✅ DarkVeil-TS-TW
**Location:** `components/effects/DarkVeil.tsx`

**Usage:**
```tsx
import DarkVeil from '@/components/effects/DarkVeil'

<DarkVeil
  hueShift={280}
  noiseIntensity={0.015}
  scanlineIntensity={0}
  speed={0.3}
  warpAmount={0.12}
  resolutionScale={1}
/>
```

**Currently used in:** `HeroSection.tsx`

---

## Troubleshooting

### Component doesn't install
```bash
# Make sure you're in the project root
cd "C:\Users\SATHIS AI ENGINEER\Desktop\My Personal Portfolio Website"

# Try with explicit registry
npx shadcn@latest add @react-bits/[component-name] --registry @react-bits
```

### Import errors
Make sure your `tsconfig.json` has the correct paths:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Styling issues
Components inherit your global styles. Check:
1. `app/globals.css` - global styles
2. `tailwind.config.ts` - Tailwind configuration
3. Component-specific styles in the installed `.tsx` file

---

## Resources

- 🌐 **React Bits Website:** https://reactbits.dev
- 📚 **Component Library:** https://reactbits.dev/components
- 💬 **Documentation:** https://reactbits.dev/docs
- 🎨 **Examples:** https://reactbits.dev/examples

---

## Next Steps

1. **Browse Components:** Visit https://reactbits.dev/components
2. **Install What You Need:** Use `npx shadcn@latest add @react-bits/[name]`
3. **Customize:** Apply your color-matched design system
4. **Build:** Create world-class UI experiences

✨ **Your portfolio is now set up to use premium React Bits components!**

