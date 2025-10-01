# CWT Studio Design System - Critical Rules

## Color Pairing Standards

### Rule #1: NEVER Black Text on Burgundy
**The most critical rule in our design system.**

```tsx
// ❌ WRONG - Violates WCAG contrast
<div className="bg-primary text-foreground">
<div className="bg-primary text-black">
<div className="bg-primary">  {/* Might inherit black text */}

// ✅ CORRECT - Always use white text
<div className="bg-primary text-primary-foreground">
<div className="bg-primary text-white">
<Button variant="default">  {/* Uses correct pairing */}
```

### Why This Rule Exists
1. **Accessibility**: Burgundy (#681038) + black fails WCAG AA contrast ratio
2. **Brand**: White on burgundy is our signature look
3. **Professionalism**: Poor contrast looks amateurish

## Automatic Safety Systems

### 1. CSS Failsafe (src/index.css)
```css
/* Automatically corrects missing text color */
.bg-primary:not([class*="text-"]) {
  @apply text-primary-foreground;
}
```

### 2. Safe Utility Classes
```tsx
<div className="bg-primary-safe">        // Auto-pairs colors
<span className="badge-primary-safe">    // Complete badge
<button className="btn-primary-safe">    // Complete button
```

### 3. Component Defaults
All components with burgundy backgrounds default to white text:
- Button (variant="default")
- Badge (variant="default")
- Progress bars
- Checkboxes (when checked)
- Switches (when on)

## Quick Reference: All Color Pairings

```tsx
// Primary (Burgundy) - ALWAYS white text
bg-primary → text-primary-foreground
bg-primary → text-white

// Secondary (Gray) - ALWAYS white text  
bg-secondary → text-secondary-foreground
bg-secondary → text-white

// Accent (Teal) - ALWAYS white text
bg-accent → text-accent-foreground
bg-accent → text-white

// Muted/Warm/Success - Use black text
bg-muted → text-muted-foreground
bg-warm → text-warm-foreground
bg-success → text-success-foreground

// Transparent variants - Inherit safely
bg-primary/10  → inherits parent text color
bg-primary/20  → inherits parent text color
```

## Safe Patterns Checklist

Before committing code with `bg-primary`:

- [ ] Element has explicit `text-primary-foreground` or `text-white`
- [ ] Hover states maintain text color (`hover:text-white`)
- [ ] Focus states maintain text color
- [ ] No reliance on inherited text color from parent
- [ ] Dynamic content maintains color pairing

## Common Use Cases

### Buttons
```tsx
// ✅ Use component variant
<Button variant="default">Click</Button>

// ✅ Or safe utility
<button className="btn-primary-safe">Click</button>
```

### Badges
```tsx
// ✅ Use component variant
<Badge variant="default">New</Badge>

// ✅ Or safe utility
<span className="badge-primary-safe">New</span>
```

### Custom Elements
```tsx
// ✅ Always specify both
<div className="bg-primary text-primary-foreground">
  Content
</div>
```

### Decorative Elements (no text)
```tsx
// ✅ Safe - no text content
<div className="w-2 h-2 bg-primary rounded-full" />

// ✅ Safe - transparent, text inherits
<div className="bg-primary/10 p-4">
  <p className="text-foreground">Text here</p>
</div>
```

## Testing Your Changes

1. **Visual Check**: Ensure all burgundy backgrounds have white text
2. **Hover Check**: Hover states should maintain white text
3. **Accessibility**: Run contrast checker (4.5:1 minimum for normal text)
4. **Dark Mode**: Verify colors work in both light and dark modes

## Emergency Fix

If you discover black text on burgundy in production:

```tsx
// Quick fix - add text color
<div className="bg-primary text-primary-foreground">

// Or use safe utility
<div className="bg-primary-safe">

// For urgent fix
<div className="bg-primary text-white">
```

## Resources

- **Audit Document**: `BURGUNDY_BACKGROUND_AUDIT.md`
- **Color Definitions**: `src/index.css` (lines 15-148)
- **Safe Utilities**: `src/index.css` (lines 531-570)
- **Component Variants**: `src/components/ui/button.tsx`, `badge.tsx`

## Questions?

**Q: Can I use `bg-primary` with `text-gray-500`?**
A: No. Only white text (`text-primary-foreground` or `text-white`).

**Q: What about transparent burgundy backgrounds?**
A: `bg-primary/10` and similar are safe - they're too light to need white text.

**Q: My badge needs burgundy background but different styling?**
A: Start with `<Badge variant="default">` and add custom classes for spacing/size.

**Q: I'm using burgundy in a gradient?**
A: Gradients should still use white text for readability across the full gradient.

---

**Last Updated**: Site-wide audit completed
**Status**: ✅ All 114 instances verified safe
**Enforcement**: Automatic CSS failsafe active
