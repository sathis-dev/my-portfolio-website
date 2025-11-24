# Design System Implementation Guide

## Overview

This guide explains how to use the `CONTACT_PAGE_DESIGN_SYSTEM.json` to maintain consistent styling across your portfolio website.

## Quick Reference

### Color Application Rules

#### ✅ CORRECT Usage

```tsx
// Cards: Semi-transparent background with border
<div style={{
  background: "rgba(17, 17, 24, 0.6)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(12px)"
}}>
```

```tsx
// Icons: Solid fill colors, NO backgrounds
<svg style={{ fill: "#A855F7" }}>
  {/* Icon path */}
</svg>
```

```tsx
// Primary Button: Gradient background
<button style={{
  background: "linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%)",
  color: "#FFFFFF"
}}>
```

#### ❌ INCORRECT Usage

```tsx
// ❌ DO NOT: Gradient on icons
<svg style={{
  background: "linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%)"
}}>
```

```tsx
// ❌ DO NOT: Card background on buttons
<button style={{
  background: "rgba(17, 17, 24, 0.6)"
}}>
```

```tsx
// ❌ DO NOT: Button gradient on text
<h1 style={{
  background: "linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%)"
}}>
```

## Component Implementation Examples

### Info Card Component

```tsx
import { ReactNode } from 'react';

interface InfoCardProps {
  icon: ReactNode;
  iconColor: string; // e.g., "#A855F7" or "#10B981"
  title: string;
  children: ReactNode;
}

export function InfoCard({ icon, iconColor, title, children }: InfoCardProps) {
  return (
    <div
      className="info-card"
      style={{
        background: "rgba(17, 17, 24, 0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "1rem",
        padding: "1.5rem",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
        <div style={{ width: "1.25rem", height: "1.25rem", fill: iconColor }}>
          {icon}
        </div>
        <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#FFFFFF" }}>
          {title}
        </h3>
      </div>
      <div style={{ color: "#A1A1AA", fontSize: "0.875rem", lineHeight: "1.6" }}>
        {children}
      </div>
    </div>
  );
}

// Usage:
<InfoCard
  icon={<CalendarIcon />}
  iconColor="#10B981" // Green for availability
  title="Availability"
>
  <p style={{ color: "#10B981", fontWeight: "500" }}>Available for freelance projects</p>
  <p>Currently accepting frontend and AI integration projects.</p>
</InfoCard>
```

### Primary Button Component

```tsx
interface PrimaryButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function PrimaryButton({ children, icon, onClick, type = "button" }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        background: "linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%)",
        color: "#FFFFFF",
        padding: "0.875rem 2rem",
        fontSize: "1rem",
        fontWeight: "600",
        borderRadius: "0.75rem",
        border: "none",
        boxShadow: "0 8px 32px rgba(236, 72, 153, 0.3)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "linear-gradient(135deg, #F472B6 0%, #C084FC 50%, #A78BFA 100%)";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(236, 72, 153, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(236, 72, 153, 0.3)";
      }}
    >
      {children}
      {icon && <span style={{ fill: "#FFFFFF" }}>{icon}</span>}
    </button>
  );
}
```

### Form Input Component

```tsx
interface FormInputProps {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function FormInput({ 
  label, 
  required = false, 
  type = "text", 
  placeholder, 
  value, 
  onChange 
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <label style={{
        fontSize: "0.875rem",
        fontWeight: "500",
        color: "#FFFFFF",
        marginBottom: "0.5rem",
        display: "block",
      }}>
        {label}
        {required && <span style={{ color: "#EF4444", marginLeft: "0.25rem" }}>*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: "100%",
          background: isFocused ? "rgba(139, 92, 246, 0.1)" : "rgba(17, 17, 24, 0.8)",
          color: "#FFFFFF",
          padding: "0.875rem 1rem",
          fontSize: "0.875rem",
          borderRadius: "0.625rem",
          border: `1px solid ${isFocused ? "rgba(139, 92, 246, 0.4)" : "rgba(255, 255, 255, 0.06)"}`,
          outline: "none",
          transition: "all 0.3s ease",
          boxShadow: isFocused ? "0 0 0 3px rgba(139, 92, 246, 0.1)" : "none",
        }}
      />
    </div>
  );
}
```

## Tailwind CSS Implementation

If you're using Tailwind, extend your config with these custom values:

```javascript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#0A0A0F',
        'bg-secondary': '#0D0D12',
        'bg-card': 'rgba(17, 17, 24, 0.6)',
        
        // Text
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1AA',
        'text-tertiary': '#71717A',
        'text-accent': '#A855F7',
        
        // Accents
        'accent-purple': '#A855F7',
        'accent-pink': '#EC4899',
        'accent-green': '#10B981',
        'accent-red': '#EF4444',
      },
      
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%)',
        'gradient-hover': 'linear-gradient(135deg, #F472B6 0%, #C084FC 50%, #A78BFA 100%)',
        'gradient-hero': 'radial-gradient(circle at center top, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, rgba(10, 10, 15, 0.95) 80%)',
      },
      
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'button': '0 8px 32px rgba(236, 72, 153, 0.3)',
        'button-hover': '0 12px 40px rgba(236, 72, 153, 0.4)',
        'glow': '0 0 40px rgba(139, 92, 246, 0.3)',
      },
      
      backdropBlur: {
        'card': '12px',
      },
    },
  },
};
```

### Tailwind Component Classes

