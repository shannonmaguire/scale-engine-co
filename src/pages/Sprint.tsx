import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Zap, Target, BarChart3, Settings, Shield, ArrowRight } from "lucide-react";

const Sprint = () => {
  const workstreams = [
    {
      icon: Target,
      title: "Outbound Engine",
      description: "Sequences, templates, lead scoring, and cadence optimization"
    },
    {
      icon: BarChart3,
      title: "Campaign Funnels", 
      description: "Multi-touch attribution, conversion tracking, and funnel optimization"
    },
    {
      icon: Settings,
      title: "Salesforce Alignment",
      description: "Data hygiene, process automation, and workflow configuration"
    },
    {
      icon: BarChart3,
      title: "Revenue Dashboards",
      description: "Real-time reporting, forecasting tools, and executive scorecards"
    },
    {
      icon: Shield,
      title: "Pipeline Governance",
      description: "Stage definitions, exit criteria, and quality controls"
    }
  ];

  const timeline = [
    {
      week: "Week 1",
      title: "Foundation",
      outputs: "System audit, data cleanup, baseline metrics"
    },
    {
      week: "Week 2-3", 
      title: "Build",
      outputs: "Process automation, dashboard creation, integration setup"
    },
    {
      week: "Week 4-5",
      title: "Test", 
      outputs: "User acceptance testing, workflow validation, training materials"
    },
    {
      week: "Week 6-7",
      title: "Deploy",
      outputs: "Go-live execution, user onboarding, process documentation"
    },
    {
      week: "Week 8",
      title: "Optimize",
      outputs: "Performance tuning, feedback integration, handoff to operations"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="blueprint-line mx-auto mb-4 w-fit">
            <span className="text-sm text-muted-foreground uppercase tracking-wide">Sprint</span>
          </div>
          <h1 className="font-mono text-4xl lg:text-5xl font-bold mb-6">
            Revenue Sprint
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Install the fixes fast. Six to eight weeks. No detours.
          </p>
        </div>

        {/* Workstreams */}
        <section className="mb-16">
          <h2 className="font-mono text-2xl font-bold mb-8">What We Build</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workstreams.map((stream, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stream.icon className="w-5 h-5 text-primary" />
                    </div>
                    {stream.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stream.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Sprint Timeline</h2>
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
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-mono text-2xl font-bold mb-2">Sprint Investment</h2>
            <p className="text-3xl font-bold text-primary mb-2">$15,000 - $25,000</p>
            <p className="text-muted-foreground">Depending on scope and complexity</p>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Success Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">90%+</div>
              <p className="text-sm text-muted-foreground">User adoption within 30 days</p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">50%+</div>
              <p className="text-sm text-muted-foreground">Improvement in pipeline visibility</p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">2-3x</div>
              <p className="text-sm text-muted-foreground">Faster reporting and insights</p>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-mono text-xl font-bold mb-4">Sprint Prerequisites</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Completed Infrastructure Assessment (or equivalent diagnostic)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Executive commitment to process changes
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Dedicated project stakeholders from each team
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                System admin access to all relevant tools
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-mono text-2xl font-bold mb-4">
              Ready to install your revenue system?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's build the infrastructure that scales with your growth.
            </p>
            <Button asChild size="lg" className="btn-console">
              <Link to="/contact">
                Plan Your Sprint
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sprint;