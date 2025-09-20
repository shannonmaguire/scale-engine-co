import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import SystemDiagram from "@/components/SystemDiagram";
import { ArrowRight, CheckCircle, BarChart3, Target, Zap } from "lucide-react";

const Home = () => {
  const services = [
    {
      title: "Infrastructure Assessment",
      description: "Deep diagnostic of tech, ops, pipeline. Scorecard and benchmarks. 90 day roadmap. Executive readout.",
      price: "Virtual from $7,500. In person from $12,500.",
      note: "50% of your fee credits to a Sprint if you move forward",
      cta: "Book Assessment",
      link: "/assessment"
    },
    {
      title: "Revenue Sprint", 
      description: "Install the fixes. Outbound engine. Integrations. Dashboards. Governance.",
      timeline: "6 to 8 weeks",
      price: "$15,000 to $25,000",
      cta: "Plan Your Sprint",
      link: "/sprint"
    },
    {
      title: "Fractional Ops",
      description: "Monthly operating rhythm. Instrumentation. Iteration. Reviews with leadership.",
      price: "From $5,000 per month", 
      cta: "Explore Retainer",
      link: "/fractional"
    }
  ];

  const proofStats = [
    { number: "60 → 30", label: "Cut cycle time days" },
    { number: "4x", label: "Lifted outbound reply rate" },
    { number: "100%", label: "Single source of truth adoption" }
  ];

  const beforeAfter = {
    before: [
      "Founder led sales",
      "Stitched tools", 
      "Leaking pipeline"
    ],
    after: [
      "Operating system",
      "Reliable pipeline",
      "Forecast you can defend"
    ]
  };

  const diagnosticDeliverables = [
    "Revenue Infrastructure Scorecard tech, ops, pipeline",
    "Benchmarks against peers",
    "90 day roadmap with priority fixes", 
    "Executive readout with leadership"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="console-line mb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">CWT Studio</span>
              </div>
              
              <h1 className="font-mono text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Your business cannot scale on duct tape
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We install the systems that drive revenue. First we diagnose. Then we build.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-console-accent">
                  <Link to="/contact">
                    Book Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild className="btn-console-secondary">
                  <Link to="#system">See the System</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <SystemDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* The System Section */}
      <section id="system" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="console-line mx-auto mb-4 w-fit">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">The System</span>
            </div>
            <h2 className="font-mono text-3xl lg:text-4xl font-bold">How We Work</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="console-card relative bg-card border-border hover:shadow-lg transition-shadow duration-150 flex flex-col h-full">
                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <div className="w-8 h-8 bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-mono font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="font-mono text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6 flex-1">
                    {service.timeline && (
                      <div className="text-sm">
                        <span className="text-muted-foreground font-mono">Timeline: </span>
                        <span className="font-medium tabular-nums">{service.timeline}</span>
                      </div>
                    )}
                    <div className="text-sm">
                      <span className="text-muted-foreground font-mono">Price: </span>
                      <span className="font-medium text-primary tabular-nums">{service.price}</span>
                    </div>
                    {service.note && (
                      <p className="text-xs text-muted-foreground font-mono">{service.note}</p>
                    )}
                  </div>
                  
                  <Button asChild className="w-full btn-console mt-auto">
                    <Link to={service.link}>{service.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-8">Before and After</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-mono text-lg font-bold mb-4 text-muted-foreground">Before</h3>
                  <ul className="space-y-3">
                    {beforeAfter.before.map((item, index) => (
                      <li key={index} className="flex items-center text-muted-foreground font-mono text-sm">
                        <div className="w-1 h-1 bg-muted-foreground mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-mono text-lg font-bold mb-4 text-primary">After</h3>
                  <ul className="space-y-3">
                    {beforeAfter.after.map((item, index) => (
                      <li key={index} className="flex items-center font-mono text-sm">
                        <CheckCircle className="w-3 h-3 text-primary mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="btn-console-accent">
                  <Link to="/contact">Book Assessment</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <div className="console-card bg-card border border-border p-8 text-center">
                <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-mono text-xl font-bold mb-2">Revenue System</h3>
                <p className="text-muted-foreground font-mono text-sm">Transparent, predictable, scalable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Details Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-4">The Diagnostic</h2>
              <p className="text-xl text-muted-foreground">What you get in an Assessment</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  {diagnosticDeliverables.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-foreground font-mono text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button asChild className="btn-console">
                    <Link to="/sample-report">View Sample Report</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="console-card bg-card border border-border p-8 shadow-lg">
                  <div className="space-y-4">
                    <div className="h-3 bg-muted w-3/4" />
                    <div className="h-3 bg-muted w-1/2" />
                    <div className="h-16 bg-muted" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-8 bg-primary/20" />
                      <div className="h-8 bg-primary/20" />
                      <div className="h-8 bg-primary/20" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 system-badge bg-primary text-primary-foreground">
                    Sample Report
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="console-line mx-auto mb-4 w-fit">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Proof</span>
            </div>
            <h2 className="font-mono text-3xl lg:text-4xl font-bold">Results That Matter</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {proofStats.map((stat, index) => (
              <div key={index} className="stat-block text-center">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild className="btn-console">
              <Link to="/systems">See Systems</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Salesforce Block */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-6">
              Salesforce without wasted motion
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We run assessments and sprints that make Salesforce pay off. Delivery through CloudRoute. 
              You keep a single operator at the table from plan to production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-console">
                <Link to="/salesforce/partners">For AEs</Link>
              </Button>
              <Button asChild className="btn-console-secondary">
                <Link to="/salesforce/delivery">Delivery Model</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-6">
            Scale only works when the backend holds
          </h2>
          <Button asChild size="lg" className="btn-console-accent">
            <Link to="/contact">
              Book Assessment
              <Zap className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;