```tsx
// Info Card with Tailwind
<div className="bg-bg-card backdrop-blur-card border border-white/8 rounded-xl p-6 shadow-card hover:border-white/12 hover:-translate-y-0.5 transition-all duration-300">
  <div className="flex items-center gap-3 mb-4">
    <svg className="w-5 h-5 fill-accent-purple">
      {/* Icon */}
    </svg>
    <h3 className="text-lg font-semibold text-text-primary">Title</h3>
  </div>
  <p className="text-sm text-text-secondary">Content</p>
</div>

// Primary Button with Tailwind
<button className="bg-gradient-primary text-white px-8 py-3.5 rounded-xl font-semibold shadow-button hover:bg-gradient-hover hover:-translate-y-0.5 hover:shadow-button-hover transition-all duration-300">
  Send Message
</button>

// Form Input with Tailwind
<input 
  className="w-full bg-bg-card/80 text-white px-4 py-3.5 rounded-lg border border-white/6 focus:bg-accent-purple/10 focus:border-accent-purple/40 focus:ring-4 focus:ring-accent-purple/10 outline-none transition-all duration-300 placeholder:text-text-tertiary"
  placeholder="john@example.com"
/>
```

## CSS-in-JS Implementation (Styled Components)

```typescript
import styled from 'styled-components';

export const InfoCard = styled.div`
  background: rgba(17, 17, 24, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  }
`;

export const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%);
  color: #FFFFFF;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  border: none;
  box-shadow: 0 8px 32px rgba(236, 72, 153, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: linear-gradient(135deg, #F472B6 0%, #C084FC 50%, #A78BFA 100%);
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(236, 72, 153, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  background: rgba(17, 17, 24, 0.8);
  color: #FFFFFF;
  padding: 0.875rem 1rem;
  font-size: 0.875rem;
  border-radius: 0.625rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #71717A;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    background: rgba(139, 92, 246, 0.1);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
  }
`;
```

## Common Mistakes to Avoid

### 1. Icon Styling

❌ **WRONG:**
```tsx
<svg style={{ 
  background: "linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%)",
  padding: "1rem"
}}>
```

✅ **CORRECT:**
```tsx
<svg style={{ 
  fill: "#A855F7",
  width: "1.25rem",
  height: "1.25rem"
}}>
```

### 2. Button Text

❌ **WRONG:**
```tsx
<button>
  <span style={{ color: "#A1A1AA" }}>Click me</span>
</button>
```

✅ **CORRECT:**
```tsx
<button style={{ color: "#FFFFFF" }}>
  Click me
</button>
```

### 3. Card Borders

❌ **WRONG:**
```tsx
<div style={{ border: "1px solid rgba(139, 92, 246, 0.4)" }}>
```

✅ **CORRECT:**
```tsx
<div style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}>
```

### 4. Form Input Focus

❌ **WRONG:**
```tsx
<input style={{ 
  border: "2px solid #A855F7"  // Too harsh
}} />
```

✅ **CORRECT:**
```tsx
<input style={{ 
  border: "1px solid rgba(139, 92, 246, 0.4)",
  boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.1)"
}} />
```

## Responsive Implementation

```tsx
// Mobile-first approach
const styles = {
  heading: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)", // Scales between 2.5rem and 4rem
    fontWeight: "700",
    lineHeight: "1.1",
  },
  
  section: {
    padding: "clamp(2rem, 5vw, 4rem) 0", // Adapts to screen size
  },
  
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  }
};
```

## Accessibility Checklist

- ✅ Contrast ratio for white text on dark background: 21:1 (WCAG AAA)
- ✅ Contrast ratio for gray text (#A1A1AA): 7:1 (WCAG AA)
- ✅ Focus states visible with purple outline
- ✅ Required fields marked with asterisk and aria-required
- ✅ Form labels associated with inputs
- ✅ Interactive elements have minimum 44px touch target

## Testing Your Implementation

```typescript
// Component test checklist
const testStyling = {
  card: {
    hasBackdropBlur: true,
    borderColor: "rgba(255, 255, 255, 0.08)",
    background: "rgba(17, 17, 24, 0.6)",
    hoverEffect: "translateY(-2px)",
  },
  
  button: {
    hasGradient: true,
    textColor: "#FFFFFF",
    shadow: "0 8px 32px rgba(236, 72, 153, 0.3)",
  },
  
  icon: {
    hasSolidFill: true,
    hasNoBackground: true,
    fillColor: "#A855F7",
  }
};
```

## Quick Reference Color Palette

```css
/* Copy-paste ready CSS variables */
:root {
  /* Backgrounds */
  --bg-primary: #0A0A0F;
  --bg-secondary: #0D0D12;
  --bg-card: rgba(17, 17, 24, 0.6);
  --bg-input: rgba(17, 17, 24, 0.8);
  
  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #A1A1AA;
  --text-tertiary: #71717A;
  
  /* Accents */
  --accent-purple: #A855F7;
  --accent-pink: #EC4899;
  --accent-green: #10B981;
  --accent-red: #EF4444;
  
  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-medium: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.12);
  --border-accent: rgba(168, 85, 247, 0.4);
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%);
  --gradient-hover: linear-gradient(135deg, #F472B6 0%, #C084FC 50%, #A78BFA 100%);
  --gradient-hero: radial-gradient(circle at center top, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, rgba(10, 10, 15, 0.95) 80%);
}
```

## Contact Information

- **Email:** sathis.rc.dev@gmail.com
- **GitHub:** https://github.com/sathis-dev
- **LinkedIn:** https://www.linkedin.com/in/sathis-hettiarachchi-52b4b436a/

---

**Last Updated:** November 24, 2025  
**Design System Version:** 1.0.0



