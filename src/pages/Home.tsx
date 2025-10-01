import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SystemDiagram from "@/components/SystemDiagram";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { useExitIntent } from "@/hooks/useExitIntent";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { SocialProof } from "@/components/SocialProof";
import { ChatWidget } from "@/components/ChatWidget";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import CookieBanner from "@/components/CookieBanner";
import { ArrowRight, CheckCircle, BarChart3, Target, Award, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";

const Home = () => {
  // Performance monitoring
  usePerformanceMonitoring();
  
  // Track scroll depth for engagement
  useScrollDepth();
  
  // Exit intent popup state
  const [showExitPopup, setShowExitPopup] = useState(false);
  
  useExitIntent({
    enabled: true,
    onExitIntent: () => setShowExitPopup(true),
  });

  const handleExitPopupSubmit = async (email: string) => {
    // In production, send to email service
    console.log("Exit intent email captured:", email);
    // TODO: Integrate with email service
  };
  
  const services = [{
    title: "Infrastructure Assessment",
    description: "Deep diagnostic of tech, ops, pipeline. Scorecard and benchmarks. 90 day roadmap. Executive readout.",
    price: "Virtual from $7,500. In person from $12,500.",
    note: "50% of your fee credits to a Sprint if you move forward",
    cta: "Get Started",
    link: "/contact"
  }, {
    title: "Revenue Sprint",
    description: "Install the fixes. Outbound engine. Integrations. Dashboards. Governance.",
    timeline: "6 to 8 weeks",
    price: "$15,000 to $25,000",
    cta: "Plan Your Sprint",
    link: "/sprint"
  }, {
    title: "Fractional Ops",
    description: "Monthly operating rhythm. Instrumentation. Iteration. Reviews with leadership.",
    price: "From $5,000 per month",
    cta: "Explore Retainer",
    link: "/fractional"
  }];
  const proofStats = [{
    number: "60 → 30",
    label: "Cut cycle time days"
  }, {
    number: "4x",
    label: "Lifted outbound reply rate"
  }, {
    number: "100%",
    label: "Single source of truth adoption"
  }];
  const beforeAfter = {
    before: ["Founder led sales", "Stitched tools", "Leaking pipeline"],
    after: ["Operating system", "Reliable pipeline", "Forecast you can defend"]
  };
  const diagnosticDeliverables = ["Revenue Infrastructure Scorecard tech, ops, pipeline", "Benchmarks against peers", "90 day roadmap with priority fixes", "Executive readout with leadership"];
  return <div className="min-h-screen">
      <EngagementTracker />
      <CookieBanner />
      <SEOHead
        title="CWT Studio - Revenue System Infrastructure | B2B Sales Operations"
        description="We install the systems that drive revenue. Infrastructure assessments, revenue sprints, and fractional ops for scaling B2B businesses. Turn complexity into seamless flow."
        keywords="revenue infrastructure, B2B sales operations, revenue sprint, fractional ops, sales system optimization, CRM consulting, outbound automation"
      />
      
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              
              
              <h1 className="heading-page mb-6 leading-tight">
                The Competitive Advantage Is the Backend
              </h1>
              
              <p className="text-description mb-8">
                In an era of fractured attention and tool overload, the real advantage belongs to operators who install systems that are simple, resilient, and actually adopted. We turn complexity into seamless flow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <ConversionOptimizedButton
                  to="/contact"
                  ctaName="Hero - Book Assessment"
                  location="Homepage Hero"
                  className="btn-console-accent"
                >
                  Book Assessment
                </ConversionOptimizedButton>
                <ConversionOptimizedButton
                  to="/systems"
                  ctaName="Hero - Systems Page"
                  location="Homepage Hero"
                  variant="outline"
                  className="btn-console-secondary"
                  showArrow={false}
                >
                  See the System
                </ConversionOptimizedButton>
              </div>
              
              {/* Enhanced Trust signals */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg hover-lift">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-foreground">50+ Systems</div>
                      <div className="text-xs text-muted-foreground">Deployed & Scaled</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg hover-lift">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-foreground">4x Average</div>
                      <div className="text-xs text-muted-foreground">Efficiency Gain</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg hover-lift">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-foreground">24hr Response</div>
                      <div className="text-xs text-muted-foreground">Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <SystemDiagram />
            </div>
          </div>
      </Section>

      {/* The System Section */}
      <Section id="system" variant="muted">
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="system-status">
                System Modules
              </div>
            </div>
            <h2 className="heading-section">How We Work</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => <StandardCard key={index} equalHeight className="hover-lift group">
                <div className="flex flex-col flex-1">
                  <div className="mb-6">
                    <div className="w-8 h-8 bg-primary/10 flex items-center justify-center mb-4 transition-all group-hover:bg-primary/20">
                      <span className="text-primary font-mono font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="heading-subsection mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6 flex-1">
                    {service.timeline && <div className="text-sm">
                        <span className="text-muted-foreground font-mono">Timeline: </span>
                        <span className="font-medium tabular-nums">{service.timeline}</span>
                      </div>}
                    <div className="text-sm">
                      <span className="text-muted-foreground font-mono">Price: </span>
                      <span className="font-medium text-primary tabular-nums">{service.price}</span>
                    </div>
                    {service.note && <p className="text-xs text-muted-foreground font-mono">{service.note}</p>}
                  </div>
                  
                  <Button asChild className="w-full mt-auto">
                    <Link to={service.link}>{service.cta}</Link>
                  </Button>
                </div>
              </StandardCard>)}
          </div>
      </Section>

      {/* Before and After Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-8">Before and After</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-mono text-lg font-bold mb-4 text-muted-foreground">Before</h3>
                  <ul className="space-y-3">
                    {beforeAfter.before.map((item, index) => <li key={index} className="flex items-center text-muted-foreground font-mono text-sm">
                        <div className="w-1 h-1 bg-muted-foreground mr-3" />
                        {item}
                      </li>)}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-mono text-lg font-bold mb-4 text-primary">After</h3>
                  <ul className="space-y-3">
                    {beforeAfter.after.map((item, index) => <li key={index} className="flex items-center font-mono text-sm">
                        <CheckCircle className="w-3 h-3 text-primary mr-3" />
                        {item}
                      </li>)}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <ConversionOptimizedButton
                  to="/contact"
                  ctaName="Before After - Book Assessment"
                  location="Before After Section"
                  variant="warm"
                >
                  Book Assessment
                </ConversionOptimizedButton>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <div className="diagnostic-panel">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-accent-data rounded-full animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-wider text-accent-data">
                      System Health
                    </span>
                  </div>
                  <BarChart3 className="w-16 h-16 accent-data mx-auto mb-4" />
                  <h3 className="heading-subsection mb-2">Revenue System</h3>
                  <p className="text-muted-foreground font-mono text-sm mb-6">Transparent, predictable, scalable</p>
                  
                  {/* Inline metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="metric-display">
                      <div className="text-2xl font-bold accent-data">98%</div>
                      <div className="text-xs text-muted-foreground">UPTIME</div>
                    </div>
                    <div className="metric-display">
                      <div className="text-2xl font-bold accent-data">4x</div>
                      <div className="text-xs text-muted-foreground">EFFICIENCY</div>
                    </div>
                    <div className="metric-display">
                      <div className="text-2xl font-bold accent-data">100%</div>
                      <div className="text-xs text-muted-foreground">ADOPTION</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Section>

      {/* Meet You Where You Are Section */}
      <Section variant="muted">
        <div className="text-center mb-16">
            <h2 className="heading-section mb-6">We Meet You Where You Are</h2>
            <p className="text-description max-w-3xl mx-auto">
              Strong backends make resilience visible. Whether you're early stage or enterprise, we install the infrastructure that lets execution beat volume every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StandardCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-mono font-bold">START</span>
                </div>
                <h3 className="heading-subsection mb-3">Early Stage</h3>
                <p className="text-muted-foreground text-sm">
                  Founder-led sales with basic tools. We'll assess what you actually need to scale, 
                  not over-engineer for problems you don't have yet.
                </p>
              </div>
            </StandardCard>
            
            <StandardCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-mono font-bold">GROW</span>
                </div>
                <h3 className="heading-subsection mb-3">Scaling</h3>
                <p className="text-muted-foreground text-sm">
                  Growing fast with stitched-together systems. We'll work with your existing tools 
                  and team to optimize what you have while planning smart upgrades.
                </p>
              </div>
            </StandardCard>
            
            <StandardCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary font-mono font-bold">SCALE</span>
                </div>
                <h3 className="heading-subsection mb-3">Enterprise</h3>
                <p className="text-muted-foreground text-sm">
                  Complex operations with entrenched processes. We'll audit what's working, 
                  identify what's blocking scale, and sequence changes realistically.
                </p>
              </div>
            </StandardCard>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground font-mono text-sm mb-6">
              No judgment. No assumptions. Just clear diagnosis and practical next steps.
            </p>
            <ConversionOptimizedButton
              to="/contact"
              ctaName="Meet You - Get Started"
              location="Meet You Section"
            >
              Get Started
            </ConversionOptimizedButton>
          </div>
      </Section>

      {/* Assessment Details Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-section mb-4">The Diagnostic</h2>
              <p className="text-description">What you get in an Assessment</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  {diagnosticDeliverables.map((item, index) => <div key={index} className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-foreground font-mono text-sm">{item}</span>
                    </div>)}
                </div>
                
                <div className="mt-8">
                  <ConversionOptimizedButton
                    to="/sample-report"
                    ctaName="Diagnostic - View Sample"
                    location="Diagnostic Section"
                  >
                    View Sample Report
                  </ConversionOptimizedButton>
                </div>
              </div>
              
              <div className="relative">
                <div className="diagnostic-panel">
                  <div className="space-y-4">
                    <div className="terminal-prompt">Diagnostic Output</div>
                    <div className="h-3 bg-muted w-3/4 rounded" />
                    <div className="h-3 bg-muted w-1/2 rounded" />
                    <div className="inline-graph my-4" />
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="metric-display">
                        <div className="text-lg font-bold accent-data">87</div>
                        <div className="text-xs">SCORE</div>
                      </div>
                      <div className="metric-display">
                        <div className="text-lg font-bold accent-data">12</div>
                        <div className="text-xs">GAPS</div>
                      </div>
                      <div className="metric-display">
                        <div className="text-lg font-bold accent-data">90d</div>
                        <div className="text-xs">ROADMAP</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 system-badge bg-primary text-primary-foreground">
                    Sample Report
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Section>

      {/* Proof Section */}
      <Section variant="muted">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="system-status">
                Performance Metrics
              </div>
            </div>
            <h2 className="heading-section">Results That Matter</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {proofStats.map((stat, index) => <div key={index} className="stat-block-data text-center">
                <div className="stat-number-data">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>)}
          </div>
          
          <div className="text-center">
            <ConversionOptimizedButton
              to="/services"
              ctaName="Proof - See Services"
              location="Proof Section"
            >
              See Services
            </ConversionOptimizedButton>
          </div>
      </Section>

      {/* Infrastructure for High-Trust Industries */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-section mb-6">
              Revenue Infrastructure for Complex Industries
            </h2>
            <p className="text-description mb-8">
              Healthcare, cybersecurity, law, compliance—industries where relationships matter and buying cycles are long. We build the backend that compounds success, not friction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConversionOptimizedButton
                to="/services"
                ctaName="Complex Industries - Our Services"
                location="Complex Industries Section"
              >
                Our Services
              </ConversionOptimizedButton>
              <ConversionOptimizedButton
                to="/proof"
                ctaName="Complex Industries - See Proof"
                location="Complex Industries Section"
                variant="outline"
              >
                See Proof
              </ConversionOptimizedButton>
            </div>
        </div>
      </Section>

      {/* Final CTA - Removed in favor of Footer CTA */}
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup
        isOpen={showExitPopup}
        onClose={() => setShowExitPopup(false)}
        title="Wait! Get Our Free Guide"
        description="Before you go, download our comprehensive revenue operations assessment framework—the same one we use with clients."
        ctaText="Send Me The Guide"
        onSubmit={handleExitPopupSubmit}
      />
      
      {/* Social Proof Notifications */}
      <SocialProof />
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>;
};
export default Home;