import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
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
import { Target, Zap, Clock, Palette } from "lucide-react";
import { useState } from "react";

const About = () => {
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
  const values = [{
    icon: Target,
    title: "Precision",
    description: "We diagnose before we prescribe. Every recommendation is data-backed and benchmarked against Fortune 500 best practices."
  }, {
    icon: Zap,
    title: "Ownership",
    description: "We take responsibility for outcomes, not deliverables. Your revenue success is our success metric."
  }, {
    icon: Clock,
    title: "Speed",
    description: "Revenue systems can't wait for perfection. We optimize for rapid implementation and immediate time-to-value."
  }, {
    icon: Palette,
    title: "Craft",
    description: "Elegant systems are effective systems. We build Infrastructure that's as precise as it is powerful."
  }];
  return <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead
        title="About CWT Studio | Revenue Operations Leadership & Expertise"
        description="Built for revenue leaders who need systems that scale. We diagnose, build, and operate revenue infrastructure with precision, ownership, and speed."
        keywords="revenue operations consulting, revenue leadership, systems consulting, operational excellence, fractional revenue operations, CRM implementation"
      />
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="system-status mb-6">
            REVENUE LEADERSHIP
          </div>
          
          <h1 className="heading-page mb-6">
            Built for Revenue Leaders Who Demand Systems That Scale
          </h1>
          <p className="text-description max-w-2xl mx-auto">
            CWT Studio exists because scaling businesses deserve Revenue Infrastructure that compounds. 
            No endless presentations. No random tool recommendations. No noise. Just systems that work.
          </p>
        </div>

        {/* Values */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold mb-4">Operating Principles</h2>
            <p className="text-xl text-muted-foreground">
              Four non-negotiable standards that guide every engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => <StandardCard key={index}>
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="heading-subsection mb-3 text-primary">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </StandardCard>)}
          </div>
        </div>
      </Section>

      <Section variant="muted">
        {/* Philosophy */}
        <div className="mb-16">
          <div className="bg-primary/15 border-l-4 border-primary rounded-lg p-8">
            <h2 className="heading-section mb-6 text-center text-primary">Our Philosophy</h2>
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-lg text-foreground italic leading-relaxed mb-6 pl-6">
                "Revenue Infrastructure is like plumbing. When it works, nobody notices. 
                When it breaks, it destroys everything downstream."
              </blockquote>
              <p className="text-foreground">
                We install systems that work so reliably, you forget they're there—until you need to scale. 
                Then you're prepared for whatever growth demands.
              </p>
            </div>
          </div>
        </div>

        {/* Working with Us */}
        <div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="heading-section mb-6">Partnering with CWT Studio</h2>
            
            {/* Meet You Where You Are */}
            <div className="mb-8 p-6 bg-accent/10 border-2 border-accent/20 rounded-lg">
              <h3 className="font-mono font-bold mb-4 text-primary">We Meet You at Your Current State</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Every organization operates at a different maturity level with unique constraints. We don't recommend rip-and-replace transformations. 
                We work within your existing Infrastructure, timeline, and team to create sustainable improvements.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-foreground">Flexible Engagement</p>
                  <p className="text-xs text-muted-foreground">Virtual or in-person. Sprint or assessment only. Your choice.</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2 text-foreground">Industry Agnostic</p>
                  <p className="text-xs text-muted-foreground">SaaS, services, manufacturing—Revenue Infrastructure follows universal patterns.</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-mono font-bold mb-3 text-foreground">What We Do</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Assess your current operational state</li>
                  <li>• Comprehensive diagnostic of Revenue Infrastructure</li>
                  <li>• Integrate with existing tooling and workflows</li>
                  <li>• Rapid implementation of high-priority optimizations</li>
                  <li>• Flexible methodology adapted to your timeline</li>
                  <li>• Continuous optimization and iteration cycles</li>
                  <li>• Executive-level strategic partnership</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono font-bold mb-3 text-foreground">What We Don't Do</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Recommend complete system overhauls</li>
                  <li>• Extended discovery phases without execution</li>
                  <li>• Generic frameworks misaligned to your stage</li>
                  <li>• Deliver documentation and disengage</li>
                  <li>• Over-architect for premature complexity</li>
                  <li>• Evaluate your current setup without context</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Trust Bar */}
      <TrustBar />
      
      {/* CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">Install Your Revenue Infrastructure</h2>
          <p className="text-description mb-8">
            Transform your Revenue Operations with systems designed to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton
              to="/contact"
              ctaName="About - Start Assessment"
              location="About CTA Section"
            >
              Start Assessment
            </ConversionOptimizedButton>
            <ConversionOptimizedButton
              to="/sample-report"
              ctaName="About - View Sample Report"
              location="About CTA Section"
              variant="outline"
            >
              View Sample Report
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup
        isOpen={showExitPopup}
        onClose={() => setShowExitPopup(false)}
        title="Get Our Operating Principles Guide"
        description="See real-world applications of Precision, Ownership, Speed, and Craft in Revenue Infrastructure implementations."
        onSubmit={handleExitPopupSubmit}
      />
    </div>;
};
export default About;