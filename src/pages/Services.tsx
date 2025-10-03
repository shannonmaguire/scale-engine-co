import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { useExitIntent } from "@/hooks/useExitIntent";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { TrustBar } from "@/components/TrustBar";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Search, Zap, RotateCcw, ArrowRight, Target, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Services = () => {
  // Performance monitoring
  usePerformanceMonitoring();
  
  useScrollDepth();
  
  const [showExitPopup, setShowExitPopup] = useState(false);
  
  useExitIntent({
    enabled: true,
    onExitIntent: () => setShowExitPopup(true),
  });

  const handleExitPopupSubmit = async (email: string) => {
    console.log("Exit intent email captured:", email);
  };
  const services = [{
    icon: Search,
    title: "Assessment",
    tagline: "Diagnose first",
    description: "Audit tech, ops, pipeline. Find what's blocking scale. Scorecard, benchmarks, 90-day roadmap.",
    features: ["Revenue Infrastructure Scorecard", "Industry benchmarks", "90-day roadmap with sequence", "Executive presentation"],
    pricing: "$750–$1.5K",
    timeline: "3-4 weeks",
    cta: "Start Assessment",
    link: "/assessment"
  }, {
    icon: Zap,
    title: "Sprint",
    tagline: "Install fast",
    description: "Six to eight weeks. Outbound engines, dashboards, automation, governance. Installed.",
    features: ["Outbound engine architecture", "Multi-touch funnel optimization", "Salesforce automation and hygiene", "Real-time revenue dashboards", "Pipeline governance framework"],
    pricing: "$7.5–15K",
    timeline: "6-8 weeks",
    cta: "Start Your Sprint",
    link: "/sprint"
  }, {
    icon: RotateCcw,
    title: "Fractional Ops",
    tagline: "Keep it running",
    description: "Monthly ops rhythm. System health, optimization, performance iteration. Continuous.",
    features: ["Monthly operating reviews", "Continuous optimization", "Tool evaluation and integration", "Team training and enablement", "Executive reporting and insights"],
    pricing: "$5–10K/month",
    timeline: "Ongoing",
    cta: "Apply Now",
    link: "/fractional"
  }];
  return <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead
        title="CWT Studio Services | Assessments, Automation Sprints & Fractional RevOps"
        description="Explore Creator Wealth Tools services. We deliver local-first business automation, Salesforce upgrades, and ongoing fractional operations to modernize revenue, web, and mobile channels."
        keywords={[
          'business automation services',
          'Salesforce implementation sprint',
          'fractional revenue operations',
          'web and mobile modernization',
          'Creator Wealth Tools services'
        ]}
      />
      
      <Breadcrumbs />
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="system-status mb-6">
            SYSTEM READY
          </div>
          
          <h1 className="heading-page mb-6">
            Services
          </h1>
          <p className="text-description">
            Three ways we work. Diagnose. Install. Operate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <StandardCard equalHeight>
                  <StandardCardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <StandardCardTitle className="text-primary">{service.title}</StandardCardTitle>
                        <p className="text-muted-foreground italic">{service.tagline}</p>
                      </div>
                    </div>
                  </StandardCardHeader>
                  <StandardCardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="font-mono font-bold mb-3 text-primary">What's Included</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>)}
                      </ul>
                    </div>
                    
                    <div className="border-t border-border pt-4 space-y-4">
                        <div className="bg-accent/10 border border-accent/20 rounded p-3">
                          <h5 className="text-xs font-mono font-bold text-accent mb-1">ADAPTS TO YOUR STAGE</h5>
                          <p className="text-xs text-muted-foreground">
                            {index === 0 && "Integrates with any current system—from spreadsheets to enterprise CRM platforms"}
                            {index === 1 && "Works within your existing Infrastructure. No rip-and-replace required"}  
                            {index === 2 && "Scales with your growth trajectory. Monthly rhythm adapts to business demands"}
                          </p>
                        </div>
                      
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Investment</p>
                          <p className="font-medium text-primary">{service.pricing}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                          <p className="font-medium text-foreground">{service.timeline}</p>
                        </div>
                      </div>
                      
                      {/* Anonymized Proof */}
                      {index === 0 && (
                        <div className="bg-accent/5 border border-accent/20 rounded p-3 mt-4">
                          <p className="text-xs text-muted-foreground italic">
                            <strong className="text-accent">Recent outcome:</strong> Federal cybersecurity consultancy identified $240K+ in technical debt in initial audit
                          </p>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="bg-accent/5 border border-accent/20 rounded p-3 mt-4">
                          <p className="text-xs text-muted-foreground italic">
                            <strong className="text-accent">Recent outcome:</strong> Legal subscription firm built repeatable outbound engine in 8 weeks, 3x pipeline velocity
                          </p>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="bg-accent/5 border border-accent/20 rounded p-3 mt-4">
                          <p className="text-xs text-muted-foreground italic">
                            <strong className="text-accent">Recent outcome:</strong> SaaS platform maintained 98% system uptime across 6-month growth sprint
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <Button asChild className="w-full hover-lift">
                      <Link to={service.link}>
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </StandardCardContent>
                </StandardCard>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-card border-2 border-primary rounded-lg p-8 text-center">
                  <service.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-mono text-xl font-bold mb-2 text-primary">
                    Step {index + 1}: {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.tagline}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </Section>

      {/* Competitive Positioning */}
      <Section className="bg-primary/5 border-y-2 border-primary/20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono mb-6">
            <Target className="w-4 h-4" />
            POSITIONING
          </div>
          <h2 className="heading-section mb-4">Why CWT vs. Alternatives</h2>
          <p className="text-description max-w-3xl mx-auto">
            We operate in the gap between a full-time hire and a traditional consultancy—faster than hiring, 
            more invested than freelancers, and more pragmatic than big firms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Full-Time Hire */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-mono font-bold text-lg">Full-Time Hire</h3>
              <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded font-mono">$120K–180K/yr</span>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">6–9 month hiring process</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Requires onboarding & training</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Single expertise domain</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Fixed cost regardless of workload</p>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs font-mono font-bold text-primary mb-2">BEST FOR:</p>
              <p className="text-xs text-muted-foreground">Companies with consistent 40hr/week ops workload and established systems</p>
            </div>
          </div>

          {/* CWT Studio */}
          <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-mono font-bold">
                CWT STUDIO
              </span>
            </div>
            <div className="flex items-start justify-between mb-4 mt-2">
              <h3 className="font-mono font-bold text-lg text-primary">Operator-Led Shop</h3>
              <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded font-mono">$750–15K</span>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">Start in 48 hours, ship in weeks</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">Built-in systems expertise + frameworks</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">Cross-functional: tech, ops, Salesforce</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">Pay for outcomes, not hours</p>
              </div>
            </div>
            <div className="pt-4 border-t border-primary/20">
              <p className="text-xs font-mono font-bold text-primary mb-2">BEST FOR:</p>
              <p className="text-xs text-foreground">Fast-moving companies needing systems installed quickly without hiring overhead</p>
            </div>
          </div>

          {/* Big Consultancy */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-mono font-bold text-lg">Big Consultancy</h3>
              <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded font-mono">$50K–250K+</span>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">6–12 month engagements minimum</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Strategy-heavy, implementation-light</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Junior analysts executing work</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Extensive documentation overhead</p>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs font-mono font-bold text-primary mb-2">BEST FOR:</p>
              <p className="text-xs text-muted-foreground">Enterprise transformation programs with multi-year budgets and compliance requirements</p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8">
            <h3 className="font-mono font-bold text-xl mb-4 text-center">The CWT Positioning</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-primary mb-2">10x</p>
                <p className="text-sm text-muted-foreground font-mono">Faster than hiring internally</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary mb-2">1/5th</p>
                <p className="text-sm text-muted-foreground font-mono">Cost of big consultancy</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground font-mono">Operator ownership (no juniors)</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        {/* Process Flow */}
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">How They Connect</h2>
          <p className="text-description">
            How the services compound
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-mono font-bold text-lg mb-2 text-primary">Assess</h3>
                <p className="text-muted-foreground text-sm">
                  Diagnose what's blocking scale
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-mono font-bold text-lg mb-2 text-primary">Build</h3>
                <p className="text-muted-foreground text-sm">
                  Install systems that drive results
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-mono font-bold text-lg mb-2 text-primary">Operate</h3>
                <p className="text-muted-foreground text-sm">
                  Keep it running as you scale
                </p>
              </div>
            </div>
        </div>
      </Section>
      
      {/* Trust Bar */}
      <TrustBar />
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup
        isOpen={showExitPopup}
        onClose={() => setShowExitPopup(false)}
        title="Get Service Selection Framework"
        description="Download our comprehensive guide to selecting the optimal Revenue Operations engagement for your organization's growth stage and Infrastructure maturity."
        onSubmit={handleExitPopupSubmit}
      />
    </div>;
};
export default Services;
