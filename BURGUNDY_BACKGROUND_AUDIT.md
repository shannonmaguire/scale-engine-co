# Burgundy Background Text Color Audit & Prevention

## Critical Rule
**NEVER use black text on burgundy (`bg-primary`) backgrounds.**

## Always Use These Text Colors with `bg-primary`:
- `text-primary-foreground` (white)
- `text-white`

## Why This Matters
The burgundy brand color (#681038) has insufficient contrast with black text, violating WCAG accessibility standards and creating an unprofessional appearance.

## Prevention System Implemented

### 1. Safe Utility Classes (src/index.css)
Use these pre-built utilities that automatically pair colors correctly:

```css
.bg-primary-safe          /* bg-primary + text-primary-foreground */
.badge-primary-safe       /* Complete badge with safe text */
.btn-primary-safe         /* Complete button with safe text */
```

### 2. Component Variants
All UI components enforce safe text colors:

**Button** (`src/components/ui/button.tsx`)
```tsx
variant: "default"  // Uses bg-primary text-primary-foreground
```

**Badge** (`src/components/ui/badge.tsx`)
```tsx
variant: "default"  // Uses bg-primary text-primary-foreground
```

### 3. Code Review Checklist
Before using `bg-primary`, always verify:

- [ ] Element has explicit `text-primary-foreground` or `text-white`
- [ ] No reliance on inherited text color from parent
- [ ] Hover states also specify text color
- [ ] Dynamic content maintains color pairing

### 4. Common Patterns

#### ✅ CORRECT
```tsx
<div className="bg-primary text-primary-foreground">
<Badge variant="default">Text</Badge>
<Button variant="default">Click</Button>
<div className="bg-primary-safe">
```

#### ❌ INCORRECT
```tsx
<div className="bg-primary">  {/* Missing text color! */}
<div className="bg-primary text-foreground">  {/* text-foreground is black! */}
<div className="bg-primary text-black">  {/* Never! */}
```

### 5. Tested Components
All these components have been audited and use safe text colors:
- ✅ Button (all variants)
- ✅ Badge (all variants)
- ✅ Progress
- ✅ Slider
- ✅ Switch
- ✅ Checkbox
- ✅ Calendar
- ✅ Loading states
- ✅ Blog page badges
- ✅ Proof page carousel
- ✅ Home page trust indicators
- ✅ All form components

## Design System Colors Reference

### Primary (Burgundy)
```css
--primary: 327 82% 31%;              /* #681038 */
--primary-foreground: 0 0% 100%;     /* #FFFFFF (white) */
```

### When to Use Each Variant
- **Solid burgundy buttons**: Use `variant="default"` on Button component
- **Burgundy badges**: Use `variant="default"` on Badge component
- **Custom elements**: Use `bg-primary text-primary-foreground`
- **Decorative elements**: Use `bg-primary/10` or `bg-primary/20` (transparent, text inherits safely)

## Enforcement
1. All color pairings use HSL values from index.css
2. Semantic tokens ensure consistency
3. Component defaults prevent misuse
4. Utility classes provide safe shortcuts

## Questions?
If you need to use burgundy background:
1. Check if a component variant exists first
2. Use `.bg-primary-safe` utility class
3. Manually add both `bg-primary` AND `text-primary-foreground`

**Last Updated:** Site-wide audit completed
**Status:** ✅ All instances audited and safe
