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
import { Search, Zap, RotateCcw, ArrowRight } from "lucide-react";
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
    title: "Infrastructure Assessment",
    tagline: "Diagnose before you build",
    description: "Complete MRI of your revenue system. We audit tech, ops, and pipeline to identify what's blocking scale. You get a scorecard, benchmarks, and 90-day roadmap.",
    features: ["Revenue Infrastructure Scorecard", "Benchmarks against industry peers", "90-day roadmap with priority fixes", "Executive readout presentation"],
    pricing: "Virtual from $7,500 • In-person from $12,500",
    timeline: "3-4 weeks",
    cta: "Get Started",
    link: "/contact"
  }, {
    icon: Zap,
    title: "Revenue Sprint",
    tagline: "Install the fixes fast",
    description: "Six to eight weeks of focused execution. We implement the high-impact fixes from your assessment. Outbound engine, dashboards, integrations, governance.",
    features: ["Outbound engine build-out", "Campaign funnel optimization", "Salesforce alignment and automation", "Real-time revenue dashboards", "Pipeline governance implementation"],
    pricing: "$15,000 to $25,000",
    timeline: "6-8 weeks",
    cta: "Plan Your Sprint",
    link: "/sprint"
  }, {
    icon: RotateCcw,
    title: "Fractional Ops",
    tagline: "Keep the system running",
    description: "Monthly operating rhythm after your sprint. We maintain instrumentation, run experiments, and iterate based on what the data tells us.",
    features: ["Monthly operating reviews", "Continuous system optimization", "New tool evaluation and integration", "Team training and enablement", "Executive reporting and insights"],
    pricing: "From $5,000 per month",
    timeline: "Ongoing",
    cta: "Explore Retainer",
    link: "/fractional"
  }];
  return <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead
        title="Revenue Operations Services | Infrastructure Assessment, Sprints & Fractional Ops"
        description="Complete revenue systems services: diagnostic assessments, 6-8 week implementation sprints, and ongoing fractional operations. Transform your sales infrastructure."
        keywords="revenue operations services, infrastructure assessment, revenue sprint, fractional COO, sales system implementation, CRM consulting, operational excellence"
      />
      
      <Breadcrumbs />
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="system-status mb-6">
            SYSTEM READY
          </div>
          
          <h1 className="heading-page mb-6">
            Revenue Systems That Scale
          </h1>
          <p className="text-description">
            We diagnose. We install. We operate. Three services that transform how your business captures and converts revenue.
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
                            {index === 0 && "Works with any current system—from spreadsheets to enterprise platforms"}
                            {index === 1 && "Integrates with existing tools. No rip-and-replace required"}  
                            {index === 2 && "Scales with your growth. Monthly rhythm adapts to your pace"}
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

      <Section>
        {/* Process Flow */}
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">The Complete System</h2>
          <p className="text-description">
            How our services work together to transform your revenue operations
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
                  Comprehensive diagnostic reveals what's blocking your scale
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-mono font-bold text-lg mb-2 text-primary">Build</h3>
                <p className="text-muted-foreground text-sm">
                  Fast implementation of the systems that drive results
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-mono font-bold text-lg mb-2 text-primary">Operate</h3>
                <p className="text-muted-foreground text-sm">
                  Ongoing optimization keeps your system ahead of growth
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
        title="Get Our Service Comparison Guide"
        description="Download our detailed guide to choosing the right revenue operations engagement for your business stage."
        onSubmit={handleExitPopupSubmit}
      />
    </div>;
};
export default Services;