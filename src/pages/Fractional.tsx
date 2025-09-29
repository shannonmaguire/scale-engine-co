import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RotateCcw, Target, BarChart3, Settings, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";

const Fractional = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Monthly Reviews",
      description: "Performance analysis, pipeline health checks, and optimization recommendations"
    },
    {
      icon: Settings,
      title: "System Optimization",
      description: "Continuous improvement of your revenue infrastructure and processes"
    },
    {
      icon: Target,
      title: "Strategy Alignment",
      description: "Quarterly planning sessions to align operations with business goals"
    },
    {
      icon: Users,
      title: "Team Enablement",
      description: "Training, documentation, and best practice implementation"
    }
  ];

  const deliverables = [
    "Monthly operating review and scorecard",
    "Quarterly strategy and planning sessions", 
    "Ongoing system optimization and iteration",
    "New tool evaluation and integration support",
    "Team training and enablement programs",
    "Executive reporting and business insights"
  ];

  const timeline = [
    {
      period: "Month 1",
      focus: "Baseline & Planning",
      activities: "Current state assessment, priority setting, team alignment"
    },
    {
      period: "Month 2-3",
      focus: "Optimization",
      activities: "System improvements, process refinement, training delivery"
    },
    {
      period: "Month 4+",
      focus: "Growth Support",
      activities: "Scaling preparation, advanced automation, strategic guidance"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="blueprint-line mx-auto mb-4 w-fit">
            <span className="text-sm text-muted-foreground uppercase tracking-wide">Fractional</span>
          </div>
          <h1 className="font-mono text-4xl lg:text-5xl font-bold mb-6">
            Fractional Revenue Operations
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Keep your revenue system running at peak performance. Monthly operating rhythm. 
            Continuous optimization. Strategic guidance when you need it.
          </p>
        </div>

        {/* Value Proposition */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <RotateCcw className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="heading-section mb-4">After the Sprint</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your revenue systems are installed and working. Now you need someone to keep them optimized, 
              iterate based on results, and guide strategic decisions as you scale.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="heading-section mb-8">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-2 border-border hover:border-secondary hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Monthly Deliverables</h2>
          <div className="space-y-3">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
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
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-mono text-2xl font-bold mb-2">Monthly Retainer</h2>
            <p className="text-3xl font-bold text-primary mb-2">From $5,000</p>
            <p className="text-muted-foreground">Depends on scope and complexity</p>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-mono text-xl font-bold mb-4">Requirements</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Completed Revenue Sprint (or equivalent system implementation)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Operational revenue systems in production
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Dedicated internal stakeholder for collaboration
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Monthly commitment (minimum 6 months)
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-mono text-2xl font-bold mb-4">
              Ready for ongoing optimization?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's keep your revenue systems running at peak performance.
            </p>
            <Button asChild size="lg" className="btn-console">
              <Link to="/contact">
                Discuss Retainer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fractional;