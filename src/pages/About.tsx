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
    description: "We diagnose before we build. Every recommendation is backed by data. No guessing."
  }, {
    icon: Zap,
    title: "Ownership",
    description: "We own outcomes. Not just deliverables. Your revenue is our metric."
  }, {
    icon: Clock,
    title: "Speed",
    description: "Revenue systems can't wait for perfection. We ship fast. Iterate faster."
  }, {
    icon: Palette,
    title: "Craft",
    description: "Elegant systems work better. We build infrastructure that's as precise as it is powerful."
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
            We Install Backend Revenue Systems
          </h1>
          <p className="text-description max-w-2xl mx-auto">
            CWT Studio builds infrastructure that compounds. Most companies have strategy but broken execution. We fix execution. Assess, install, operate. That's it.
          </p>
        </div>

        {/* Values */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground">
              Four principles. Non-negotiable.
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
            <h2 className="heading-section mb-6 text-center text-primary">Philosophy</h2>
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-lg text-foreground italic leading-relaxed mb-6 pl-6">
                "Revenue infrastructure is like plumbing. When it works, nobody notices. 
                When it breaks, everything downstream floods."
              </blockquote>
              <p className="text-foreground">
                We install systems so reliable you forget they exist. Until you scale. Then you're ready.
              </p>
            </div>
          </div>
        </div>

        {/* Working with Us */}
        <div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="heading-section mb-6">Working with Us</h2>
            
            {/* Meet You Where You Are */}
            <div className="mb-8 p-6 bg-accent/10 border-2 border-accent/20 rounded-lg">
              <h3 className="font-mono font-bold mb-4 text-primary">We Meet You Where You Are</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Every company operates differently. Different stage, different constraints. We don't force rip-and-replace. We work with your infrastructure, your timeline, your team. Real improvements, not fantasy roadmaps.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-foreground">Flexible</p>
                  <p className="text-xs text-muted-foreground">Virtual or in-person. Sprint or assessment only. You choose.</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2 text-foreground">Industry Agnostic</p>
                  <p className="text-xs text-muted-foreground">SaaS, services, manufacturing. Revenue patterns are universal.</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-mono font-bold mb-3 text-foreground">What We Do</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Assess current state</li>
                  <li>• Diagnose infrastructure gaps</li>
                  <li>• Work with existing tools</li>
                  <li>• Install high-priority fixes fast</li>
                  <li>• Adapt to your timeline</li>
                  <li>• Optimize continuously</li>
                  <li>• Partner at exec level</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono font-bold mb-3 text-foreground">What We Don't Do</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Force complete overhauls</li>
                  <li>• Discovery phases without execution</li>
                  <li>• Generic frameworks</li>
                  <li>• Drop docs and disappear</li>
                  <li>• Over-architect early problems</li>
                  <li>• Evaluate without context</li>
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
          <h2 className="heading-section mb-6">Get Started</h2>
          <p className="text-description mb-8">
            Install infrastructure that scales.
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