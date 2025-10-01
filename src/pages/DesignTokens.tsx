import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { StandardCard } from "@/components/ui/standard-card";

const DesignTokens = () => {
  const colorTokens = [
    { name: "Primary (Burgundy)", variable: "--burgundy", value: "327 82% 31%", hex: "#681038", usage: "Primary/Conversion CTAs" },
    { name: "Forest", variable: "--forest", value: "135 27% 15%", hex: "#1B3022", usage: "Authority/Navigation" },
    { name: "Deep Black", variable: "--deep-black", value: "0 0% 0%", hex: "#010400", usage: "All Text" },
    { name: "Teal", variable: "--teal", value: "184 23% 42%", hex: "#548687", usage: "Data/Analytics/Charts" },
    { name: "Yellow-Green", variable: "--yellow-green", value: "75 100% 90%", hex: "#F0FFCE", usage: "Spotlight/Success" },
    { name: "Warm Tan", variable: "--warm-tan", value: "47 27% 71%", hex: "#CCC9A1", usage: "Differentiator/Warmth" },
    { name: "Muted Gray", variable: "--muted-gray", value: "240 3% 61%", hex: "#9999A1", usage: "Supporting/Secondary" },
    { name: "Gray Very Light", variable: "--gray-very-light", value: "240 20% 96%", hex: "#F4F4F6", usage: "Elevation/Cards" },
    { name: "Gray Light", variable: "--gray-light", value: "240 9% 90%", hex: "#E6E6E9", usage: "Foundation/Background" },
  ];

  const spacingTokens = [
    { name: "Baseline", variable: "--spacing-baseline", value: "5rem", px: "80px", usage: "Standard section spacing" },
    { name: "Half", variable: "--spacing-half", value: "2.5rem", px: "40px", usage: "Mobile section spacing" },
    { name: "Quarter", variable: "--spacing-quarter", value: "1.25rem", px: "20px", usage: "Internal spacing" },
    { name: "Gutter", variable: "--spacing-gutter", value: "1.5rem", px: "24px", usage: "Grid gutter" },
  ];

  const typographyScale = [
    { name: "Page Heading", class: "heading-page", desktop: "64px", tablet: "48px", mobile: "36px", usage: "Hero titles" },
    { name: "Section Heading", class: "heading-section", desktop: "48px", tablet: "36px", mobile: "28px", usage: "Major sections" },
    { name: "Subsection Heading", class: "heading-subsection", desktop: "32px", tablet: "24px", mobile: "20px", usage: "Card titles, subsections" },
    { name: "Description Text", class: "text-description", desktop: "18px", tablet: "18px", mobile: "16px", usage: "Body copy, descriptions" },
    { name: "Label Text", class: "text-label", desktop: "14px", tablet: "14px", mobile: "14px", usage: "Form labels, UI labels" },
  ];

  const buttonVariants = [
    { name: "Primary", class: "btn-console-accent", usage: "Main conversion actions" },
    { name: "Secondary", class: "btn-console-secondary", usage: "Supporting actions" },
    { name: "Console", class: "btn-console", usage: "Standard functional buttons" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Design Tokens - CWT Studio Design System"
        description="Complete design token documentation for CWT Studio's operator console aesthetic. Color system, typography scale, spacing rhythm, and component variants."
        keywords="design system, design tokens, brand guidelines, style guide"
      />

      <Section>
        <div className="max-w-5xl mx-auto">
          <h1 className="heading-page mb-4">Design System</h1>
          <p className="text-description mb-12 text-muted-foreground">
            CWT Studio's design token documentation. Built for consistency, 
            accessibility, and the operator console aesthetic.
          </p>

          {/* Color System */}
          <div className="mb-16">
            <h2 className="heading-section mb-8">9-Color Professional System</h2>
            <div className="grid gap-4">
              {colorTokens.map((token) => (
                <StandardCard key={token.name} className="p-4">
                  <div className="flex items-center gap-6">
                    <div 
                      className="w-16 h-16 rounded border border-border flex-shrink-0"
                      style={{ backgroundColor: token.hex }}
                    />
                    <div className="flex-1">
                      <h3 className="font-mono font-semibold text-lg mb-1">{token.name}</h3>
                      <div className="text-sm text-muted-foreground font-mono space-y-1">
                        <div>Variable: <code className="bg-muted px-2 py-0.5 rounded">{token.variable}</code></div>
                        <div>HSL: <code className="bg-muted px-2 py-0.5 rounded">{token.value}</code></div>
                        <div>Hex: <code className="bg-muted px-2 py-0.5 rounded">{token.hex}</code></div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground w-48">
                      {token.usage}
                    </div>
                  </div>
                </StandardCard>
              ))}
            </div>
          </div>

          {/* Spacing System */}
          <div className="mb-16">
            <h2 className="heading-section mb-8">Spacing Rhythm (80px Baseline)</h2>
            <div className="grid gap-4">
              {spacingTokens.map((token) => (
                <StandardCard key={token.name} className="p-4">
                  <div className="flex items-center gap-6">
                    <div 
                      className="bg-primary rounded flex-shrink-0"
                      style={{ width: token.px, height: '40px' }}
                    />
                    <div className="flex-1">
                      <h3 className="font-mono font-semibold text-lg mb-1">{token.name}</h3>
                      <div className="text-sm text-muted-foreground font-mono space-y-1">
                        <div>Variable: <code className="bg-muted px-2 py-0.5 rounded">{token.variable}</code></div>
                        <div>Value: <code className="bg-muted px-2 py-0.5 rounded">{token.value}</code> ({token.px})</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground w-48">
                      {token.usage}
                    </div>
                  </div>
                </StandardCard>
              ))}
            </div>
          </div>

          {/* Typography Scale */}
          <div className="mb-16">
            <h2 className="heading-section mb-8">Typography Scale</h2>
            <p className="text-description mb-6 text-muted-foreground">
              JetBrains Mono for headings and UI. Inter for body text.
            </p>
            <div className="grid gap-4">
              {typographyScale.map((type) => (
                <StandardCard key={type.name} className="p-4">
                  <div className="mb-4">
                    <h3 className="font-mono font-semibold text-lg mb-2">{type.name}</h3>
                    <div className="text-sm text-muted-foreground font-mono mb-2">
                      Class: <code className="bg-muted px-2 py-0.5 rounded">{type.class}</code>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono space-x-4">
                      <span>Desktop: {type.desktop}</span>
                      <span>Tablet: {type.tablet}</span>
                      <span>Mobile: {type.mobile}</span>
                    </div>
                  </div>
                  <div className={type.class}>
                    {type.name} Example
                  </div>
                </StandardCard>
              ))}
            </div>
          </div>

          {/* Button Variants */}
          <div className="mb-16">
            <h2 className="heading-section mb-8">Button System</h2>
            <div className="grid gap-6">
              {buttonVariants.map((variant) => (
                <StandardCard key={variant.name} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-mono font-semibold text-lg mb-2">{variant.name}</h3>
                      <div className="text-sm text-muted-foreground font-mono mb-2">
                        Class: <code className="bg-muted px-2 py-0.5 rounded">{variant.class}</code>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {variant.usage}
                      </div>
                    </div>
                    <button className={`${variant.class} ml-6`}>
                      Example Button
                    </button>
                  </div>
                </StandardCard>
              ))}
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="mb-16">
            <h2 className="heading-section mb-8">Usage Guidelines</h2>
            <StandardCard className="p-6">
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-mono font-semibold text-foreground mb-2">Color Usage</h3>
                  <p className="text-sm">
                    Always use HSL semantic tokens from index.css. Never use direct color values 
                    in components. This ensures consistency and enables theme switching.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground mb-2">Spacing Consistency</h3>
                  <p className="text-sm">
                    Use the 80px baseline rhythm for section spacing. Mobile uses half spacing (40px). 
                    This creates a professional editorial feel.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground mb-2">Typography Hierarchy</h3>
                  <p className="text-sm">
                    JetBrains Mono for all headings and monospace UI elements. Inter for body text. 
                    Always use the predefined classes for consistency across breakpoints.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground mb-2">Accessibility</h3>
                  <p className="text-sm">
                    All color combinations meet WCAG 2.1 AA standards. Focus states use 2px ring 
                    with primary color. Interactive elements have minimum 44x44px touch targets.
                  </p>
                </div>
              </div>
            </StandardCard>
          </div>

          {/* Implementation Notes */}
          <div>
            <h2 className="heading-section mb-8">Implementation Notes</h2>
            <StandardCard className="p-6 bg-muted/50">
              <div className="font-mono text-sm space-y-3 text-muted-foreground">
                <p>
                  <span className="text-primary font-semibold">// Design System Version 1.0</span>
                </p>
                <p>
                  <span className="text-foreground">All tokens defined in:</span> src/index.css
                </p>
                <p>
                  <span className="text-foreground">Tailwind config:</span> tailwind.config.ts
                </p>
                <p className="pt-4 border-t border-border">
                  <span className="text-foreground font-semibold">Usage Example:</span>
                </p>
                <pre className="bg-background p-4 rounded border border-border overflow-x-auto">
{`// Use semantic tokens, never direct colors
<div className="bg-primary text-primary-foreground">
  <h1 className="heading-page">Page Title</h1>
  <p className="text-description">Description text</p>
</div>`}
                </pre>
              </div>
            </StandardCard>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DesignTokens;