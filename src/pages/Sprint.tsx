import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { Zap, Target, BarChart3, Settings, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Sprint = () => {
  const workstreams = [
    {
      icon: Target,
      title: "Outbound Engine",
      description: "Email sequences, lead scoring models, cadence optimization, and conversion tracking"
    },
    {
      icon: BarChart3,
      title: "Campaign Funnels", 
      description: "Multi-touch attribution frameworks, conversion analytics, and funnel performance optimization"
    },
    {
      icon: Settings,
      title: "Salesforce Automation",
      description: "Data hygiene protocols, workflow automation, process configuration, and integration architecture"
    },
    {
      icon: BarChart3,
      title: "Revenue Dashboards",
      description: "Real-time reporting infrastructure, forecasting models, and executive performance scorecards"
    },
    {
      icon: Shield,
      title: "Pipeline Governance",
      description: "Stage definitions, progression criteria, data quality controls, and compliance frameworks"
    }
  ];

  const timeline = [
    {
      week: "Week 1",
      title: "Foundation",
      outputs: "Infrastructure audit, data remediation, baseline metric establishment"
    },
    {
      week: "Week 2-3", 
      title: "Build",
      outputs: "Process automation implementation, dashboard architecture, integration deployment"
    },
    {
      week: "Week 4-5",
      title: "Validation", 
      outputs: "User acceptance testing, workflow optimization, training material development"
    },
    {
      week: "Week 6-7",
      title: "Deployment",
      outputs: "Production go-live, team onboarding, comprehensive process documentation"
    },
    {
      week: "Week 8",
      title: "Optimization",
      outputs: "Performance tuning, stakeholder feedback integration, operational handoff"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Automation Sprint | CWT Studio 6-Week Implementation"
        description="Launch a Creator Wealth Tools sprint to install automation, Salesforce workflows, and high-performing web or mobile experiences in under eight weeks."
        keywords={[
          'business automation sprint',
          'Salesforce implementation sprint',
          'Creator Wealth Tools deployment',
          'web and mobile launch sprint',
          'revenue operations project plan'
        ]}
        canonicalUrl="/sprint"
      />
      <Section>
        {/* Hero */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="system-status mb-6">
            SPRINT READY
          </div>
          <h1 className="font-mono text-4xl lg:text-5xl font-bold mb-6">
            Sprint
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            High-impact infrastructure. Six to eight weeks. No detours.
          </p>
        </div>

        {/* Workstreams */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">What We Ship</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workstreams.map((stream, index) => (
              <StandardCard key={index} variant="bordered">
                <StandardCardHeader>
                  <StandardCardTitle className="flex items-center gap-3 text-primary">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stream.icon className="w-5 h-5 text-primary" />
                    </div>
                    {stream.title}
                  </StandardCardTitle>
                </StandardCardHeader>
                <StandardCardContent>
                  <p className="text-muted-foreground">{stream.description}</p>
                </StandardCardContent>
              </StandardCard>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Timeline</h2>
          <div className="space-y-6">
            {timeline.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="font-mono font-bold text-lg">{phase.title}</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                        {phase.week}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{phase.outputs}</p>
                  </div>
                </div>
                
                {/* Connection line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-6 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-16">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-mono text-2xl font-bold mb-2">Sprint Price</h2>
            <p className="text-3xl font-bold text-primary mb-2">$15,000 – $25,000</p>
            <p className="text-muted-foreground">Scoped to complexity</p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Performance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">90%+</div>
              <p className="text-sm text-muted-foreground">User adoption in first 30 days</p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">50%+</div>
              <p className="text-sm text-muted-foreground">Pipeline visibility and forecast accuracy</p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">2-3x</div>
              <p className="text-sm text-muted-foreground">Faster reporting and insights</p>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mt-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-mono text-xl font-bold mb-4">Prerequisites</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Completed Assessment or equivalent diagnostic
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Executive commitment to process change
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Stakeholders from each team
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Admin access to systems
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Sprint;
