import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RotateCcw, Target, BarChart3, Settings, Users, Clock, CheckCircle } from "lucide-react";

const Fractional = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Monthly Reviews",
      description: "Performance analysis. Pipeline health. Optimization opportunities."
    },
    {
      icon: Settings,
      title: "Infrastructure Optimization",
      description: "Continuous improvement. Process refinement. System tuning."
    },
    {
      icon: Target,
      title: "Strategic Alignment",
      description: "Quarterly planning. Align ops with business objectives."
    },
    {
      icon: Users,
      title: "Team Development",
      description: "Ongoing training. Documentation. Best practices."
    }
  ];

  const deliverables = [
    "Monthly operating review with scorecard",
    "Quarterly strategic planning sessions", 
    "Continuous infrastructure optimization",
    "Tool evaluation and integration",
    "Team training and enablement",
    "Executive reporting with insights"
  ];

  const timeline = [
    {
      period: "Month 1",
      focus: "Baseline & Strategic Planning",
      activities: "Current state assessment, priority alignment, stakeholder onboarding"
    },
    {
      period: "Month 2-3",
      focus: "Infrastructure Optimization",
      activities: "System enhancements, process refinement, training deployment"
    },
    {
      period: "Month 4+",
      focus: "Scale Enablement",
      activities: "Growth preparation, advanced automation, strategic executive partnership"
    }
  ];

  return (
    <div className="min-h-screen">
      <Section>
        {/* Hero */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="system-status mb-6">
            CONTINUOUS OPTIMIZATION
          </div>
          <h1 className="font-mono text-4xl lg:text-5xl font-bold mb-6">
            Fractional Ops
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Monthly ops rhythm. Continuous optimization. No surprises.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="mt-16">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <RotateCcw className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="heading-section mb-4">Post-Sprint Operations</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your infrastructure is operational. Now keep it running. Maintain optimization momentum. Iterate on performance data. Scale capabilities as you grow.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-16">
          <h2 className="heading-section mb-8">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <StandardCard key={index} variant="bordered" equalHeight>
                <StandardCardHeader>
                  <StandardCardTitle className="flex items-center gap-3 text-primary">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    {service.title}
                  </StandardCardTitle>
                </StandardCardHeader>
                <StandardCardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </StandardCardContent>
              </StandardCard>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Monthly Deliverables</h2>
          <div className="space-y-3">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">How It Works</h2>
          <div className="space-y-6">
            {timeline.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="font-mono font-bold text-lg">{phase.focus}</h3>
                      <Badge className="text-xs bg-muted text-muted-foreground w-fit">
                        {phase.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{phase.activities}</p>
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
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-mono text-2xl font-bold mb-2">Monthly Price</h2>
            <p className="text-3xl font-bold text-primary mb-2">From $5,000/month</p>
            <p className="text-muted-foreground">Scaled to scope and complexity</p>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mt-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-mono text-xl font-bold mb-4">Requirements</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Completed Sprint or equivalent install
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Operational infrastructure in production
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Internal stakeholder for collaboration
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Six-month minimum commitment
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Fractional;