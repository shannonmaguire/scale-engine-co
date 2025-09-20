import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Users, BarChart3, Target, Zap, Settings, Database, GitBranch } from "lucide-react";

const Salesforce = () => {
  const valueProps = [
    {
      icon: Shield,
      title: "Single Point of Accountability",
      description: "One operator from assessment through production. No handoffs, no confusion."
    },
    {
      icon: GitBranch,
      title: "CloudRoute Partnership",
      description: "Execution through our certified delivery partner. Proven methodology, reliable results."
    },
    {
      icon: Target,
      title: "Assessment-Driven Implementation",
      description: "Every sprint starts with diagnostics. Fix what matters, ignore what doesn't."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Salesforce Health Check",
      description: "Audit your current Salesforce setup. Identify bottlenecks, data issues, and workflow gaps.",
      deliverables: ["System architecture review", "Data quality assessment", "User adoption analysis", "Integration audit"]
    },
    {
      number: "02", 
      title: "Sprint Planning",
      description: "Prioritize fixes based on revenue impact. Create implementation roadmap with CloudRoute.",
      deliverables: ["Priority fix roadmap", "Resource allocation plan", "Timeline and milestones", "Success metrics definition"]
    },
    {
      number: "03",
      title: "Implementation Sprint",
      description: "6-8 week focused execution. CloudRoute handles the build while we manage the strategy.",
      deliverables: ["Workflow automation", "Dashboard deployment", "Integration setup", "User training materials"]
    }
  ];

  const results = [
    { metric: "90%", label: "Faster quote generation" },
    { metric: "3x", label: "Pipeline visibility" },
    { metric: "60%", label: "Reduced admin time" }
  ];

  const ctaOptions = [
    {
      title: "For AEs",
      description: "Partner programs and referral opportunities. Bring CWT to your accounts.",
      cta: "Partner Programs",
      link: "/salesforce/partners",
      primary: true
    },
    {
      title: "Delivery Model", 
      description: "How we work with CloudRoute to deliver Salesforce transformations.",
      cta: "See Delivery Model",
      link: "/salesforce/delivery",
      primary: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="console-line mx-auto mb-4 w-fit">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Salesforce Operations</span>
            </div>
            
            <h1 className="font-mono text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Salesforce without wasted motion
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              We run assessments and sprints that make Salesforce pay off. Delivery through CloudRoute. 
              You keep a single operator at the table from plan to production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-console">
                <Link to="/contact">
                  Book Salesforce Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild className="btn-console-secondary">
                <Link to="#process">See the Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="console-line mx-auto mb-4 w-fit">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Why CWT</span>
            </div>
            <h2 className="font-mono text-3xl lg:text-4xl font-bold">Operator-Led Salesforce Transformation</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="console-card relative bg-card border-border">
                <CardContent className="p-8 text-center">
                  <prop.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-mono text-lg font-bold mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Column Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ctaOptions.map((option, index) => (
              <Card key={index} className={`console-card relative bg-card border-border hover:shadow-lg transition-shadow duration-150 ${option.primary ? 'ring-1 ring-primary' : ''}`}>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="font-mono text-xl font-bold mb-3">{option.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{option.description}</p>
                  </div>
                  
                  <Button asChild className={`w-full ${option.primary ? 'btn-console' : 'btn-console-secondary'}`}>
                    <Link to={option.link}>
                      {option.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section id="process" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="console-line mx-auto mb-4 w-fit">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Process</span>
            </div>
            <h2 className="font-mono text-3xl lg:text-4xl font-bold">How We Transform Salesforce</h2>
          </div>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-8 items-start">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary font-mono font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-mono text-xl font-bold mb-2">{step.title}</h3>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  <div className="space-y-2">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-3 h-3 text-primary mr-3 flex-shrink-0" />
                        <span className="font-mono">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CloudRoute Partnership */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="console-line mb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Partnership</span>
              </div>
              <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-6">CloudRoute Delivery Model</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We handle strategy and oversight. CloudRoute handles implementation. 
                You get certified Salesforce expertise without vendor management complexity.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-mono font-bold text-sm">Certified Salesforce Consultants</p>
                    <p className="text-muted-foreground text-sm">CloudRoute team with 100+ implementations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-mono font-bold text-sm">Single Point of Contact</p>
                    <p className="text-muted-foreground text-sm">CWT manages the entire relationship</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-mono font-bold text-sm">Results Guarantee</p>
                    <p className="text-muted-foreground text-sm">Measurable outcomes or we make it right</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="btn-console">
                <Link to="/salesforce/delivery">Learn More About Delivery</Link>
              </Button>
            </div>
            
            <div className="lg:pl-12">
              <div className="console-card bg-card border border-border p-8">
                <div className="text-center mb-6">
                  <Database className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-mono text-xl font-bold">CWT → CloudRoute → Client</h3>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-mono text-muted-foreground">Strategy & Oversight</span>
                    <span className="text-primary font-mono">CWT</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-mono text-muted-foreground">Implementation</span>
                    <span className="text-primary font-mono">CloudRoute</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-mono text-muted-foreground">Project Management</span>
                    <span className="text-primary font-mono">CWT</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-mono text-muted-foreground">Results</span>
                    <span className="text-primary font-mono">Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="console-line mx-auto mb-4 w-fit">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Results</span>
            </div>
            <h2 className="font-mono text-3xl lg:text-4xl font-bold">Salesforce Performance</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="stat-block text-center">
                <div className="stat-number">{result.metric}</div>
                <div className="stat-label">{result.label}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild className="btn-console">
              <Link to="/case-studies">See Salesforce Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-6">
            Stop fighting Salesforce. Start using it.
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Assessment shows you what's broken. Sprint fixes it. CloudRoute builds it. 
          </p>
          <Button asChild size="lg" className="btn-console-accent">
            <Link to="/contact">
              Book Salesforce Assessment
              <Zap className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Salesforce;