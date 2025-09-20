import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, Zap, RotateCcw, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Infrastructure Assessment",
      tagline: "Diagnose before you build",
      description: "Complete MRI of your revenue system. We audit tech, ops, and pipeline to identify what's blocking scale. You get a scorecard, benchmarks, and 90-day roadmap.",
      features: [
        "Revenue Infrastructure Scorecard",
        "Benchmarks against industry peers", 
        "90-day roadmap with priority fixes",
        "Executive readout presentation"
      ],
      pricing: "Virtual from $7,500 • In-person from $12,500",
      timeline: "3-4 weeks",
      cta: "Book Assessment",
      link: "/assessment"
    },
    {
      icon: Zap,
      title: "Revenue Sprint",
      tagline: "Install the fixes fast",
      description: "Six to eight weeks of focused execution. We implement the high-impact fixes from your assessment. Outbound engine, dashboards, integrations, governance.",
      features: [
        "Outbound engine build-out",
        "Campaign funnel optimization",
        "Salesforce alignment and automation",
        "Real-time revenue dashboards",
        "Pipeline governance implementation"
      ],
      pricing: "$15,000 to $25,000",
      timeline: "6-8 weeks", 
      cta: "Plan Your Sprint",
      link: "/sprint"
    },
    {
      icon: RotateCcw,
      title: "Fractional Ops",
      tagline: "Keep the system running",
      description: "Monthly operating rhythm after your sprint. We maintain instrumentation, run experiments, and iterate based on what the data tells us.",
      features: [
        "Monthly operating reviews",
        "Continuous system optimization",
        "New tool evaluation and integration",
        "Team training and enablement",
        "Executive reporting and insights"
      ],
      pricing: "From $5,000 per month",
      timeline: "Ongoing",
      cta: "Explore Retainer", 
      link: "/fractional"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="console-line mx-auto mb-4 w-fit">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Services</span>
          </div>
          <h1 className="font-mono text-4xl lg:text-6xl font-bold mb-6">
            Revenue Systems That Scale
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We diagnose. We install. We operate. Three services that transform how your business captures and converts revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Card className="console-card border-border h-full hover:shadow-md transition-shadow duration-150">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-mono text-2xl">{service.title}</CardTitle>
                        <p className="text-muted-foreground italic">{service.tagline}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="font-mono font-bold mb-3">What's Included</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Investment</p>
                        <p className="font-medium text-primary">{service.pricing}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                        <p className="font-medium">{service.timeline}</p>
                      </div>
                    </div>
                    
                    <Button asChild variant="console" className="w-full">
                      <Link to={service.link}>
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <service.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-mono text-xl font-bold mb-2">
                    Step {index + 1}: {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold mb-4">The Complete System</h2>
            <p className="text-xl text-muted-foreground">
              How our services work together to transform your revenue operations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-mono font-bold text-lg mb-2">Assess</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive diagnostic reveals what's blocking your scale
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-mono font-bold text-lg mb-2">Build</h3>
                <p className="text-muted-foreground text-sm">
                  Fast implementation of the systems that drive results
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-mono font-bold text-lg mb-2">Operate</h3>
                <p className="text-muted-foreground text-sm">
                  Ongoing optimization keeps your system ahead of growth
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-card border border-border rounded-lg p-8">
          <h2 className="font-mono text-2xl font-bold mb-4">
            Ready to scale your revenue system?
          </h2>
          <p className="text-muted-foreground mb-6">
            Start with an assessment. See exactly what needs to change.
          </p>
          <Button asChild variant="console-accent">
            <Link to="/contact">
              Book Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;